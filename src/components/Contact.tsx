import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  MessageSquare, 
  Briefcase, 
  DollarSign, 
  User, 
  Building, 
  Send,
  Globe,
  Clock
} from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name' && !value.trim()) {
      error = 'Full Name is required';
    } else if (name === 'company' && !value.trim()) {
      error = 'Company Name is required';
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Business Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid corporate email';
      }
    } else if (name === 'phone' && !value.trim()) {
      error = 'Phone Number is required';
    } else if (name === 'country' && !value.trim()) {
      error = 'Country is required';
    } else if (name === 'projectType' && !value) {
      error = 'Please select a required service';
    } else if (name === 'budget' && !value) {
      error = 'Please select an estimated budget range';
    } else if (name === 'message') {
      if (!value.trim()) {
        error = 'Project description is required';
      } else if (value.trim().length < 15) {
        error = 'Please write at least 15 characters detailing your objectives';
      }
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error inline when user types/changes value
    const error = validateField(name, value);
    setErrors(prev => {
      const copy = { ...prev };
      if (!error) {
        delete copy[name];
      } else {
        copy[name] = error;
      }
      return copy;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    const fieldsToValidate: (keyof typeof form)[] = [
      'name', 
      'company', 
      'email', 
      'phone', 
      'country', 
      'projectType', 
      'budget', 
      'message'
    ];
    
    fieldsToValidate.forEach(field => {
      const err = validateField(field as string, form[field]);
      if (err) {
        newErrors[field as string] = err;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setSubmitError(null);

    const maskKey = (key: string | undefined): string => {
      if (!key) return '(undefined/empty)';
      if (key.length <= 8) return '****';
      return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
    };

    const getEnvOrFallback = (val: any, fallback: string): string => {
      if (!val || typeof val !== 'string' || val.trim() === '' || val === 'undefined') {
        return fallback;
      }
      return val.trim();
    };

    const serviceId = getEnvOrFallback(import.meta.env.VITE_EMAILJS_SERVICE_ID, "service_1qb7sst");
    const templateId = getEnvOrFallback(import.meta.env.VITE_EMAILJS_TEMPLATE_ID, "template_s56zfek");
    const publicKey = getEnvOrFallback(import.meta.env.VITE_EMAILJS_PUBLIC_KEY, "ZFaYIQS-m5ntZdDoL");

    console.log('[EmailJS] Service ID:', serviceId);
    console.log('[EmailJS] Template ID:', templateId);
    console.log('[EmailJS] Public Key:', maskKey(publicKey));

    if (!publicKey || publicKey.trim() === '') {
      setLoading(false);
      const errMessage = "Public key is empty or undefined. Cannot proceed with email dispatch.";
      console.error('[EmailJS] Key Validation Failed:', errMessage);
      setSubmitError(errMessage);
      return;
    }

    const payload = {
      name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      country: form.country,
      projectType: form.projectType,
      budget: form.budget,
      message: form.message,
    };

    try {
      console.log('[EmailJS] Initiating send request...');
      const response = await emailjs.send(
        serviceId,
        templateId,
        payload,
        publicKey
      );

      setLoading(false);
      console.log('[EmailJS] Full success response received:', response);
      if (response.status === 200) {
        setSubmitted(true);
      } else {
        const statusError = `Status: ${response.status} - ${response.text || 'No response text available'}`;
        console.warn('[EmailJS] Received non-200 success response:', statusError);
        setSubmitError(statusError);
      }
    } catch (err: any) {
      setLoading(false);
      console.error('[EmailJS] Full dispatch error received:', err);
      const errorDetails = err?.text || err?.message || JSON.stringify(err) || 'Unknown error occurred';
      setSubmitError(`Failed to send. Error details: ${errorDetails}`);
    }
  };

  const projectTypes = [
    'Enterprise Web Applications',
    'AI Automation & Chatbots',
    'Mobile App Development',
    'UI/UX Design Systems',
    'SaaS Platform Engineering',
    'Custom Cloud Solutions',
    'Other Custom Project'
  ];

  const budgets = [
    '< $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Aryan Global Solutions, I want to discuss my project.");
    window.open(`https://wa.me/917878743214?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleScheduleClick = () => {
    window.dispatchEvent(new CustomEvent('open-scheduler'));
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#050816] overflow-hidden">
      
      {/* Visual background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
              Get in Touch
            </h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight"
          >
            Let’s Build Something Magnificent
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed animate-pulse"
          >
            Initiate your digital transformation today. Request a custom fixed-price quote or schedule an architectural discovery call with our partners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Contact & Business Hours */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#090d22]/40 border border-white/5 backdrop-blur-md rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Quick Contact Desk
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-normal">
                Skip the form and connect with our design and engineering desks immediately through your preferred channel.
              </p>

              {/* 4 Premium Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* WhatsApp */}
                <button
                  onClick={handleWhatsAppClick}
                  className="group flex flex-col items-start p-4 bg-white/5 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 rounded-xl transition-all duration-300 text-left cursor-pointer relative overflow-hidden"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 text-xs font-bold text-white uppercase tracking-wider font-mono">
                    WhatsApp Chat
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-1 group-hover:text-emerald-300">
                    +91 7878743214
                  </p>
                </button>

                {/* Email */}
                <a
                  href="mailto:solutions@aryanglobalsolutions.com"
                  className="group flex flex-col items-start p-4 bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 rounded-xl transition-all duration-300 text-left relative overflow-hidden"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Email Sales
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-1 group-hover:text-cyan-300">
                    solutions@ags.com
                  </p>
                </a>

                {/* Schedule a Meeting */}
                <button
                  onClick={handleScheduleClick}
                  className="group flex flex-col items-start p-4 bg-white/5 hover:bg-indigo-500/10 border border-white/5 hover:border-indigo-500/30 rounded-xl transition-all duration-300 text-left cursor-pointer relative overflow-hidden"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Schedule call
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-1 group-hover:text-indigo-300">
                    Book virtual slot
                  </p>
                </button>

                {/* Phone Call */}
                <a
                  href="tel:+917878743214"
                  className="group flex flex-col items-start p-4 bg-white/5 hover:bg-purple-500/10 border border-white/5 hover:border-purple-500/30 rounded-xl transition-all duration-300 text-left relative overflow-hidden"
                >
                  <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Direct Call
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-1 group-hover:text-purple-300">
                    +91 7878743214
                  </p>
                </a>

              </div>

              {/* 5. Business Hours Block */}
              <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                  <Clock className="h-5 w-5 animate-spin-slow" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono uppercase text-gray-500 tracking-wider">
                    Business Hours
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Monday–Saturday
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>

            </div>

            {/* Corporate Location Reference Card */}
            <div className="bg-gradient-to-br from-[#0c102b] to-[#090d22] border border-white/5 rounded-2xl p-8 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />
              <div className="flex gap-3 items-start">
                <div className="p-3 rounded-xl bg-white/5 text-cyan-400 border border-white/10 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono uppercase text-gray-500 tracking-wider">
                    Corporate Headquarters
                  </h4>
                  <p className="text-sm text-gray-200 mt-1">
                    100 Tech Venture Way, Silicon Valley, CA 94025, USA
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Upgraded Contact Form */}
          <div className="lg:col-span-7 bg-[#090d22]/80 border border-white/10 rounded-2xl p-6 md:p-10 relative shadow-2xl backdrop-blur-xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-cyan-400" /> Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleInputChange}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                          errors.name 
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' 
                            : 'border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            className="text-xs text-red-400 font-mono mt-1.5"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5 text-indigo-400" /> Company Name *
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={handleInputChange}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                          errors.company 
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' 
                            : 'border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.company && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            className="text-xs text-red-400 font-mono mt-1.5"
                          >
                            {errors.company}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Business Email */}
                    <div>
                      <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-purple-400" /> Business Email *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={handleInputChange}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                          errors.email 
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' 
                            : 'border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            className="text-xs text-red-400 font-mono mt-1.5"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-cyan-400" /> Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="+91 7878743214"
                        value={form.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                          errors.phone 
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' 
                            : 'border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            className="text-xs text-red-400 font-mono mt-1.5"
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Country Field */}
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Globe className="h-3.5 w-3.5 text-emerald-400" /> Country *
                      </label>
                      <input 
                        type="text" 
                        name="country"
                        placeholder="India"
                        value={form.country}
                        onChange={handleInputChange}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                          errors.country 
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' 
                            : 'border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.country && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            className="text-xs text-red-400 font-mono mt-1.5"
                          >
                            {errors.country}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Service Required Dropdown */}
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-indigo-400" /> Service Required *
                      </label>
                      <div className="relative">
                        <select 
                          name="projectType"
                          value={form.projectType}
                          onChange={handleInputChange}
                          className={`w-full appearance-none bg-[#0c102b] border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-all duration-300 cursor-pointer ${
                            errors.projectType 
                              ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' 
                              : 'border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                          }`}
                        >
                          <option value="" disabled className="text-gray-500 bg-[#0c102b]">Select Required Service</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-[#050816] text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                      <AnimatePresence>
                        {errors.projectType && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            className="text-xs text-red-400 font-mono mt-1.5"
                          >
                            {errors.projectType}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Estimated Budget Dropdown */}
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <DollarSign className="h-3.5 w-3.5 text-purple-400" /> Estimated Budget *
                      </label>
                      <div className="relative">
                        <select 
                          name="budget"
                          value={form.budget}
                          onChange={handleInputChange}
                          className={`w-full appearance-none bg-[#0c102b] border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-all duration-300 cursor-pointer ${
                            errors.budget 
                              ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' 
                              : 'border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                          }`}
                        >
                          <option value="" disabled className="text-gray-500 bg-[#0c102b]">Select Estimated Budget</option>
                          {budgets.map((b) => (
                            <option key={b} value={b} className="bg-[#050816] text-white">
                              {b}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                      <AnimatePresence>
                        {errors.budget && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            className="text-xs text-red-400 font-mono mt-1.5"
                          >
                            {errors.budget}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Project Description (Project Objectives) */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5 text-cyan-400" /> Project Description *
                    </label>
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="Tell us about your product parameters, database needs, target timeline, etc..."
                      value={form.message}
                      onChange={handleInputChange}
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                        errors.message 
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' 
                          : 'border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                      }`}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0, y: -5 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -5 }}
                          className="text-xs text-red-400 font-mono mt-1.5"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5 text-cyan-200" />
                          <span>Submit Request</span>
                        </>
                      )}
                    </button>
                  </div>

                  <AnimatePresence>
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono text-center flex flex-col gap-1.5"
                      >
                        <span className="font-bold uppercase tracking-wider text-[10px]">Transmission Error</span>
                        <span className="text-gray-300 font-sans font-medium">{submitError}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              ) : (
                // Upgraded premium success animation block
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="relative mb-6">
                    {/* Glowing outer circles */}
                    <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-2xl animate-pulse scale-150" />
                    <div className="absolute -inset-4 bg-indigo-500/10 rounded-full animate-ping opacity-40" />
                    <div className="relative w-20 h-20 bg-gradient-to-tr from-cyan-400 to-indigo-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <CheckCircle2 className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Dynamic Required Success Message Text */}
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-200"
                  >
                    Thank you!
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-base sm:text-lg text-gray-200 max-w-md leading-relaxed font-semibold"
                  >
                    Our team will contact you within 24 hours.
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-2 text-xs text-gray-400 max-w-sm font-normal"
                  >
                    An enterprise solution expert has been notified of your project requirements for <span className="text-cyan-400 font-bold">{form.projectType || 'General Consultation'}</span>.
                  </motion.p>
                  
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        country: '',
                        projectType: '',
                        budget: '',
                        message: '',
                      });
                      setErrors({});
                    }}
                    className="mt-10 px-8 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
