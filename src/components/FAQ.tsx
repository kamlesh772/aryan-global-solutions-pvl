import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Search, MessageSquare, ShieldAlert, Code, Sparkles, Database, Cloud, DollarSign, Calendar, HeartHandshake, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface FAQItem {
  q: string;
  a: string;
  category: string;
  id: string;
}

export default function FAQ() {
  const { language, theme, t } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIdx, setOpenIdx] = useState<string | null>(null);

  // Localization Dictionary for the FAQ Section
  const faqLoc = useMemo(() => {
    return {
      en: {
        title: 'FAQ Desk',
        subtitle: 'Frequently Answered Questions',
        desc: 'Everything you need to know about partnering with Aryan Global Solutions for your next high-performance digital build, enterprise orchestration, and SLA-backed systems.',
        searchPlaceholder: 'Search enterprise FAQs...',
        allCategories: 'All Solutions',
        stillQuestions: 'Still have questions?',
        stillQuestionsDesc: 'Can\'t find what you are looking for? Speak directly with our lead software architects today.',
        contactCta: 'Contact Our Engineering Desk',
        categories: {
          all: 'All Solutions',
          ai: 'AI Development',
          software: 'Custom Software',
          erp: 'ERP Development',
          cloud: 'Cloud & DevOps',
          pricing: 'Pricing',
          timeline: 'Project Timeline',
          support: 'Support & Maintenance',
          security: 'Security & NDA'
        },
        faqs: [
          {
            id: 'ai-1',
            category: 'ai',
            q: 'What types of custom AI development and automation capabilities do you offer?',
            a: 'We build state-of-the-art intelligent automation systems, bespoke AI agent grids, and LLM orchestration layers. This includes custom fine-tuning, retrieval-augmented generation (RAG) for enterprise knowledge bases, multi-agent frameworks, computer vision pipelines, and secure API bridges using enterprise-grade models such as Gemini 1.5 Pro and OpenAI GPT-4o.'
          },
          {
            id: 'ai-2',
            category: 'ai',
            q: 'How do you ensure data privacy and prevent leakages when deploying LLMs?',
            a: 'Data sovereignty and privacy are foundational. We deploy secure middleware layers that sanitize sensitive inputs before reaching external models. For maximum isolation, we host models on private virtual private clouds (VPC) in Google Cloud Platform (GCP) or AWS, implement enterprise-level zero-data-retention APIs, and can orchestrate fully on-premise open-source LLMs (e.g., Llama 3) where compliance requires absolute localized isolation.'
          },
          {
            id: 'software-1',
            category: 'software',
            q: 'What industries do you specialize in for custom software development?',
            a: 'We serve Fortune 500 corporations, high-growth venture networks, and pioneering startups across healthcare, fintech, supply chain logistics, e-commerce, real-estate, and industrial IoT. Our team handles everything from clean high-traffic microservices to complex real-time data streaming architectures, always backed by strict SLAs and zero single-point-of-failure standards.'
          },
          {
            id: 'software-2',
            category: 'software',
            q: 'Do you handle front-end, back-end, and database development in-house?',
            a: 'Yes, we are a full-service agency. Our in-house elite engineering teams deliver turn-key solutions spanning high-fidelity React/Vite front-ends, ultra-fast Node.js/Go backend services, high-throughput database design (including relational SQL, Spanner, and NoSQL Firestore/PostgreSQL configurations), and advanced integration layers.'
          },
          {
            id: 'erp-1',
            category: 'erp',
            q: 'Can you integrate custom ERP systems with our existing software suite?',
            a: 'Absolutely. We specialize in custom ERP & CRM integrations and greenfield platform builds. We engineer secure middleware pipelines to synchronize data in real-time across Legacy mainframes, SAP, Salesforce, custom databases, and proprietary workflows. This eliminates data silos, optimizes resource tracking, and introduces unified admin dashboards.'
          },
          {
            id: 'erp-2',
            category: 'erp',
            q: 'How do you handle migration of legacy ERP data during a system upgrade?',
            a: 'We follow a meticulous 3-phase migration process: Auditing & Schema Mapping, Dry-Run Staging, and Hot-Swappable Phased Deployment. This includes automated verification testing to ensure 100% data integrity, preventing downtime, and maintaining full regulatory compliance throughout the migration.'
          },
          {
            id: 'cloud-1',
            category: 'cloud',
            q: 'Which cloud platforms do you support, and how do you handle scaling?',
            a: 'We natively support Google Cloud Platform (GCP), Amazon Web Services (AWS), and Microsoft Azure. We leverage containerization (Docker, Kubernetes) and serverless scale-to-zero paradigms (Google Cloud Run) to configure infrastructure that scales horizontally in milliseconds under heavy traffic spike loads while optimizing cloud budgets.'
          },
          {
            id: 'cloud-2',
            category: 'cloud',
            q: 'What is your approach to CI/CD and deployment automation?',
            a: 'We design and implement fully automated, high-speed CI/CD pipelines (GitHub Actions, GitLab CI) featuring integrated automated linting, vulnerability security scanning, unit testing, and isolated staging environments. No code is deployed to production without passing rigorous multi-stage automated verification steps.'
          },
          {
            id: 'pricing-1',
            category: 'pricing',
            q: 'How do you structure your project pricing and contract scoping?',
            a: 'We believe in 100% transparent pricing with no hidden retainers or unexpected billing. We deliver projects in scoped sprint milestones, providing clear fixed-price contracts for defined deliverables. Pricing ranges are fully aligned with complexity and are always backed by strict uptime and delivery SLAs.'
          },
          {
            id: 'pricing-2',
            category: 'pricing',
            q: 'Are there any ongoing fees or vendor lock-ins after delivery?',
            a: 'None. We operate on a strict zero-vendor-lock-in philosophy. Upon milestone completion, you retain 100% full intellectual property ownership, source-code files, and configuration scripts. Any engagement for support, server maintenance, or scale audits is fully optional and defined under clear monthly SLA agreements.'
          },
          {
            id: 'timeline-1',
            category: 'timeline',
            q: 'What is the typical timeline for an enterprise custom software deployment?',
            a: 'Timelines vary depending on complexity: typical business web platforms or initial MVPs are deployed in 4–6 weeks, whereas highly sophisticated enterprise-grade ERPs or deep AI orchestrations can range from 12–16 weeks. We utilize agile sprints with bi-weekly demos, ensuring you have real-time visibility into milestone velocity.'
          },
          {
            id: 'support-1',
            category: 'support',
            q: 'What kind of post-launch support and SLA guarantees do you provide?',
            a: 'We provide premium SLA contracts guaranteeing up to 99.99% uptime for your production systems. Our dedicated site reliability engineers (SREs) provide 24/7/365 active monitoring, emergency hot-fixing, performance tuning, and immediate dependency updates, ensuring your operations never experience unplanned downtime.'
          },
          {
            id: 'security-1',
            category: 'security',
            q: 'How do you guarantee the confidentiality and security of our intellectual property?',
            a: 'Before discussing any architectural blueprints or technical details, we execute a comprehensive, legally binding Non-Disclosure Agreement (NDA). All project materials, code repositories, and credentials are locked down behind hardware-security MFA and restricted on a strict least-privilege access model.'
          },
          {
            id: 'security-2',
            category: 'security',
            q: 'What security standards and compliance audits do you adhere to?',
            a: 'We write code that is secure by default, adhering strictly to OWASP Top 10 guidelines, and implementing encrypted TLS 1.3 endpoints, end-to-end data encryption (AES-256), and secure OAuth token validation. We actively align systems with HIPAA, SOC 2, and GDPR standards, providing fully detailed security audit reports prior to deployment.'
          }
        ]
      },
      hi: {
        title: 'सामान्य प्रश्न डेस्क',
        subtitle: 'अक्सर पूछे जाने वाले प्रश्न',
        desc: 'आर्यन ग्लोबल सॉल्यूशंस के साथ अपने अगले उच्च-प्रदर्शन डिजिटल निर्माण, एंटरप्राइज ऑर्केस्ट्रेशन और एसएलए-समर्थित सिस्टम के लिए साझेदारी करने के बारे में सब कुछ जानें।',
        searchPlaceholder: 'एंटरप्राइज प्रश्न खोजें...',
        allCategories: 'सभी समाधान',
        stillQuestions: 'अभी भी सवाल हैं?',
        stillQuestionsDesc: 'वह नहीं मिल रहा जो आप ढूंढ रहे हैं? आज ही सीधे हमारे प्रमुख सॉफ्टवेयर आर्किटेक्ट्स से बात करें।',
        contactCta: 'हमारे इंजीनियरिंग डेस्क से संपर्क करें',
        categories: {
          all: 'सभी समाधान',
          ai: 'एआई विकास',
          software: 'कस्टम सॉफ्टवेयर',
          erp: 'ईआरपी विकास',
          cloud: 'क्लाउड और डेवऑप्स',
          pricing: 'मूल्य निर्धारण',
          timeline: 'प्रोजेक्ट टाइमलाइन',
          support: 'समर्थन और रखरखाव',
          security: 'सुरक्षा और एनडीए'
        },
        faqs: [
          {
            id: 'ai-1',
            category: 'ai',
            q: 'आप किस प्रकार के कस्टम एआई विकास और स्वचालन क्षमताएं प्रदान करते हैं?',
            a: 'हम अत्याधुनिक बुद्धिमान स्वचालन प्रणाली, कस्टम एआई एजेंट ग्रिड और एलएलएम ऑर्केस्ट्रेशन परतें बनाते हैं। इसमें कस्टम फाइन-ट्यूनिंग, एंटरप्राइज ज्ञान आधारों के लिए रिट्रीवल-ऑगमेंटेड जेनरेशन (RAG), मल्टी-एजेंट फ्रेमवर्क, कंप्यूटर विज़न पाइपलाइन्स और मिथुन 1.5 प्रो और ओपनएआई जीपीटी -4 ओ जैसे एंटरप्राइज-ग्रेड मॉडल का उपयोग करके सुरक्षित एपीआई ब्रिज शामिल हैं।'
          },
          {
            id: 'ai-2',
            category: 'ai',
            q: 'एलएलएम तैनात करते समय आप डेटा गोपनीयता कैसे सुनिश्चित करते हैं और लीक को कैसे रोकते हैं?',
            a: 'डेटा संप्रभुता और गोपनीयता हमारे मूल सिद्धांत हैं। हम सुरक्षित मिडलवेयर परतें तैनात करते हैं जो संवेदनशील इनपुट को बाहरी मॉडल तक पहुंचने से पहले साफ करती हैं। अधिकतम अलगाव के लिए, हम गूगल क्लाउड (GCP) या AWS में निजी वर्चुअल क्लाउड (VPC) पर मॉडल होस्ट करते हैं, शून्य-डेटा-प्रतिधारण एपीआई लागू करते हैं, और स्थानीय अलगाव के लिए पूरी तरह से ऑन-प्रिमाइसेस ओपन-सोर्स एलएलएम (जैसे, लामा 3) को ऑर्केस्ट्रेट कर सकते हैं।'
          },
          {
            id: 'software-1',
            category: 'software',
            q: 'कस्टम सॉफ़्टवेयर विकास के लिए आप किन उद्योगों में विशेषज्ञता रखते हैं?',
            a: 'हम स्वास्थ्य सेवा, फिनटेक, आपूर्ति श्रृंखला रसद, ई-कॉमर्स, रियल-स्टेट और औद्योगिक IoT में फॉर्च्यून 500 निगमों, उच्च विकास उद्यम नेटवर्क और अग्रणी स्टार्टअप की सेवा करते हैं। हमारी टीम साफ उच्च-यातायात माइक्रोसर्विसेज से लेकर जटिल रीयल-टाइम डेटा स्ट्रीमिंग आर्किटेक्चर तक सब कुछ संभालती है, जो हमेशा सख्त एसएलए और शून्य विफलता बिंदुओं द्वारा समर्थित होती है।'
          },
          {
            id: 'software-2',
            category: 'software',
            q: 'क्या आप इन-हाउस फ्रंट-एंड, बैक-एंड और डेटाबेस विकास को संभालते हैं?',
            a: 'हाँ, हम एक पूर्ण-सेवा एजेंसी हैं। हमारी इन-हाउस विशिष्ट इंजीनियरिंग टीमें टर्न-की समाधान प्रदान करती हैं जिनमें हाई-फिडेलिटी रिएक्ट/वाइट फ्रंट-एंड्स, अल्ट्रा-फास्ट नोड.जेएस/गो बैकएंड सेवाएं, उच्च-थ्रूपुट डेटाबेस डिज़ाइन (सहित रिलेशनल एसक्यूएल, स्पैनर और नोएसक्यूएल फायरस्टोर/पोस्टग्रेएसक्यूएल कॉन्फ़िगरेशन) और उन्नत एकीकरण परतें शामिल हैं।'
          },
          {
            id: 'erp-1',
            category: 'erp',
            q: 'क्या आप कस्टम ईआरपी सिस्टम को हमारे मौजूदा सॉफ्टवेयर सुइट के साथ एकीकृत कर सकते हैं?',
            a: 'बिल्कुल। हम कस्टम ईआरपी और सीआरएम एकीकरण और नए प्लेटफॉर्म निर्माण में विशेषज्ञ हैं। हम विरासत मेनफ्रेम, एसएपी, सेल्सफोर्स, कस्टम डेटाबेस और मालिकाना वर्कफ़्लो में वास्तविक समय में डेटा सिंक्रनाइज़ करने के लिए सुरक्षित मिडलवेयर पाइपलाइन इंजीनियर करते हैं। यह डेटा साइलो को समाप्त करता है, संसाधन ट्रैकिंग को अनुकूलित करता है, और एकीकृत एडमिन डैशबोर्ड पेश करता है।'
          },
          {
            id: 'erp-2',
            category: 'erp',
            q: 'सिस्टम अपग्रेड के दौरान आप विरासत ईआरपी डेटा के प्रवासन को कैसे संभालते हैं?',
            a: 'हम एक सावधानीपूर्वक 3-चरण प्रवासन प्रक्रिया का पालन करते हैं: ऑडिटिंग और स्कीमा मैपिंग, ड्राई-रन स्टेजिंग, और हॉट-स्वैपेबल चरणबद्ध परिनियोजन। इसमें 100% डेटा अखंडता सुनिश्चित करने, डाउनटाइम को रोकने और प्रवासन के दौरान पूर्ण विनियामक अनुपालन बनाए रखने के लिए स्वचालित सत्यापन परीक्षण शामिल हैं।'
          },
          {
            id: 'cloud-1',
            category: 'cloud',
            q: 'आप किन क्लाउड प्लेटफॉर्म का समर्थन करते हैं, और आप स्केलिंग को कैसे संभालते हैं?',
            a: 'हम मूल रूप से गूगल क्लाउड प्लेटफॉर्म (GCP), अमेज़ॅन वेब सर्विसेज (AWS), और माइक्रोसॉफ्ट एज़्योर का समर्थन करते हैं। हम बुनियादी ढांचे को कॉन्फ़िगर करने के लिए कंटेनरीकरण (डॉकर, कुबेरनेट्स) और सर्वरलेस स्केल-टू-ज़ीरो प्रतिमानों (गूगल क्लाउड रन) का लाभ उठाते हैं जो क्लाउड बजट को अनुकूलित करते हुए भारी ट्रैफिक लोड के तहत मिलीसेकंड में क्षैतिज रूप से स्केल करते हैं।'
          },
          {
            id: 'cloud-2',
            category: 'cloud',
            q: 'सीआई/सीडी और परिनियोजन स्वचालन के लिए आपका क्या दृष्टिकोण है?',
            a: 'हम एकीकृत स्वचालित लिंटिंग, भेद्यता सुरक्षा स्कैनिंग, यूनिट परीक्षण और पृथक स्टेजिंग वातावरण की विशेषता वाले पूरी तरह से स्वचालित, उच्च गति सीआई/सीडी पाइपलाइन (गिटहब एक्शन, गिटलैब सीआई) का डिज़ाइन और कार्यान्वयन करते हैं। कठोर बहु-चरण स्वचालित सत्यापन चरणों को पारित किए बिना कोई भी कोड उत्पादन में तैनात नहीं किया जाता है।'
          },
          {
            id: 'pricing-1',
            category: 'pricing',
            q: 'आप अपने प्रोजेक्ट के मूल्य निर्धारण और अनुबंध के दायरे को कैसे संरचित करते हैं?',
            a: 'हम बिना किसी छिपे हुए शुल्क या अप्रत्याशित बिलिंग के 100% पारदर्शी मूल्य निर्धारण में विश्वास करते हैं। हम परिभाषित डिलिवरेबल्स के लिए स्पष्ट निश्चित-मूल्य अनुबंध प्रदान करते हुए, स्कोप्ड स्प्रिंट मील के पत्थर में प्रोजेक्ट वितरित करते हैं। मूल्य निर्धारण श्रेणियां पूरी तरह से जटिलता के साथ संरेखित हैं और हमेशा सख्त अपटाइम और डिलीवरी एसएलए द्वारा समर्थित हैं।'
          },
          {
            id: 'pricing-2',
            category: 'pricing',
            q: 'क्या डिलीवरी के बाद कोई आवर्ती शुल्क या वेंडर लॉक-इन हैं?',
            a: 'कोई नहीं। हम सख्त शून्य-विक्रेता-लॉक-इन दर्शन पर काम करते हैं। मील का पत्थर पूरा होने पर, आप 100% पूर्ण बौद्धिक संपदा स्वामित्व, स्रोत-कोड फाइलें और कॉन्फ़िगरेशन स्क्रिप्ट सुरक्षित करते हैं। समर्थन, सर्वर रखरखाव, या स्केल ऑडिट के लिए कोई भी निरंतर जुड़ाव पूरी तरह से वैकल्पिक है।'
          },
          {
            id: 'timeline-1',
            category: 'timeline',
            q: 'एंटरप्राइज कस्टम सॉफ्टवेयर परिनियोजन के लिए सामान्य समयरेखा क्या है?',
            a: 'जटिलता के आधार पर समयसीमा भिन्न होती है: सामान्य व्यावसायिक वेब प्लेटफॉर्म या प्रारंभिक एमवीपी 4-6 सप्ताह में तैनात किए जाते हैं, जबकि अत्यधिक परिष्कृत एंटरप्राइज-ग्रेड ईआरपी या गहन एआई ऑर्केस्ट्रेशन 12-16 सप्ताह तक हो सकते हैं। हम द्विसाप्ताहिक डेमो के साथ चुस्त स्प्रिंट का उपयोग करते हैं, जिससे आपको प्रगति पर वास्तविक समय की दृश्यता मिलती है।'
          },
          {
            id: 'support-1',
            category: 'support',
            q: 'आप किस प्रकार का पोस्ट-लॉन्च समर्थन और एसएलए गारंटी प्रदान करते हैं?',
            a: 'हम आपके उत्पादन प्रणालियों के लिए 99.99% तक अपटाइम की गारंटी देने वाले प्रीमियम एसएलए अनुबंध प्रदान करते हैं। हमारे समर्पित साइट विश्वसनीयता इंजीनियर (SREs) 24/7/365 सक्रिय निगरानी, आपातकालीन हॉट-फिक्सिंग, प्रदर्शन ट्यूनिंग और तत्काल निर्भरता अपडेट प्रदान करते हैं।'
          },
          {
            id: 'security-1',
            category: 'security',
            q: 'आप हमारे बौद्धिक संपदा की गोपनीयता और सुरक्षा की गारंटी कैसे देते हैं?',
            a: 'किसी भी वास्तुशिल्प ब्लूप्रिंट या तकनीकी विवरण पर चर्चा करने से पहले, हम एक व्यापक, कानूनी रूप से बाध्यकारी गैर-प्रकटीकरण समझौता (NDA) निष्पादित करते हैं। सभी प्रोजेक्ट सामग्री, कोड रिपॉजिटरी और क्रेडेंशियल्स को हार्डवेयर-सुरक्षा एमएफए के पीछे बंद कर दिया जाता है।'
          },
          {
            id: 'security-2',
            category: 'security',
            q: 'आप किन सुरक्षा मानकों और अनुपालन ऑडिट का पालन करते हैं?',
            a: 'हम डिफ़ॉल्ट रूप से सुरक्षित कोड लिखते हैं, ओडब्ल्यूएएसपी टॉप 10 दिशानिर्देशों का कड़ाई से पालन करते हैं, और एन्क्रिप्टेड टीएलएस 1.3 एंडपॉइंट्स, एंड-टू-एंड डेटा एन्क्रिप्शन (एईएस -256) और सुरक्षित ओथ टोकन सत्यापन लागू करते हैं। हम प्रणालियों को HIPAA, SOC 2 और GDPR मानकों के साथ संरेखित करते हैं।'
          }
        ]
      },
      ar: {
        title: 'مكتب الأسئلة الشائعة',
        subtitle: 'الأسئلة الأكثر تداولاً وإجاباتها',
        desc: 'اكتشف كل ما تحتاج لمعرفته حول الشراكة مع Aryan Global Solutions لبناء برمجياتك عالية الأداء والحلول المؤسسية المضمونة باتفاقيات الخدمة (SLA).',
        searchPlaceholder: 'ابحث في الأسئلة الشائعة...',
        allCategories: 'جميع الحلول',
        stillQuestions: 'هل لا تزال لديك أسئلة؟',
        stillQuestionsDesc: 'لا تجد ما تبحث عنه؟ تحدث مباشرة مع كبار مهندسي البرمجيات لدينا اليوم.',
        contactCta: 'اتصل بمكتبنا الهندسي',
        categories: {
          all: 'جميع الحلول',
          ai: 'تطوير الذكاء الاصطناعي',
          software: 'البرمجيات المخصصة',
          erp: 'أنظمة إدارة الموارد ERP',
          cloud: 'الحوسبة السحابية وDevOps',
          pricing: 'الأسعار والتسعير',
          timeline: 'الجدول الزمني للمشروع',
          support: 'الدعم والصيانة',
          security: 'الأمان واتفاقية السرية NDA'
        },
        faqs: [
          {
            id: 'ai-1',
            category: 'ai',
            q: 'ما هي قدرات تطوير الذكاء الاصطناعي والأتمتة المخصصة التي تقدمونها؟',
            a: 'نقوم ببناء أنظمة أتمتة ذكية متطورة، وشبكات وكلاء ذكاء اصطناعي مخصصة، وطبقات تنسيق النماذج اللغوية الكبيرة (LLM). يشمل ذلك الضبط الدقيق المخصص، والتوليد المعزز بالاسترجاع (RAG) لقواعد المعرفة المؤسسية، وأطر عمل الوكلاء المتعددين، ومسارات رؤية الكمبيوتر، وبوابات واجهة برمجة التطبيقات الآمنة باستخدام نماذج رائدة مثل Gemini 1.5 Pro وOpenAI GPT-4o.'
          },
          {
            id: 'ai-2',
            category: 'ai',
            q: 'كيف تضمنون خصوصية البيانات وتمنعون التسريبات عند نشر نماذج اللغة الكبيرة؟',
            a: 'سيادة البيانات وخصوصيتها أمران أساسيان لدينا. ننشر طبقات وسيطة آمنة تقوم بتنقية المدخلات الحساسة قبل وصولها إلى النماذج الخارجية. ولعزل أقصى، نستضيف النماذج على سحابات افتراضية خاصة (VPC) في منصة Google Cloud أو AWS، وننفذ واجهات برمجة تطبيقات لعدم الاحتفاظ بالبيانات، ويمكننا تشغيل نماذج مفتوحة المصدر بالكامل محلياً (مثل Llama 3) عندما تتطلب الامتثال عزلاً تاماً.'
          },
          {
            id: 'software-1',
            category: 'software',
            q: 'ما هي القطاعات التي تتخصصون فيها لتطوير البرمجيات المخصصة؟',
            a: 'نخدم شركات Fortune 500، وشبكات الاستثمار عالية النمو، والشركات الناشئة الرائدة في مجالات الرعاية الصحية، والتكنولوجيا المالية، وسلاسل الإمداد، والتجارة الإلكترونية، والعقارات، وإنترنت الأشياء الصناعي. يتعامل فريقنا مع كل شيء بدءاً من الخدمات الدقيقة النظيفة عالية الحركة وحتى البنى المعقدة لبث البيانات في الوقت الفعلي، والمدعومة دائماً باتفاقيات مستوى خدمة صارمة.'
          },
          {
            id: 'software-2',
            category: 'software',
            q: 'هل تقومون بتطوير الواجهات الأمامية والخلفية وقواعد البيانات محلياً؟',
            a: 'نعم، نحن وكالة تقدم خدمات متكاملة. تقدم فرقنا الهندسية النخبوية حلولاً جاهزة تشمل واجهات React/Vite الأمامية عالية الدقة، وخدمات Node.js/Go الخلفية فائقة السرعة، وتصميم قواعد البيانات عالية الإنتاجية (بما في ذلك SQL وSpanner وNoSQL Firestore/PostgreSQL)، وطبقات التكامل المتقدمة.'
          },
          {
            id: 'erp-1',
            category: 'erp',
            q: 'هل يمكنكم دمج أنظمة ERP المخصصة مع مجموعة البرامج الحالية لدينا؟',
            a: 'بالتأكيد. نحن متخصصون في عمليات دمج ERP وCRM المخصصة وبناء منصات جديدة بالكامل. نقوم بهندسة خطوط وسيطة آمنة لمزامنة البيانات في الوقت الفعلي عبر الأنظمة القديمة وSAP وSalesforce وقواعد البيانات المخصصة وسير العمل الداخلي. يؤدي ذلك إلى القضاء على صوامع البيانات وتحسين تتبع الموارد.'
          },
          {
            id: 'erp-2',
            category: 'erp',
            q: 'كيف تتعاملون مع هجرة بيانات ERP القديمة أثناء ترقية النظام؟',
            a: 'نتبع عملية هجرة دقيقة تتكون من 3 مراحل: التدقيق ورسم الخرائط، والبيئة التجريبية، والنشر التدريجي القابل للتبديل دون توقف المرفق باختبارات التحقق التلقائي لضمان سلامة البيانات بنسبة 100٪، ومنع التوقف عن العمل، والحفاظ على الامتثال التنظيمي الكامل.'
          },
          {
            id: 'cloud-1',
            category: 'cloud',
            q: 'ما هي المنصات السحابية التي تدعمونها، وكيف تتعاملون مع التوسع؟',
            a: 'ندعم محلياً Google Cloud Platform (GCP) وAmazon Web Services (AWS) وMicrosoft Azure. نحن نستفيد من الحاويات (Docker، Kubernetes) ونماذج الحوسبة بدون خادم لتكوين بنية تحتية تتوسع أفقياً في أجزاء من الثانية تحت أحمال حركة المرور الثقيلة مع تحسين الميزانيات السحابية.'
          },
          {
            id: 'cloud-2',
            category: 'cloud',
            q: 'ما هو نهجكم في أتمتة النشر والتكامل المستمر CI/CD؟',
            a: 'نقوم بتصميم وتنفيذ خطوط أنابيب وتكامل ونشر مستمر (GitHub Actions, GitLab CI) مؤتمتة بالكامل وممتازة تتميز بفحص الأمان المتكامل الآلي واختبارات الوحدة وبيئات الاستضافة المعزولة. لا يتم دفع أي كود للإنتاج دون اجتياز اختبارات صارمة متعددة المراحل.'
          },
          {
            id: 'pricing-1',
            category: 'pricing',
            q: 'كيف تنظمون تسعير المشاريع وتحديد نطاق التعاقد؟',
            a: 'نؤمن بالتسعير الشفاف بنسبة 100٪ دون أي رسوم خفية أو فواتير غير متوقعة. نسلم المشاريع في شكل مراحل سبرينت محددة، مع تقديم عقود واضحة ومحددة السعر للمخرجات. تتوافق نطاقات الأسعار تماماً مع التعقيد وتدعمها دائماً اتفاقيات مستوى الخدمة الصارمة.'
          },
          {
            id: 'pricing-2',
            category: 'pricing',
            q: 'هل هناك أي رسوم مستمرة أو قيود احتكار للموردين بعد التسليم؟',
            a: 'لا توجد على الإطلاق. نحن نعمل وفقاً لفلسفة صارمة لعدم احتكار الموردين. عند اكتمال المراحل المتفق عليها، تحتفظ بالملكية الفكرية الكاملة بنسبة 100٪، وملفات كود المصدر، ونصوص الإعداد. أي تعاقد مستمر للصيانة أو الدعم هو اختياري تماماً.'
          },
          {
            id: 'timeline-1',
            category: 'timeline',
            q: 'ما هو الجدول الزمني النموذجي لنشر برامج مخصصة للمؤسسات؟',
            a: 'تختلف الجداول الزمنية اعتماداً على التعقيد: يتم نشر مواقع الويب الأساسية أو النماذج الأولية الأولى (MVP) في غضون 4-6 أسابيع، في حين أن أنظمة ERP الضخمة أو عمليات تنسيق الذكاء الاصطناعي العميقة قد تستغرق من 12 إلى 16 أسبوعاً. نحن نستخدم سبرينت رشيقة وعروض دورية لمتابعة سرعة الإنجاز.'
          },
          {
            id: 'support-1',
            category: 'support',
            q: 'ما نوع دعم ما بعد الإطلاق وضمانات اتفاقية مستوى الخدمة (SLA) التي تقدمونها؟',
            a: 'نحن نقدم عقود اتفاقية مستوى خدمة ممتازة تضمن وقت تشغيل يصل إلى 99.99٪ لبيئات الإنتاج الخاصة بك. يقدم مهندسو موثوقية الموقع (SRE) المخصصون لدينا مراقبة نشطة على مدار الساعة طوال أيام الأسبوع وتحديثات فورية للتبادليات لمنع أي توقف غير مخطط له.'
          },
          {
            id: 'security-1',
            category: 'security',
            q: 'كيف تضمنون سرية وأمان حقوق الملكية الفكرية الخاصة بنا؟',
            a: 'قبل مناقشة أي مخططات هندسية أو تفاصيل فنية، نوقع اتفاقية عدم إفصاح شاملة وملزمة قانوناً (NDA). يتم قفل جميع مواد المشروع ومستودعات الأكواد خلف مصادقة ثنائية MFA ومبدأ الامتياز الأقل للموظفين.'
          },
          {
            id: 'security-2',
            category: 'security',
            q: 'ما هي معايير الأمان وتدقيق الامتثال التي تلتزمون بها؟',
            a: 'نكتب أكواداً برمجية آمنة افتراضياً، ملتزمين بدليل OWASP العشرة الأوائل، ونطبق اتصالات TLS 1.3 المشفرة، وتشفير البيانات الشامل (AES-256) والتحقق الآمن من رموز تفويض OAuth ونطابق الأنظمة مع معايير HIPAA وSOC 2 وGDPR.'
          }
        ]
      },
      fr: {
        title: 'Espace FAQ',
        subtitle: 'Questions Fréquemment Posées',
        desc: 'Tout ce que vous devez savoir pour vous associer à Aryan Global Solutions pour votre prochain développement numérique haute performance, orchestration d\'entreprise et systèmes sous SLA.',
        searchPlaceholder: 'Rechercher dans la FAQ...',
        allCategories: 'Toutes les solutions',
        stillQuestions: 'Vous avez encore des questions ?',
        stillQuestionsDesc: 'Vous ne trouvez pas ce que vous cherchez ? Parlez directement avec nos architectes logiciels principaux aujourd\'hui.',
        contactCta: 'Contacter notre bureau d\'ingénierie',
        categories: {
          all: 'Toutes les solutions',
          ai: 'Développement IA',
          software: 'Logiciel sur Mesure',
          erp: 'Développement ERP',
          cloud: 'Cloud & DevOps',
          pricing: 'Tarification',
          timeline: 'Calendrier de Projet',
          support: 'Support & Maintenance',
          security: 'Sécurité & NDA'
        },
        faqs: [
          {
            id: 'ai-1',
            category: 'ai',
            q: 'Quels types de développement d\'IA sur mesure et de capacités d\'automatisation offrez-vous ?',
            a: 'Nous construisons des systèmes d\'automatisation intelligente de pointe, des réseaux d\'agents IA sur mesure et des couches d\'orchestration LLM. Cela comprend le fine-tuning personnalisé, la génération augmentée par récupération (RAG) pour les bases de connaissances d\'entreprise, les frameworks multi-agents, les pipelines de vision par ordinateur et des ponts API sécurisés utilisant des modèles d\'entreprise tels que Gemini 1.5 Pro et OpenAI GPT-4o.'
          },
          {
            id: 'ai-2',
            category: 'ai',
            q: 'Comment assurez-vous la confidentialité des données et prévenez-vous les fuites lors du déploiement de LLM ?',
            a: 'La souveraineté et la confidentialité des données sont fondamentales. Nous déployons des couches de middleware sécurisées qui désinfectent les entrées sensibles avant qu\'elles n\'atteignent les modèles externes. Pour une isolation maximale, nous hébergeons les modèles sur des clouds privés virtuels (VPC) dans Google Cloud Platform (GCP) ou AWS, implémentons des API de rétention de données zéro au niveau de l\'entreprise, et pouvons orchestrer des LLM open-source entièrement sur site (par exemple, Llama 3) lorsque la conformité l\'exige.'
          },
          {
            id: 'software-1',
            category: 'software',
            q: 'Dans quels secteurs vous spécialisez-vous pour le développement de logiciels sur mesure ?',
            a: 'Nous servons les entreprises du Fortune 500, les réseaux de capital-risque à forte croissance et les startups pionnières dans les domaines de la santé, de la fintech, de la logistique, de l\'e-commerce, de l\'immobilier et de l\'IoT industriel. Notre équipe gère tout, des microservices propres à fort trafic aux architectures complexes de streaming de données en temps réel, toujours soutenus par des SLA stricts.'
          },
          {
            id: 'software-2',
            category: 'software',
            q: 'Gérez-vous le développement front-end, back-end et base de données en interne ?',
            a: 'Oui, nous sommes une agence de services complets. Nos équipes d\'ingénieurs d\'élite en interne fournissent des solutions clés en main allant des front-ends React/Vite haute fidélité aux services back-end Node.js/Go ultra-rapides, en passant par la conception de bases de données à haut débit (SQL, Spanner, NoSQL Firestore/PostgreSQL) et des couches d\'intégration avancées.'
          },
          {
            id: 'erp-1',
            category: 'erp',
            q: 'Pouvez-vous intégrer des systèmes ERP personnalisés avec notre suite logicielle existante ?',
            a: 'Absolument. Nous sommes spécialisés dans les intégrations ERP & CRM personnalisées et la création de plateformes à partir de zéro. Nous concevons des pipelines de middleware sécurisés pour synchroniser les données en temps réel entre les mainframes hérités, SAP, Salesforce, les bases de données personnalisées et les flux de travail propriétaires, éliminant les silos de données.'
          },
          {
            id: 'erp-2',
            category: 'erp',
            q: 'Comment gérez-vous la migration des données ERP existantes lors d\'une mise à niveau du système ?',
            a: 'Nous suivons un processus de migration méticuleux en 3 phases : Audit & Cartographie des Schémas, Simulation en Staging, et Déploiement Progressif à chaud. Cela comprend des tests de vérification automatisés pour garantir une intégrité des données à 100%, évitant les interruptions d\'activité et maintenant une conformité réglementaire totale.'
          },
          {
            id: 'cloud-1',
            category: 'cloud',
            q: 'Quelles plateformes cloud prenez-vous en charge et comment gérez-vous la mise à l\'échelle ?',
            a: 'Nous prenons en charge nativement Google Cloud Platform (GCP), Amazon Web Services (AWS) et Microsoft Azure. Nous exploitons la conteneurisation (Docker, Kubernetes) et les paradigmes serverless (Google Cloud Run) pour configurer une infrastructure qui évolue horizontalement en quelques millisecondes sous de fortes charges de trafic.'
          },
          {
            id: 'cloud-2',
            category: 'cloud',
            q: 'Quelle est votre approche de la CI/CD et de l\'automatisation des déploiements ?',
            a: 'Nous concevons et mettons en œuvre des pipelines CI/CD (GitHub Actions, GitLab CI) entièrement automatisés et rapides, comprenant un peluchage automatique intégré, un balayage de sécurité, des tests unitaires et des environnements de staging isolés. Aucun code n\'est déployé en production sans passer des étapes rigoureuses de validation.'
          },
          {
            id: 'pricing-1',
            category: 'pricing',
            q: 'Comment structurez-vous les tarifs de vos projets et la définition des contrats ?',
            a: 'Nous croyons en une tarification 100% transparente, sans frais cachés ni facturation imprévue. Nous livrons des projets par étapes de sprints définies, fournissant des contrats à prix fixe clairs pour les livrables spécifiés. Les gammes de prix sont alignées sur la complexité et soutenues par des SLA stricts.'
          },
          {
            id: 'pricing-2',
            category: 'pricing',
            q: 'Y a-t-il des frais récurrents ou des verrous d\'éditeur après la livraison ?',
            a: 'Aucun. Nous opérons sur une philosophie stricte de zéro verrouillage éditeur. Une fois les étapes livrées et réglées, vous conservez la pleine propriété intellectuelle (100%), les fichiers de code source et les scripts de configuration. Tout engagement futur pour le support est facultatif.'
          },
          {
            id: 'timeline-1',
            category: 'timeline',
            q: 'Quel est le calendrier typique pour le déploiement d\'un logiciel d\'entreprise ?',
            a: 'Les délais varient selon la complexité : les plateformes web classiques ou les MVP initiaux sont déployés en 4 à 6 semaines, tandis que les ERP d\'entreprise complexes ou les orchestrations d\'IA profondes peuvent aller de 12 à 16 semaines. Nous utilisons des sprints agiles avec des démos toutes les deux semaines.'
          },
          {
            id: 'support-1',
            category: 'support',
            q: 'Quel type de support post-lancement et de garanties de niveau de service (SLA) offrez-vous ?',
            a: 'Nous fournissons des contrats SLA premium garantissant jusqu\'à 99,99 % de temps de fonctionnement pour vos systèmes de production. Nos ingénieurs de fiabilité de site (SRE) dédiés assurent une surveillance active 24/7/365, des correctifs d\'urgence et un réglage des performances.'
          },
          {
            id: 'security-1',
            category: 'security',
            q: 'Comment garantissez-vous la confidentialité et la sécurité de notre propriété intellectuelle ?',
            a: 'Avant de discuter de plans architecturaux ou de détails techniques, nous signons un accord de non-divulgation (NDA) complet et juridiquement contraignant. Tous les documents du projet, les dépôts de code et les identifiants sont verrouillés derrière une authentification MFA matérielle.'
          },
          {
            id: 'security-2',
            category: 'security',
            q: 'À quelles normes de sécurité et audits de conformité adhérez-vous ?',
            a: 'Nous écrivons du code sécurisé par défaut, respectant strictement les directives OWASP Top 10, et mettons en œuvre des terminaux TLS 1.3 chiffrés, un chiffrement complet des données (AES-256) et une validation sécurisée des jetons OAuth. Nous alignons les systèmes avec les normes HIPAA, SOC 2 et RGPD.'
          }
        ]
      },
      de: {
        title: 'FAQ-Desk',
        subtitle: 'Häufig gestellte Fragen',
        desc: 'Erfahren Sie alles, was Sie über die Partnerschaft mit Aryan Global Solutions für Ihr nächstes High-Performance-Digitalprojekt, Ihre Enterprise-Orchestrierung und SLA-gestützte Systeme wissen müssen.',
        searchPlaceholder: 'FAQ durchsuchen...',
        allCategories: 'Alle Lösungen',
        stillQuestions: 'Haben Sie noch Fragen?',
        stillQuestionsDesc: 'Nicht gefunden, wonach Sie suchen? Sprechen Sie noch heute direkt mit unseren leitenden Software-Architekten.',
        contactCta: 'Kontaktieren Sie unser Engineering-Desk',
        categories: {
          all: 'Alle Lösungen',
          ai: 'KI-Entwicklung',
          software: 'Individualsoftware',
          erp: 'ERP-Entwicklung',
          cloud: 'Cloud & DevOps',
          pricing: 'Preise',
          timeline: 'Projekt-Zeitplan',
          support: 'Support & Wartung',
          security: 'Sicherheit & NDA'
        },
        faqs: [
          {
            id: 'ai-1',
            category: 'ai',
            q: 'Welche Arten von kundenspezifischer KI-Entwicklung und Automatisierungsfunktionen bieten Sie an?',
            a: 'Wir bauen hochmoderne intelligente Automatisierungssysteme, maßgeschneiderte KI-Agentennetzwerke und LLM-Orchestrierungsebenen. Dies umfasst kundenspezifisches Fine-Tuning, Retrieval-Augmented Generation (RAG) für Wissensdatenbanken in Unternehmen, Multi-Agenten-Frameworks, Computer-Vision-Pipelines und sichere API-Brücken unter Verwendung von Modellen wie Gemini 1.5 Pro und OpenAI GPT-4o.'
          },
          {
            id: 'ai-2',
            category: 'ai',
            q: 'Wie gewährleisten Sie den Datenschutz und verhindern Datenlecks beim Einsatz von LLMs?',
            a: 'Datensouveränität und Privatsphäre sind grundlegend. Wir setzen sichere Middleware-Ebenen ein, die sensible Eingaben bereinigen, bevor sie externe Modelle erreichen. Für maximale Isolation hosten wir Modelle auf privaten virtuellen Clouds (VPC) in Google Cloud (GCP) oder AWS, implementieren Zero-Data-Retention-APIs und können On-Premise-Open-Source-LLMs (z. B. Llama 3) orchestrieren.'
          },
          {
            id: 'software-1',
            category: 'software',
            q: 'Auf welche Branchen sind Sie bei der Entwicklung von Individualsoftware spezialisiert?',
            a: 'Wir bedienen Fortune-500-Unternehmen, wachstumsstarke Venture-Netzwerke und bahnbrechende Startups in den Bereichen Gesundheitswesen, Fintech, Lieferkettenlogistik, E-Commerce, Immobilien und industrielles IoT. Unser Team deckt alles ab, von sauberen, hochfrequentierten Microservices bis hin zu komplexen Echtzeit-Datenstreaming-Architekturen.'
          },
          {
            id: 'software-2',
            category: 'software',
            q: 'Übernehmen Sie die Front-End-, Back-End- und Datenbankentwicklung intern?',
            a: 'Ja, wir sind eine Full-Service-Agentur. Unsere hausinternen Elite-Engineering-Teams liefern schlüsselfertige Lösungen, die hochpräzise React/Vite-Front-Ends, ultraschnelle Node.js/Go-Back-End-Dienste, hochleistungsfähiges Datenbankdesign (einschließlich relationaler SQL, Spanner und NoSQL Firestore/PostgreSQL) und fortschrittliche Integrationsschichten umfassen.'
          },
          {
            id: 'erp-1',
            category: 'erp',
            q: 'Können Sie maßgeschneiderte ERP-Systeme in unsere bestehende Software-Suite integrieren?',
            a: 'Absolut. Wir sind auf maßgeschneiderte ERP- und CRM-Integrationen und den Neuaufbau von Plattformen spezialisiert. Wir entwickeln sichere Middleware-Pipelines, um Daten in Echtzeit über Legacy-Mainframes, SAP, Salesforce, benutzerdefinierte Datenbanken und proprietäre Workflows hinweg zu synchronisieren.'
          },
          {
            id: 'erp-2',
            category: 'erp',
            q: 'Wie handhaben Sie die Migration von Altsystem-ERP-Daten während eines System-Upgrades?',
            a: 'Wir folgen einem sorgfältigen 3-Phasen-Migrationsprozess: Auditierung & Schema-Mapping, Dry-Run-Staging und Hot-Swappable Phased Deployment. Dies umfasst automatisierte Verifizierungstests zur Gewährleistung einer 100%igen Datenintegrität bei gleichzeitiger Vermeidung von Ausfallzeiten.'
          },
          {
            id: 'cloud-1',
            category: 'cloud',
            q: 'Welche Cloud-Plattformen unterstützen Sie und wie handhaben Sie die Skalierung?',
            a: 'Wir unterstützen Google Cloud Platform (GCP), Amazon Web Services (AWS) und Microsoft Azure nativ. Wir nutzen Containerisierung (Docker, Kubernetes) und Serverless-Modelle (Google Cloud Run), um eine Infrastruktur zu konfigurieren, die bei hoher Last in Millisekunden horizontal skaliert.'
          },
          {
            id: 'cloud-2',
            category: 'cloud',
            q: 'Wie stehen Sie zu CI/CD und Bereitstellungsautomatisierung?',
            a: 'Wir entwerfen und implementieren vollautomatische, schnelle CI/CD-Pipelines (GitHub Actions, GitLab CI) mit integriertem automatisierten Linting, Sicherheitsprüfungen, Komponententests und isolierten Staging-Umgebungen. Kein Code wird ohne das Bestehen strenger Prüfungen bereitgestellt.'
          },
          {
            id: 'pricing-1',
            category: 'pricing',
            q: 'Wie strukturieren Sie Ihre Projektpreise und Vertragsgestaltung?',
            a: 'Wir glauben an eine 100% transparente Preisgestaltung ohne versteckte Gebühren oder unerwartete Abrechnungen. Wir liefern Projekte in definierten Sprints und bieten klare Festpreisverträge für spezifizierte Leistungen. Unsere Preisklassen sind an der Komplexität ausgerichtet und durch SLA-Verträge abgesichert.'
          },
          {
            id: 'pricing-2',
            category: 'pricing',
            q: 'Gibt es nach der Lieferung laufende Gebühren oder eine Anbieterbindung (Vendor Lock-in)?',
            a: 'Keine. Wir arbeiten nach einer strengen Zero-Vendor-Lock-in-Philosophie. Nach Abschluss des Sprints behalten Sie das volle geistige Eigentum (100%), den Quellcode und die Konfigurationsskripte. Jede laufende Wartung oder Support-Vereinbarung ist vollkommen optional.'
          },
          {
            id: 'timeline-1',
            category: 'timeline',
            q: 'Wie sieht der typische Zeitrahmen für die Bereitstellung von Individualsoftware aus?',
            a: 'Die Zeitrahmen variieren je nach Komplexität: Typische Webplattformen oder MVPs werden in 4–6 Wochen bereitgestellt, während hochkomplexe ERP-Systeme oder tiefe KI-Orchestrierungen 12–16 Wochen dauern können. Wir nutzen agile Sprints mit zweiwöchentlichen Demos.'
          },
          {
            id: 'support-1',
            category: 'support',
            q: 'Welche Art von Post-Launch-Support und SLA-Garantien bieten Sie an?',
            a: 'Wir bieten erstklassige SLA-Verträge an, die eine Betriebszeit von bis zu 99,99 % für Ihre Produktionssysteme garantieren. Unsere dedizierten Site Reliability Engineers (SREs) bieten rund um die Uhr (24/7/365) aktive Überwachung, Notfall-Fehlerbehebung und Performance-Tuning.'
          },
          {
            id: 'security-1',
            category: 'security',
            q: 'Wie garantieren Sie die Vertraulichkeit und Sicherheit unseres geistigen Eigentums?',
            a: 'Bevor wir über architektonische Details sprechen, schließen wir eine umfassende, rechtsverbindliche Geheimhaltungsvereinbarung (NDA) ab. Alle Projektmaterialien, Code-Repositories und Anmeldedaten sind durch Hardware-Sicherheits-MFA und ein striktes Least-Privilege-Modell geschützt.'
          },
          {
            id: 'security-2',
            category: 'security',
            q: 'Welche Sicherheitsstandards und Compliance-Audits halten Sie ein?',
            a: 'Wir schreiben standardmäßig sicheren Code, der sich strikt an die OWASP Top 10 Richtlinien hält, und implementieren verschlüsselte TLS 1.3-Endpunkte, AES-256-Verschlüsselung und OAuth-Token-Validierung. Wir richten Systeme an HIPAA, SOC 2 und DSGVO aus.'
          }
        ]
      }
    };
  }, []);

  const currentLoc = faqLoc[language as keyof typeof faqLoc] || faqLoc.en;

  // Filter FAQs based on search input and active category
  const filteredFaqs = useMemo(() => {
    return currentLoc.faqs.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.q.toLowerCase().includes(query) || 
        item.a.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [currentLoc, activeCategory, searchQuery]);

  // Handle SEO Structured Data (JSON-LD FAQPage)
  useEffect(() => {
    // Generate JSON-LD schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": currentLoc.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    const scriptId = 'ags-faq-jsonld-schema';
    
    // Remove existing script if any
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Append new script
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [currentLoc]);

  const toggleAccordion = (id: string) => {
    setOpenIdx(openIdx === id ? null : id);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategoryIcon = (catKey: string) => {
    switch (catKey) {
      case 'all': return <Sparkles className="h-3.5 w-3.5" />;
      case 'ai': return <Code className="h-3.5 w-3.5 text-cyan-400" />;
      case 'software': return <Code className="h-3.5 w-3.5 text-indigo-400" />;
      case 'erp': return <Database className="h-3.5 w-3.5 text-purple-400" />;
      case 'cloud': return <Cloud className="h-3.5 w-3.5 text-blue-400" />;
      case 'pricing': return <DollarSign className="h-3.5 w-3.5 text-emerald-400" />;
      case 'timeline': return <Calendar className="h-3.5 w-3.5 text-amber-400" />;
      case 'support': return <HeartHandshake className="h-3.5 w-3.5 text-rose-400" />;
      case 'security': return <Eye className="h-3.5 w-3.5 text-teal-400" />;
      default: return <HelpCircle className="h-3.5 w-3.5" />;
    }
  };

  return (
    <section id="faq" className="py-28 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e] overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 font-mono">
              {currentLoc.title}
            </h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight"
          >
            {currentLoc.subtitle}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            {currentLoc.desc}
          </motion.p>
        </div>

        {/* Dynamic Interactive Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative flex items-center">
            <Search className="absolute left-4 h-4 w-4 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLoc.searchPlaceholder}
              className="w-full bg-[#090d22]/80 backdrop-blur-md border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-xs text-gray-500 hover:text-white cursor-pointer font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs Layout */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap md:flex-nowrap gap-1.5 p-1 bg-white/[0.02] border border-white/5 rounded-2xl max-w-full overflow-x-auto scrollbar-none pb-2 md:pb-1 select-none">
            {Object.keys(currentLoc.categories).map((catKey) => {
              const isActive = activeCategory === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => {
                    setActiveCategory(catKey);
                    setOpenIdx(null); // Close accordion on change to preserve rhythm
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all duration-300 uppercase tracking-wider ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/25 scale-[1.02]'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {getCategoryIcon(catKey)}
                  <span>{currentLoc.categories[catKey as keyof typeof currentLoc.categories]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion Questions Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    layout="position"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className={`bg-[#090d22]/60 border rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${
                      isOpen 
                        ? 'border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.05)]' 
                        : 'border-white/5 hover:border-white/10'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none cursor-pointer"
                    >
                      <div className="flex gap-4 items-center pr-4">
                        <div className={`p-2 rounded-xl transition-colors shrink-0 ${
                          isOpen ? 'bg-indigo-500/10 text-cyan-400' : 'bg-white/5 text-gray-400'
                        }`}>
                          {getCategoryIcon(faq.category)}
                        </div>
                        <span className="text-sm sm:text-base font-extrabold text-white tracking-wide">
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
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-1 sm:px-8 sm:pb-7 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal border-t border-white/5 bg-[#050816]/40 select-text">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-[#090d22]/30 border border-white/5 rounded-2xl backdrop-blur-md"
              >
                <ShieldAlert className="h-10 w-10 text-cyan-400 mx-auto mb-3 opacity-60 animate-bounce" />
                <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest">No matching results found</h4>
                <p className="text-xs text-gray-500 mt-1">Try refining your search terms or picking another category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Still Have Questions Premium CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mt-20 relative rounded-3xl p-[1px] overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
        >
          <div className="bg-[#090d22]/95 backdrop-blur-2xl rounded-[23px] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Visual background elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 p-3.5 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-cyan-950/40 border border-indigo-500/20 text-cyan-400">
                <MessageSquare className="h-6 w-6 animate-pulse" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-black text-white tracking-wide">
                  {currentLoc.stillQuestions}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-md">
                  {currentLoc.stillQuestionsDesc}
                </p>
              </div>
            </div>

            <button
              onClick={handleContactClick}
              className="w-full md:w-auto px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider bg-white text-black hover:bg-gray-100 active:scale-95 transition-all duration-200 cursor-pointer text-center whitespace-nowrap shadow-xl"
            >
              {currentLoc.contactCta}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
