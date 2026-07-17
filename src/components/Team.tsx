import { motion } from 'motion/react';
import { Linkedin, Twitter, Sparkles, Mail } from 'lucide-react';

const members = [
  {
    name: 'Aryan Jain',
    role: 'Founder & Principal Architect',
    bio: 'Lead strategist specializing in high-performance cloud databases, microservices governance, and robust venture-scale React/Next.js product architectures.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    tags: ['Cloud Expert', 'Founder'],
    linkedin: 'https://www.linkedin.com/company/aryanglobalsolutions',
    twitter: 'https://twitter.com/aryanglobal_ai',
  },
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Head of AI & Automation',
    bio: 'Former AI systems research lead. Devises strict compliance boundaries, state models, and scalable private LLM orchestration structures via high-performance APIs.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    tags: ['Machine Learning', 'PhD Systems'],
    linkedin: 'https://www.linkedin.com/company/aryanglobalsolutions',
    twitter: 'https://twitter.com/aryanglobal_ai',
  },
  {
    name: 'Vikram Singh',
    role: 'Director of Software Engineering',
    bio: 'Oversees agile sprints and full-stack development cycles. Specialized in highly optimized PostgreSQL, Redis clusters, and fault-tolerant cloud configurations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    tags: ['PostgreSQL', 'Sprints SLA'],
    linkedin: 'https://www.linkedin.com/company/aryanglobalsolutions',
    twitter: 'https://twitter.com/aryanglobal_ai',
  },
  {
    name: 'Elena Rostova',
    role: 'Lead UI/UX Product Architect',
    bio: 'Shapes immersive digital layouts, user journeys, and custom design guidelines that optimize user conversions and maximize retention metrics.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    tags: ['Product Design', 'Figma Principal'],
    linkedin: 'https://www.linkedin.com/company/aryanglobalsolutions',
    twitter: 'https://twitter.com/aryanglobal_ai',
  },
];

export default function Team() {
  return (
    <section id="about" className="py-24 px-6 relative bg-[#050816]">
      {/* Glow highlight */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Our Core Team</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Meet the Minds Behind the Machinery
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            We are senior software architects, database administrators, and UI designers dedicated to shipping clean, robust, and production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#090d22]/80 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/10 hover:bg-[#090d22] transition-all duration-300 relative group overflow-hidden"
            >
              <div>
                {/* Avatar with luxury framing */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-6 bg-slate-900 border border-white/10">
                  <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating tags */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
                    {member.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-[#050816]/90 text-[9px] font-mono font-semibold text-cyan-400 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-indigo-400 mt-1 uppercase tracking-wider">{member.role}</p>
                <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Social and connect buttons */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-cyan-400" /> ACTIVE SLA
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-white transition-colors p-1"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-white transition-colors p-1"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:solutions@aryanglobalsolutions.com"
                    className="text-gray-500 hover:text-white transition-colors p-1"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
