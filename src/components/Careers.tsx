import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ArrowRight, DollarSign, MapPin, Cpu, Check, FileText, Send, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

const roles = [
  {
    id: '1',
    title: 'Senior Enterprise Architect',
    department: 'Core Infrastructure',
    location: 'Remote SLA / Global',
    salary: '$160,000 - $210,000',
    type: 'Full-time Retainer',
    skills: ['Golang', 'Rust', 'Kubernetes', 'Cloud SQL / PostgreSQL', 'gRPC'],
    perks: ['Equity options', 'MacBook Pro Max budget', 'Private health insurance'],
    description: 'We are seeking a senior infrastructure architect to lead our high-availability database replications, Kubernetes pods, and secure API gateways for our Fortune 500 integrations.'
  },
  {
    id: '2',
    title: 'Lead AI Pipeline Engineer',
    department: 'Artificial Intelligence',
    location: 'Remote SLA / Global',
    salary: '$180,000 - $240,000',
    type: 'Full-time Retainer',
    skills: ['Python', '@google/genai SDK', 'LangChain', 'Vector Search / Pinecone'],
    perks: ['Equity options', 'High-end GPU cloud budget', 'Conference travel allowance'],
    description: 'Lead the design and implementation of highly-secure, server-side private LLM pipelines and multi-modal classification services. Experience with client proxies and context windows is required.'
  },
  {
    id: '3',
    title: 'Senior Full-Stack UI Craftsperson',
    department: 'Interface Engineering',
    location: 'Remote SLA / Global',
    salary: '$140,000 - $180,000',
    type: 'Full-time Retainer',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Motion (Framer)', 'Vite'],
    perks: ['Fully remote freedom', 'Visual asset design toolkit', 'Bi-annual team retreats'],
    description: 'Help us build award-winning web platforms that render flawlessly under 100ms. Absolute mastery of state isolation, animations, responsive design, and WCAG AA accessibility is expected.'
  }
];

export default function Careers() {
  const { t, language } = useApp();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    resumeUrl: '',
    coverLetter: '',
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setApplied(true);
    }, 1500);
  };

  const activeRole = roles.find(r => r.id === selectedRole);

  return (
    <section id="careers-section" className="py-24 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e] overflow-hidden min-h-[80vh]">
      {/* Background visual glow */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
            {language === 'ar' ? 'انضم إلى النخبة' : 'Careers'}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t('careersTitle')}
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            {t('careersDesc')}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Roles list */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white border-b border-white/5 pb-3">
              {t('careersOpenRoles')} ({roles.length})
            </h3>

            <div className="space-y-4">
              {roles.map((role) => (
                <motion.div
                  key={role.id}
                  whileHover={{ y: -2 }}
                  className={`p-6 rounded-2xl bg-[#090d22] border transition-all cursor-pointer ${
                    selectedRole === role.id ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/5' : 'border-white/5 hover:border-white/10'
                  }`}
                  onClick={() => {
                    setSelectedRole(role.id);
                    setApplied(false);
                  }}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/5 px-2.5 py-1 rounded-md">
                        {role.department}
                      </span>
                      <h4 className="text-lg font-bold text-white mt-2.5 tracking-wide">
                        {role.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-400 font-mono">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-gray-500" /> {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3.5 w-3.5 text-gray-500" /> {role.salary}
                        </span>
                      </div>
                    </div>
                    <button className="p-2.5 rounded-xl bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                      <ArrowRight className="h-4.5 w-4.5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {role.skills.map(s => (
                      <span key={s} className="text-[10px] font-mono text-gray-400 bg-white/[0.02] px-2 py-0.5 rounded border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Application form panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {activeRole ? (
                <motion.div
                  key={activeRole.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-[#090d22] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/5 to-transparent blur-2xl rounded-full" />
                  
                  <div className="border-b border-white/5 pb-5">
                    <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest">{activeRole.type}</span>
                    <h3 className="text-xl font-bold text-white mt-1 tracking-wide">{activeRole.title}</h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">{activeRole.description}</p>
                  </div>

                  <div className="py-5 space-y-4">
                    <h5 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">// CONTRACT BENEFITS & PERKS</h5>
                    <ul className="space-y-2.5">
                      {activeRole.perks.map((perk, i) => (
                        <li key={i} className="flex gap-2.5 items-center text-xs text-gray-300">
                          <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Application Form */}
                  <div className="border-t border-white/5 pt-5">
                    {applied ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-6"
                      >
                        <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Check className="h-6 w-6" />
                        </div>
                        <h4 className="text-sm font-extrabold font-mono text-white uppercase tracking-wider">Application Dispatched!</h4>
                        <p className="text-[11px] text-gray-400 mt-2 max-w-sm mx-auto leading-relaxed">
                          Your profile has been ingested into our secure talent queue. Our engineering committee reviews portfolios within 2 business days.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleApply} className="space-y-4">
                        <h5 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">// APPLICANT CREDENTIALS</h5>
                        
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 text-xs bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>

                        <div>
                          <input
                            type="email"
                            required
                            placeholder="Corporate / developer email"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 text-xs bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>

                        <div>
                          <input
                            type="url"
                            required
                            placeholder="GitHub, LinkedIn, or Portfolio URL"
                            value={form.resumeUrl}
                            onChange={e => setForm({ ...form, resumeUrl: e.target.value })}
                            className="w-full px-4 py-3 text-xs bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>

                        <div>
                          <textarea
                            rows={3}
                            placeholder="A brief note on your engineering craftsmanship (optional)..."
                            value={form.coverLetter}
                            onChange={e => setForm({ ...form, coverLetter: e.target.value })}
                            className="w-full px-4 py-3 text-xs bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-black font-extrabold text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <span>TRANSMITTING PORTFOLIO...</span>
                          ) : (
                            <>
                              <span>APPLY FOR POSITION</span> <Send className="h-3 w-3" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="bg-[#090d22]/40 border border-white/5 rounded-3xl p-8 text-center text-gray-500 font-mono py-20">
                  <Cpu className="h-10 w-10 text-gray-600 mx-auto mb-4 animate-pulse" />
                  <p className="text-xs">// SELECT AN OPENING TO ACTIVATE SECURE APPLICANT CONSOLE</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
