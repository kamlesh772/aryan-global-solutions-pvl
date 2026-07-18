import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const corporateLinks = [
    { name: 'Services Capabilities', href: '#services' },
    { name: 'Core Pillars', href: '#why-choose-us' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Project Packages', href: '#pricing' },
    { name: 'Request Discovery', href: '#contact' },
  ];

  const capabilityLinks = [
    { name: 'React Web Engines', href: '#services' },
    { name: 'Native iOS & Android', href: '#services' },
    { name: 'Custom AI Pipelines', href: '#services' },
    { name: 'Secure Cloud Deploy', href: '#services' },
    { name: 'CRM & ERP Ecosystems', href: '#services' },
  ];

  const complianceLinks = [
    { name: 'Privacy Policy', action: () => window.dispatchEvent(new CustomEvent('open-compliance', { detail: 'privacy' })) },
    { name: 'Terms of Service', action: () => window.dispatchEvent(new CustomEvent('open-compliance', { detail: 'terms' })) },
    { name: 'Refund & Cancellation Policy', action: () => window.dispatchEvent(new CustomEvent('open-compliance', { detail: 'refund' })) },
    { name: 'Cookie & Tracking Policy', action: () => window.dispatchEvent(new CustomEvent('open-compliance', { detail: 'cookies' })) },
  ];

  return (
    <footer className="bg-[#030612] border-t border-white/5 pt-20 pb-10 px-6 relative z-10 overflow-hidden">
      
      {/* Background visual detail */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand Pitch & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="flex items-center gap-2 font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-400">
              ARYAN <span className="text-cyan-400 font-light">GLOBAL</span>
            </a>
            
            <p className="text-sm text-gray-400 leading-relaxed font-normal max-w-sm">
              {t('We design, build, and deploy premium enterprise software, AI-powered automation grids, and high-conversion client systems globally.')}
            </p>

            {/* Premium Newsletter Box */}
            <div className="space-y-3 max-w-sm pt-4">
              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-400">{t('Engineering Briefs')}</h4>
              <p className="text-xs text-gray-500">{t('Subscribe for quarterly audits, system patterns, and case studies.')}</p>
              
              <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
                <input 
                  type="email" 
                  required
                  placeholder={t('name@company.com')}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="h-4.5 w-4.5 text-emerald-300" /> : <Send className="h-4.5 w-4.5" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-[10px] text-emerald-400 font-mono">{t('✓ Subscribed successfully! Thank you.')}</p>
              )}
            </div>
          </div>

          {/* Column 2: Corporate Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500">{t('Company')}</h4>
            <ul className="space-y-2">
              {corporateLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors font-normal">
                    {t(link.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500">{t('Core Capabilities')}</h4>
            <ul className="space-y-2">
              {capabilityLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors font-normal">
                    {t(link.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Compliance & Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500">{t('Compliance & Trust')}</h4>
            <ul className="space-y-2">
              {complianceLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={link.action} 
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors font-normal text-left block w-full focus:outline-none cursor-pointer"
                  >
                    {t(link.name)}
                  </button>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
              <Mail className="h-3 w-3 text-cyan-400" /> solutions@aryanglobalsolutions.com
            </div>
          </div>

        </div>

        {/* Lower Metadata Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600">
          <div>
            {t('© 2026 Aryan Global Solutions. All rights reserved.')}
          </div>
          <div className="flex gap-4">
            <span>{t('Silicon Valley')}</span>
            <span>•</span>
            <span>{t('London')}</span>
            <span>•</span>
            <span>{t('Dubai')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
