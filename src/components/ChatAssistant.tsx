import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, RefreshCw, Bot, ShieldCheck, Minimize2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Message {
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export default function ChatAssistant() {
  const { language } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dynamic localization strings based on AppContext language
  const loc = {
    en: {
      header: 'AGS AI Engineering Desk',
      subHeader: 'Autonomous Support Agent',
      status: 'Online',
      placeholder: 'Describe your custom software/AI project...',
      suggestTitle: 'Suggested Solutions',
      slaBadge: 'SLA Guaranteed',
      clearChat: 'Clear History',
      typingText: 'AGS Agent is compiling solution...',
      welcome: "Hello! I am your Aryan Global Solutions AI Desk. I can help map your enterprise requirements, custom software architectures, cloud scaling, or explain our transparent pricing and SLAs. What project are we brainstorming today?",
      suggestions: [
        "What are your core services?",
        "How does transparent pricing work?",
        "What are your SLA guarantees?",
        "Can you build custom AI agents?"
      ]
    },
    ar: {
      header: 'مكتب أريان للذكاء الاصطناعي',
      subHeader: 'وكيل الدعم الذاتي',
      status: 'متصل',
      placeholder: 'صف مشروعك البرمجي أو أتمتة الذكاء الاصطناعي...',
      suggestTitle: 'الحلول المقترحة',
      slaBadge: 'مضمون باتفاقية الخدمة',
      clearChat: 'مسح السجل',
      typingText: 'الوكيل الذكي يقوم بصياغة الحل...',
      welcome: "مرحباً بك! أنا مساعدك الذكي من أريان للحلول العالمية. يمكنني مساعدتك في تحديد متطلبات مؤسستك، وتصميم بنية البرمجيات المخصصة، والحوسبة السحابية، وشرح نظام الأسعار الشفاف واتفاقيات مستوى الخدمة (SLA). ما المشروع الذي نعمل عليه اليوم؟",
      suggestions: [
        "ما هي خدماتكم الأساسية؟",
        "كيف تعمل الأسعار الشفافة؟",
        "ما هي ضمانات اتفاقية مستوى الخدمة (SLA)؟",
        "هل يمكنكم بناء وكلاء ذكاء اصطناعي مخصصين؟"
      ]
    },
    fr: {
      header: 'Bureau d\'Ingénierie IA AGS',
      subHeader: 'Agent de Support Autonome',
      status: 'En ligne',
      placeholder: 'Décrivez votre projet logiciel ou d\'IA...',
      suggestTitle: 'Solutions Suggérées',
      slaBadge: 'SLA Garanti',
      clearChat: 'Effacer l\'historique',
      typingText: 'L\'agent AGS compile la solution...',
      welcome: "Bonjour! Je suis votre assistant virtuel Aryan Global Solutions. Je peux vous aider à définir vos besoins d'entreprise, concevoir des architectures logicielles sur mesure, scaler votre cloud ou vous expliquer nos tarifs transparents et SLAs. Quel projet étudions-nous aujourd'hui?",
      suggestions: [
        "Quels sont vos services clés?",
        "Comment fonctionnent les tarifs?",
        "Quelles sont vos garanties SLA?",
        "Pouvez-vous créer des agents IA?"
      ]
    },
    de: {
      header: 'AGS KI-Engineering Desk',
      subHeader: 'Autonomer Support-Agent',
      status: 'Online',
      placeholder: 'Beschreiben Sie Ihr Software-/KI-Projekt...',
      suggestTitle: 'Empfohlene Lösungen',
      slaBadge: 'SLA Garantiert',
      clearChat: 'Verlauf löschen',
      typingText: 'AGS-Agent formuliert Lösung...',
      welcome: "Hallo! Ich bin Ihr Aryan Global Solutions KI-Assistent. Ich kann Ihnen helfen, Ihre Unternehmensanforderungen zu planen, maßgeschneiderte Softwarearchitekturen zu entwerfen, Ihre Cloud zu skalieren oder unsere transparenten Preise und SLAs zu erläutern. Welches Projekt besprechen wir heute?",
      suggestions: [
        "Was sind Ihre Kernleistungen?",
        "Wie funktionieren transparente Preise?",
        "Welche SLA-Garantien bieten Sie?",
        "Können Sie KI-Agenten bauen?"
      ]
    },
    hi: {
      header: 'एजीएस एआई इंजीनियरिंग डेस्क',
      subHeader: 'स्वायत्त सहायता एजेंट',
      status: 'ऑनलाइन',
      placeholder: 'अपने कस्टम सॉफ़्टवेयर/एआई प्रोजेक्ट का वर्णन करें...',
      suggestTitle: 'सुझाए गए समाधान',
      slaBadge: 'SLA गारंटी',
      clearChat: 'इतिहास साफ़ करें',
      typingText: 'एजीएस एजेंट समाधान संकलित कर रहा है...',
      welcome: "नमस्ते! मैं आर्यन ग्लोबल सॉल्यूशंस का एआई असिस्टेंट हूं। मैं आपकी एंटरप्राइज आवश्यकताओं, कस्टम सॉफ़्टवेयर आर्किटेक्चर, क्लाउड स्केलिंग को मैप करने, या हमारे पारदर्शी मूल्य निर्धारण और SLAs को समझाने में मदद कर सकता हूं। आज हम किस प्रोजेक्ट पर काम कर रहे हैं?",
      suggestions: [
        "आपकी मुख्य सेवाएं क्या हैं?",
        "पारदर्शी मूल्य निर्धारण कैसे काम करता है?",
        "आपकी SLA गारंटी क्या हैं?",
        "क्या आप कस्टम एआई एजेंट बना सकते हैं?"
      ]
    }
  };

  // Safe fallback to English if language is not supported
  const currentLoc = loc[language as keyof typeof loc] || loc.en;

  // Initialize with welcome message on mount or language change
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          text: currentLoc.welcome,
          timestamp: new Date()
        }
      ]);
    }
  }, [language]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      // Map chat history for the endpoint (sending clean text message objects)
      const chatHistory = messages.map(msg => ({
        role: msg.role,
        text: msg.text
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory
        })
      });

      if (!response.ok) {
        throw new Error('Failed to reach AI Engineering Desk.');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: 'assistant',
        text: data.response || "I apologize, but I encountered an issue processing your architectural inquiry. Please contact our main desk at aryanjain772@gmail.com.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      
      const errorMessage: Message = {
        role: 'assistant',
        text: "System response compilation error. Our network is operational, but the model did not respond in time. Please schedule a direct Architectural Discovery Call or write to aryanjain772@gmail.com.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        role: 'assistant',
        text: currentLoc.welcome,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Floating Sparkly Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] cursor-pointer focus:outline-none group overflow-hidden"
          aria-label="Toggle AI Assistant"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 blur-md group-hover:scale-125 transition-transform duration-300 animate-ping" />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center relative"
              >
                <MessageSquare className="h-6 w-6 text-white relative z-10" />
                <Sparkles className="h-3 w-3 text-cyan-200 absolute -top-1 -right-1 animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Expanded Chat Widget Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40, x: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[410px] h-[550px] bg-[#0a0f26]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-indigo-500/10 z-50 flex flex-col overflow-hidden"
            id="ags-ai-chat-assistant"
          >
            {/* Top Brand Ambient Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600" />
            
            {/* Widget Header */}
            <div className="px-4 py-3.5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                  <Bot className="h-5 w-5" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0a0f26] animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-wider text-white uppercase flex items-center gap-1.5">
                    {currentLoc.header}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-medium tracking-wide flex items-center gap-1">
                    <span>{currentLoc.subHeader}</span>
                    <span className="inline-block w-1 h-1 rounded-full bg-gray-500" />
                    <span className="text-emerald-400 font-mono text-[9px] uppercase tracking-widest font-semibold">{currentLoc.status}</span>
                  </p>
                </div>
              </div>

              {/* Header Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClearChat}
                  title={currentLoc.clearChat}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                >
                  <Minimize2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* SLA / Compliance Header Band */}
            <div className="px-4 py-1.5 bg-gradient-to-r from-cyan-950/20 to-indigo-950/20 border-b border-white/5 flex items-center justify-between">
              <span className="text-[9px] font-mono text-cyan-400/80 tracking-widest uppercase flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-cyan-400" />
                {currentLoc.slaBadge}
              </span>
              <span className="text-[9px] font-mono text-gray-500 tracking-wider">
                Silicon Valley • Dubai • London
              </span>
            </div>

            {/* Chat Body & Conversation History */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                >
                  {msg.role === 'assistant' && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-[10px] font-mono">
                      Ω
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs font-normal leading-relaxed shadow-lg ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-indigo-600/95 to-indigo-500/95 text-white rounded-br-none'
                        : 'bg-white/5 border border-white/5 text-gray-200 rounded-bl-none'
                    }`}
                  >
                    {/* Preserve line breaks for beautifully structured AI replies */}
                    <div className="whitespace-pre-line select-text">
                      {msg.text}
                    </div>
                    
                    {/* Miniature Timestamp */}
                    <div
                      className={`text-[9px] font-mono mt-1 ${
                        msg.role === 'user' ? 'text-indigo-200' : 'text-gray-500'
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {/* Formulation (Typing) Animation */}
              {isTyping && (
                <div className="flex justify-start items-end gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-[10px] font-mono animate-pulse">
                    ...
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-bl-none px-3.5 py-2.5 text-xs text-gray-400 flex flex-col gap-1.5 shadow-lg">
                    <span className="font-mono text-[9px] text-cyan-400 tracking-wider flex items-center gap-1">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                      </span>
                      {currentLoc.typingText}
                    </span>
                    <div className="flex gap-1.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Context Suggested Question Pills */}
            <div className="px-4 py-2 border-t border-white/5 bg-white/[0.01]">
              <p className="text-[9px] font-bold font-mono tracking-widest text-gray-500 uppercase mb-1.5">
                {currentLoc.suggestTitle}
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-[70px] overflow-y-auto pb-1">
                {currentLoc.suggestions.map((suggestion, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => handleSendMessage(suggestion)}
                    className="text-[10px] text-cyan-300 font-mono tracking-tight bg-cyan-950/20 hover:bg-cyan-950/50 border border-cyan-500/20 hover:border-cyan-500/60 rounded-full py-1 px-2.5 transition-all duration-200 cursor-pointer text-left focus:outline-none"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-3 border-t border-white/5 bg-white/[0.02] flex gap-2 items-center"
            >
              <input
                type="text"
                required
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={currentLoc.placeholder}
                disabled={isTyping}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all font-sans disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isTyping || !inputText.trim()}
                className="flex-shrink-0 flex items-center justify-center w-9 h-9 bg-gradient-to-br from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black rounded-xl cursor-pointer disabled:opacity-40 disabled:hover:scale-100 active:scale-95 hover:scale-105 transition-all duration-200"
              >
                <Send className="h-3.5 w-3.5 fill-current" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
