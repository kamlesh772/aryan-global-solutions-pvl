import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816]"
        >
          {/* Ambient center glow */}
          <div className="absolute w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-xs w-full px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center gap-2 font-bold text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-400 mb-8"
            >
              ARYAN <span className="text-cyan-400 font-light">GLOBAL</span>
            </motion.div>

            {/* Custom high-end linear progress bar */}
            <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
              />
            </div>

            <div className="flex items-center justify-between w-full mt-3 font-mono text-[10px] text-gray-500">
              <span className="tracking-widest uppercase">SECURE ENGINE INIT</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
