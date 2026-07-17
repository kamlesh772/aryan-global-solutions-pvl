import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Palette, Code2, ShieldAlert, Rocket, LifeBuoy, Terminal, CheckCircle2, Server, Key, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Discovery & Strategic Alignment',
    desc: 'We start with a comprehensive architectural review. We map your functional needs, define core metrics, and construct a sound delivery roadmap.',
    deliverables: ['GCP Infrastructure Schema', 'SOC2 Compliance Plan', 'System Requirements Doc (SRS)', 'Sprint Timeline Matrix'],
    techBadge: 'Agile Architecture Planning',
    badgeColor: 'text-amber-400 bg-amber-400/5',
    subIcon: Terminal
  },
  {
    num: '02',
    icon: Palette,
    title: 'UI/UX Prototyping',
    desc: 'Our design unit models custom wireframes and high-fidelity interactive screens, matching modern guidelines, typography pairings, and layouts.',
    deliverables: ['Figma High-Fidelity Prototype', 'Design System Kit', 'Layout Animation Guides', 'Accessibility Audit Map'],
    techBadge: 'WCAG AA Design Systems',
    badgeColor: 'text-purple-400 bg-purple-400/5',
    subIcon: Key
  },
  {
    num: '03',
    icon: Code2,
    title: 'High-Velocity Sprints',
    desc: 'Elite remote developers engineer your database, server routines, and responsive React frontend in clean, modular TypeScript.',
    deliverables: ['Clean TypeScript / Go API Code', 'Dockerized Core Services', 'React 19 / Vite Webpack', 'CI/CD Pipeline Setup'],
    techBadge: 'Production TypeScript & Go',
    badgeColor: 'text-cyan-400 bg-cyan-400/5',
    subIcon: Server
  },
  {
    num: '04',
    icon: ShieldAlert,
    title: 'Hardened Security & Testing',
    desc: 'Rigorous end-to-end automated tests are performed. We audit API payloads and verify Firestore/SQL configurations to eliminate exploits.',
    deliverables: ['Penetration Audit Report', 'Cypress End-to-End Tests', 'Snyk Vulnerability Scans', 'JWT Authentication Hardening'],
    techBadge: 'Hardened Threat Modeling',
    badgeColor: 'text-red-400 bg-red-400/5',
    subIcon: ShieldAlert
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Production Deployment',
    desc: 'We orchestrate zero-downtime deployments on Cloud Run, AWS, or GCP, complete with robust edge caching and active health checks.',
    deliverables: ['Live Cloud Run Environment', 'Cloudflare Edge Proxies', '99.99% Uptime SLA Script', 'Auto-Scaling Pod Config'],
    techBadge: 'Kubernetes & CDN Deployment',
    badgeColor: 'text-emerald-400 bg-emerald-400/5',
    subIcon: Rocket
  },
  {
    num: '06',
    icon: LifeBuoy,
    title: 'Adaptive Maintenance',
    desc: 'Ongoing support contracts protect your build. We update packages, monitor active error logs, and optimize database queries persistently.',
    deliverables: ['24/7 Incident Tracking SOW', 'Quarterly Package Patches', 'Real-time Datadog Logs', 'SLA Response Guarantee'],
    techBadge: 'SLA Support & Diagnostics',
    badgeColor: 'text-indigo-400 bg-indigo-400/5',
    subIcon: Heart
  },
];

export default function Process() {
  const { language } = useApp();
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const activeStep = steps[activeStepIdx];
  const SubIcon = activeStep.subIcon;

  return (
    <section id="process" className="py-24 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e]">
      {/* Glow background effects */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Workflow</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Interactive Project Timeline
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            We operate with surgical precision. Navigate through each milestone step below to preview the explicit architectural deliverables and SLA certifications generated in each phase.
          </p>
        </div>

        {/* Horizontal Timeline Tracker navigation */}
        <div className="mb-12 border-b border-white/5 pb-6 overflow-x-auto scrollbar-none">
          <div className="flex justify-between min-w-[700px] md:min-w-0 items-center px-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 -z-10" />
            
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStepIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStepIdx(idx)}
                  className="flex flex-col items-center gap-3 relative focus:outline-none cursor-pointer group"
                >
                  {/* Glowing dot */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 z-10 ${
                    isActive 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 border-transparent text-white shadow-lg shadow-indigo-500/30 scale-110' 
                      : 'bg-[#090d22] border-white/10 text-gray-400 hover:border-white/20 group-hover:text-white'
                  }`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className={`text-[10px] font-mono tracking-widest uppercase transition-colors ${isActive ? 'text-cyan-400 font-extrabold' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    PHASE {step.num}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card panel */}
        <div className="bg-[#090d22]/80 border border-white/10 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Card Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg ${activeStep.badgeColor}`}>
                    {activeStep.techBadge}
                  </span>
                  <span className="text-sm font-mono text-gray-500">// Milestone Phase {activeStep.num}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                  {activeStep.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl font-normal">
                  {activeStep.desc}
                </p>

                {/* List of deliverables with custom icons */}
                <div className="pt-4 border-t border-white/5 space-y-4">
                  <h4 className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest flex items-center gap-1.5">
                    <SubIcon className="h-4 w-4 text-cyan-400" /> SLA Certifications & Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {activeStep.deliverables.map((item, i) => (
                      <div key={i} className="flex gap-2.5 items-center text-xs text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Right Big Numeric visualization */}
              <div className="lg:col-span-5 flex justify-center items-center h-full relative">
                <div className="relative">
                  <span className="text-[120px] sm:text-[180px] font-black font-mono text-white/[0.02] tracking-tighter leading-none select-none">
                    {activeStep.num}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 animate-pulse">
                      <activeStep.icon className="h-10 w-10" />
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
