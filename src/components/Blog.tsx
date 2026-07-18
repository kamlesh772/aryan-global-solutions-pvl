import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  X, 
  User, 
  Sparkles, 
  Share2, 
  Heart,
  ChevronRight,
  Search,
  Tag,
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Article {
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  stats: { likes: string; shares: string };
  tags: string[];
  featured?: boolean;
}

const articles: Article[] = [
  {
    category: 'Sovereign AI',
    title: 'Enterprise Sovereign AI: Building Secure Air-Gapped Intelligence Models',
    excerpt: 'A blueprint for CIOs and CTOs to deploy secure, private, and fully local reasoning systems that eliminate data leakage and guarantee absolute compliance.',
    content: 'In an era of rising cybersecurity threats and complex data sovereignty mandates, modern enterprises cannot afford to leak proprietary data through public cloud-hosted AI endpoints. True security requires building fully isolated, air-gapped language model pipelines inside virtual private clouds (VPCs) or bare-metal hybrid clusters.\n\nBy leveraging pre-compiled semantic model gates, optimized local quantized model files, and high-performance retrieval pipelines, enterprises can deploy intelligent support agents, predictive analytics dashboards, and autonomous coding tools that run with zero network reliance on external servers. This comprehensive blueprint outlines everything from GPU hardware allocation and model token-caching to fine-tuning strategies that protect your corporate intellectual property under 100% NDA guidelines.',
    date: 'Jul 18, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    author: 'Aryan Jain',
    authorRole: 'Lead Enterprise Architect',
    stats: { likes: '3.4k', shares: '1.1k' },
    tags: ['Sovereign AI', 'Air-Gapped Systems', 'Enterprise Security', 'LLM Deployment'],
    featured: true
  },
  {
    category: 'AI',
    title: 'Architecting Private LLM Swarms: Harnessing Gemini 2.5 on Cloud Run',
    excerpt: 'A production blueprint for high-performance retrieval-augmented generation (RAG) using server-side SDK pipelines and enterprise vector stores.',
    content: 'To secure private prompt context, enterprise architectures rely on strict server-side wrappers. By proxying all model communications through an Express backend equipped with the official @google/genai SDK, teams ensure API credentials never leak to the client-side browser. In this deep dive, we discuss token caching, semantic rate limiting, context window compression, and real-time chunk streaming over Node sockets to enhance responsive feel without sacrificing security governance.',
    date: 'Jul 16, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Sarah Jenkins',
    authorRole: 'Head of AI Engineering',
    stats: { likes: '1.2k', shares: '430' },
    tags: ['Gemini API', 'LLM Swarms', 'Vector Search', 'AI Integration']
  },
  {
    category: 'Cloud',
    title: 'Achieving Constant 99.99% Uptime: Multi-Region PostgreSQL Connection Pooling',
    excerpt: 'How to scale high-availability relational databases with persistent Cloud SQL endpoints and serverless database proxies.',
    content: 'Relational databases face peak latency challenges when scaled globally. In this guide, we dive deep into configuring pg_pool, managing automatic replica failovers under extreme workloads, and implementing Redis read-caches. Our architectural results demonstrate a 40% reduction in database-level handshake latency. We also outline how to handle transient network partitions between regional clusters without corrupting write-ahead transaction logs.',
    date: 'Jul 10, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80',
    author: 'Vikram Singh',
    authorRole: 'Principal Cloud Architect',
    stats: { likes: '942', shares: '280' },
    tags: ['Cloud SQL', 'PostgreSQL', 'High Availability', 'CI/CD']
  },
  {
    category: 'ERP',
    title: 'The Modern ERP Blueprint: Automating Inventory with AI-Driven Forecasting',
    excerpt: 'Integrating real-time inventory tracking with service job allocations to eliminate supply chain and scheduling bottlenecks.',
    content: 'Legacy ERP software is slow and manually updated. Our modern ERP pipeline leverages edge analytics to synchronize inventory states across multiple fulfillment centers. By predicting demand through seasonal trend analysis, warehouses can auto-reorder supplies and assign mechanics to active service tickets dynamically. This approach completely eradicates the manual billing and inventory reconciliation mismatches that plague traditional operations.',
    date: 'Jul 04, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    author: 'Elena Rostova',
    authorRole: 'VP of Operations Technology',
    stats: { likes: '811', shares: '190' },
    tags: ['ERP Automation', 'Predictive Analytics', 'Supply Chain', 'SaaS']
  },
  {
    category: 'Automation',
    title: 'Intelligent Process Automation: Designing Secure Autonomous Agent Swarms',
    excerpt: 'How serverless cron routines and event-driven architectures eliminate repetitive corporate tasks with minimal human intervention.',
    content: 'Workflow automation is more than simple Zapier tasks. True process automation utilizes self-healing server routines and stateful background queues. We trace a customer onboarding loop that auto-verifies business credentials, validates tax IDs, and sets up cloud storage buckets autonomously in under 3 seconds. The article explores fault tolerance strategies when external third-party service desks undergo planned outages.',
    date: 'Jun 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    author: 'Aryan Jain',
    authorRole: 'Lead Automation Architect',
    stats: { likes: '1.5k', shares: '620' },
    tags: ['Task Swarms', 'Serverless Cron', 'Event-Driven API', 'NodeJS']
  },
  {
    category: 'Security',
    title: 'Hardened Applet Guardrails: Eliminating Client-Side Secret Leakage',
    excerpt: 'A comprehensive checklist for zero-trust token management, iframe sandboxing, and secure cookies.',
    content: 'Securing modern React SPAs requires deep knowledge of CORS configurations, secure httpOnly session cookies, and strict JWT signature verification. In this technical review, we audit database rule setups, analyze iframe permission flags for camera/microphone access, and deploy reverse proxies to block malicious cross-site scripting (XSS) and injection attempts. Keep your client-side assets fully isolated.',
    date: 'Jun 15, 2026',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    author: 'Marcus Vance',
    authorRole: 'VP of Cybersecurity Compliance',
    stats: { likes: '2.1k', shares: '890' },
    tags: ['Zero Trust', 'XSS Prevention', 'OAuth Security', 'IFrame Isolation']
  },
  {
    category: 'Digital Transformation',
    title: 'Accelerating Enterprise Legacy Re-engineering: A 3-Stage Blueprint',
    excerpt: 'How to transition outdated core monoliths into lightning-fast serverless microservices with zero downtime.',
    content: 'Digital transformation often fails due to complex, unmapped dependencies in historical codebases. Our three-stage approach abstracts database reads through middleware API gateways first, incrementally replaces system components with serverless routines, and deploys fluid, responsive React frontends for a premium, high-speed UX. We share practical case figures showing a 3x uptick in user engagement post-rewrite.',
    date: 'Jun 02, 2026',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    author: 'Nisha Pillai',
    authorRole: 'Digital Transformation Partner',
    stats: { likes: '1.7k', shares: '540' },
    tags: ['Monolith Rewrite', 'React Frontend', 'Microservices', 'Enterprise UX']
  }
];

