import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What is your geographic range of operations?',
    a: 'We serve clients across the USA, UK, Europe, and the Middle East. Our communication pipelines and sprint planning sessions are mapped directly to your local timezone to ensure 100% collaboration overlap.',
  },
  {
    q: 'Do you sign non-disclosure agreements (NDAs) before project discovery?',
    a: 'Absolutely. We respect corporate intelligence. We sign mutual NDAs prior to discussing any system architecture, business model, or proprietary dataset.',
  },
  {
    q: 'Do I retain 100% of the intellectual property (IP) and code ownership?',
    a: 'Yes, 100%. Once final milestones are delivered and settled, full repository credentials, cloud deployment permissions, assets, and database configurations are transferred directly to your organization. There are zero licensing fees or vendor lock-in traps.',
  },
  {
    q: 'How does your "Dedicated Developers" staffing model work?',
    a: 'Our senior developers integrate directly into your internal teams. They attend your daily standups, log tickets directly inside your Jira, push code to your corporate repositories, and collaborate actively over your Slack channels.',
  },
  {
    q: 'Can you work with legacy enterprise databases and outdated internal APIs?',
    a: 'Yes. We frequently build robust, ultra-fast middleware proxy microservices. This allows us to connect legacy Mainframes, SAP setups, or on-prem databases directly to modern React or Next.js web frontends without breaking existing operational systems.',
  },
  {
    q: 'What level of post-deployment support do you offer?',
    a: 'We offer structured Maintenance SLA tiers following product launch. This includes active uptime monitoring, automated dependency security patches, performance diagnostics, database cleanups, and a designated support ticket response channel.',
  },
  {
    q: 'What are your standard response times under your support SLA?',
    a: 'Our Premium and Enterprise support tiers feature a guaranteed sub-4 hour response window for critical P1 blockages (e.g., service outages). For standard updates and feature enquiries, we resolve issues within 24 business hours.',
  },
  {
    q: 'Do you support integration of artificial intelligence models, such as the Gemini API?',
    a: 'Yes, we are official AI-integration specialists. We construct secure, server-side proxies using the modern @google/genai SDK to incorporate models such as Gemini 2.5 Flash and Pro for tasks like dynamic summaries, multi-modal analysis, and private vector searches.',
  },
  {
    q: 'How do you ensure cybersecurity compliance and handle sensitive user data?',
    a: 'We deploy hardened architectures incorporating strict Firestore rules, OAuth token validation, SSL/TLS handshakes, and standard API proxy gateways. We align code with GDPR, CCPA, and PCI-DSS requirements to prevent client-side credential exposure.',
  },
  {
    q: 'Which development methodologies do your engineering teams use?',
    a: 'We run on strict, highly communicative Agile/Scrum sprints. This includes bi-weekly planning sessions, daily standups, retrospective reviews, and continuous integrations so that you can view and test progress in real-time.',
  },
  {
    q: 'How do you handle project scope changes during development?',
    a: 'Scope updates are integrated cleanly through our agile backlog. If a new capability is added, we evaluate its impact on current timelines and milestones, prepare an updated work order, and dynamically adjust the sprint planning sequence.',
  },
  {
    q: 'Do you help migrate legacy infrastructure to Cloud Providers like GCP or AWS?',
    a: 'Yes. We execute low-downtime database and server migrations. We safely migrate on-premises files or legacy databases to scalable cloud databases (e.g. Google Cloud SQL, Firebase, AWS RDS) while preserving schema relationships.',
  },
  {
    q: 'What is your QA (Quality Assurance) and testing protocol?',
    a: 'Every line of code undergoes manual pull request reviews, automated lint validation, and comprehensive testing. We write Unit tests for core computations, integration tests for APIs, and end-to-end user-flow checks before staging deployments.',
  },
  {
    q: 'How are billing, invoices, and payments structured?',
    a: 'We invoice transparently against verified sprint milestones. For long-term retainers, we bill bi-weekly or monthly in advance. Payments are settled conveniently via bank wire transfers, Stripe credit links, or automated ACH platforms.',
  },
  {
    q: 'What happens if a technical emergency occurs over the weekend?',
    a: 'Our Enterprise clients have access to our 24/7 Priority Emergency Hotline. If an unexpected outage or severe system anomaly occurs, our on-call devops team is notified automatically and initiates immediate mitigation procedures.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">FAQ</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Frequently Answered Questions
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Everything you need to know about partnering with Aryan Global Solutions for your next high-performance digital build.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-[#090d22]/60 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex gap-4 items-center pr-4">
                    <HelpCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal border-t border-white/5 pt-4 bg-[#050816]/30">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
