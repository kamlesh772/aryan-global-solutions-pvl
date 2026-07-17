import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Cpu, Server, ShieldCheck } from 'lucide-react';

const cases = [
  {
    num: '01',
    title: 'Aura Fintech AI Assistant Deployment',
    client: 'Aura Capital Inc.',
    location: 'New York, USA',
    metrics: [
      { label: 'Decision Accuracy', value: '99.8%' },
      { label: 'Inquiry Response Time', value: '< 150ms' },
      { label: 'Operational Saving', value: '42%' },
    ],
    problem: 'Manual compliance checking and complex account queries created major backlogs, reducing customer satisfaction and inflating support costs.',
    solution: 'Engineered a highly secure, private custom LLM pipeline using the Gemini API. Integrated strict client database security rules with automated PCI-DSS compliant validation middleware.',
    tech: 'Next.js, PyTorch, FastAPI, GCP, Gemini SDK',
    icon: Cpu,
  },
  {
    num: '02',
    title: 'Velocity Real-time Supply Chain Optimization',
    client: 'Velocity Logistics Ltd.',
    location: 'London, UK',
    metrics: [
      { label: 'Route Mileage Saved', value: '1.4M / year' },
      { label: 'Load Efficiency', value: '+34%' },
      { label: 'SLA Deliveries On-Time', value: '99.9%' },
    ],
    problem: 'Siloed driver scheduling and static delivery routes caused high delays under unstable global weather and fuel fluctuations.',
    solution: 'Designed and deployed an event-driven, WebSocket-powered logistics command center. Built adaptive routing graph-algorithms utilizing D3.js real-time visual streams.',
    tech: 'React, D3.js, Node.js, WebSockets, GCP Cloud Run',
    icon: Server,
  },
  {
    num: '03',
    title: 'Vitalis Patient Hardware Synchronization',
    client: 'Vitalis Medical Group',
    location: 'Munich, Germany',
    metrics: [
      { label: 'Active Patients Connected', value: '45,000+' },
      { label: 'Sync Fail Rate', value: '0.001%' },
      { label: 'Incident Triggers', value: 'Real-time 1s' },
    ],
    problem: 'Smart medical hardware failed to stream consistent diagnostics under volatile cellular networks, delaying critical healthcare practitioner responses.',
    solution: 'Created a hardened React Native app integrated with Bluetooth Low Energy (BLE) background handlers. Devised a high-performance database sync model optimized to retry offline packet queues seamlessly.',
    tech: 'React Native, Node.js, BLE Stack, MongoDB Atlas, Redis',
    icon: ShieldCheck,
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Case Studies</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Enterprise Architectures Built to Last
            </p>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              We focus on measurable outcomes. These thorough enterprise case studies showcase how we apply modular backend design and intuitive, responsive client interfaces to solve complex challenges.
            </p>
          </div>
          <div className="flex gap-4 self-center lg:self-end">
            <span className="text-xs font-mono text-gray-500 bg-white/5 border border-white/5 px-4 py-2 rounded-full">
              // SLA COMPLIANT DELIVERY STANDARD
            </span>
          </div>
        </div>

        <div className="space-y-12">
          {cases.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#090d22]/70 border border-white/5 hover:border-white/10 rounded-3xl p-6 md:p-10 relative overflow-hidden backdrop-blur-md group"
            >
              {/* Massive background count label */}
              <div className="absolute top-4 right-10 text-[100px] font-black font-mono text-white/[0.02] group-hover:text-cyan-400/[0.04] transition-colors pointer-events-none">
                {cs.num}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                {/* Metrics and Core Data (Col 1-5) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      {cs.client}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono mt-1">Global Region: {cs.location}</p>
                  </div>

                  {/* Highlight Stat grid */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-left">
                        <p className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">
                          {m.value}
                        </p>
                        <p className="text-[10px] font-mono font-medium text-gray-500 uppercase mt-1">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Problem & Solution detailed narrative (Col 6-12) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Problem card */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                      <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 font-mono">
                        <Target className="h-4 w-4 shrink-0" /> The Challenge
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                        {cs.problem}
                      </p>
                    </div>

                    {/* Solution card */}
                    <div className="bg-cyan-500/[0.02] border border-cyan-500/10 rounded-2xl p-5">
                      <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 font-mono">
                        <Lightbulb className="h-4 w-4 shrink-0" /> Enterprise Action
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <cs.icon className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
                      <span className="font-mono text-gray-500">Tech Stack:</span>
                      <span className="font-mono text-cyan-300 font-medium">{cs.tech}</span>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors shrink-0 self-start sm:self-center"
                    >
                      <TrendingUp className="h-3.5 w-3.5 text-cyan-400" /> Review Full Architecture
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
