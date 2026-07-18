import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface PricingPlan {
  name: string;
  price: string;
  desc: string;
  features: string[];
  popular: boolean;
  color: string;
  glowColor: string;
  tag: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    tag: 'Essentials Suite',
    price: 'Starting from ₹25,000',
    desc: 'Perfect for startups, independent professionals, and small businesses aiming to establish a high-performance, polished digital footprint.',
    features: [
      'Business Website',
      'Contact Form',
      'Mobile Responsive',
      'Basic SEO',
      '1 Month Support'
    ],
    popular: false,
    color: 'from-cyan-500/20 to-blue-500/10',
    glowColor: 'bg-cyan-500/10'
  },
  {
    name: 'Professional',
    tag: 'Enterprise Core',
    price: 'Starting from ₹75,000',
    desc: 'Bespoke custom full-stack solutions, sophisticated admin tooling, intelligence automation pipelines, and robust database support.',
    features: [
      'Custom Web Application',
      'Admin Dashboard',
      'AI Integration',
      'API Integration',
      'Database',
      '3 Months Support'
    ],
    popular: true,
    color: 'from-indigo-500/25 to-purple-500/15',
    glowColor: 'bg-indigo-500/20'
  },
  {
    name: 'Enterprise',
    tag: 'Bespoke Scale',
    price: 'Custom Quote',
    desc: 'Robust custom AI orchestration, integrated ERP/CRM systems, multi-platform applications, hardened enterprise-grade deployment pipelines, and premium SLA support.',
    features: [
      'AI Automation',
      'ERP / CRM',
      'Mobile App',
      'Cloud Deployment',
      'Security Audit',
      'Priority Support'
    ],
    popular: false,
    color: 'from-purple-500/20 to-pink-500/10',
    glowColor: 'bg-purple-500/10'
  }
];

export default function Pricing() {
  const { t } = useApp();

  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 px-6 relative bg-gradient-to-b from-[#070b1e] to-[#050816] overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
              {t('Pricing Plans')}
            </h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight"
          >
            {t('Flexible Pricing for Every Business')}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            {t('Choose the right solution for your business growth.')}
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-3xl p-[1px] flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-xl ${
                plan.popular 
                  ? 'bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 shadow-indigo-500/10' 
                  : 'bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-transparent'
              }`}
            >
              {/* Internal Hover Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${plan.glowColor} opacity-[0.02] group-hover:opacity-20 blur-2xl transition-all duration-500 pointer-events-none`} />

              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1.5 text-white shadow-lg border border-indigo-400/30 z-20">
                  <Zap className="h-3 w-3 text-yellow-300 fill-yellow-300 animate-pulse" /> {t('Most Popular')}
                </div>
              )}

              <div className="bg-[#090d22]/95 backdrop-blur-xl rounded-[23px] p-8 sm:p-10 flex-grow flex flex-col justify-between border border-white/5 group-hover:border-white/10 transition-colors h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {t(plan.tag)}
                    </span>
                    {plan.name === 'Enterprise' && (
                      <Sparkles className="h-4.5 w-4.5 text-purple-400" />
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-white mt-4 tracking-wide group-hover:text-cyan-200 transition-colors">
                    {t(plan.name)}
                  </h3>
                  
                  <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal min-h-[64px]">
                    {t(plan.desc)}
                  </p>
                  
                  {/* Price */}
                  <div className="my-8 pt-6 border-t border-white/5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
                      {t('Investment Parameters')}
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2 flex items-baseline">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                        {t(plan.price)}
                      </span>
                    </div>
                  </div>

                  {/* Features List with checkmark */}
                  <div className="space-y-3.5 pt-2">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex gap-3 items-center text-xs sm:text-sm">
                        <div className="p-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                          <Check className="h-3.5 w-3.5 shrink-0" />
                        </div>
                        <span className="text-gray-300 font-normal group-hover:text-gray-200 transition-colors">
                          {t(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to action (Get Started Button) */}
                <div className="mt-10">
                  <button 
                    type="button"
                    onClick={handleGetStartedClick}
                    className={`block w-full text-center py-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-600/20 hover:scale-[1.02]' 
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:scale-[1.02]'
                    }`}
                  >
                    {t('Get Started')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
