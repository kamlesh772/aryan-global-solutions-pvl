import { motion } from 'motion/react';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';

const packages = [
  {
    name: 'MVP Launchpad',
    tag: 'Startups & Prototypes',
    priceAmount: 12500,
    duration: 'Deliverable in 4 weeks',
    desc: 'Perfect for validating your product hypothesis with a custom-engineered high-fidelity visual prototype or MVP.',
    features: [
      'Responsive React/Next.js Web App',
      'Firebase/Supabase state integration',
      'Tailwind CSS custom styling guidelines',
      'Integration with 1 core external API',
      'Hardened JWT Auth protocols',
      '1 Month complimentary maintenance support',
    ],
    popular: false,
    cta: 'Launch MVP Sprint',
  },
  {
    name: 'Growth Suite',
    tag: 'Expanding Corporate & Series A',
    priceAmount: 28000,
    duration: 'Deliverable in 6-8 weeks',
    desc: 'The complete enterprise package. Fully featured full-stack web application bundled with custom AI pipelines.',
    features: [
      'Comprehensive Full-Stack Architecture',
      'Custom LLM/Chatbot (Gemini SDK)',
      'Relational Database Setup (Cloud SQL)',
      'High-fidelity interactive UI/UX designs',
      'Full Stripe checkout & billing gateways',
      'Automated CI/CD pipeline deployment',
      '3 Months complimentary monitoring',
    ],
    popular: true,
    cta: 'Enquire About Growth',
  },
  {
    name: 'Enterprise Bespoke',
    tag: 'Enterprise & Scaled Networks',
    priceAmount: null, // Custom
    duration: 'Tailored Timeline SLA',
    desc: 'Bespoke multi-platform deployment designed to scale to millions of monthly transactions seamlessly.',
    features: [
      'React Web + Native iOS & Android Apps',
      'Fully custom microservice architecture',
      'Load-balanced scalable Kubernetes maps',
      'Multi-region Postgres / Cloud SQL replication',
      'Comprehensive penetration & audit reports',
      'Dedicated remote developers SLA',
      '12 Months premium SLA support',
    ],
    popular: false,
    cta: 'Book Enterprise Discovery',
  },
];

export default function Pricing() {
  const { formatPrice, t } = useApp();

  return (
    <section id="pricing" className="py-24 px-6 relative bg-gradient-to-b from-[#070b1e] to-[#050816]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">{t('pricing')}</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t('priceTitle')}
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            {t('priceDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl p-1 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 shadow-xl shadow-indigo-500/20' 
                  : 'bg-white/5 border border-white/5 hover:border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 text-white">
                  <Zap className="h-3 w-3 text-yellow-400 fill-yellow-400" /> Most Popular
                </div>
              )}

              <div className="bg-[#090d22] rounded-[22px] p-8 md:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest">{pkg.tag}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{pkg.name}</h3>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed min-h-[60px]">{pkg.desc}</p>
                  
                  <div className="my-8 flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                      {pkg.priceAmount ? formatPrice(pkg.priceAmount) : 'Bespoke'}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">/ {t('priceQuote')}</span>
                  </div>

                  <p className="text-xs text-indigo-300 font-mono mb-6 flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-cyan-400" /> {pkg.duration}
                  </p>

                  <div className="border-t border-white/5 pt-6 space-y-4">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex gap-3 items-start text-sm">
                        <Check className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span className="text-gray-300 font-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <button 
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-scheduler'))}
                    className={`block w-full text-center py-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/20 hover:-translate-y-0.5' 
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:-translate-y-0.5'
                    }`}
                  >
                    {pkg.cta}
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
