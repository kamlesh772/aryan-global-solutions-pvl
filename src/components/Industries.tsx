import { motion } from 'motion/react';
import { Coins, HeartPulse, Store, Truck, Rocket, Play } from 'lucide-react';

const industries = [
  {
    icon: Coins,
    name: 'Fintech & WealthTech',
    desc: 'High-availability ledger databases, PCI-DSS compliant payment tunnels, automated asset management, and advanced risk analytical suites.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare & Life Sciences',
    desc: 'HIPAA-compliant cloud storage, intuitive patient portals, smart medical hardware syncing, and automated diagnostic processing queues.',
  },
  {
    icon: Store,
    name: 'Retail & Headless Commerce',
    desc: 'Immersive global storefront ecosystems boasting seamless multi-currency support, dynamic checkouts, and personalized recommender systems.',
  },
  {
    icon: Truck,
    name: 'Logistics & Supply Chain',
    desc: 'Automated warehouse systems, dynamic fleet vehicle dispatch trackers, routing algorithms, and transparent order lifecycle audits.',
  },
  {
    icon: Rocket,
    name: 'SaaS & High-Growth Tech',
    desc: 'Rapid multi-tenant authentication setups, modular database scaling strategies, clean dashboard UX patterns, and customizable subscription gates.',
  },
  {
    icon: Play,
    name: 'Media & Digital Publishing',
    desc: 'Lightning-fast server-rendered web portals, robust asset delivery pipelines, interactive multi-user comment systems, and content management.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6 relative bg-gradient-to-b from-[#070b1e] to-[#050816]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Expertise</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Domain Mastery Across Strategic Sectors
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            We deliver targeted solutions to optimize processes, elevate conversion rates, and maximize compliance within your specific vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6">
                  <ind.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {ind.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-indigo-400 font-mono">
                <span>&gt; Solutions Active</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
