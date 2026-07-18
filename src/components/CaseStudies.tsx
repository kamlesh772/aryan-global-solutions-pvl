import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Lightbulb, 
  TrendingUp, 
  ArrowRight, 
  Car, 
  MessageSquare, 
  ShoppingBag, 
  Globe, 
  X, 
  Calendar,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  detailedResultText: string;
  metrics: { label: string; value: string }[];
  tech: string[];
  icon: React.ComponentType<any>;
  color: string; // Tailwind glow / border colors
  bgGradient: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Happy Auto AI ERP',
    industry: 'Automobile',
    challenge: 'Manual billing and inventory management was slowing down service response times and causing significant operational bottlenecks.',
    solution: 'Built a bespoke, high-performance AI-powered ERP platform consolidating automated billing, real-time inventory synchronization, dynamic service job assignment, and interactive forecasting analytics.',
    result: '70% faster operations.',
    detailedResultText: 'Turnaround time for vehicle invoicing dropped from 45 minutes to under 5 minutes. Real-time fleet synchronization optimized mechanic assignments across multiple dealerships.',
    metrics: [
      { label: 'Operational Speedup', value: '70%' },
      { label: 'Manual Billing Overhead', value: '-85%' },
      { label: 'Job Throughput', value: '3.5x' }
    ],
    tech: ['React', 'Node.js', 'FastAPI', 'Gemini AI Pro', 'PostgreSQL'],
    icon: Car,
    color: 'from-orange-500 to-amber-400',
    bgGradient: 'from-amber-500/10 to-orange-500/5'
  },
  {
    id: 'case-2',
    title: 'AI Customer Support',
    industry: 'SaaS',
    challenge: 'Overwhelming customer support workload on internal teams leading to high response latency and customer attrition.',
    solution: 'Implemented an intelligent AI-driven conversational agent with deep RAG capabilities, automated context retrieval, and direct API trigger responses.',
    result: '60% reduction in support tickets.',
    detailedResultText: 'Instantly handled 68% of redundant Tier-1 technical queries without human developer intervention. Achieved CSAT score of 4.8/5.0 with zero human interaction.',
    metrics: [
      { label: 'Ticket Volume Reduction', value: '60%' },
      { label: 'First Contact CSAT', value: '4.8 / 5.0' },
      { label: 'AI Resolution Rate', value: '68%' }
    ],
    tech: ['TypeScript', 'Gemini 2.5 Flash', 'Pinecone VectorDB', 'Express'],
    icon: MessageSquare,
    color: 'from-violet-500 to-fuchsia-500',
    bgGradient: 'from-violet-500/10 to-fuchsia-500/5'
  },
  {
    id: 'case-3',
    title: 'Inventory Management',
    industry: 'Retail',
    challenge: 'Severe stock mismatches, manual tracking friction, and unpredictable warehouse dispatch delays across 15 supply hubs.',
    solution: 'Engineered a real-time, low-latency unified inventory dashboard coupled with automated safety-stock thresholds and smart restock predictive alerts.',
    result: '95% inventory accuracy.',
    detailedResultText: 'Automated warehouse tracking eliminated duplicate entries. Dynamic alerts ensured zero inventory-depleted events over consecutive peak-demand quarters.',
    metrics: [
      { label: 'Inventory Accuracy', value: '95%' },
      { label: 'Stockout Scenarios', value: '0%' },
      { label: 'Dispatch Lead Time', value: '-40%' }
    ],
    tech: ['React', 'GraphQL', 'Tailwind CSS', 'Redis Cache', 'AWS Suite'],
    icon: ShoppingBag,
    color: 'from-emerald-500 to-teal-400',
    bgGradient: 'from-emerald-500/10 to-teal-500/5'
  },
  {
    id: 'case-4',
    title: 'Enterprise Business Website',
    industry: 'Corporate',
    challenge: 'Outdated, sluggish online presence failing to engage enterprise leads or communicate technical scale.',
    solution: 'Designed and deployed a stunning, high-performance, SEO-optimized business website using fluid motion frameworks and static edge-rendering pipelines.',
    result: '3× increase in qualified leads.',
    detailedResultText: 'Page load score surged to 100 on Google PageSpeed Insights. Organic search ranking for enterprise search keywords climbed to the top 3 spots within 60 days.',
    metrics: [
      { label: 'Qualified Leads', value: '3x' },
      { label: 'Google PageSpeed Score', value: '100' },
      { label: 'Organic Search Traffic', value: '+140%' }
    ],
    tech: ['Next.js 14', 'Framer Motion', 'SEO Schema Core', 'Vercel Edge'],
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/5'
  }
];

