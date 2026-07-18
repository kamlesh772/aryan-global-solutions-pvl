import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareText } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past Hero screen
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 z-40 hidden sm:block"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95 transition-all duration-300 relative group"
          >
            {/* Pulsing Outer Ring */}
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-50 blur-md group-hover:opacity-75 animate-pulse -z-10" />
            
            <MessageSquareText className="h-4.5 w-4.5" />
            <span>Consult Now</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
