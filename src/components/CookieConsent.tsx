import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}

export default function CookieConsent({ onAccept, onDecline, onClose }: CookieConsentProps) {
  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-compliance', { detail: 'privacy' }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-4 left-4 right-4 mx-auto md:left-auto md:right-4 md:mx-0 w-auto max-w-[360px] z-50"
    >
      <div className="bg-[#070b1e]/90 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-2xl relative text-left">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3.5 right-3.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Banner"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Content */}
        <div className="flex gap-3.5 items-start pr-4 mb-4">
          <div className="p-2 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 shrink-0 mt-0.5">
            <ShieldCheck className="h-4.5 w-4.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">Cookie Consent</h4>
            <p className="text-[11px] text-gray-400 mt-1 leading-relaxed font-normal">
              We use cookies to analyze visitor traffic, optimize performance, and personalize content. By accepting, you consent to our use of cookies. Read our{' '}
              <a 
                href="#privacy" 
                onClick={openPrivacy}
                className="text-cyan-400 hover:underline hover:text-cyan-300 font-semibold"
              >
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 w-full">
          <button
            onClick={onDecline}
            className="flex-1 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer text-center"
          >
            Decline
          </button>
          <button
            onClick={onAccept}
            className="flex-1 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/20 hover:opacity-95 transition-opacity cursor-pointer text-center"
          >
            Accept
          </button>
        </div>
      </div>
    </motion.div>
  );
}
