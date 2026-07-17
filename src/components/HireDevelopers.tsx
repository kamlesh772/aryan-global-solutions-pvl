import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Code, Cpu, Database, ShieldCheck, Zap, Layers, RefreshCw, Sparkles, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ROLES_INFO = [
  {
    id: 'frontend',
    name: 'Frontend Interface Craftsperson',
    icon: Code,
    rate: 110, // USD/hour
    skills: ['React 19', 'TypeScript', 'Tailwind v4', 'Next.js', 'WebSockets', 'Motion'],
  },
  {
    id: 'backend',
    name: 'Backend System Architect',
    icon: Database,
    rate: 130,
    skills: ['Go', 'Rust', 'Node.js', 'PostgreSQL', 'Redis', 'Kubernetes', 'gRPC'],
  },
  {
    id: 'ai',
    name: 'AI Pipeline & LLM Orchestrator',
    icon: Cpu,
    rate: 160,
    skills: ['@google/genai SDK', 'Python', 'LangChain', 'Vector Indexes', 'PyTorch'],
  },
  {
    id: 'devops',
    name: 'Infrastructure & Cloud Security Specialist',
    icon: ShieldCheck,
    rate: 140,
    skills: ['GCP / AWS', 'Terraform', 'CI/CD Pipelines', 'Docker', 'DNS & WAF Sec'],
  }
];

export default function HireDevelopers() {
  const { t, formatPrice, language } = useApp();
  const [selectedRole, setSelectedRole] = useState(ROLES_INFO[0].id);
  const [engineerCount, setEngineerCount] = useState(2);
  const [weeksDuration, setWeeksDuration] = useState(8);
  const [includeSLA, setIncludeSLA] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const activeRole = ROLES_INFO.find(r => r.id === selectedRole) || ROLES_INFO[0];

  // Calculate dynamic weekly/total budget
  const hoursPerWeek = 40;
  const baseRate = activeRole.rate * engineerCount * hoursPerWeek;
  const rawTotal = baseRate * weeksDuration;
  const slaAdjustment = includeSLA ? 2500 * weeksDuration : 0;
  const finalEstimate = rawTotal + slaAdjustment;

  const handleBookSquad = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  return (
    <section id="hire-developers-section" className="py-24 px-6 relative bg-gradient-to-b from-[#070b1e] to-[#050816] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-[40%] left-[10%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
            {language === 'ar' ? 'بناء الفرق المخصصة' : 'Talent Matrix'}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t('hireTitle')}
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            {t('hireDesc')}
          </p>
        </div>

        {/* Builder Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Role Selector & Config */}
          <div className="lg:col-span-7 bg-[#090d22]/80 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />
            
            <div>
              <h3 className="text-xs font-extrabold font-mono uppercase tracking-wider text-gray-400 border-b border-white/5 pb-3">
                1. Select Desired Specialization Role
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {ROLES_INFO.map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-500/10 border-indigo-500/40 text-white shadow-xl'
                          : 'bg-white/[0.01] border-white/5 text-gray-400 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-gray-500'}`}>
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold font-mono uppercase tracking-wider">{role.name.split(' ')[0]} Specialist</h4>
                          <p className="text-[10px] text-gray-500 mt-0.5">{role.skills.length} core stacks active</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Skill Checklist Details */}
              <div className="mt-8">
                <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">
                  // APPROVED SKILLS & SPECIALIZATIONS IN SQUAD
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeRole.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-[#070b1e] border border-white/5 text-xs text-gray-300 font-mono flex items-center gap-1.5 hover:border-cyan-400/30 transition-all"
                    >
                      <Check className="h-3.5 w-3.5 text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Sliders */}
              <div className="mt-8 space-y-6">
                <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  // QUANTITY & TIMELINE ESTIMATOR
                </h4>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-gray-400">Engineers Required</span>
                    <span className="text-cyan-400 font-bold">{engineerCount} Senior Devs</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={engineerCount}
                    onChange={(e) => setEngineerCount(parseInt(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-white/10 rounded-lg"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-gray-400">Sprint Duration</span>
                    <span className="text-cyan-400 font-bold">{weeksDuration} Weeks</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="24"
                    value={weeksDuration}
                    onChange={(e) => setWeeksDuration(parseInt(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-white/10 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* SLA toggle checkbox */}
            <div className="mt-8 border-t border-white/5 pt-6 flex items-center justify-between">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="sla-opt"
                  checked={includeSLA}
                  onChange={(e) => setIncludeSLA(e.target.checked)}
                  className="mt-1 accent-indigo-500 h-4 w-4 cursor-pointer"
                />
                <label htmlFor="sla-opt" className="text-xs cursor-pointer">
                  <span className="block font-bold text-white tracking-wide">Include 24/7 Priority SLA Support</span>
                  <span className="block text-gray-400 text-[11px] mt-0.5">Guarantees sub-4hr incident response times on P1 critical blockages.</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Calculator Output Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#090d22] to-[#070b1e] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl pointer-events-none rounded-full" />
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Users className="h-5 w-5 text-indigo-400" />
                <h4 className="text-xs font-extrabold font-mono uppercase tracking-widest text-white">
                  {t('hireCalculator')}
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs border-b border-white/5 pb-3">
                  <span className="text-gray-400">Specialist Rate</span>
                  <span className="font-mono text-white">{formatPrice(activeRole.rate)} / hour</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-white/5 pb-3">
                  <span className="text-gray-400">Total Dev Count</span>
                  <span className="font-mono text-white">{engineerCount} Engineers</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-white/5 pb-3">
                  <span className="text-gray-400">Est. Total Hours</span>
                  <span className="font-mono text-white">{engineerCount * weeksDuration * hoursPerWeek} hrs</span>
                </div>
                {includeSLA && (
                  <div className="flex justify-between items-center text-xs border-b border-white/5 pb-3 text-cyan-400">
                    <span>Priority Support SLA Tier</span>
                    <span className="font-mono font-bold">+Active</span>
                  </div>
                )}
              </div>

              {/* Final estimated cost block */}
              <div className="mt-8 p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">// SLA-BOUNDED ESTIMATE</span>
                <span className="text-4xl md:text-5xl font-black text-white tracking-tight block">
                  {formatPrice(finalEstimate)}
                </span>
                <span className="text-[10px] font-mono text-indigo-300 block mt-3">
                  / complete fixed price milestone
                </span>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/5">
              {submitted ? (
                <div className="text-center py-4">
                  <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs font-extrabold font-mono text-white uppercase tracking-wider">Estimate Booked Successfully!</h4>
                  <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
                    Our Lead Specialist will sync with your technical outline within 4 business hours to deliver your formal work-order agreement.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-4 text-[10px] font-mono text-cyan-400 hover:underline flex items-center gap-1 mx-auto cursor-pointer"
                  >
                    <RefreshCw className="h-3 w-3" /> Reconfigure Squad Setup
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookSquad} className="space-y-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-indigo-600/10 transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {loading ? 'DETERMINING BANDWIDTH...' : 'LOCK IN CONTRACT SQUAD'}
                  </button>
                  <p className="text-[9px] font-mono text-gray-500 text-center uppercase tracking-widest leading-relaxed">
                    // SUBMISSION TRIGGERS HUBSPOT LEAD CAPTURE & OUTLOOK AGENT DISPATCH
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
