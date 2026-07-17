import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Bot, 
  Boxes, 
  Activity, 
  GraduationCap, 
  Smartphone, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Cpu, 
  Server 
} from 'lucide-react';

interface Project {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<any>;
  technologies: string[];
  color: string;
  hoverGlow: string;
  keyFeatures: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Happy Auto AI ERP',
    subtitle: 'Automotive ERP & AI Forecaster',
    description: 'Automated dealer management system with integrated AI forecasting, live spare part inventory tracking, and financial reconciliation.',
    longDescription: 'A custom, high-performance ERP tailored specifically for automotive dealer networks. This platform unifies multiple showrooms, service stations, and inventory caches into a singular, responsive dashboard. Powered by AI agents, it forecasts demand patterns for spare parts and auto accessories, streamlining operations and boosting margin efficiency.',
    icon: Car,
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    color: 'from-blue-500 to-indigo-600',
    hoverGlow: 'rgba(59, 130, 246, 0.15)',
    keyFeatures: [
      'Showroom and Service Station synchronization',
      'AI spare-part forecasting engine',
      'Unified financial reconciliation module',
      'Automated vendor PO generation'
    ]
  },
  {
    id: 2,
    name: 'AI Customer Support Chatbot',
    subtitle: 'NLP Conversational Assistant',
    description: 'Intelligent NLP conversation agent trained on specific corpus, handling up to 85% of standard user inquiries with zero latency.',
    longDescription: 'An enterprise-grade customer interaction suite leveraging high-performance NLP models. It connects directly with existing client databases to answer order status, shipping, returns, and support requests. It implements strict context boundaries, fallback support routing, and detailed interaction transcripts.',
    icon: Bot,
    technologies: ['Gemini SDK', 'FastAPI', 'React', 'Redis', 'Tailwind'],
    color: 'from-cyan-500 to-blue-500',
    hoverGlow: 'rgba(6, 182, 212, 0.15)',
    keyFeatures: [
      'Over 85% resolution rate without human agent',
      'Context-aware memory & historical retrieval',
      'Automated ticketing integration (Zendesk/Jira)',
      'Secure, localized data retention pipeline'
    ]
  },
  {
    id: 3,
    name: 'Inventory Management System',
    subtitle: 'Real-Time Stock Orchestrator',
    description: 'High-throughput cloud-native system for real-time stock orchestration, barcode scanning, automated reordering, and analytics.',
    longDescription: 'Designed for high-volume retail hubs and distribution depots, this stock management system optimizes SKU layouts and monitors asset flows across multiple physical locations. Using custom barcode integration and live database synchronization, it completely eliminates data lag and stock discrepancy.',
    icon: Boxes,
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Redis'],
    color: 'from-emerald-500 to-teal-500',
    hoverGlow: 'rgba(16, 185, 129, 0.15)',
    keyFeatures: [
      'Multi-warehouse stock sync & transfer tools',
      'Instant mobile barcode scanning support',
      'Intelligent automatic restock threshold alerts',
      'Real-time transit dashboard'
    ]
  },
  {
    id: 4,
    name: 'Hospital Management System',
    subtitle: 'HIPAA-Compliant Medical Suite',
    description: 'HIPAA-compliant patient record, scheduling, and billing solution for modern multi-specialty healthcare networks.',
    longDescription: 'An ultra-secure, reliable healthcare administration portal designed for modern hospitals and clinics. It integrates patient scheduling, secure electronic medical records (EMR), billing pipelines, and prescription dispatches into one seamless and performant interface.',
    icon: Activity,
    technologies: ['React', 'Next.js', 'GraphQL', 'PostgreSQL', 'AWS'],
    color: 'from-rose-500 to-pink-500',
    hoverGlow: 'rgba(244, 63, 94, 0.15)',
    keyFeatures: [
      'Fully HIPAA and GDPR compliant architecture',
      'Seamless multi-specialty scheduling engine',
      'Encrypted health records (EMR/EHR) manager',
      'Integrated medical billing and insurance pipelines'
    ]
  },
  {
    id: 5,
    name: 'School ERP Platform',
    subtitle: 'Cloud-Based Education Hub',
    description: 'Comprehensive cloud-based education suite managing admissions, fees, academic progress, online classes, and parent communication.',
    longDescription: 'A versatile school organization tool linking students, parents, faculty, and administrative staff. It automates academic recording, tracks fee payments with integrated payment gateways, manages digital library logs, and publishes real-time schedule adjustments.',
    icon: GraduationCap,
    technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Node.js'],
    color: 'from-amber-500 to-orange-500',
    hoverGlow: 'rgba(245, 158, 11, 0.15)',
    keyFeatures: [
      'Online fee collection with instant receipting',
      'Unified student academic progress tracking',
      'Automated parent push notification portal',
      'Digital assignments and examinations module'
    ]
  },
  {
    id: 6,
    name: 'Business Website & Mobile App',
    subtitle: 'Omnichannel Digital Presence',
    description: 'Fast, responsive web and mobile presence with high-fidelity UI, localized SEO, push notifications, and analytics.',
    longDescription: 'A complete custom-tailored branding suite including an optimized public web terminal and premium Android & iOS mobile packages. It showcases your services, increases brand authority, captures warm inbound opportunities, and tracks engagement metrics.',
    icon: Smartphone,
    technologies: ['React Native', 'Flutter', 'Next.js', 'Tailwind', 'SupaBase'],
    color: 'from-purple-500 to-violet-600',
    hoverGlow: 'rgba(168, 85, 247, 0.15)',
    keyFeatures: [
      'High fidelity cross-platform mobile apps',
      'Ultra-fast Next.js statically generated page load',
      'Optimized corporate sales capture mechanics',
      'Comprehensive in-app engagement analytics'
    ]
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="featured-projects" className="py-24 px-6 relative bg-[#050816] overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
              Milestones
            </h2>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight"
          >
            Featured Projects
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Real-world enterprise software and AI solutions delivered by Aryan Global Solutions.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-[1px] bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:via-cyan-500/30 hover:to-indigo-500/10 transition-all duration-300 shadow-2xl"
              >
                <div className="relative h-full bg-[#080c21]/90 rounded-2xl p-6 sm:p-8 overflow-hidden backdrop-blur-xl border border-white/5 flex flex-col justify-between">
                  {/* Hover background flare */}
                  <div 
                    className="absolute -top-12 -right-12 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                    style={{ backgroundColor: proj.hoverGlow }}
                  />

                  <div>
                    {/* Header: Icon & Subtitle */}
                    <div className="flex justify-between items-start">
                      <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        <Icon className="h-5 w-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-500/80 bg-cyan-950/20 px-2 py-1 rounded border border-cyan-500/10 uppercase tracking-widest">
                        AGS-V{proj.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="mt-6 text-xl font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
                      {proj.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">{proj.subtitle}</p>

                    {/* Description */}
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed font-normal line-clamp-3">
                      {proj.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {proj.technologies.map(tech => (
                        <span key={tech} className="text-[10px] font-mono bg-white/5 text-gray-300 px-2.5 py-1 rounded-full border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details CTA Button */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="text-xs font-bold font-mono tracking-wider text-cyan-400 group-hover:text-white uppercase transition-colors duration-300 cursor-pointer flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call to Action Section */}
        <div className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#0c102b] to-[#090d22] border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden max-w-3xl mx-auto shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
            
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Ready to build your next digital product?
            </h4>
            <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
              Partner with Aryan Global Solutions to engineer high-velocity, SLA-backed software tailored to your company.
            </p>
            
            <button
              onClick={handleScrollToContact}
              className="mt-8 px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer border border-white/10"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="h-3.5 w-3.5 text-cyan-200" />
            </button>
          </motion.div>
        </div>

      </div>

      {/* Details Dialog Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Dark glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#02040a]/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-full max-w-3xl bg-[#090d22] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto overflow-x-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-start gap-4 sm:gap-6 mt-4">
                {/* Project Icon Header block */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/10`}>
                  {React.createElement(selectedProject.icon, { className: "h-7 w-7" })}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                    {selectedProject.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold">{selectedProject.subtitle}</p>
                </div>
              </div>

              {/* Technologies list */}
              <div className="mt-6">
                <h5 className="text-xs font-bold font-mono text-gray-500 uppercase tracking-widest">
                  Architecture Stack
                </h5>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono bg-white/5 text-gray-200 px-3 py-1.5 rounded-lg border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Comprehensive description */}
              <div className="mt-8 space-y-6">
                <div>
                  <h5 className="text-xs font-bold font-mono text-gray-500 uppercase tracking-widest">
                    Project Overview
                  </h5>
                  <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-bold font-mono text-gray-500 uppercase tracking-widest mb-3">
                    Core Accomplishments & Features
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-sm text-gray-400">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="font-normal">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions Footer inside modal */}
              <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <span className="text-[11px] font-mono text-gray-500">
                  Deliverable Code: VERIFIED BY ARYAN GLOBAL SOLUTIONS
                </span>
                
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    handleScrollToContact();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                >
                  <span>Inquire Regarding Project</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
