import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Mail, 
  Download, 
  Plus, 
  Calendar, 
  DollarSign, 
  FileText, 
  Check, 
  LogOut, 
  ArrowRight, 
  Clock, 
  Layers, 
  AlertCircle, 
  Trash2,
  Briefcase,
  Activity,
  User,
  ExternalLink,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { useApp } from '../context/AppContext';

// Local mock projects
const initialProjects = [
  {
    id: 'p1',
    name: 'Enterprise AI Agent Orchestrator (v2.4)',
    status: 'In Development',
    progress: 74,
    lead: 'Aryan Jain',
    category: 'Artificial Intelligence',
    timeline: 'June 10 - Sept 15, 2026'
  },
  {
    id: 'p2',
    name: 'High-Availability Multi-Region DB Cluster',
    status: 'Final UAT Testing',
    progress: 95,
    lead: 'Elena Rostova',
    category: 'Cloud Infrastructure',
    timeline: 'April 01 - July 28, 2026'
  }
];

// Local mock invoices
const initialInvoices = [
  {
    id: 'INV-2026-0042',
    description: 'Sprint 4 Deliverables & Agent Deployment',
    amount: 14500,
    status: 'PAID',
    dueDate: '2026-07-20'
  },
  {
    id: 'INV-2026-0039',
    description: 'Infrastructure Re-architecture Retainer',
    amount: 22000,
    status: 'PAID',
    dueDate: '2026-06-15'
  },
  {
    id: 'INV-2026-0045',
    description: 'NVIDIA GPU SWARM Integration Milestone 1',
    amount: 18500,
    status: 'PENDING',
    dueDate: '2026-08-01'
  }
];

// Local mock documents
const initialDocuments = [
  {
    id: 'doc1',
    name: 'System Architecture Blueprint & SLA Schema.pdf',
    size: '4.8 MB',
    type: 'PDF Architecture Spec'
  },
  {
    id: 'doc2',
    name: 'Master Service Agreement (AGS-2026).pdf',
    size: '1.2 MB',
    type: 'Legal Engagement'
  },
  {
    id: 'doc3',
    name: 'AI Swarm Security Clearance & Pentest Report.pdf',
    size: '11.4 MB',
    type: 'Security Auditing'
  }
];

// Local mock tickets
const initialTickets = [
  {
    id: 'TCK-4819',
    subject: 'Requesting staging database credentials for regional node',
    status: 'OPEN',
    priority: 'HIGH',
    date: '2026-07-17 14:30'
  },
  {
    id: 'TCK-4720',
    subject: 'Webhook handshake latency optimization on Dev cluster',
    status: 'RESOLVED',
    priority: 'MEDIUM',
    date: '2026-07-12 09:15'
  }
];

