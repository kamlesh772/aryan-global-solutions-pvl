import { motion } from 'motion/react';
import { ShieldAlert, X } from 'lucide-react';

interface CookieConsentProps {
  onClose: () => void;
}

export default function CookieConsent({ onClose }: CookieConsentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-0 left-0 w-full z-50 p-6 md:p-8"
    >
      <div className="max-w-4xl mx-auto bg-[#070b1e]/90 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close Banner"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex gap-4 items-start pr-4">
          <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 shrink-0 mt-1">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide">Data & Analytics Privacy Compliance</h4>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed font-normal">
              We leverage cookies to securely analyze visitors, optimize responsive render speeds, and analyze contact interactions. By remaining on this domain, you agree to our data compliance protocols.
            </p>
          </div>
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/20 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 cursor-pointer"
          >
            Acknowledge & Accept
          </button>
        </div>
      </div>
    </motion.div>
  );
}
