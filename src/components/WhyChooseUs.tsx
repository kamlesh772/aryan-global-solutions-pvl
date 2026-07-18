import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, Clock, CodeXml, ThumbsUp } from 'lucide-react';
import { useApp } from '../context/AppContext';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    desc: 'Every line of code is audited for vulnerabilities. We implement strict IAM policies, encrypted endpoints, and robust regulatory compliance.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Award,
    title: 'Elite Engineering Team',
    desc: 'Our roster consists of top 2% developers skilled in React, Node, Python, AWS, and modern machine learning integration frameworks.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Rapid Agile Iterations',
    desc: 'Sprint with absolute clarity. We leverage high-speed CI/CD pipelines to deliver features frequently and transparently.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Clock,
    title: '24/7 Global Delivery',
    desc: 'Operating across multiple timezones (US, UK, Europe, MENA) to provide constant engineering velocity and active monitoring support.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: CodeXml,
    title: 'Premium Code Craftsmanship',
    desc: 'Clean architecture with optimized performance. No shortcuts. Scalable codebase structures prepared for rapid investment scaling.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ThumbsUp,
    title: '100% Transparent Governance',
    desc: 'No hidden dependencies, no vendor lock-in. Real-time Jira / Slack updates so you always have immediate overview of milestone progress.',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function WhyChooseUs() {
  const { t } = useApp();

  return (
    <section id="why-choose-us" className="py-24 px-6 relative bg-gradient-to-b from-transparent to-[#070b1e]/60">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">{t('Why Us')}</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t('Uncompromising Standards of Digital Execution')}
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            {t('We do not just write code; we partner with enterprise leaders and modern startups to construct high-performance digital flywheels.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-transparent blur-xl group-hover:scale-150 transition-all duration-500" />
              
              <div className="flex gap-4 items-start">
                <div className={`p-3 rounded-xl bg-white/5 text-cyan-400 border border-white/10 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-600 group-hover:text-white group-hover:border-transparent transition-all duration-300`}>
                  <pillar.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                    {t(pillar.title)}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed font-normal">
                    {t(pillar.desc)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
