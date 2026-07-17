import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, Landmark, Cookie } from 'lucide-react';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms' | 'refund' | 'cookies';
}

export default function ComplianceModal({ isOpen, onClose, initialTab = 'privacy' }: ComplianceModalProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'refund' | 'cookies'>(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialTab]);

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'refund', label: 'Refund Policy', icon: Landmark },
    { id: 'cookies', label: 'Cookies Policy', icon: Cookie },
  ] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050816]/95 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl h-[85vh] bg-[#090d22] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">Legal & Compliance Center</h3>
                <p className="text-xs text-gray-400 mt-1">Aryan Global Solutions — Enterprise Documentation</p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors"
                aria-label="Close compliance viewer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Split Layout */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              {/* Left Sidebar for Tabs */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-[#070a1a] p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all w-full shrink-0 md:shrink text-left ${
                        isActive
                          ? 'bg-cyan-500/10 border border-cyan-500/30 text-white shadow-lg shadow-cyan-500/5'
                          : 'border border-transparent text-gray-400 hover:text-gray-200 hover:bg-white/5'
                      }`}
                    >
                      <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right content view area */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-gradient-to-b from-[#090d22] to-[#050816]">
                <div className="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed font-normal space-y-6">
                  {activeTab === 'privacy' && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-white font-mono uppercase tracking-wide border-b border-white/5 pb-2">Privacy Policy</h4>
                      <p className="text-xs text-gray-400 font-mono">Last Updated: July 16, 2026</p>
                      <p>
                        At Aryan Global Solutions, we prioritize the protection and security of customer intelligence and codebases. This Privacy Policy details our operational workflows, server-side data handling processes, and client privacy guarantees.
                      </p>
                      
                      <h5 className="font-bold text-white mt-4">1. Information Collection & Ingestion</h5>
                      <p>
                        We limit client information gathering strictly to details submitted through authorized consultation forms (Name, Corporate Email, Phone, Project Descriptions) or established enterprise OAuth communication gateways. We do not engage in automated scraping or unauthorized metadata scanning of your servers.
                      </p>

                      <h5 className="font-bold text-white mt-4">2. Server-Side Data Isolation</h5>
                      <p>
                        All proprietary source files, database backups, configurations, and API credentials shared with our engineering staff are stored exclusively on secure cloud containers guarded by strict access control rules. They are never cached on unencrypted local drives.
                      </p>

                      <h5 className="font-bold text-white mt-4">3. Absolute NDA Execution</h5>
                      <p>
                        We enforce a robust security barrier: any database access or corporate codebase shared with us is locked behind two-factor authentication (2FA) and remains confidential under our binding mutual Non-Disclosure Agreements (NDAs).
                      </p>

                      <h5 className="font-bold text-white mt-4">4. Compliance Frameworks</h5>
                      <p>
                        We align our data ingestion, processing, and transit patterns with global privacy protocols including General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA). You retain the absolute right to demand the permanent deletion of your credentials and project data.
                      </p>
                    </div>
                  )}

                  {activeTab === 'terms' && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-white font-mono uppercase tracking-wide border-b border-white/5 pb-2">Terms of Service</h4>
                      <p className="text-xs text-gray-400 font-mono">Last Updated: July 16, 2026</p>
                      <p>
                        By engaging Aryan Global Solutions for custom software design, database engineering, or cloud automation, you accept and agree to follow these standard terms of corporate business partnership.
                      </p>

                      <h5 className="font-bold text-white mt-4">1. Engagement Parameters & Scopes</h5>
                      <p>
                        All services are delivered strictly in accordance with written statements of work (SOW) or custom milestones approved by both parties. Any auxiliary requests or deviations from the written scope will be evaluated via our standard Agile sprint change protocol.
                      </p>

                      <h5 className="font-bold text-white mt-4">2. IP Transfers & Deliverable Deliveries</h5>
                      <p>
                        Aryan Global Solutions transfers 100% intellectual property (IP), source code rights, assets, and build credentials directly to your organization immediately upon successful verification and settlement of the agreed milestone payments. We claim zero recurring royalty rights.
                      </p>

                      <h5 className="font-bold text-white mt-4">3. Professional Warranties</h5>
                      <p>
                        We warrant that all software architecture is developed according to elite modern industry standards, is thoroughly linted, undergoes comprehensive unit-testing, and matches the technical parameters specified in our agreements.
                      </p>

                      <h5 className="font-bold text-white mt-4">4. Liability Thresholds</h5>
                      <p>
                        Neither party shall be liable for indirect, collateral, or consequential data damages. Total financial liability under any work order is strictly capped at the cumulative amount settled during that specific work cycle.
                      </p>
                    </div>
                  )}

                  {activeTab === 'refund' && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-white font-mono uppercase tracking-wide border-b border-white/5 pb-2">Refund & Cancellation Policy</h4>
                      <p className="text-xs text-gray-400 font-mono">Last Updated: July 16, 2026</p>
                      <p>
                        We establish clear, trust-based contracts with our enterprise partners. Our refund and sprint cancellation policies are structured to guarantee professional equity and security.
                      </p>

                      <h5 className="font-bold text-white mt-4">1. Milestone-Based Escrows & Approvals</h5>
                      <p>
                        We break down our custom software development tasks into modular bi-weekly Agile sprints. Billing is executed exclusively upon your direct visual verification and technical approval of the finished milestone. This protects your financial investment at every phase.
                      </p>

                      <h5 className="font-bold text-white mt-4">2. Refund Eligibility</h5>
                      <p>
                        In the highly unlikely event that a delivered build fails to comply with the technical requirements explicitly detailed in the approved statement of work, we will resolve the discrepancies immediately at zero additional cost. If resolution remains mathematically or architecturally impossible, we offer a partial refund proportional to the unfinished milestone.
                      </p>

                      <h5 className="font-bold text-white mt-4">3. Contract Termination</h5>
                      <p>
                        Either party can terminate ongoing retainers by providing 14 business days written notice. You are only responsible for settling verified engineering hours logged and approved up to the date of formal cancellation.
                      </p>
                    </div>
                  )}

                  {activeTab === 'cookies' && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-white font-mono uppercase tracking-wide border-b border-white/5 pb-2">Cookie & Tracking Policy</h4>
                      <p className="text-xs text-gray-400 font-mono">Last Updated: July 16, 2026</p>
                      <p>
                        We implement secure, clean, and minimal tracking standards. Read on to see how we utilize browser storage to optimize user sessions.
                      </p>

                      <h5 className="font-bold text-white mt-4">1. Minimal Persistent Storage</h5>
                      <p>
                        Our client frontend utilizes browser storage and cookies exclusively to record critical functional state variables (such as remembering your language choice, session theme settings, or your consent on our Cookie agreement banner).
                      </p>

                      <h5 className="font-bold text-white mt-4">2. Zero Unauthorized Tracking</h5>
                      <p>
                        We do not integrate aggressive background third-party tracking scripts or advertising trackers. Our diagnostic tools are restricted entirely to standard Google Analytics properties used to map high-level visitor density.
                      </p>

                      <h5 className="font-bold text-white mt-4">3. Opt-out & Preferences</h5>
                      <p>
                        You can disable browser cookies at any time through your local browser settings. Disabling cookies will not degrade your ability to navigate our agency services or transmit encrypted consultation inquiries.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-between px-6 text-[10px] font-mono text-gray-500">
              <span>// SECURE 256-BIT ENCRYPTED DOCUMENT</span>
              <span>AGS COMPLIANCE VERIFICATION OK</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
