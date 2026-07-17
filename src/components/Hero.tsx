import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const { t, language } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const particleCount = 75;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Dynamic drift
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap edges
        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Mouse gravity pull (3D effect)
        const dx = mousePos.x - p1.x;
        const dy = mousePos.y - p1.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 200) {
          const force = (200 - distToMouse) / 2000;
          p1.x += dx * force;
          p1.y += dy * force;
        }

        // Draw node
        ctx.fillStyle = `rgba(34, 211, 238, ${p1.alpha})`;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${(120 - dist) / 600})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isRTL = language === 'ar';

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden"
    >
      {/* 3D Interactive Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Copy */}
        <div className={`lg:col-span-7 flex flex-col justify-center ${isRTL ? 'text-right items-start' : 'text-left'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-cyan-400 mb-6 backdrop-blur-sm self-start"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>{t('tagline')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white ${
              isRTL ? 'font-sans' : 'font-sans'
            }`}
          >
            {t('heroTitle').split(' & ').map((part, index) => (
              <span key={index} className="block">
                {index === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                    & {part}
                  </span>
                ) : part}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl font-normal leading-relaxed"
          >
            {t('heroDesc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-300 flex items-center gap-2 group hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t('heroCtaPrimary')}</span> 
              <ArrowUpRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-scheduler'))}
              className="px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer hover:-translate-y-0.5"
            >
              {t('heroCtaSecondary')}
            </button>
          </motion.div>
        </div>

        {/* Right Graphical Matrix */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square max-w-[450px]"
          >
            {/* Interactive/Animated Glassmorphism Tech Frame */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent p-[1px] shadow-2xl backdrop-blur-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[#0c102b]/60" />
              <div className="relative h-full w-full p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">ags_engine.sh</span>
                </div>
                <div className="font-mono text-xs sm:text-sm text-indigo-300 space-y-2 flex-grow pt-4">
                  <p className="text-gray-500">// Initialize Global Infrastructure</p>
                  <p><span className="text-cyan-400">const</span> agency = <span className="text-purple-400">AryanGlobalSolutions</span>.init();</p>
                  <p>agency.setSLA(<span className="text-green-400">"99.99%"</span>);</p>
                  <p>agency.setSecurity(<span className="text-green-400">"SOC2_Hardened"</span>);</p>
                  <p>agency.deployApps(&#123; AI: true, cloudScale: true &#125;);</p>
                  <p className="text-yellow-400 animate-pulse">&gt; System Status: Active SLA Operational</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between backdrop-blur-md">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Global Delivery Rate</p>
                    <p className="text-xl font-bold text-white">99.8% On-Time</p>
                  </div>
                  <div className="h-8 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg opacity-40 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Visual Decorative Blur Backdrops */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl -z-10 animate-bounce" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10 animate-pulse" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
