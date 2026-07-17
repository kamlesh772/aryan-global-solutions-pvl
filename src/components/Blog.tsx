import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const articles = [
  {
    category: 'Artificial Intelligence',
    title: 'The Architect’s Handbook: Secure Private LLM Scaling with Gemini 2.5',
    excerpt: 'Deep dive into strict data compliance, private prompt context limits, and building optimized custom API gateways to prevent credential leaks.',
    date: 'Jul 14, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Sarah Jenkins',
  },
  {
    category: 'Cloud Engineering',
    title: 'Resilient Backend Design: Legacy Database Migration to Cloud SQL',
    excerpt: 'How to deploy connection pools, custom middleware proxies, and automated failover replicas to achieve constant 99.99% operational uptime.',
    date: 'Jun 28, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80',
    author: 'Vikram Singh',
  },
  {
    category: 'Product Design',
    title: 'Maximizing Client Conversions: The Science of High-Fidelity UI/UX',
    excerpt: 'An empirical review of page load speeds, screen layouts, responsive font sizes, and fluid micro-animations on enterprise transaction rates.',
    date: 'May 19, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&w=600&q=80',
    author: 'Elena Rostova',
  },
];

const categories = ['All', 'Artificial Intelligence', 'Cloud Engineering', 'Product Design'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(art => art.category === selectedCategory);

  return (
    <section id="blog" className="py-24 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e]">
      {/* Background decoration */}
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Insights & Research</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Enterprise Technology Perspectives
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            We actively document our solutions, architectural findings, and cybersecurity governance standards. Review our quarterly engineering journals.
          </p>
        </div>

        {/* Categories Chips bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-indigo-500/20'
                  : 'bg-white/[0.01] border-white/5 text-gray-400 hover:border-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#090d22]/80 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 hover:bg-[#090d22] transition-all duration-300 flex flex-col h-full group"
            >
              {/* Feature image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#050816]/30 group-hover:bg-[#050816]/10 transition-colors" />
                
                <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-md bg-[#050816]/90 border border-white/10 text-[9px] font-mono font-bold text-cyan-400 tracking-wider uppercase">
                  {art.category}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-cyan-400" /> {art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-indigo-400" /> {art.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors duration-200">
                    {art.title}
                  </h3>
                  
                  <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500">
                    Author: <span className="text-gray-300">{art.author}</span>
                  </span>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                  >
                    Read Brief <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-300 font-mono"
          >
            <BookOpen className="h-4 w-4 text-cyan-400" /> View Comprehensive Research Archive
          </a>
        </div>
      </div>
    </section>
  );
}
