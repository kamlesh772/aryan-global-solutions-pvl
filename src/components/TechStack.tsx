import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Database, Cpu, Cloud, Terminal, CheckCircle2 } from 'lucide-react';

const categories = ['All', 'Frontend', 'Backend & DB', 'AI & Intelligence', 'Cloud & DevOps'];

const stacks = [
  {
    name: 'React.js',
    category: 'Frontend',
    level: 'Advanced Principal',
    desc: 'High-fidelity user interface assembly. Optimized render loops, clean custom hook states, fluid layout transitions, and strict type safety with TypeScript.',
    features: ['Concurrent Features', 'Suspense Boundary Routing', 'TypeScript Integration'],
    icon: Layers,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 'Advanced Principal',
    desc: 'Server-side rendered web engines. Incremental static regeneration, robust server actions, edge caching headers, and dynamic routes styled via Tailwind CSS.',
    features: ['App Router Patterns', 'Edge API Handlers', 'Static Site Generation'],
    icon: Terminal,
  },
  {
    name: 'Node.js / Express',
    category: 'Backend & DB',
    level: 'Enterprise SLA',
    desc: 'Highly resilient backend architectures. Secure JSON Web Token authentication middleware, fast routing maps, database migrations, and connection pools.',
    features: ['TS Type Stripping', 'Custom Middleware Proxy', 'Stream & Buffers Processing'],
    icon: Database,
  },
  {
    name: 'Python',
    category: 'Backend & DB',
    level: 'Expert Mastery',
    desc: 'Robust analytical processors. Fast mathematical algorithms, automated data cleaning pipelines, and scalable APIs built over FastAPI and robust frameworks.',
    features: ['PyTorch Modeling', 'FastAPI Architecture', 'Safe Task Orchestrators'],
    icon: Database,
  },
  {
    name: 'AI & Gemini SDK',
    category: 'AI & Intelligence',
    level: 'Specialized Authority',
    desc: 'Intelligent automation systems. Safe model prompt generation, conversational LLM chatbots, structured JSON schema outputs, and multi-modal grounding.',
    features: ['Gemini 2.5 Flash / Pro', 'Structured JSON outputs', 'Intelligent search grounding'],
    icon: Cpu,
  },
  {
    name: 'Firebase & Firestore',
    category: 'Backend & DB',
    level: 'Enterprise SLA',
    desc: 'Durable, collaborative persistence layers. Instant real-time state sync, secure declarative Firestore rules, cloud-triggered microservices, and JWT auth.',
    features: ['Real-time Synchronization', 'Hardened Security Rules', 'Firebase Auth Streams'],
    icon: Database,
  },
  {
    name: 'AWS & GCP Infrastructure',
    category: 'Cloud & DevOps',
    level: 'Multi-Region SLA',
    desc: 'Cloud configurations engineered for scale. Zero-downtime deployment pipelines, load-balanced container clusters, structured IAM policies, and VPC shielding.',
    features: ['GCP Cloud Run', 'AWS Lambda Serverless', 'High Edge Cache CDN'],
    icon: Cloud,
  },
  {
    name: 'Docker & Kubernetes',
    category: 'Cloud & DevOps',
    level: 'Enterprise SLA',
    desc: 'Container orchestrations ensuring identical testing, development, and high-availability production environments globally across all physical servers.',
    features: ['Multi-Stage Dockerfiles', 'Microservices Division', 'Auto-scaling Clusters'],
    icon: Cloud,
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStacks = activeCategory === 'All'
    ? stacks
    : stacks.filter((s) => s.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 px-6 relative bg-gradient-to-b from-[#070b1e] to-[#050816]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-10 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Technology Stack</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Our Solid Production-Grade Arsenal
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            No experimental play toys. We focus on battle-tested frameworks and systems (React, Next.js, Node, Python, AI, Firebase, AWS) optimized for rendering speeds, safety, and cloud scalability.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 border border-transparent'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStacks.map((stack) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={stack.name}
                className="bg-[#090d22]/80 border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full"
              >
                {/* Visual hover accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-500/10 to-transparent blur-xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                      <stack.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded">
                      {stack.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                    {stack.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5 uppercase tracking-wider">
                    {stack.category}
                  </p>

                  <p className="mt-4 text-xs text-gray-400 leading-relaxed font-normal">
                    {stack.desc}
                  </p>
                </div>

                {/* Bullets */}
                <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                  {stack.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono font-normal">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
