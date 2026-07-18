import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink, 
  Settings, 
  Video, 
  Users, 
  Zap, 
  ShieldCheck,
  Link2,
  Trash2,
  Phone,
  Send,
  Check,
  Loader2,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Consultation() {
  const { language, theme, t } = useApp();
  
  // Set default Calendly URL to the requested placeholder link
  const [calendlyUrl, setCalendlyUrl] = useState('https://calendly.com/aryanglobalsolutions');
  const [urlInput, setUrlInput] = useState('https://calendly.com/aryanglobalsolutions');
  const [showConfig, setShowConfig] = useState(false);
  const [activeMode, setActiveMode] = useState<'meeting' | 'callback'>('meeting');

  // Callback form states
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackEmail, setCallbackEmail] = useState('');
  const [callbackTopic, setCallbackTopic] = useState('');
  const [callbackTime, setCallbackTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setCalendlyUrl(urlInput.trim());
  };

  const handleClearUrl = () => {
    setUrlInput('');
    setCalendlyUrl('');
  };

  const handleLoadDemoUrl = () => {
    const demo = 'https://calendly.com/aryanglobalsolutions';
    setUrlInput(demo);
    setCalendlyUrl(demo);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone || !callbackEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form fields
      setCallbackName('');
      setCallbackPhone('');
      setCallbackEmail('');
    }, 1500);
  };

  // Localized copy mapping for benefits and dual interactive modes
  const localTranslations = useMemo(() => {
    return {
      en: {
        title: "Schedule a Free Consultation",
        subtitle: "Direct Access Desk",
        desc: "Accelerate your high-performance enterprise roadmap. Connect directly with our lead software architects using our interactive booking grid or request an immediate callback.",
        bookMeeting: "Book a Meeting",
        requestCallback: "Request a Callback",
        benefitsTitle: "Your Consultation Includes:",
        benefits: [
          "Free 30-minute consultation",
          "AI & Software Strategy",
          "ERP Planning",
          "Cloud Architecture Review"
        ],
        badge: "Direct Architecture Desk",
        formName: "Full Name",
        formPhone: "Phone Number",
        formEmail: "Email Address",
        formTopic: "Preferred Topic",
        formTime: "Preferred Time",
        formSubmit: "Submit Callback Request",
        formSubmitting: "Registering Request...",
        successTitle: "Callback Requested!",
        successDesc: "Your request is registered successfully. An elite software architect will call you back within 2 business hours.",
        backToCall: "Request Another Call",
        topics: [
          "AI & Automation Strategy",
          "Custom Software Engineering",
          "ERP & CRM System Planning",
          "Cloud & Infrastructure Audit"
        ],
        times: [
          "Morning (09:00 AM - 12:00 PM)",
          "Afternoon (12:00 PM - 05:00 PM)",
          "Evening (05:00 PM - 08:00 PM)"
        ]
      },
      hi: {
        title: "मुफ्त परामर्श निर्धारित करें",
        subtitle: "प्रत्यक्ष प्रवेश डेस्क",
        desc: "अपने उच्च-प्रदर्शन एंटरप्राइज़ रोडमैप को गति दें। हमारे विशिष्ट सॉफ्टवेयर आर्किटेक्ट्स से सीधे जुड़ने के लिए बुकिंग ग्रिड का उपयोग करें या तुरंत कॉल बैक का अनुरोध करें।",
        bookMeeting: "मीटिंग बुक करें",
        requestCallback: "कॉल बैक का अनुरोध करें",
        benefitsTitle: "आपके परामर्श में शामिल हैं:",
        benefits: [
          "मुफ्त 30 मिनट का परामर्श",
          "एआई और सॉफ्टवेयर रणनीति",
          "ईआरपी योजना",
          "क्लाउड आर्किटेक्चर समीक्षा"
        ],
        badge: "प्रत्यक्ष आर्किटेक्चर डेस्क",
        formName: "पूरा नाम",
        formPhone: "फ़ोन नंबर",
        formEmail: "ईमेल पता",
        formTopic: "पसंदीदा विषय",
        formTime: "पसंदीदा समय",
        formSubmit: "कॉल बैक अनुरोध भेजें",
        formSubmitting: "अनुरोध दर्ज किया जा रहा है...",
        successTitle: "कॉल बैक अनुरोध दर्ज!",
        successDesc: "आपका अनुरोध सफलतापूर्वक दर्ज हो गया है। एक विशिष्ट सॉफ्टवेयर विशेषज्ञ 2 व्यावसायिक घंटों के भीतर आपसे सीधे संपर्क करेगा।",
        backToCall: "दूसरा कॉल अनुरोध करें",
        topics: [
          "एआई और स्वचालन रणनीति",
          "कस्टम सॉफ्टवेयर इंजीनियरिंग",
          "ईआरपी और सीआरएम प्रणाली योजना",
          "क्लाउड और इंफ्रास्ट्रक्चर ऑडिट"
        ],
        times: [
          "सुबह (09:00 AM - 12:00 PM)",
          "दोपहर (12:00 PM - 05:00 PM)",
          "शाम (05:00 PM - 08:00 PM)"
        ]
      },
      ar: {
        title: "جدولة استشارة مجانية",
        subtitle: "مكتب الوصول المباشر",
        desc: "سرّع خارطة طريقك الرقمية للمؤسسات. تواصل مباشرة مع نخبة مهندسي البرمجيات لدينا باستخدام شبكة الحجز التفاعلية أو اطلب إعادة الاتصال فوراً.",
        bookMeeting: "حجز موعد",
        requestCallback: "طلب إعادة الاتصال",
        benefitsTitle: "تتضمن الاستشارة المجانية:",
        benefits: [
          "استشارة مجانية لمدة 30 دقيقة",
          "استراتيجية البرمجيات والذكاء الاصطناعي",
          "تخطيط أنظمة ERP للمؤسسات",
          "مراجعة بنية الأنظمة السحابية"
        ],
        badge: "مكتب الهندسة المباشر",
        formName: "الاسم الكامل",
        formPhone: "رقم الهاتف",
        formEmail: "البريد الإلكتروني",
        formTopic: "الموضوع المفضل",
        formTime: "الوقت المفضل",
        formSubmit: "إرسال طلب الاتصال",
        formSubmitting: "جاري تسجيل الطلب...",
        successTitle: "تم تسجيل طلبك بنجاح!",
        successDesc: "لقد تم تسجيل طلب الاتصال الخاص بك. سيتواصل معك أحد كبار مهندسي الأنظمة لدينا خلال ساعتي عمل.",
        backToCall: "طلب اتصال آخر",
        topics: [
          "استراتيجية الذكاء الاصطناعي والأتمتة",
          "هندسة البرمجيات المخصصة",
          "تخطيط أنظمة ERP & CRM",
          "تدقيق البنية التحتية والسحابية"
        ],
        times: [
          "الصباح (09:00 ص - 12:00 م)",
          "بعد الظهر (12:00 م - 05:00 م)",
          "المساء (05:00 م - 08:00 م)"
        ]
      },
      fr: {
        title: "Planifier une Consultation Gratuite",
        subtitle: "Accès Direct à l'Ingénierie",
        desc: "Accélérez votre feuille de route d'entreprise haute performance. Connectez-vous directement avec nos architectes logiciels principaux via notre calendrier interactif ou demandez un rappel immédiat.",
        bookMeeting: "Réserver une Réunion",
        requestCallback: "Demander un Rappel",
        benefitsTitle: "Votre Consultation Comprend :",
        benefits: [
          "Consultation gratuite de 30 minutes",
          "Stratégie IA & Logiciel",
          "Planification ERP",
          "Revue d'Architecture Cloud"
        ],
        badge: "Bureau d'Architecture Direct",
        formName: "Nom Complet",
        formPhone: "Numéro de Téléphone",
        formEmail: "Adresse E-mail",
        formTopic: "Sujet Préféré",
        formTime: "Créneau Horaire Préféré",
        formSubmit: "Envoyer la Demande",
        formSubmitting: "Enregistrement...",
        successTitle: "Rappel Enregistré !",
        successDesc: "Votre demande a été enregistrée avec succès. Un architecte logiciel d'élite vous rappellera sous 2 heures ouvrables.",
        backToCall: "Demander un autre rappel",
        topics: [
          "Stratégie IA & Automatisation",
          "Ingénierie Logicielle Sur Mesure",
          "Planification Système ERP & CRM",
          "Audit Cloud & Infrastructure"
        ],
        times: [
          "Matin (09h00 - 12h00)",
          "Après-midi (12h00 - 17h00)",
          "Soir (17h00 - 20h00)"
        ]
      },
      de: {
        title: "Kostenlose Beratung vereinbaren",
        subtitle: "Direkter Engineering-Zugang",
        desc: "Beschleunigen Sie Ihren digitalen Fahrplan für Ihr Unternehmen. Verbinden Sie sich direkt mit unseren führenden Software-Architekten über unseren interaktiven Kalender oder fordern Sie einen sofortigen Rückruf an.",
        bookMeeting: "Meeting buchen",
        requestCallback: "Rückruf anfordern",
        benefitsTitle: "Ihre Beratung beinhaltet:",
        benefits: [
          "Kostenlose 30-minütige Beratung",
          "KI- & Software-Strategie",
          "ERP-Planung",
          "Cloud-Architektur-Überprüfung"
        ],
        badge: "Direkter Architektur-Desk",
        formName: "Vollständiger Name",
        formPhone: "Telefonnummer",
        formEmail: "E-Mail-Adresse",
        formTopic: "Bevorzugtes Thema",
        formTime: "Bevorzugte Uhrzeit",
        formSubmit: "Rückruf anfordern",
        formSubmitting: "Wird registriert...",
        successTitle: "Rückruf registriert!",
        successDesc: "Ihre Anfrage wurde erfolgreich übermittelt. Ein erfahrener Software-Spezialist wird Sie innerhalb von 2 Geschäftsstunden zurückrufen.",
        backToCall: "Anderen Rückruf anfordern",
        topics: [
          "KI- & Automatisierungsstrategie",
          "Maßgeschneiderte Softwareentwicklung",
          "ERP- & CRM-Systemplanung",
          "Cloud- & Infrastruktur-Audit"
        ],
        times: [
          "Vormittag (09:00 - 12:00 Uhr)",
          "Nachmittag (12:00 - 17:00 Uhr)",
          "Abend (17:00 - 20:00 Uhr)"
        ]
      }
    };
  }, []);

  const currentText = localTranslations[language] || localTranslations.en;

  return (
    <section id="consultation" className={`py-24 px-6 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#050816] to-[#070b1e]' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Dynamic atmospheric ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest border mb-4 ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-cyan-400'
                : 'bg-gray-100 border-gray-200 text-indigo-600'
            }`}>
              <Sparkles className="h-3 w-3 animate-pulse text-cyan-500" /> {currentText.subtitle}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {currentText.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {currentText.desc}
          </motion.p>
        </div>

        {/* Dynamic Interactive Calendly Config Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-5xl mx-auto mb-8 border rounded-2xl p-4 backdrop-blur-xl transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-[#090d22]/80 border-white/5 shadow-2xl'
              : 'bg-white/90 border-gray-200/80 shadow-md shadow-gray-100/50'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                  : 'bg-indigo-500/5 text-indigo-600 border-indigo-500/10'
              }`}>
                <Settings className="h-4 w-4 animate-spin-slow" />
              </div>
              <div>
                <p className={`text-xs font-bold font-mono uppercase tracking-wider ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  {t('Calendly Controller Desk')}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5 font-mono">
                  {t('URL:')} {calendlyUrl ? <span className="text-emerald-500 font-semibold">{calendlyUrl}</span> : <span className="text-amber-500 font-semibold">{t('PLACEHOLDER MODE')}</span>}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setShowConfig(!showConfig)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border-white/5'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 border-gray-200'
              }`}
            >
              {showConfig ? t('Hide Config') : t('Configure URL')}
            </button>
          </div>

          <AnimatePresence>
            {showConfig && (
              <motion.form
                onSubmit={handleApplyUrl}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className={`overflow-hidden border-t pt-4 ${
                  theme === 'dark' ? 'border-white/5' : 'border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                      type="text" 
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder={t('Paste your Calendly URL (e.g. https://calendly.com/...)')}
                      className={`w-full border rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm focus:outline-none font-mono ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white focus:border-cyan-500'
                          : 'bg-gray-50 border-gray-200 text-gray-800 focus:border-indigo-600'
                      }`}
                    />
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      type="submit"
                      className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      {t('Apply URL')}
                    </button>
                    <button
                      type="button"
                      onClick={handleLoadDemoUrl}
                      className={`px-4 py-3 border font-bold text-xs rounded-xl tracking-wider uppercase transition-colors cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/20 text-cyan-400'
                          : 'bg-indigo-50/50 hover:bg-indigo-50 border-indigo-200 text-indigo-600'
                      }`}
                    >
                      {t('Reset Demo Link')}
                    </button>
                    <button
                      type="button"
                      onClick={handleClearUrl}
                      title={t('Clear to test placeholder state')}
                      className={`p-3 border rounded-xl transition-colors cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-red-500/10 hover:bg-red-500/20 border-red-500/20 text-red-400'
                          : 'bg-red-50 hover:bg-red-100 border-red-200 text-red-600'
                      }`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 font-mono">
                  {t('* Paste any active Calendly workspace schedule parameters above to render them seamlessly inside the meeting container.')}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Premium Glassmorphic Column Stage */}
        <div className="max-w-5xl mx-auto">
          <div 
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 rounded-3xl p-8 sm:p-12 border backdrop-blur-xl relative overflow-hidden shadow-2xl transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-[#090d22]/65 border-white/10 shadow-indigo-950/20'
                : 'bg-white/80 border-gray-200 shadow-gray-200/50'
            }`}
          >
            {/* Left Side: Premium Benefits & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between relative z-10">
              <div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold font-mono uppercase tracking-widest border mb-6 ${
                  theme === 'dark'
                    ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'
                    : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-700'
                }`}>
                  <Zap className="h-3 w-3 animate-bounce" /> {currentText.badge}
                </span>

                <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {currentText.benefitsTitle}
                </h3>
                
                {/* Benefits List with glow checkmarks */}
                <div className="mt-8 space-y-5">
                  {currentText.benefits.map((benefit, bIdx) => (
                    <motion.div 
                      key={bIdx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: bIdx * 0.1 }}
                      className="flex items-start gap-3.5 group"
                    >
                      <div className={`p-1 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                        theme === 'dark'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/10'
                      }`}>
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className={`text-sm sm:text-base font-semibold ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Confidentiality trust metrics */}
              <div className={`mt-10 p-5 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-white/[0.02] border-white/5'
                  : 'bg-gray-50/50 border-gray-150'
              }`}>
                <div className="flex gap-3 items-center">
                  <ShieldCheck className="h-6 w-6 text-emerald-500 shrink-0" />
                  <div>
                    <h5 className={`text-xs font-bold uppercase tracking-wider font-mono ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      100% NDA Protected
                    </h5>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-relaxed font-mono">
                      All ideas and architectural boundaries discussed are encrypted and legally bound.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Switch Panel */}
            <div className="lg:col-span-7 flex flex-col relative z-10">
              
              {/* Premium Dual Toggle Controls */}
              <div className={`flex p-1 rounded-xl mb-6 border ${
                theme === 'dark'
                  ? 'bg-black/40 border-white/5'
                  : 'bg-gray-100 border-gray-200'
              }`}>
                <button
                  onClick={() => setActiveMode('meeting')}
                  className={`flex-1 py-3 text-xs font-bold font-mono uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeMode === 'meeting'
                      ? theme === 'dark'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-950/50'
                        : 'bg-white text-indigo-700 shadow-sm border border-gray-200'
                      : 'text-gray-500 hover:text-gray-400'
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  <span>{currentText.bookMeeting}</span>
                </button>
                <button
                  onClick={() => setActiveMode('callback')}
                  className={`flex-1 py-3 text-xs font-bold font-mono uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeMode === 'callback'
                      ? theme === 'dark'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-950/50'
                        : 'bg-white text-indigo-700 shadow-sm border border-gray-200'
                      : 'text-gray-500 hover:text-gray-400'
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  <span>{currentText.requestCallback}</span>
                </button>
              </div>

              {/* Dynamic View Panel with Smooth AnimatePresence */}
              <div className="flex-grow min-h-[420px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeMode === 'meeting' ? (
                    <motion.div
                      key="calendly-frame"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="h-full flex flex-col justify-between"
                    >
                      {/* Calendly Inline Scheduler Container */}
                      {calendlyUrl ? (
                        <div className={`border rounded-2xl overflow-hidden min-h-[380px] h-[380px] relative transition-all ${
                          theme === 'dark'
                            ? 'bg-black/30 border-white/5'
                            : 'bg-gray-50 border-gray-200'
                        }`}>
                          <iframe
                            src={`${calendlyUrl}?embed_domain=${window.location.hostname}&embed_type=Inline&background_color=${theme === 'dark' ? '050816' : 'ffffff'}&text_color=${theme === 'dark' ? 'ffffff' : '111827'}&primary_color=6366f1`}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Calendly Scheduler Window"
                            className="w-full h-full relative z-10"
                          />
                          {/* Loader screen layer underneath */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-0 pointer-events-none">
                            <Loader2 className="h-8 w-8 text-indigo-500 animate-spin mb-3" />
                            <p className="text-[10px] text-gray-400 font-mono tracking-wider">// INITIALIZING SECURE CALENDLY STREAM</p>
                          </div>
                        </div>
                      ) : (
                        <div className={`border rounded-2xl p-8 flex flex-col items-center justify-center text-center h-[380px] ${
                          theme === 'dark' ? 'bg-black/40 border-white/5' : 'bg-gray-50 border-gray-200'
                        }`}>
                          <div className="p-3 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-4 animate-pulse">
                            <Clock className="h-6 w-6" />
                          </div>
                          <h4 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            Calendly Endpoint Offline
                          </h4>
                          <p className="text-xs text-gray-400 mt-2 max-w-sm leading-relaxed">
                            No active URL is configured. Use the controller above to apply a custom link or switch to callback mode.
                          </p>
                        </div>
                      )}

                      {/* Footer Details */}
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5 text-cyan-500" /> Multi-Timezone Synchronizer Active
                        </span>
                        <span>// SECURE ENCRYPTED FLOW</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="callback-form-panel"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="h-full flex flex-col justify-center"
                    >
                      {isSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-12 px-4"
                        >
                          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="h-8 w-8" />
                          </div>
                          <h4 className={`text-xl font-bold tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {currentText.successTitle}
                          </h4>
                          <p className={`mt-3 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {currentText.successDesc}
                          </p>

                          <button
                            type="button"
                            onClick={() => setIsSubmitted(false)}
                            className={`mt-8 px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase border transition-all cursor-pointer ${
                              theme === 'dark'
                                ? 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-200'
                            }`}
                          >
                            {currentText.backToCall}
                          </button>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleCallbackSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={`block text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                              }`}>{currentText.formName}</label>
                              <input
                                type="text"
                                required
                                placeholder="Aryan Jain"
                                value={callbackName}
                                onChange={(e) => setCallbackName(e.target.value)}
                                className={`w-full border rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors ${
                                  theme === 'dark'
                                    ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500'
                                    : 'bg-gray-50 border-gray-200 text-gray-800 focus:border-indigo-600'
                                }`}
                              />
                            </div>
                            <div>
                              <label className={`block text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                              }`}>{currentText.formPhone}</label>
                              <input
                                type="tel"
                                required
                                placeholder="+91 7878743214"
                                value={callbackPhone}
                                onChange={(e) => setCallbackPhone(e.target.value)}
                                className={`w-full border rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors ${
                                  theme === 'dark'
                                    ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500'
                                    : 'bg-gray-50 border-gray-200 text-gray-800 focus:border-indigo-600'
                                }`}
                              />
                            </div>
                          </div>

                          <div>
                            <label className={`block text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>{currentText.formEmail}</label>
                            <input
                              type="email"
                              required
                              placeholder="client@enterprise.com"
                              value={callbackEmail}
                              onChange={(e) => setCallbackEmail(e.target.value)}
                              className={`w-full border rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors ${
                                theme === 'dark'
                                  ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500'
                                  : 'bg-gray-50 border-gray-200 text-gray-800 focus:border-indigo-600'
                              }`}
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={`block text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                              }`}>{currentText.formTopic}</label>
                              <select
                                value={callbackTopic}
                                onChange={(e) => setCallbackTopic(e.target.value)}
                                className={`w-full border rounded-xl px-3 py-3 text-xs focus:outline-none cursor-pointer ${
                                  theme === 'dark'
                                    ? 'bg-[#0c102b] border-white/10 text-white'
                                    : 'bg-gray-50 border-gray-200 text-gray-700'
                                }`}
                              >
                                <option value="" disabled>{t('Choose category...')}</option>
                                {currentText.topics.map((tOp, tIdx) => (
                                  <option key={tIdx} value={tOp}>{tOp}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className={`block text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                              }`}>{currentText.formTime}</label>
                              <select
                                value={callbackTime}
                                onChange={(e) => setCallbackTime(e.target.value)}
                                className={`w-full border rounded-xl px-3 py-3 text-xs focus:outline-none cursor-pointer ${
                                  theme === 'dark'
                                    ? 'bg-[#0c102b] border-white/10 text-white'
                                    : 'bg-gray-50 border-gray-200 text-gray-700'
                                }`}
                              >
                                <option value="" disabled>{t('Choose window...')}</option>
                                {currentText.times.map((tIm, tIdx) => (
                                  <option key={tIdx} value={tIm}>{tIm}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="pt-4">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/5"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  <span>{currentText.formSubmitting}</span>
                                </>
                              ) : (
                                <>
                                  <Send className="h-3.5 w-3.5" />
                                  <span>{currentText.formSubmit}</span>
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
