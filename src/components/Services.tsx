import { motion } from 'motion/react';
import { 
  Globe, 
  Layers, 
  Smartphone, 
  Cpu, 
  Bot, 
  Palette, 
  Cloud, 
  Shield, 
  Users, 
  Terminal, 
  Briefcase, 
  ShoppingBag, 
  Wrench 
} from 'lucide-react';

const services = [
  { icon: Globe, title: 'Website Development', desc: 'Stunning corporate web experiences constructed for global conversions.' },
  { icon: Layers, title: 'Web Applications', desc: 'Robust, highly scalable interactive software engines powered by React.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Immersive native iOS and Android structures prioritizing execution speed.' },
  { icon: Cpu, title: 'AI Automation', desc: 'Integrating machine learning mechanisms to drastically minimize operational costs.' },
  { icon: Bot, title: 'AI Chatbots', desc: 'Advanced LLM custom builds for round-the-clock conversational intelligence.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Ultra-modern product design paradigms that visually lock in customer metrics.' },
  { icon: Cloud, title: 'Cloud Deployment', desc: 'Highly secure architecture maps deployed efficiently on AWS, GCP, Azure.' },
  { icon: Shield, title: 'DevOps Infrastructure', desc: 'Configuring CI/CD pipelines ensuring maximum software deployment efficiency.' },
  { icon: Users, title: 'Dedicated Developers', desc: 'Elite remote engineers integrated seamlessly into your custom workflow.' },
  { icon: Terminal, title: 'API Development', desc: 'Extremely fast and sound microservices engineered for platform integration.' },
  { icon: Briefcase, title: 'CRM & ERP Solutions', desc: 'Tailored workflow architecture designed specifically for global resource oversight.' },
  { icon: ShoppingBag, title: 'E-commerce Development', desc: 'High-conversion checkout ecosystems optimizing transactions perfectly.' },
  { icon: Layers, title: 'SaaS Development', desc: 'End-to-end cloud multi-tenant systems designed to scale from MVP to scale.' },
  { icon: Wrench, title: 'Maintenance & Support', desc: 'Proactive patch adjustments ensuring maximum security execution.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Comprehensive Digital Engineering Solutions
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            We provide next-generation software development services tailored for modern digital ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/50 hover:to-cyan-500/30 transition-all duration-300"
            >
              <div className="relative h-full bg-[#090d22]/90 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-md">
                {/* Background Hover Flare */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  <srv.icon className="h-6 w-6" />
                </div>
                
                <h3 className="mt-6 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                  {srv.title}
                </h3>
                
                <p className="mt-3 text-sm text-gray-400 leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
