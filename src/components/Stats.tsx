import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useApp } from '../context/AppContext';

function CountUp({ end, suffix = '', duration = 1.5 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useApp();

  const statsList = [
    { value: 150, suffix: '+', labelKey: 'statProjects' },
    { value: 98, suffix: '%', labelKey: 'statRetention' },
    { value: 99.99, suffix: '%', labelKey: 'statSLA', isFloat: true },
    { value: 100, suffix: 'M+', labelKey: 'statValue', prefix: '$' },
  ];

  return (
    <section className="py-16 border-y border-white/5 bg-[#070b1e]/40 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-400 tracking-tight font-mono">
                {stat.prefix}
                {stat.isFloat ? (
                  <span>99.99%</span>
                ) : (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                )}
              </h3>
              <p className="mt-3 text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 uppercase max-w-[200px] leading-relaxed">
                {t(stat.labelKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