export default function CaseStudies() {
  const { t } = useApp();
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const handleOpenModal = (cs: CaseStudy) => {
    setSelectedCase(cs);
  };

  const handleCloseModal = () => {
    setSelectedCase(null);
  };

  const handleScrollToContact = () => {
    setSelectedCase(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="py-24 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e] overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
              {t('Proven Results')}
            </h2>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight"
          >
            {t('Case Studies')}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            {t('See how we help businesses transform with AI and custom software.')}
          </motion.p>
        </div>

        {/* 4 Premium Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {caseStudiesData.map((cs, idx) => {
            const IconComponent = cs.icon;
            return (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl p-[1px] bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-transparent transition-all duration-500 shadow-xl overflow-hidden"
              >
                {/* Background flare gradient on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cs.color} opacity-[0.02] group-hover:opacity-10 blur-xl transition-all duration-500 pointer-events-none`} />

                <div className="bg-[#080c21]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full border border-white/5 group-hover:border-white/10 transition-colors">
                  
                  {/* Top: Industry Badge & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-cyan-400">
                        <Briefcase className="h-3 w-3" />
                        {t(cs.industry)}
                      </span>
                      <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:text-cyan-400 transition-colors duration-300`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                      {t(cs.title)}
                    </h4>

                    {/* Details: Challenge & Solution */}
                    <div className="mt-6 space-y-4">
                      
                      {/* Challenge */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold font-mono text-amber-500 uppercase tracking-widest">
                          <Target className="h-3.5 w-3.5 shrink-0" />
                          <span>{t('Challenge')}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal line-clamp-2 group-hover:text-gray-300 transition-colors">
                          {t(cs.challenge)}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold font-mono text-cyan-400 uppercase tracking-widest">
                          <Lightbulb className="h-3.5 w-3.5 shrink-0" />
                          <span>{t('Solution')}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal line-clamp-2 group-hover:text-gray-300 transition-colors">
                          {t(cs.solution)}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Bottom: Result Badge & CTA */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Result */}
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold font-mono text-emerald-400 uppercase tracking-widest">
                        <TrendingUp className="h-3.5 w-3.5 shrink-0" />
                        <span>{t('Result')}</span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                        {t(cs.result)}
                      </p>
                    </div>

                    {/* Learn More */}
                    <button
                      onClick={() => handleOpenModal(cs)}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer shrink-0"
                    >
                      <span>{t('Learn More')}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </button>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Deep-dive Modal (Premium Upgrade Detail View) */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-[#03050b]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#090d22] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10"
            >
              
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-20"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Modal Content */}
              <div>
                
                {/* Header Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-cyan-400">
                    {t(selectedCase.industry)}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
                    {t('// Success Implementation')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                  {t(selectedCase.title)}
                </h3>

                {/* Sub-panels Grid: Challenge vs. Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  
                  {/* Challenge details */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 text-xs font-extrabold font-mono text-amber-500 uppercase tracking-widest mb-3">
                      <Target className="h-4 w-4 shrink-0" />
                      <span>{t('The Challenge')}</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {t(selectedCase.challenge)}
                    </p>
                  </div>

                  {/* Solution details */}
                  <div className="p-6 rounded-2xl bg-cyan-400/[0.01] border border-cyan-400/10">
                    <div className="flex items-center gap-2 text-xs font-extrabold font-mono text-cyan-400 uppercase tracking-widest mb-3">
                      <Lightbulb className="h-4 w-4 shrink-0" />
                      <span>{t('Our Action & Solution')}</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {t(selectedCase.solution)}
                    </p>
                  </div>

                </div>

                {/* Results Section */}
                <div className="mt-8 p-6 rounded-2xl bg-emerald-500/[0.02] border border-emerald-500/10">
                  <div className="flex items-center gap-2 text-xs font-extrabold font-mono text-emerald-400 uppercase tracking-widest mb-3">
                    <TrendingUp className="h-4 w-4 shrink-0" />
                    <span>{t('Real-world Result:')} {t(selectedCase.result)}</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {t(selectedCase.detailedResultText)}
                  </p>

                  {/* Dynamic metrics cards */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {selectedCase.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="bg-white/5 border border-white/5 rounded-xl p-3 text-center sm:text-left">
                        <span className="block text-xl sm:text-2xl font-black text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300">
                          {t(metric.value)}
                        </span>
                        <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-wider mt-1 leading-tight">
                          {t(metric.label)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Used */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest block mb-3">
                    {t('Technology Stack Implemented:')}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.tech.map((tItem, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-cyan-300"
                      >
                        {tItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to action */}
                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>{t('Ready to deploy a similar architecture?')}</span>
                  </div>
                  
                  <button
                    onClick={handleScrollToContact}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/10 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer border border-white/5"
                  >
                    <span>{t('Discuss This Solution')}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-cyan-200" />
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
