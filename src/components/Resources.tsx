import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, FileText, ArrowDown, Mail, Check, Shield, Download, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

const library = [
  {
    id: 'profile',
    title: 'Aryan Global Solutions Company Profile & SOW Protocol',
    category: 'Corporate Blueprint',
    pages: '28 Pages PDF',
    desc: 'The official agency catalog detailing our engineering SLAs, architectural designs, tech stack matrix, and contract billing guidelines.',
    featured: true,
  },
  {
    id: 'ai-playbook',
    title: 'Enterprise AI & Private LLM Deployment Strategy 2026',
    category: 'Whitepaper',
    pages: '45 Pages PDF',
    desc: 'Blueprint detailing secure server-side API proxy routing, contextual vector searches, and cost-optimization for Gemini integrations.',
    featured: false,
  },
  {
    id: 'cloud-scale',
    title: 'Scaling Relational Databases & Microservices to 10M Users',
    category: 'Architectural Guide',
    pages: '32 Pages PDF',
    desc: 'Deep-dive manual covering multi-region Postgres replication, Kubernetes pod configuration, and JWT authentication hardening.',
    featured: false,
  }
];

export default function Resources() {
  const { t, language } = useApp();
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [activeDownload, setActiveDownload] = useState<string | null>(null);
  const [completedDownloads, setCompletedDownloads] = useState<Record<string, boolean>>({});

  const handleDownloadTrigger = (id: string) => {
    setActiveDownload(id);
  };

  const executeDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !activeDownload) return;

    setDownloadingId(activeDownload);

    // Simulate cryptographic package bundling and trigger natural download of the Company Profile PDF mock
    setTimeout(() => {
      setDownloadingId(null);
      setCompletedDownloads(prev => ({ ...prev, [activeDownload]: true }));
      
      const docTitle = library.find(item => item.id === activeDownload)?.title || "Aryan Global Solutions Blueprint";
      
      // Dynamic on-the-fly text/PDF download generation
      const mockProfileContent = `
============================================================
ARYAN GLOBAL SOLUTIONS | ENTERPRISE SOFTWARE & AI AGENCY
============================================================
Document: ${docTitle}
Verification Code: AGS-SECURE-9941-X
Uptime SLA: 99.99% Guaranteed
Support Hotline: 1-800-555-0199
Official Site: https://solutions.aryanglobalsolutions.com

This document serves as your verified corporate overview and architectural
blueprint. Under our strict operational guidelines, we deliver high-performance,
SLA-backed systems globally.

------------------------------------------------------------
CORE SERVICES MATRIX:
1. Enterprise Custom Software Engineering (Go, Rust, Node.js)
2. Intelligent Automation & LLM Integration (Gemini SDK Specialists)
3. Hardened Relational Database Setup & Multi-region Replication (Cloud SQL)
4. High-Availability Server Orchestration & Kubernetes Clusters

------------------------------------------------------------
MILSTONE BILLING PROCEDURES:
All projects are broken down into Agile sprints. Payments are cleared
against verified, visual sprint milestones with absolute transparency.

Thank you for choosing Aryan Global Solutions as your trusted
technology partner.

============================================================
END OF DOCUMENT // SECURE DIGITAL DISPATCH
============================================================
`;
      
      const blob = new Blob([mockProfileContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${activeDownload}-ags-profile.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setActiveDownload(null);
    }, 2000);
  };

  return (
    <section id="resources-section" className="py-24 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
            {language === 'ar' ? 'المستندات والأبحاث' : 'Resources'}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t('resourcesTitle')}
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            {t('resourcesDesc')}
          </p>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {library.map((item) => {
            const isCompleted = completedDownloads[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all relative overflow-hidden bg-[#090d22] border group ${
                  item.featured ? 'border-cyan-400/40 shadow-xl shadow-cyan-400/5' : 'border-white/5 hover:border-white/10'
                }`}
              >
                {item.featured && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-cyan-400 text-black px-3 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="h-2.5 w-2.5" /> Core Profile
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4">
                    <span>{item.category}</span>
                    <span className="text-cyan-400">{item.pages}</span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  {isCompleted ? (
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <Check className="h-4 w-4" /> Download Complete
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleDownloadTrigger(item.id)}
                      className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs tracking-wider font-mono uppercase transition-all cursor-pointer border border-white/10 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                    >
                      <span>PREVIEW & DOWNLOAD</span> <ArrowDown className="h-4 w-4 text-cyan-400 animate-bounce" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Download Email Gate Dialog */}
        {activeDownload && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050816]/90 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-md bg-[#090d22] border border-white/10 p-6 md:p-8 rounded-3xl relative shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 rounded-full flex items-center justify-center">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold font-mono text-white uppercase tracking-wider">Secure Document Ingestion</h4>
                  <p className="text-[10px] text-gray-400">Verifying corporate destination email</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Enter your work email address to instantly build and download <span className="text-cyan-400 font-semibold">{library.find(i => i.id === activeDownload)?.title}</span>.
              </p>

              <form onSubmit={executeDownload} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-11 py-3 text-xs bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveDownload(null)}
                    className="flex-1 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs tracking-wider uppercase font-mono transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!!downloadingId}
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-black font-extrabold text-xs tracking-wider uppercase font-mono transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    {downloadingId ? 'COMPILING...' : 'BUILD & DOWNLOAD'}
                  </button>
                </div>
              </form>

              <div className="mt-6 flex items-center gap-1.5 text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-relaxed">
                <Shield className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>// AGS 256-BIT SECURE DISPATCH OK</span>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