export default function ClientPortal() {
  const { language, t, currency, formatPrice } = useApp();
  
  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('partner@aryanglobal.com');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Portal interactive state
  const [projects, setProjects] = useState(initialProjects);
  const [invoices, setInvoices] = useState(initialInvoices);
  const [documents, setDocuments] = useState(initialDocuments);
  const [tickets, setTickets] = useState(initialTickets);
  const [newTicketSubject, setNewTicketSubject] = useState('');
  const [newTicketPriority, setNewTicketPriority] = useState('MEDIUM');
  const [meetingSubject, setMeetingSubject] = useState('');
  const [meetingDate, setMeetingDate] = useState('2026-07-22');
  const [meetingTime, setMeetingTime] = useState('14:00');
  const [meetingSuccess, setMeetingSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'documents' | 'billing' | 'tickets'>('overview');

  // Support Request Client Access state
  const [accessRequested, setAccessRequested] = useState(false);
  const [accessEmail, setAccessEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    // Simulated short timeout for realistic experience
    setTimeout(() => {
      setIsLoggingIn(false);
      if (!email.includes('@')) {
        setLoginError('Please enter a valid business email address.');
        return;
      }
      setIsLoggedIn(true);
    }, 1200);
  };

  const handleAddTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicketSubject.trim()) return;

    const newTicket = {
      id: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: newTicketSubject,
      status: 'OPEN',
      priority: newTicketPriority,
      date: new Date().toISOString().replace('T', ' ').slice(0, 16)
    };

    setTickets([newTicket, ...tickets]);
    setNewTicketSubject('');
  };

  const handleScheduleMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!meetingSubject.trim()) return;

    setMeetingSuccess(true);
    setTimeout(() => {
      setMeetingSuccess(false);
      setMeetingSubject('');
    }, 3000);
  };

  const handleRequestAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessEmail.includes('@')) return;
    setAccessRequested(true);
    setTimeout(() => {
      setAccessRequested(false);
      setAccessEmail('');
      alert('Your access request has been submitted to the Admin Desk. We will review and send your invitation within 1-2 business hours.');
    }, 500);
  };

  return (
    <section id="client-portal" className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#070b1e] to-[#050816] overflow-hidden min-h-screen">
      {/* Dynamic background accents */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" /> Secure Client Environment
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight"
          >
            {isLoggedIn ? 'Client Dashboard' : 'Client Portal'}
          </motion.h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            {isLoggedIn 
              ? 'Real-time project orchestration tracker, live invoices, active sprints, support tickets, and private legal documents.'
              : 'Authorized enterprise partners and active corporate clients can access their secure dashboards, project tracking, and billing services.'}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isLoggedIn ? (
            /* ========================================================
               LOGIN SCREEN (Premium Glassmorphism Card)
               ======================================================== */
            <motion.div
              key="login-view"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-[#090d22]/50 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />
                
                <div className="text-center mb-8">
                  <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 mb-4">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">Secure Partner Login</h3>
                  <p className="text-xs text-gray-400 mt-1">Use corporate email for demo login access.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  {loginError && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{loginError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">Business Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <Mail className="h-4 w-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="partner@yourcompany.com"
                        className="w-full pl-10 pr-4 py-3 bg-[#050816]/70 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Password</label>
                      <button 
                        type="button"
                        onClick={() => alert('Demo Access password reset: Please use any text to login instantly.')}
                        className="text-[10px] text-cyan-400 hover:underline font-bold font-mono tracking-wide uppercase"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <Lock className="h-4 w-4" />
                      </div>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 bg-[#050816]/70 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 bg-[#050816]/70 text-cyan-500 focus:ring-cyan-500/20"
                    />
                    <label htmlFor="remember_me" className="ml-2.5 text-xs text-gray-400 cursor-pointer select-none">
                      Remember Me
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoggingIn}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer font-mono mt-2"
                  >
                    {isLoggingIn ? (
                      <>
                        <Clock className="h-4 w-4 animate-spin" />
                        <span>Authenticating Credentials...</span>
                      </>
                    ) : (
                      <>
                        <span>Verify and Login</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Micro divider */}
                <div className="relative my-6 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/5" />
                  </div>
                  <span className="relative bg-[#090d22] px-3.5 text-[8px] font-bold font-mono text-gray-500 uppercase tracking-widest">Or Partner Desk</span>
                </div>

                {/* Sub Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      const emailPrompt = prompt('Enter your company email address to request access:');
                      if (emailPrompt) {
                        alert(`Access request logged for ${emailPrompt}. Our administrative engineering team will process this request and email credentials shortly.`);
                      }
                    }}
                    className="py-2.5 px-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-300 transition-colors cursor-pointer text-center"
                  >
                    Request Access
                  </button>
                  <a
                    href="#contact"
                    className="py-2.5 px-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-300 transition-colors text-center block"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>

              {/* Dynamic instruction tooltip for testing/assessment */}
              <div className="mt-6 text-center text-[11px] text-cyan-400/70 border border-cyan-500/20 bg-cyan-500/5 py-2.5 px-4 rounded-2xl max-w-sm mx-auto flex items-center gap-2 justify-center font-mono">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 animate-pulse" />
                <span>Quick Test: Any email & pass work instantly.</span>
              </div>
            </motion.div>
          ) : (
            /* ========================================================
               PORTAL DASHBOARD VIEW (Enterprise Ready)
               ======================================================== */
            <motion.div
              key="dashboard-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Dashboard Banner Info */}
              <div className="bg-[#090d22]/40 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
                
                <div className="flex items-center gap-4 text-left">
                  <div className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-500 text-black font-extrabold font-mono text-lg shrink-0 shadow-md">
                    AG
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-extrabold text-white">Aryan Global Solutions</h3>
                      <span className="text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 animate-pulse uppercase">
                        SLA Active
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 font-mono">
                      Secure Session: <span className="text-gray-200 font-bold">{email}</span> (Corporate Partner)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                  <button
                    onClick={() => {
                      const confirmLogout = window.confirm('Are you sure you want to log out of the secure Client Portal?');
                      if (confirmLogout) setIsLoggedIn(false);
                    }}
                    className="w-full md:w-auto px-4 py-2.5 rounded-xl border border-rose-500/20 hover:border-rose-500/40 bg-rose-500/5 hover:bg-rose-500/10 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Secure Logout</span>
                  </button>
                </div>
              </div>

              {/* KPI metrics row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                
                {/* Metric 1 */}
                <div className="bg-[#090d22]/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                  <div className="flex items-center justify-between text-gray-400 mb-2.5">
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider">Overall Sprints</span>
                    <Layers className="h-4 w-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">04 <span className="text-xs text-gray-500 font-normal">Sprints</span></div>
                  <div className="text-[10px] text-gray-400 mt-1.5">2 Completed • 2 Active in Cycle</div>
                </div>

                {/* Metric 2 */}
                <div className="bg-[#090d22]/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400" />
                  <div className="flex items-center justify-between text-gray-400 mb-2.5">
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider">Project Progress</span>
                    <Activity className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">84.5%</div>
                  <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '84.5%' }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-cyan-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-[#090d22]/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                  <div className="flex items-center justify-between text-gray-400 mb-2.5">
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider">Financial Clearance</span>
                    <DollarSign className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {formatPrice(36500)}
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-1.5 font-semibold flex items-center gap-1">
                    <Check className="h-3.5 w-3.5" /> Fully Paid Up-to-date
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="bg-[#090d22]/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                  <div className="flex items-center justify-between text-gray-400 mb-2.5">
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider">Support Desk</span>
                    <AlertCircle className="h-4 w-4 text-amber-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {tickets.filter(t => t.status === 'OPEN').length} <span className="text-xs text-gray-500 font-normal">Open</span>
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1.5">Average reply latency &lt; 15m</div>
                </div>

              </div>

              {/* Layout grid for tabs and detail tables */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side sidebar menu inside portal */}
                <div className="lg:col-span-3 space-y-3 bg-[#090d22]/30 border border-white/5 rounded-2xl p-4">
                  <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest px-3 block mb-1">
                    Workspace Navigation
                  </span>

                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full py-2.5 px-3 rounded-xl text-left text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2.5 transition-colors cursor-pointer ${
                      activeTab === 'overview'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Activity className="h-4 w-4" />
                    <span>System Overview</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('projects')}
                    className={`w-full py-2.5 px-3 rounded-xl text-left text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2.5 transition-colors cursor-pointer ${
                      activeTab === 'projects'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Briefcase className="h-4 w-4" />
                    <span>Active Projects ({projects.length})</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('documents')}
                    className={`w-full py-2.5 px-3 rounded-xl text-left text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2.5 transition-colors cursor-pointer ${
                      activeTab === 'documents'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <FileText className="h-4 w-4" />
                    <span>Documents & Specs</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('billing')}
                    className={`w-full py-2.5 px-3 rounded-xl text-left text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2.5 transition-colors cursor-pointer ${
                      activeTab === 'billing'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <DollarSign className="h-4 w-4" />
                    <span>Billing & Invoices</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('tickets')}
                    className={`w-full py-2.5 px-3 rounded-xl text-left text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2.5 transition-colors cursor-pointer ${
                      activeTab === 'tickets'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <AlertCircle className="h-4 w-4" />
                    <span>Support Desk ({tickets.length})</span>
                  </button>

                  <div className="pt-4 border-t border-white/5 mt-3">
                    <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest px-3 block mb-2">
                      Enterprise Proposal
                    </span>
                    <button
                      onClick={() => {
                        alert('System is generating your secure project proposal. PDF generation sequence active. Your local download will begin in 2 seconds.');
                        setTimeout(() => {
                          window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank');
                        }, 2000);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 text-center flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:border-cyan-500/30"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download Proposal</span>
                    </button>
                  </div>
                </div>

                {/* Right side dynamic viewport panels */}
                <div className="lg:col-span-9 space-y-6">

                  {/* ========================================================
                     TAB PANEL: OVERVIEW / STATUS VIEW
                     ======================================================== */}
                  {activeTab === 'overview' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      {/* Active Sprints Status Visual Card */}
                      <div className="bg-[#090d22]/40 border border-white/5 rounded-2xl p-6">
                        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                          <div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-wide">Ongoing Sprint Roadmap</h4>
                            <p className="text-xs text-gray-400 mt-1">Sprints running under rigid QA assurance and deployment milestones.</p>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full uppercase">
                            Sprint 4 Active
                          </span>
                        </div>

                        {/* Animated Multi-milestone progress bars */}
                        <div className="space-y-5">
                          <div>
                            <div className="flex justify-between text-xs mb-1.5">
                              <span className="text-gray-300 font-bold">1. Multi-Agent reasoning routing algorithm (OpenAI + Gemini)</span>
                              <span className="text-cyan-400 font-bold font-mono">82%</span>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '82%' }}
                                transition={{ duration: 1 }}
                                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-xs mb-1.5">
                              <span className="text-gray-300 font-bold">2. Secure Key Management and Vault Integration</span>
                              <span className="text-cyan-400 font-bold font-mono">90%</span>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '90%' }}
                                transition={{ duration: 1, delay: 0.1 }}
                                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-xs mb-1.5">
                              <span className="text-gray-300 font-bold">3. Local Staging Cluster and Integration Testing</span>
                              <span className="text-cyan-400 font-bold font-mono">60%</span>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '60%' }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Interactive Meeting Scheduler Block */}
                      <div className="bg-[#090d22]/40 border border-white/5 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-5 flex flex-col justify-between">
                          <div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
                              <PhoneCall className="h-4 w-4 text-cyan-400" /> Live Meeting Request
                            </h4>
                            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                              Schedule an ad-hoc private meeting with our principal architect or support engineers. We will send a secure Google Meet invitation within minutes.
                            </p>
                          </div>
                          <div className="text-[10px] text-emerald-400 font-mono mt-4 flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                            <span>Engineers Active On-Call Now</span>
                          </div>
                        </div>

                        <form onSubmit={handleScheduleMeeting} className="md:col-span-7 space-y-4">
                          {meetingSuccess && (
                            <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
                              <Check className="h-4 w-4" />
                              <span>Meeting request logged! We'll email Meet invitation code shortly.</span>
                            </div>
                          )}

                          <div>
                            <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">Meeting Topic</label>
                            <input
                              type="text"
                              required
                              value={meetingSubject}
                              onChange={(e) => setMeetingSubject(e.target.value)}
                              placeholder="e.g., Sprint 4 Review or Key Rotation Spec"
                              className="w-full px-3.5 py-2 bg-[#050816]/70 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">Preferred Date</label>
                              <input
                                type="date"
                                required
                                value={meetingDate}
                                onChange={(e) => setMeetingDate(e.target.value)}
                                className="w-full px-3.5 py-2 bg-[#050816]/70 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">Preferred Time</label>
                              <input
                                type="time"
                                required
                                value={meetingTime}
                                onChange={(e) => setMeetingTime(e.target.value)}
                                className="w-full px-3.5 py-2 bg-[#050816]/70 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full py-2.5 px-4 rounded-xl text-[10px] font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer font-mono"
                          >
                            Send Instant Invite Request
                          </button>
                        </form>
                      </div>
                    </motion.div>
                  )}

                  {/* ========================================================
                     TAB PANEL: PROJECTS VIEW
                     ======================================================== */}
                  {activeTab === 'projects' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">Active Corporate Engineering Streams</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((proj) => (
                          <div
                            key={proj.id}
                            className="bg-[#090d22]/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/10 transition-all"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-mono text-cyan-400 bg-white/5 px-2.5 py-1 rounded-full uppercase font-bold">
                                  {proj.category}
                                </span>
                                <span className="text-xs text-emerald-400 font-bold">{proj.status}</span>
                              </div>
                              <h3 className="text-base font-extrabold text-white mb-2">{proj.name}</h3>
                              <div className="text-[11px] text-gray-400 mb-4 font-mono">Timeline: {proj.timeline}</div>
                            </div>

                            <div>
                              <div className="flex justify-between items-center text-xs mb-1.5 font-mono text-gray-400">
                                <span>Progress Milestone</span>
                                <span className="text-cyan-400 font-bold">{proj.progress}%</span>
                              </div>
                              <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
                                <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${proj.progress}%` }} />
                              </div>

                              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[10px] font-mono">
                                <span className="text-gray-500">Squad Lead: <strong className="text-gray-300">{proj.lead}</strong></span>
                                <span className="text-indigo-400 flex items-center gap-1 hover:underline cursor-pointer">
                                  Specs Repo <ChevronRight className="h-3.5 w-3.5" />
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* ========================================================
                     TAB PANEL: DOCUMENTS VIEW
                     ======================================================== */}
                  {activeTab === 'documents' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wide">Proprietary Assets & Specs</h4>
                        <span className="text-[9px] font-mono text-gray-500 uppercase">Verifiable secure keys</span>
                      </div>

                      <div className="bg-[#090d22]/40 border border-white/5 rounded-2xl overflow-hidden">
                        <div className="divide-y divide-white/5">
                          {documents.map((doc) => (
                            <div key={doc.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                                  <FileText className="h-5 w-5" />
                                </div>
                                <div>
                                  <h4 className="text-xs sm:text-sm font-bold text-white leading-normal">{doc.name}</h4>
                                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono mt-1">
                                    <span>{doc.type}</span>
                                    <span>•</span>
                                    <span>{doc.size}</span>
                                  </div>
                                </div>
                              </div>

                              <button
                                onClick={() => {
                                  alert(`Decrypting file: ${doc.name}. Download session allocated.`);
                                  window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank');
                                }}
                                className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 rounded-lg shrink-0 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                              >
                                <Download className="h-3.5 w-3.5" /> Download Spec
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ========================================================
                     TAB PANEL: BILLING VIEW
                     ======================================================== */}
                  {activeTab === 'billing' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">SLA Retainers & Sprint Clearances</h4>
                      
                      <div className="bg-[#090d22]/40 border border-white/5 rounded-2xl overflow-hidden">
                        <div className="p-5 border-b border-white/5 bg-[#090d22]/60 flex justify-between items-center">
                          <span className="text-xs font-mono font-bold text-gray-400">Invoice List & Ledger</span>
                          <span className="text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <Check className="h-3 w-3" /> Account Cleared
                          </span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs min-w-[500px]">
                            <thead>
                              <tr className="border-b border-white/5 text-gray-400 font-mono text-[10px] uppercase tracking-wider">
                                <th className="p-4">Invoice ID</th>
                                <th className="p-4">Deliverable Milestone</th>
                                <th className="p-4">Due Date</th>
                                <th className="p-4 text-right">Amount</th>
                                <th className="p-4 text-right">Clearance Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                              {invoices.map((inv) => (
                                <tr key={inv.id} className="hover:bg-white/[0.01] transition-colors">
                                  <td className="p-4 font-mono text-cyan-400 font-semibold">{inv.id}</td>
                                  <td className="p-4 font-medium text-gray-200">{inv.description}</td>
                                  <td className="p-4 font-mono text-gray-400">{inv.dueDate}</td>
                                  <td className="p-4 text-right font-bold text-white">{formatPrice(inv.amount)}</td>
                                  <td className="p-4 text-right">
                                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-mono font-bold ${
                                      inv.status === 'PAID' 
                                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                    }`}>
                                      {inv.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ========================================================
                     TAB PANEL: TICKETS VIEW
                     ======================================================== */}
                  {activeTab === 'tickets' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-sm font-bold text-white uppercase tracking-wide">Active Engineering Support Tickets</h4>
                          <p className="text-xs text-gray-400 mt-1">Submit technical questions or request staging credentials.</p>
                        </div>
                        <span className="text-[10px] font-mono text-gray-500">SLA Max Response Time: 30 minutes</span>
                      </div>

                      {/* Interactive Create Ticket Local Form */}
                      <div className="bg-[#090d22]/40 border border-white/5 rounded-2xl p-5 sm:p-6">
                        <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">Create New Ticket</h5>
                        <form onSubmit={handleAddTicket} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                          <div className="md:col-span-7">
                            <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">Ticket Subject / Technical issue</label>
                            <input
                              type="text"
                              required
                              value={newTicketSubject}
                              onChange={(e) => setNewTicketSubject(e.target.value)}
                              placeholder="e.g., Refreshing staging DB docker container logs"
                              className="w-full px-3.5 py-2.5 bg-[#050816]/70 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                          </div>
                          
                          <div className="md:col-span-3">
                            <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">Priority Level</label>
                            <select
                              value={newTicketPriority}
                              onChange={(e) => setNewTicketPriority(e.target.value)}
                              className="w-full px-3.5 py-2.5 bg-[#050816]/70 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            >
                              <option value="LOW">LOW</option>
                              <option value="MEDIUM">MEDIUM</option>
                              <option value="HIGH">CRITICAL / HIGH</option>
                            </select>
                          </div>

                          <div className="md:col-span-2">
                            <button
                              type="submit"
                              className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-colors flex items-center justify-center gap-1"
                            >
                              <Plus className="h-3.5 w-3.5" /> Submit
                            </button>
                          </div>
                        </form>
                      </div>

                      {/* Ticket List */}
                      <div className="bg-[#090d22]/40 border border-white/5 rounded-2xl overflow-hidden">
                        <div className="divide-y divide-white/5">
                          {tickets.map((tck) => (
                            <div key={tck.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.01] transition-colors text-left">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono text-cyan-400 font-bold">{tck.id}</span>
                                  <span className={`px-2 py-0.5 rounded-full text-[8px] font-mono font-bold ${
                                    tck.priority === 'HIGH' 
                                      ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' 
                                      : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                                  }`}>
                                    {tck.priority}
                                  </span>
                                </div>
                                <h4 className="text-xs sm:text-sm font-semibold text-white leading-normal">{tck.subject}</h4>
                                <p className="text-[10px] text-gray-500 font-mono">Submitted: {tck.date}</p>
                              </div>

                              <div className="flex items-center gap-4 shrink-0">
                                <span className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                                  tck.status === 'OPEN'
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 animate-pulse'
                                    : 'bg-gray-500/10 text-gray-400 border border-white/5'
                                }`}>
                                  {tck.status}
                                </span>

                                <button
                                  onClick={() => {
                                    setTickets(tickets.filter(t => t.id !== tck.id));
                                  }}
                                  className="p-1.5 rounded-lg text-gray-500 hover:text-rose-400 bg-white/5 hover:bg-rose-500/10 transition-colors"
                                  title="Remove Local Log"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
