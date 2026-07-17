import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';

const reviews = [
  {
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Aura Capital Inc.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'Aryan Global Solutions delivered our secure LLM automation pipeline well within our strict timeline. The compliance validation and data protection controls they designed are incredibly robust and cleared our audits with flying colors.',
    rating: 5,
    project: 'Private LLM Automation & Database Sync',
  },
  {
    name: 'Genevieve Moreau',
    role: 'Director of Global Operations',
    company: 'Velocity Logistics Ltd.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'Our supply chain center has seen a 34% increase in load efficiency thanks to their WebSocket-driven tracking systems. Their agile planning sprints are highly professional and communicative.',
    rating: 5,
    project: 'Real-time Routing Graphs & WebSocket Hub',
  },
  {
    name: 'Dr. Klaus Brandt',
    role: 'Head of Clinical Hardware',
    company: 'Vitalis Medical Group',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'The offline synchronization logic they programmed for our BLE patient monitoring apps operates flawlessly. Under volatile conditions, the system retries queue packets perfectly without ever leaking clinical logs.',
    rating: 5,
    project: 'Medical Hardware Sync App & BLE Engine',
  },
  {
    name: 'Aisha Al-Mansoor',
    role: 'VP of Digital Experience',
    company: 'Apex Retail Group',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'Their headless commerce assembly is insanely fast—average checkout latency dropped from 3.4s down to 1.2s. It has had a direct positive impact on our digital conversions globally.',
    rating: 5,
    project: 'Headless Storefront & GraphQL APIs',
  },
  {
    name: 'Niklas Weber',
    role: 'Managing Partner',
    company: 'Synthetix Fund',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'A highly skilled engineering team that understands secure data modeling. They consolidated millions of volatile indicators into high-performance visual dashboards that compile instantly.',
    rating: 5,
    project: 'Financial Risk Dashboard & Postgres Migration',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Infrastructure Engineer',
    company: 'Orbit Labs Corporation',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'They orchestrated our multi-region Kubernetes clusters with zero downtime. The container structures they designed guarantee absolute consistency between dev, staging, and high-availability production.',
    rating: 5,
    project: 'Cloud Infrastructure & Kubernetes Scaling',
  },
];

export default function ClientReviews() {
  return (
    <section id="reviews" className="py-24 px-6 relative bg-gradient-to-b from-[#070b1e] to-[#050816] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Testimonials</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Endorsed by Leading Tech Leaders
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            We hold ourselves to absolute precision. These client endorsements reflect our ongoing commitment to enterprise SLA delivery, clean source code, and transparent reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#090d22]/80 border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-[#090d22] transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/5 to-transparent blur-xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-white/[0.04] group-hover:text-cyan-400/[0.08] transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal italic">
                  "{rev.review}"
                </p>
              </div>

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
                  <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>Project: {rev.project}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
