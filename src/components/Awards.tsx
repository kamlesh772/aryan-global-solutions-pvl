import { motion } from 'motion/react';
import { Award, ShieldAlert, Cpu, Calendar, Star } from 'lucide-react';

const recognitions = [
  {
    title: 'Enterprise Architecture Leadership',
    issuer: 'Silicon Valley Engineering Council',
    year: '2026',
    desc: 'Awarded for deploying secure real-time microservices systems and low-latency database synchronizations across active enterprise containers.',
    icon: Award,
  },
  {
    title: 'ISO-27001 Security Audit Certified',
    issuer: 'Global Security Accreditation Board',
    year: 'Active',
    desc: 'All distributed developer repositories, secure API proxies, database clusters, and cloud environments successfully cleared compliance standards.',
    icon: ShieldAlert,
  },
  {
    title: 'Certified Google Cloud & AWS Partners',
    issuer: 'Joint Infrastructure Alliance',
    year: 'Active',
    desc: 'Our principal architects are fully accredited Cloud Architects, guaranteeing SLA uptime execution and optimal multi-region CDNs.',
    icon: Cpu,
  },
  {
    title: 'Top 2% Agile Enterprise Agency',
    issuer: 'Clutch Global Agencies Review',
    year: '2025 - 2026',
    desc: 'Recognized for excellent sprint execution timelines, comprehensive test coverage (Unit/Integration), and transparent client communication logs.',
    icon: Star,
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6 relative bg-[#050816]">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[10%] w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Accolades</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Security Accreditations & Leadership
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            We operate under rigid corporate compliance standards. Our engineers are certified, our methodologies are audited, and our security rules are fully hardened.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recognitions.map((rec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#090d22]/60 border border-white/5 rounded-2xl p-6 hover:border-white/10 hover:bg-[#090d22]/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 mb-6">
                  <rec.icon className="h-6 w-6" />
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 mb-2">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{rec.year}</span>
                  <span>•</span>
                  <span>{rec.issuer}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-3 tracking-wide">
                  {rec.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {rec.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[9px] font-mono text-cyan-400/80">
                <span>&gt; ISO COMPLIANCE CLEAR</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
