import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, Bot, Smartphone, Globe, Shield, Database } from 'lucide-react';

const categories = ['All', 'AI & Analytics', 'SaaS & Web', 'Mobile Apps'];

const projects = [
  {
    id: 1,
    title: 'Aura Fintech Intelligent Assistant',
    category: 'AI & Analytics',
    desc: 'Custom LLM automation and client conversation engine operating at 99.8% precision with instant transaction execution.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    client: 'Aura Capital (New York, USA)',
    tech: ['Next.js', 'PyTorch', 'FastAPI', 'Tailwind'],
    icon: Bot,
  },
  {
    id: 2,
    title: 'Velocity Supply Chain Hub',
    category: 'SaaS & Web',
    desc: 'Real-time multi-tenant logistical route optimization platform serving over 500 delivery vectors daily.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    client: 'Velocity Express (London, UK)',
    tech: ['React', 'D3.js', 'Google Cloud', 'Express'],
    icon: Globe,
  },
  {
    id: 3,
    title: 'Vitalis Patient Companion App',
    category: 'Mobile Apps',
    desc: 'Cross-platform native companion app linking smart medical hardware directly to family practitioner dashboards.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    client: 'Vitalis Health (Munich, Germany)',
    tech: ['React Native', 'Node.js', 'Bluetooth LE', 'MongoDB'],
    icon: Smartphone,
  },
  {
    id: 4,
    title: 'Apex E-commerce Engine',
    category: 'SaaS & Web',
    desc: 'Headless global storefront boasting a 1.2s average checkout speed and intelligent cross-sell triggers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    client: 'Apex Retail Group (Dubai, UAE)',
    tech: ['Next.js', 'GraphQL', 'Shopify Plus', 'Vercel'],
    icon: Layers,
  },
  {
    id: 5,
    title: 'Synthetix Risk Analytics',
    category: 'AI & Analytics',
    desc: 'Deep risk assessment suite compiling millions of decentralized financial indicators into visual predictive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    client: 'Synthetix Fund (Zurich, Switzerland)',
    tech: ['Python', 'Tailwind CSS', 'TensorFlow', 'Postgres'],
    icon: Bot,
  },
  {
    id: 6,
    title: 'MobiRide Micro-Mobility Suite',
    category: 'Mobile Apps',
    desc: 'High-speed localized bike & scooter tracking network supporting rapid unlock mechanics and maps routing.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    client: 'MobiRide Inc (Los Angeles, USA)',
    tech: ['Flutter', 'AWS Lambda', 'WebSockets', 'Redis'],
    icon: Smartphone,
  },
  {
    id: 7,
    title: 'Novi Cloud Energy Smart Grid',
    category: 'SaaS & Web',
    desc: 'Automated predictive energy distribution and peak-load dispatch ledger serving over 150 regional sub-grids.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    client: 'Novi Energy Corporation (Texas, USA)',
    tech: ['React', 'Next.js', 'FastAPI', 'AWS Aurora'],
    icon: Database,
  },
  {
    id: 8,
    title: 'Orion Defense Asset Tracker',
    category: 'AI & Analytics',
    desc: 'Military-grade global physical inventory monitoring and cryptographic audit trail engine featuring sub-second update streams.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    client: 'Orion Systems (Bristol, UK)',
    tech: ['Python', 'Postgres', 'FastAPI', 'Docker', 'Shield'],
    icon: Shield,
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Case Studies</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Pioneering Products Delivered Internationally
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Explore how we build clean, highly responsive, and user-centric systems that yield tangible business metrics.
          </p>
        </div>

        {/* Dynamic Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative bg-[#090d22]/80 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-[#050816]/30 group-hover:bg-[#050816]/10 transition-colors duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-md bg-[#050816]/80 border border-white/10 text-[10px] font-mono font-medium text-cyan-400 tracking-wide">
                    {project.category}
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
                      <project.icon className="h-3.5 w-3.5" />
                      <span>{project.client}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-xs text-gray-400 leading-relaxed font-normal">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-300 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                      Learn more <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
