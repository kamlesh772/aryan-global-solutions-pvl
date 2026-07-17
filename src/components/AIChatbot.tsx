import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Calendar, Sparkles, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  choices?: { text: string; nextId: string }[];
}

const FAQ_KNOWLEDGE: Record<string, string> = {
  default: "I'd love to connect you with our lead software architect! We specialize in custom enterprise software, AI automations, and GCP/AWS cloud migrations. Would you like to schedule a direct 15-minute consultation?",
  sla: "We offer strict 99.99% uptime guarantees in our service-level agreements (SLA), backed by automated container self-healing, multi-region replication, and 24/7/365 active operations monitoring.",
  pricing: "Our packages range from MVP Launchpads starting at $12,500 (EUR 11,500) to complete AI and Enterprise growth suites. We always work on transparent, fixed-scope sprint budgets.",
  gemini: "We are official AI integration specialists. We deploy custom models, private LLM agents, and semantic searches using modern SDK frameworks, keeping your data secure on server-side proxies.",
  timeline: "We are fast and agile. Simple MVPs are completed in 4 weeks, while robust multi-region enterprise platforms are delivered in structured 6-to-8-week sprints.",
  about: "Aryan Global Solutions is an elite custom software engineering agency. We design SLA-backed architectures for hyper-growth companies and Fortune 500 corporations.",
  careers: "We are always looking for the top 1% of engineering craftspeople. You can review our open roles by selecting the Careers menu above!"
};

export default function AIChatbot() {
  const { language, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initChat = () => {
    const greeting = language === 'ar'
      ? "مرحباً! أنا المساعد الذكي لوكالة أريان للحلول العالمية. كيف يمكنني مساعدتك في تصميم نظامك البرمجي اليوم؟"
      : "Hello! I am the automated Enterprise AI Specialist at Aryan Global Solutions. How can I help you architect your system today?";

    const choices = language === 'ar'
      ? [
          { text: "ما هي تكلفة المشاريع؟", nextId: 'pricing' },
          { text: "ما هي ضمانات الـ SLA؟", nextId: 'sla' },
          { text: "تكاملات الذكاء الاصطناعي", nextId: 'gemini' },
          { text: "حجز موعد استشارة", nextId: 'book' }
        ]
      : [
          { text: "What are your pricing packages?", nextId: 'pricing' },
          { text: "What is your SLA guarantee?", nextId: 'sla' },
          { text: "AI & Gemini integrations", nextId: 'gemini' },
          { text: "Book an advisory call", nextId: 'book' }
        ];

    setMessages([
      {
        id: '1',
        sender: 'bot',
        text: greeting,
        timestamp: new Date(),
        choices
      }
    ]);
  };

  useEffect(() => {
    initChat();
  }, [language]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleChoiceClick = (choiceText: string, nextId: string) => {
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: choiceText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let replyText = FAQ_KNOWLEDGE[nextId] || FAQ_KNOWLEDGE.default;
      let nextChoices: Message['choices'] = [];

      if (nextId === 'book') {
        replyText = language === 'ar'
          ? "رائع! يمكنك استخدام زر الاستشارة أو تحديد تاريخ مباشرة من المجدول الخاص بنا."
          : "Excellent choice! You can click 'Schedule Consultation' below to lock in a time on our calendar, or continue exploring.";
      }

      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'bot',
          text: replyText,
          timestamp: new Date(),
          choices: nextId === 'book' ? [] : [
            { text: language === 'ar' ? "حجز استشارة فنية" : "Schedule Call", nextId: 'book' },
            { text: language === 'ar' ? "استكشاف خيارات الأسعار" : "View Packages", nextId: 'pricing' }
          ]
        }
      ]);
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const query = inputValue.trim().toLowerCase();
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let replyText = FAQ_KNOWLEDGE.default;

      if (query.includes('sla') || query.includes('uptime') || query.includes('guarantee')) {
        replyText = FAQ_KNOWLEDGE.sla;
      } else if (query.includes('price') || query.includes('cost') || query.includes('pricing') || query.includes('package')) {
        replyText = FAQ_KNOWLEDGE.pricing;
      } else if (query.includes('gemini') || query.includes('ai') || query.includes('llm') || query.includes('gpt')) {
        replyText = FAQ_KNOWLEDGE.gemini;
      } else if (query.includes('time') || query.includes('duration') || query.includes('long') || query.includes('timeline')) {
        replyText = FAQ_KNOWLEDGE.timeline;
      } else if (query.includes('about') || query.includes('who') || query.includes('agency')) {
        replyText = FAQ_KNOWLEDGE.about;
      } else if (query.includes('career') || query.includes('job') || query.includes('hire')) {
        replyText = FAQ_KNOWLEDGE.careers;
      }

      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'bot',
          text: replyText,
          timestamp: new Date(),
          choices: [
            { text: language === 'ar' ? "حجز موعد استشارة" : "Book Call", nextId: 'book' },
            { text: language === 'ar' ? "البدء من جديد" : "Reset Chat", nextId: 'reset' }
          ]
        }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Launcher Button */}
      <div className="fixed bottom-6 right-6 z-45">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer border border-white/10"
          aria-label="Open AI Consultation Chat"
        >
          <span className="absolute inset-0 rounded-full bg-indigo-500/30 blur-md animate-pulse pointer-events-none" />
          <Bot className="h-5.5 w-5.5" />
          <span className="absolute -top-1.5 -right-1.5 bg-cyan-400 text-black text-[8px] font-mono font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider animate-bounce">
            AI
          </span>
        </button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className={`fixed bottom-22 right-6 w-[92vw] sm:w-[400px] h-[520px] bg-[#090d22]/95 border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col backdrop-blur-xl ${
              language === 'ar' ? 'font-sans' : 'font-sans'
            }`}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold font-mono uppercase tracking-wider text-white flex items-center gap-1.5">
                    AGS AI DESK <Sparkles className="h-3 w-3 text-cyan-400 animate-pulse" />
                  </h4>
                  <p className="text-[10px] text-gray-400">Interactive Lead Qualification</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Streams */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-3 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-none'
                        : 'bg-white/5 border border-white/5 text-gray-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.choices && msg.choices.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 pl-1">
                      {msg.choices.map((choice, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (choice.nextId === 'reset') {
                              initChat();
                            } else {
                              handleChoiceClick(choice.text, choice.nextId);
                            }
                          }}
                          className="px-3 py-1.5 bg-white/[0.04] border border-white/5 hover:border-cyan-400/30 rounded-full text-[10px] font-mono text-cyan-400 hover:bg-white/[0.08] transition-all cursor-pointer"
                        >
                          {choice.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                  <Bot className="h-4 w-4 text-indigo-400 animate-spin" />
                  <span>AI Analyst is formulating response...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Lead Qualification Status Bar */}
            <div className="px-4 py-2 border-t border-white/5 bg-white/[0.01] flex items-center justify-between text-[9px] font-mono text-gray-500 uppercase tracking-widest">
              <span>// CRM Pipeline status</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="h-3 w-3" /> Qualified Active
              </span>
            </div>

            {/* Form Input Footer */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-white/5 bg-white/[0.02] flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={language === 'ar' ? "اسأل مهندس الذكاء الاصطناعي..." : "Query AI Engineering Desk..."}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#070b1e] border border-white/5 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
                aria-label="Send query"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
