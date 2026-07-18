import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, Quote, ArrowRight, ShieldCheck, Zap, HeartHandshake, Headphones } from 'lucide-react';

// CountUp Component for statistical animation
function CountUp({ end, suffix = '', duration = 1.5 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const testimonials = [
  {
    name: 'Rajesh Patel',
    role: 'Director of Product',
    company: 'TechNova Solutions',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'The AI agent integration crafted by Aryan Global Solutions completely revolutionized our operations. They delivered a secure, zero-latency pipeline that saved us hundreds of hours weekly.',
    project: 'AI Agent & Workflow Integration',
  },
  {
    name: 'Anjali Sharma',
    role: 'Chief Operations Officer',
    company: 'Smart Retail India',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'Their inventory management system is highly robust and perfectly synchronized. It has streamlined our retail supply chains with real-time tracking across 12 warehouses.',
    project: 'Smart Inventory & Sync Engine',
  },
  {
    name: 'Dr. Amit Verma',
    role: 'Head of IT & Systems',
    company: 'HealthCare Plus',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'They developed our HIPAA-compliant clinic platform with outstanding attention to patient privacy and system performance. An absolutely first-class engineering experience.',
    project: 'HIPAA-Compliant EMR Platform',
  },
  {
    name: 'Priya Nair',
    role: 'VP of Digital Banking',
    company: 'FinEdge Technologies',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'Securing financial ledgers requires ultimate precision. Aryan Global Solutions designed a beautiful, fault-tolerant ledger system that passed our stringent audit standards effortlessly.',
    project: 'Enterprise Secure Ledger API',
  },
  {
    name: 'Vikram Malhotra',
    role: 'Managing Director',
    company: 'EduCore Systems',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'Our online student portals are lightning-fast now. Parents and staff have praised the streamlined UX, especially the seamless fee collection and push alert dispatch system.',
    project: 'Multi-Tenant School ERP Hub',
  },
  {
    name: 'Sanjay Singhania',
    role: 'VP of Enterprise Growth',
    company: 'AutoTech Services',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'The custom dealership ERP they constructed has driven a substantial lift in our sales execution. Their post-deployment SLA and support response times are spectacular.',
    project: 'Dealership Management Architecture',
  },
];

export default function TrustedAndTestimonials() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="trusted-testimonials" className="py-24 px-6 relative bg-[#050816] overflow-hidden">
      {/* Visual glowing backgrounds */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= TRUSTED BY BUSINESSES SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
              Global Trust
            </h2>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight animate-gradient"
          >
            Trusted by Businesses Worldwide
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Helping startups, SMEs and enterprises build secure, scalable and AI-powered digital solutions.
          </motion.p>
        </div>

        {/* Dynamic Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-28">
          {[
            { value: 50, suffix: '+', title: 'Projects Delivered', desc: 'Bespoke high-velocity corporate architectures', icon: Zap, color: 'from-blue-500 to-indigo-600' },
            { value: 20, suffix: '+', title: 'Happy Clients', desc: 'Sustained long-term enterprise partnerships', icon: HeartHandshake, color: 'from-cyan-500 to-blue-500' },
            { value: 99.9, suffix: '%', title: 'Uptime', desc: 'Continuous operations under heavy loads', icon: ShieldCheck, color: 'from-emerald-500 to-teal-500', isFloat: true },
            { value: '24×7', suffix: '', title: 'Support', desc: 'Active engineer standby and SLA response', icon: Headphones, color: 'from-pink-500 to-purple-600', isString: true },
          ].map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group rounded-2xl p-[1px] bg-white/5 hover:bg-gradient-to-b hover:from-white/10 hover:to-transparent transition-all duration-300"
              >
                <div className="bg-[#080c21]/90 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300`}>
                      <IconComp className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400 transition-all duration-300">
                      {stat.isString ? (
                        stat.value
                      ) : stat.isFloat ? (
                        <span>99.9%</span>
                      ) : (
                        <CountUp end={stat.value as number} suffix={stat.suffix} />
                      )}
                    </h4>
                    <p className="mt-2 text-sm font-bold text-gray-300 tracking-wide">{stat.title}</p>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed font-normal">{stat.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* ================= CLIENT TESTIMONIALS SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
              Client Endorsements
            </h2>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight"
          >
            What Our Clients Say
          </motion.h3>
        </div>

        {/* 6 Premium Glassmorphism Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {testimonials.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-[#090d22]/80 border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-[#0b1029] transition-all duration-300 relative group overflow-hidden shadow-xl"
            >
              {/* Dynamic top gradient flare */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/5 to-transparent blur-xl pointer-events-none transition-opacity duration-300 group-hover:from-cyan-500/10" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Rating Stars - 5 Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-white/[0.04] group-hover:text-cyan-400/[0.08] transition-colors" />
                </div>

                <p className="text-sm text-gray-300 leading-relaxed font-normal italic">
                  "{rev.review}"
                </p>
              </div>

              {/* Author Section */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-slate-900 shrink-0">
                    <img
                      src={rev.image}
                      alt={rev.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-mono">
                      {rev.role}, <span className="text-cyan-400 font-medium">{rev.company}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                  <ShieldCheck className="h-3.5 w-3.5 text-cyan-500 shrink-0" />
                  <span>Success Delivery: {rev.project}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= HIGH CONVERSION CTA BLOCK ================= */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0c102b] to-[#090d22] border border-white/5 rounded-3xl p-8 sm:p-14 relative overflow-hidden max-w-4xl mx-auto shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
            
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              Let's Build Something Amazing Together
            </h4>
            <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-lg mx-auto leading-relaxed">
              We stand ready to engineer your custom solution. Partner with us today for robust enterprise capabilities and stellar AI tools.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-3.5 w-3.5 text-cyan-200 animate-pulse" />
              </button>

              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase text-cyan-400 hover:text-white bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule a Free Consultation</span>
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