const categories = ['All', 'Sovereign AI', 'AI', 'Cloud', 'ERP', 'Automation', 'Security', 'Digital Transformation'];

export default function Blog() {
  const { t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [likedArticles, setLikedArticles] = useState<Record<string, boolean>>({});

  const filteredArticles = articles.filter(art => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      art.title.toLowerCase().includes(query) ||
      art.excerpt.toLowerCase().includes(query) ||
      art.content.toLowerCase().includes(query) ||
      art.category.toLowerCase().includes(query) ||
      art.tags.some(tag => tag.toLowerCase().includes(query));
      
    return matchesCategory && matchesSearch;
  });

  const featuredMatch = filteredArticles.find(art => art.featured);
  const gridMatches = filteredArticles.filter(art => !art.featured);

  const handleLike = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedArticles(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <section id="blog" className="py-24 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e] overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute top-[30%] right-[-15%] w-[550px] h-[550px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest bg-white/5 border border-white/10 text-purple-400 mb-4">
              <Sparkles className="h-3 w-3" /> {t('Industry Knowledge')}
            </span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight"
          >
            {t('Blog & Insights')}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            {t('Explore our latest research, guidelines, and technological breakthroughs across enterprise sectors.')}
          </motion.p>
        </div>

        {/* Live Search Bar Console */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-2xl blur-md group-hover:blur-lg transition-all opacity-70 pointer-events-none" />
            <div className="relative flex items-center bg-[#090d22]/80 border border-white/5 focus-within:border-indigo-500/40 rounded-2xl px-4 py-3.5 transition-all">
              <Search className="h-5 w-5 text-gray-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Search insights, tech stacks, tags...')}
                className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          {searchQuery && (
            <p className="text-center text-[10px] font-mono text-cyan-400 mt-2">
              {filteredArticles.length} {filteredArticles.length === 1 ? t('insight found') : t('insights found')}
            </p>
          )}
        </div>

        {/* Categories Chips bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-[11px] font-bold font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white border-transparent shadow-lg shadow-indigo-500/20 scale-105'
                  : 'bg-white/[0.01] border-white/5 text-gray-400 hover:border-white/10 hover:text-white hover:bg-white/5'
              }`}
            >
              {t(cat)}
            </button>
          ))}
        </div>

        {/* 1. Prominent Featured Article Showcase */}
        {featuredMatch && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 relative group"
          >
            {/* Background interactive gradient halo */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-cyan-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
            
            <article 
              itemScope 
              itemType="https://schema.org/BlogPosting"
              className="relative bg-[#090d22]/70 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-white/20 transition-all duration-500 shadow-2xl shadow-indigo-950/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Side: Large Visual Panel */}
                <div className="lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[280px] lg:min-h-[440px] overflow-hidden">
                  <img
                    src={featuredMatch.image}
                    alt={t(featuredMatch.title)}
                    itemProp="image"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  {/* Deep dark gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#03050b] via-[#03050b]/40 to-transparent" />
                  
                  {/* Badge overlays */}
                  <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-600 border border-indigo-400/30 text-[9px] font-mono font-bold text-white tracking-widest uppercase shadow-lg shadow-indigo-500/20">
                      <Sparkles className="h-3 w-3 animate-pulse text-cyan-300" /> {t('Featured Insight')}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-[9px] font-mono font-bold text-cyan-400 tracking-wider uppercase">
                      {t(featuredMatch.category)}
                    </span>
                  </div>
                </div>

                {/* Right Side: Editorial Metadata and Content */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Meta row */}
                    <div className="flex items-center gap-3.5 text-[11px] font-mono text-gray-400 mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-cyan-400" /> 
                        <time dateTime="2026-07-18" itemProp="datePublished">{t(featuredMatch.date)}</time>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-purple-400" /> {t(featuredMatch.readTime)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      itemProp="headline"
                      className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight group-hover:text-cyan-200 transition-colors duration-300"
                    >
                      {t(featuredMatch.title)}
                    </h3>

                    {/* Excerpt */}
                    <p 
                      itemProp="description"
                      className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal"
                    >
                      {t(featuredMatch.excerpt)}
                    </p>

                    {/* Tag List */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {featuredMatch.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono text-indigo-300 uppercase tracking-wider"
                        >
                          #{t(tag)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer of the Featured Article */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <div className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400">
                        <User className="h-4 w-4" />
                      </div>
                      <div className="leading-tight">
                        <span className="block text-[11px] font-mono text-gray-300 font-bold" itemProp="name">
                          {t(featuredMatch.author)}
                        </span>
                        <span className="block text-[9px] font-mono text-gray-500">
                          {t(featuredMatch.authorRole)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveArticle(featuredMatch)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-indigo-600 hover:border-transparent transition-all font-mono cursor-pointer border border-white/10 group-hover:shadow-lg group-hover:shadow-indigo-500/5"
                    >
                      <span>{t('Read Featured')}</span>
                      <ArrowUpRight className="h-4 w-4 text-cyan-400 group-hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>

              </div>
            </article>
          </motion.div>
        )}

        {/* 2. 6 Premium Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridMatches.map((art, idx) => {
            const isLiked = !!likedArticles[art.title];
            return (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#090d22]/80 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 hover:bg-[#090d22]/95 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 flex flex-col h-full group relative"
              >
                <article itemScope itemType="https://schema.org/BlogPosting" className="flex flex-col h-full">
                  {/* Image panel with hover zoom */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={art.image}
                      alt={t(art.title)}
                      itemProp="image"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle glass overlay gradient */}
                    <div className="absolute inset-0 bg-[#050816]/40 group-hover:bg-[#050816]/20 transition-colors duration-500" />
                    
                    {/* Category Pill Tag */}
                    <span className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-[#050816]/90 border border-white/10 text-[9px] font-mono font-bold text-cyan-400 tracking-wider uppercase">
                      {t(art.category)}
                    </span>
                  </div>

                  {/* Card Content body */}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Date and Read time metadata bar */}
                      <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-cyan-400/80" /> 
                          <time dateTime="2026-07-18" itemProp="datePublished">{t(art.date)}</time>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-indigo-400/80" /> {t(art.readTime)}
                        </span>
                      </div>

                      {/* Headline */}
                      <h4 itemProp="headline" className="text-lg font-extrabold text-white tracking-wide group-hover:text-cyan-200 transition-colors duration-300 line-clamp-2">
                        {t(art.title)}
                      </h4>
                      
                      {/* Brief description excerpt */}
                      <p itemProp="description" className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal line-clamp-3">
                        {t(art.excerpt)}
                      </p>
                    </div>

                    {/* Card bottom footer with Author & Read More Button */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <div className="p-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                          <User className="h-3 w-3" />
                        </div>
                        <div className="leading-tight">
                          <span className="block text-[10px] font-mono text-gray-400 font-bold" itemProp="name">
                            {t(art.author)}
                          </span>
                          <span className="block text-[8px] font-mono text-gray-600">
                            {t(art.authorRole)}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveArticle(art)}
                        className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors font-mono cursor-pointer bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10"
                      >
                        <span>{t('Read More')}</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Fallback empty state */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-[#090d22]/40 border border-white/5 rounded-3xl"
          >
            <Search className="h-8 w-8 text-gray-500 mx-auto mb-4" />
            <h4 className="text-base font-bold text-white">{t('No Insights Found')}</h4>
            <p className="text-xs text-gray-400 mt-2 max-w-xs mx-auto">
              {t("We couldn't find any articles matching your search criteria. Try clearing search or changing tags.")}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-6 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              {t('Clear Filters')}
            </button>
          </motion.div>
        )}

        {/* View comprehensive database footer CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-xs font-bold bg-[#090d22]/50 hover:bg-[#090d22] text-white border border-white/10 hover:border-cyan-500/30 transition-all duration-300 font-mono shadow-md cursor-pointer"
          >
            <BookOpen className="h-4 w-4 text-cyan-400" /> {t('View Comprehensive Research Archive')}
          </a>
        </div>
      </div>

      {/* Upgraded Premium Insight Detail Overlay Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Dark glass backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-[#03050b]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#090d22] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-20"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Inside Modal Content */}
              <div>
                
                {/* Header Feature Image in modal */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/5">
                  <img 
                    src={activeArticle.image} 
                    alt={t(activeArticle.title)} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#050816]/30" />
                  <span className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#050816]/90 border border-white/10 text-[10px] font-mono font-bold text-cyan-400 tracking-wider uppercase">
                    {t(activeArticle.category)}
                  </span>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-cyan-400" /> {t(activeArticle.date)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-indigo-400" /> {t(activeArticle.readTime)}
                  </span>
                  <span>•</span>
                  <span className="text-gray-400 font-bold uppercase">{t(activeArticle.category)} {t('JOURNAL')}</span>
                </div>

                {/* Major Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide leading-tight">
                  {t(activeArticle.title)}
                </h3>

                {/* Author Credentials and Stats */}
                <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white leading-none">{t(activeArticle.author)}</h5>
                      <span className="text-xs text-gray-500 mt-1 block">{t(activeArticle.authorRole)}</span>
                    </div>
                  </div>

                  {/* Likes and social mocks */}
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={(e) => handleLike(activeArticle.title, e)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                        likedArticles[activeArticle.title]
                          ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                          : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      <Heart className={`h-3.5 w-3.5 ${likedArticles[activeArticle.title] ? 'fill-rose-400 text-rose-400' : ''}`} />
                      <span>{likedArticles[activeArticle.title] ? t('Liked!') : t(activeArticle.stats.likes)}</span>
                    </button>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-gray-400">
                      <Share2 className="h-3.5 w-3.5" />
                      <span>{t(activeArticle.stats.shares)} {t('Shares')}</span>
                    </div>
                  </div>
                </div>

                {/* Full Article Content Text Body */}
                <div className="mt-8">
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal whitespace-pre-line first-letter:text-4xl first-letter:font-black first-letter:text-cyan-400 first-letter:mr-2 first-letter:float-left">
                    {t(activeArticle.content)}
                  </p>
                  
                  {/* Explanatory follow-up block */}
                  <p className="text-sm text-gray-400 leading-relaxed font-normal mt-6">
                    {t('Our team of digital transformation consultants compiles regular assessments of production metrics and industry benchmarks. These publications serve to demonstrate optimal ways to integrate artificial intelligence networks safely within highly regulated parameters.')}
                  </p>
                </div>

                {/* Tag list chips */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-3">
                    {t('Classified Tags:')}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeArticle.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono text-indigo-300 uppercase tracking-wider"
                      >
                        #{t(tag)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Call to Action */}
                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="text-xs text-gray-400 font-normal">
                    {t('Discuss these specifications with our Lead System Architect.')}
                  </div>
                  
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/10 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer border border-white/5"
                  >
                    <span>{t('Request Discovery Call')}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
