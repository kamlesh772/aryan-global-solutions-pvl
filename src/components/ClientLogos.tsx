import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';

const clients = [
  { name: 'AURA CAPITAL', desc: 'Fintech Partner' },
  { name: 'VELOCITY EXP', desc: 'Supply Chain Hub' },
  { name: 'VITALIS HEALTH', desc: 'MedTech Systems' },
  { name: 'APEX RETAIL', desc: 'Global Commerce' },
  { name: 'SYNTHETIX DEFI', desc: 'Risk Analytics' },
  { name: 'MOBIRIDE INC', desc: 'Micro-Mobility' },
  { name: 'ORBIT LABS', desc: 'Cloud & AI Platform' },
  { name: 'NEXUS ENERGY', desc: 'SaaS Grid Solutions' },
];

export default function ClientLogos() {
  const { t } = useApp();

  return (
    <section className="py-16 bg-[#03050f] border-b border-white/5 relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center lg:text-left flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">{t('trustedBy')}</h2>
          <p className="text-xl font-bold text-white mt-1">Powering Fortune 500 Leaders & Venture Networks</p>
        </div>
        <div className="text-xs text-gray-500 font-mono">
          // 250+ ENTERPRISE SOLUTIONS DEPLOYED GLOBALLY
        </div>
      </div>

      {/* Infinite Scrolling Ticker (Framer Motion) */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 sm:before:w-40 before:bg-gradient-to-r before:from-[#03050f] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 sm:after:w-40 after:bg-gradient-to-l after:from-[#03050f] after:to-transparent">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            ease: 'linear',
            duration: 35,
            repeat: Infinity,
          }}
          className="flex gap-16 whitespace-nowrap w-max py-4"
        >
          {/* Double array to ensure seamless infinite looping */}
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center min-w-[160px] cursor-pointer group"
            >
              <span className="text-base sm:text-lg font-black tracking-widest text-gray-600 group-hover:text-cyan-400/80 transition-colors duration-300 font-sans">
                {client.name}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-gray-500 mt-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {client.desc}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
