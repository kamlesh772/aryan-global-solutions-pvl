import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Code, 
  Globe, 
  Smartphone, 
  Briefcase, 
  Cloud, 
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'AI Automation',
    description: 'Automate repetitive business workflows using AI agents and intelligent automation.',
    color: 'from-cyan-500 to-blue-500',
    hoverGlow: 'rgba(6, 182, 212, 0.15)',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Scalable enterprise software tailored to your business requirements.',
    color: 'from-indigo-500 to-purple-500',
    hoverGlow: 'rgba(99, 102, 241, 0.15)',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Fast, secure and SEO-optimized business websites and web applications.',
    color: 'from-pink-500 to-rose-500',
    hoverGlow: 'rgba(236, 72, 153, 0.15)',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform Android & iOS applications.',
    color: 'from-amber-500 to-orange-500',
    hoverGlow: 'rgba(245, 158, 11, 0.15)',
  },
  {
    icon: Briefcase,
    title: 'ERP & CRM Solutions',
    description: 'Custom ERP, CRM and inventory management systems for modern businesses.',
    color: 'from-emerald-500 to-teal-500',
    hoverGlow: 'rgba(16, 185, 129, 0.15)',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure, CI/CD pipelines, deployment automation and security.',
    color: 'from-blue-500 to-violet-500',
    hoverGlow: 'rgba(59, 130, 246, 0.15)',
  },
];

export default function Services() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 px-6 relative bg-[#050816] overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/3 left-1/10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

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
              Capabilities
            </h2>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight"
          >
            Our Core Services
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Enterprise-grade AI, Software Engineering and Digital Transformation Solutions.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-[1px] bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:via-cyan-500/30 hover:to-indigo-500/10 transition-all duration-300"
                style={{
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div className="relative h-full bg-[#080c21]/90 rounded-2xl p-8 overflow-hidden backdrop-blur-xl border border-white/5 flex flex-col justify-between">
                  {/* Glowing background flare on hover */}
                  <div 
                    className="absolute -top-12 -right-12 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                    style={{ backgroundColor: srv.hoverGlow }}
                  />

                  <div>
                    {/* Icon Block with dynamic gradient and glow */}
                    <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:border-transparent">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${srv.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                      <IconComponent className="h-6 w-6 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>

                    {/* Service Title */}
                    <h4 className="mt-6 text-lg font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
                      {srv.title}
                    </h4>

                    {/* Service Description */}
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed font-normal">
                      {srv.description}
                    </p>
                  </div>

                  {/* Aesthetic arrow indicator on hover */}
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold font-mono tracking-wider text-cyan-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <span>Enquire Now</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={handleScrollToContact}
              className="px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer border border-white/10"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight className="h-3.5 w-3.5 text-cyan-200" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
