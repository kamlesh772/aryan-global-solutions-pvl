import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'ar' | 'fr' | 'de';
export type Currency = 'USD' | 'EUR' | 'GBP' | 'AED';
export type Theme = 'dark' | 'light';
export type AppSection = 'home' | 'hire' | 'careers' | 'resources' | 'portal';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (cur: Currency) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  activeSection: AppSection;
  setActiveSection: (sec: AppSection) => void;
  t: (key: string) => string;
  formatPrice: (usdAmount: number) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav & General
    home: 'Home',
    services: 'Services',
    whyUs: 'Why Us',
    portfolio: 'Portfolio',
    industries: 'Industries',
    process: 'Process',
    pricing: 'Pricing',
    faq: 'FAQ',
    consultation: 'Schedule',
    contact: 'Contact',
    blog: 'Insights',
    careers: 'Careers',
    resources: 'Resources',
    hireDevs: 'Hire Developers',
    clientPortal: 'Client Portal',
    ctaQuote: 'Get Free Quote',
    companyName: 'ARYAN GLOBAL SOLUTIONS',
    tagline: 'Enterprise Software & AI Engineering',
    
    // Hero
    heroTitle: 'Enterprise AI Solutions for Modern Businesses & AI Orchestrations',
    heroDesc: 'Aryan Global Solutions is an elite custom software engineering and intelligent automation agency. We build SLA-backed, high-performance, hardened architectures for Fortune 500 corporations and hyper-growth venture networks.',
    heroCtaPrimary: 'Engage Our Engineering Desk',
    heroCtaSecondary: 'Explore Case Studies',
    trustedBy: 'TRUSTED BY GLOBAL LEADERS & ENTERPRISES',
    
    // Stats
    statProjects: 'Enterprise Systems Deployed',
    statRetention: 'Client Partnership Retention',
    statSLA: 'Uptime SLA Guarantee',
    statValue: 'Client Venture Value Enabled',
    
    // Pricing general
    priceTitle: 'Transparent Pricing',
    priceDesc: 'No hidden retainers, no unexpected billing. Fixed-scope sprint deliverables backed by strict SLA contracts.',
    priceCta: 'Launch Project Sprint',
    priceQuote: 'Fixed Quote',
    
    // Careers General
    careersTitle: 'Join the Elite 1% Engineering Squad',
    careersDesc: 'We seek absolute software craftspeople. We offer fully remote autonomy, multi-region healthcare, high-performance workstation budgets, and ownership-equity participation.',
    careersOpenRoles: 'Current Openings',
    
    // Resources General
    resourcesTitle: 'Enterprise Playbooks & Research',
    resourcesDesc: 'Download our comprehensive architectural blueprints, whitepapers, and technical guides designed for CTOs, VPs, and engineering directors.',
    resourcesDownload: 'Download Resource Document',
    
    // Hire Devs General
    hireTitle: 'Assemble Your Dedicated SLA-Backed Dev Team',
    hireDesc: 'Hire vetted senior engineers, database architects, and AI orchestrators within 48 hours. Scalable dedicated squads fully integrated into your Slack and Jira pipelines.',
    hireCalculator: 'Squad Budget Estimator',
  },
  ar: {
    home: 'الرئيسية',
    services: 'الخدمات',
    whyUs: 'لماذا نحن',
    portfolio: 'أعمالنا',
    industries: 'القطاعات',
    process: 'آلية العمل',
    pricing: 'الأسعار',
    faq: 'الأسئلة الشائعة',
    consultation: 'جدولة استشارة',
    contact: 'اتصل بنا',
    blog: 'المدونة',
    careers: 'الوظائف',
    resources: 'الموارد',
    hireDevs: 'توظيف المطورين',
    clientPortal: 'بوابة العملاء',
    ctaQuote: 'احصل على عرض سعر',
    companyName: 'أريان للحلول العالمية',
    tagline: 'هندسة البرمجيات للمؤسسات والذكاء الاصطناعي',
    
    heroTitle: 'حلول الذكاء الاصطناعي للمؤسسات الحديثة & تطبيقات الذكاء الاصطناعي',
    heroDesc: 'أريان للحلول العالمية هي وكالة نخبة لهندسة البرمجيات المخصصة والأتمتة الذكية. نقوم ببناء هياكل برمجية متطورة ومحمية ومدعومة باتفاقيات مستوى الخدمة (SLA) لمؤسسات فورتشن 500 والشركات سريعة النمو.',
    heroCtaPrimary: 'تواصل مع مكتب الهندسة لدينا',
    heroCtaSecondary: 'استكشف دراسات الحالة',
    trustedBy: 'موضع ثقة رواد الأعمال والشركات العالمية',
    
    statProjects: 'أنظمة مؤسسات تم نشرها',
    statRetention: 'نسبة الاحتفاظ بالشراكة',
    statSLA: 'ضمان جهوزية التشغيل SLA',
    statValue: 'القيمة المالية التي مكنّاها لعملائنا',
    
    priceTitle: 'أسعار شفافة ومحددة',
    priceDesc: 'لا توجد تكاليف خفية، ولا فواتير غير متوقعة. مشاريع محددة النطاق ومضمونة باتفاقيات جودة صارمة.',
    priceCta: 'أطلق مرحلة التطوير',
    priceQuote: 'سعر ثابت',
    
    careersTitle: 'انضم إلى نخبة 1% من مهندسي البرمجيات',
    careersDesc: 'نحن نبحث عن الحرفيين الحقيقيين في مجال البرمجة. نقدم استقلالية كاملة للعمل عن بعد، تأمين طبي شامل متعدد المناطق، وميزانيات أجهزة عالية الأداء.',
    careersOpenRoles: 'الشواغر الحالية',
    
    resourcesTitle: 'أدلة العمل والمراجعات الفنية للمؤسسات',
    resourcesDesc: 'قم بتنزيل المخططات الهندسية الشاملة، الأوراق البيضاء، والأدلة التقنية المصممة للمدراء التنفيذيين للتكنولوجيا ورؤساء الهندسة.',
    resourcesDownload: 'تحميل وثيقة الموارد',
    
    hireTitle: 'قم بتشكيل فريق التطوير المخصص لك والمضمون',
    hireDesc: 'قم بتوظيف كبار المهندسين والمطورين المعتمدين وخبراء الذكاء الاصطناعي خلال 48 ساعة فقط. فرق عمل متكاملة تعمل مباشرة مع قنوات Slack و Jira الخاصة بك.',
    hireCalculator: 'حاسبة ميزانية الفريق',
  },
  fr: {
    home: 'Accueil',
    services: 'Services',
    whyUs: 'Pourquoi Nous',
    portfolio: 'Portfolio',
    industries: 'Secteurs',
    process: 'Processus',
    pricing: 'Tarifs',
    faq: 'FAQ',
    consultation: 'Consultation',
    contact: 'Contact',
    blog: 'Actualités',
    careers: 'Carrières',
    resources: 'Ressources',
    hireDevs: 'Recruter des Développeurs',
    clientPortal: 'Portail Client',
    ctaQuote: 'Devis Gratuit',
    companyName: 'ARYAN GLOBAL SOLUTIONS',
    tagline: 'Logiciels d\'Entreprise & Ingénierie IA',
    
    heroTitle: 'Solutions IA d\'Entreprise pour les Entreprises Modernes & Orchestrations IA',
    heroDesc: 'Aryan Global Solutions est une agence d\'élite en ingénierie logicielle sur mesure et automatisation intelligente. Nous concevons des architectures hautement performantes et sécurisées avec SLA pour les entreprises du Fortune 500 et les startups en hyper-croissance.',
    heroCtaPrimary: 'Engager Notre Bureau d\'Ingénierie',
    heroCtaSecondary: 'Explorer les Études de Cas',
    trustedBy: 'APPROUVÉ PAR LES LEADERS ET ENTREPRISES DU MONDE ENTIER',
    
    statProjects: 'Systèmes d\'Entreprise Déployés',
    statRetention: 'Rétention des Partenariats Clients',
    statSLA: 'Garantie SLA de Disponibilité',
    statValue: 'Valeur de Croissance Client Générée',
    
    priceTitle: 'Tarification Transparente',
    priceDesc: 'Aucun frais caché, aucune facturation imprévue. Des livrables de sprint à périmètre fixe soutenus par des contrats SLA stricts.',
    priceCta: 'Lancer un Sprint de Projet',
    priceQuote: 'Devis Fixe',
    
    careersTitle: 'Rejoignez le Top 1% des Ingénieurs',
    careersDesc: 'Nous recherchons d\'authentiques artisans du code. Nous offrons une autonomie totale en télétravail, une couverture santé multi-région, un budget matériel haute performance et une participation au capital.',
    careersOpenRoles: 'Postes Ouverts',
    
    resourcesTitle: 'Guides Pratiques & Livres Blancs d\'Entreprise',
    resourcesDesc: 'Téléchargez nos plans architecturaux complets, nos livres blancs et nos guides techniques conçus pour les CTO, VP et directeurs de l\'ingénierie.',
    resourcesDownload: 'Télécharger le Document',
    
    hireTitle: 'Assemblez Votre Équipe de Dev Dédiée avec SLA',
    hireDesc: 'Recrutez des ingénieurs seniors, des architectes de bases de données et des orchestrateurs IA qualifiés en 48 heures. Des équipes autonomes intégrées à vos flux Slack et Jira.',
    hireCalculator: 'Estimateur de Budget d\'Équipe',
  },
  de: {
    home: 'Startseite',
    services: 'Dienstleistungen',
    whyUs: 'Warum Wir',
    portfolio: 'Portfolio',
    industries: 'Branchen',
    process: 'Prozess',
    pricing: 'Preise',
    faq: 'FAQ',
    consultation: 'Beratung',
    contact: 'Kontakt',
    blog: 'Blog',
    careers: 'Karriere',
    resources: 'Ressourcen',
    hireDevs: 'Entwickler Einstellen',
    clientPortal: 'Kundenportal',
    ctaQuote: 'Kostenloses Angebot',
    companyName: 'ARYAN GLOBAL SOLUTIONS',
    tagline: 'Unternehmenssoftware & KI-Engineering',
    
    heroTitle: 'Enterprise-KI-Lösungen für moderne Unternehmen & KI-Orchestrierungen',
    heroDesc: 'Aryan Global Solutions ist eine Elite-Agentur für maßgeschneiderte Softwareentwicklung und intelligente Automatisierung. Wir erstellen SLA-gestützte, hochperformante Architekturen für Fortune-500-Konzerne und wachstumsstarke Startup-Netzwerke.',
    heroCtaPrimary: 'Unser Engineering-Team beauftragen',
    heroCtaSecondary: 'Fallstudien untersuchen',
    trustedBy: 'VON GLOBALEN MARKTFÜHRERN & UNTERNEHMEN GESCHÄTZT',
    
    statProjects: 'Bereitgestellte Enterprise-Systeme',
    statRetention: 'Kundenpartnerschafts-Beibehaltung',
    statSLA: 'Verfügbarkeits-SLA-Garantie',
    statValue: 'Ermöglichter Kunden-Venture-Wert',
    
    priceTitle: 'Transparente Preise',
    priceDesc: 'Keine versteckten Gebühren, keine unerwarteten Abrechnungen. Festgelegte Sprints, abgesichert durch strenge SLA-Verträge.',
    priceCta: 'Projekt-Sprint starten',
    priceQuote: 'Festpreis',
    
    careersTitle: 'Werden Sie Teil der Elite-1%-Entwickler-Crew',
    careersDesc: 'Wir suchen absolute Software-Handwerker. Wir bieten voll remote Autonomie, Krankenversicherung, Budgets für High-End-Workstations und Firmenanteile.',
    careersOpenRoles: 'Aktuelle Stellenangebote',
    
    resourcesTitle: 'Unternehmens-Leitfäden & Forschungsberichte',
    resourcesDesc: 'Laden Sie unsere umfassenden Architektur-Blueprints, Whitepapers und technischen Leitfäden herunter, die für CTOs und Entwicklungsleiter entwickelt wurden.',
    resourcesDownload: 'Ressourcen-Dokument herunterladen',
    
    hireTitle: 'Stellen Sie Ihr dediziertes, SLA-gestütztes Entwicklerteam zusammen',
    hireDesc: 'Stellen Sie erfahrene Senior-Entwickler, Datenbankarchitekten und KI-Spezialisten innerhalb von 48 Stunden ein. Voll in Ihre Slack- und Jira-Kanäle integrierte Teams.',
    hireCalculator: 'Team-Budget-Kalkulator',
  },
  hi: {
    // Nav & General
    home: 'होम',
    services: 'सेवाएं',
    whyUs: 'हमें क्यों चुनें',
    portfolio: 'पोर्टफोलियो',
    industries: 'उद्योग',
    process: 'प्रक्रिया',
    pricing: 'मूल्य निर्धारण',
    faq: 'अक्सर पूछे जाने वाले प्रश्न',
    consultation: 'परामर्श',
    contact: 'संपर्क',
    blog: 'ब्लॉग और अंतर्दृष्टि',
    careers: 'करियर',
    resources: 'संसाधन',
    hireDevs: 'डेवलपर्स को नियुक्त करें',
    clientPortal: 'क्लाइंट पोर्टल',
    ctaQuote: 'मुफ़्त कोट प्राप्त करें',
    companyName: 'आर्यन ग्लोबल सॉल्यूशंस',
    tagline: 'एंटरप्राइज सॉफ्टवेयर और एआई इंजीनियरिंग',
    
    // Hero
    heroTitle: 'आधुनिक व्यवसायों के लिए एआई समाधान और एआई ऑर्केस्ट्रेशन',
    heroDesc: 'आर्यन ग्लोबल सॉल्यूशंस एक विशिष्ट कस्टम सॉफ्टवेयर इंजीनियरिंग और इंटेलिजेंट ऑटोमेशन एजेंसी है। हम फॉर्च्यून 500 निगमों और उच्च-विकास उद्यम नेटवर्क के लिए एसएलए-समर्थित, उच्च-प्रदर्शन, सुरक्षित आर्किटेक्चर का निर्माण करते हैं।',
    heroCtaPrimary: 'हमारे इंजीनियरिंग डेस्क से जुड़ें',
    heroCtaSecondary: 'केस स्टडीज देखें',
    trustedBy: 'वैश्विक नेताओं और उद्यमों द्वारा विश्वसनीय',
    
    // Stats
    statProjects: 'तैनात किए गए एंटरप्राइज सिस्टम',
    statRetention: 'ग्राहक साझेदारी अवधारण',
    statSLA: 'अपटाइम एसएलए गारंटी',
    statValue: 'सक्षम ग्राहक उद्यम मूल्य',
    
    // Pricing general
    priceTitle: 'पारदर्शी मूल्य निर्धारण',
    priceDesc: 'कोई छिपा हुआ शुल्क नहीं, कोई अप्रत्याशित बिलिंग नहीं। सख्त एसएलए अनुबंधों द्वारा समर्थित निश्चित-दायरा स्प्रिंट डिलीवरेबल्स।',
    priceCta: 'प्रोजेक्ट स्प्रिंट शुरू करें',
    priceQuote: 'निश्चित कोट',

    // Careers General
    careersTitle: 'शीर्ष 1% इंजीनियरिंग टीम में शामिल हों',
    careersDesc: 'हम पूर्ण सॉफ्टवेयर शिल्पकारों की तलाश कर रहे हैं। हम पूरी तरह से रिमोट काम करने की स्वतंत्रता, बहु-क्षेत्रीय स्वास्थ्य सेवा, उच्च-प्रदर्शन वर्कस्टेशन बजट और हिस्सेदारी की पेशकश करते हैं।',
    careersOpenRoles: 'वर्तमान उद्घाटन',
    
    // Resources General
    resourcesTitle: 'एंटरप्राइज प्लेबुक और अनुसंधान',
    resourcesDesc: 'सीटीओ, वीपी और इंजीनियरिंग निदेशकों के लिए डिज़ाइन किए गए हमारे व्यापक आर्किटेक्चरल ब्लूप्रिंट, श्वेतपत्र और तकनीकी गाइड डाउनलोड करें।',
    resourcesDownload: 'संसाधन दस्तावेज़ डाउनलोड करें',
    
    // Hire Devs General
    hireTitle: 'अपनी समर्पित एसएलए-समर्थित देव टीम तैयार करें',
    hireDesc: '48 घंटों के भीतर अनुभवी वरिष्ठ इंजीनियरों, डेटाबेस आर्किटेक्ट्स और एआई विशेषज्ञों को नियुक्त करें। आपके स्लैक और जिरा पाइपलाइनों में पूरी तरह से एकीकृत टीमें।',
    hireCalculator: 'टीम बजट कैलकुलेटर',

    // Services Section
    "AI Automation": "एआई ऑटोमेशन",
    "Automate repetitive business workflows using AI agents and intelligent automation.": "एआई एजेंटों और इंटेलिजेंट ऑटोमेशन का उपयोग करके दोहराए जाने वाले व्यावसायिक वर्कफ़्लो को स्वचालित करें।",
    "Custom Software Development": "कस्टम सॉफ्टवेयर डेवलपमेंट",
    "Scalable enterprise software tailored to your business requirements.": "आपके व्यावसायिक आवश्यकताओं के अनुरूप तैयार किया गया स्केलेबल एंटरप्राइज सॉफ्टवेयर।",
    "Web Development": "वेब डेवलपमेंट",
    "Fast, secure and SEO-optimized business websites and web applications.": "तेज़, सुरक्षित और एसईओ-अनुकूलित व्यावसायिक वेबसाइटें और वेब एप्लिकेशन।",
    "Mobile App Development": "मोबाइल ऐप डेवलपमेंट",
    "Native and cross-platform Android & iOS applications.": "नेटिव और क्रॉस-प्लेटफ़ॉर्म एंड्रॉइड और आईओएस एप्लिकेशन।",
    "ERP & CRM Solutions": "ईआरपी और सीआरएम समाधान",
    "Custom ERP, CRM and inventory management systems for modern businesses.": "आधुनिक व्यवसायों के लिए कस्टम ईआरपी, सीआरएम और इन्वेंट्री प्रबंधन प्रणाली।",
    "Cloud & DevOps": "क्लाउड और डेवऑप्स",
    "Cloud infrastructure, CI/CD pipelines, deployment automation and security.": "क्लाउड इन्फ्रास्ट्रक्चर, सीआई/सीडी पाइपलाइन, परिनियोजन स्वचालन और सुरक्षा।",
    "Comprehensive Suite of High-Performance Solutions": "उच्च प्रदर्शन समाधानों का व्यापक सुइट",
    "Services We Provide": "सेवाएं जो हम प्रदान करते हैं",
    "Discover how we deploy robust, SLA-backed software platforms and intelligent machine learning networks to scale your operation.": "जानें कि हम आपके संचालन को स्केल करने के लिए मजबूत, एसएलए-समर्थित सॉफ्टवेयर प्लेटफॉर्म और बुद्धिमान मशीन लर्निंग नेटवर्क कैसे तैनात करते हैं।",

    // Why Choose Us Section
    "Why Us": "हमें क्यों चुनें",
    "Uncompromising Standards of Digital Execution": "डिजिटल निष्पादन के अडिग मानक",
    "We do not just write code; we partner with enterprise leaders and modern startups to construct high-performance digital flywheels.": "हम केवल कोड नहीं लिखते; हम उच्च-प्रदर्शन डिजिटल फ्लाईव्हील बनाने के लिए एंटरप्राइज नेताओं और आधुनिक स्टार्टअप्स के साथ साझेदारी करते हैं।",
    "Enterprise-Grade Security": "एंटरप्राइज-ग्रेड सुरक्षा",
    "Every line of code is audited for vulnerabilities. We implement strict IAM policies, encrypted endpoints, and robust regulatory compliance.": "कमियों के लिए कोड की प्रत्येक पंक्ति का ऑडिट किया जाता है। हम सख्त आईएएम नीतियों, एन्क्रिप्टेड एंडपॉइंट्स और मजबूत विनियामक अनुपालन को लागू करते हैं।",
    "Elite Engineering Team": "अभिजात वर्ग इंजीनियरिंग टीम",
    "Our roster consists of top 2% developers skilled in React, Node, Python, AWS, and modern machine learning integration frameworks.": "हमारे रोस्टर में रिएक्ट, नोड, पायथन, एडब्ल्यूएस और आधुनिक मशीन लर्निंग एकीकरण फ्रेमवर्क में कुशल शीर्ष 2% डेवलपर्स शामिल हैं।",
    "Rapid Agile Iterations": "तेज एजाइल पुनरावृत्ति",
    "Sprint with absolute clarity. We leverage high-speed CI/CD pipelines to deliver features frequently and transparently.": "पूर्ण स्पष्टता के साथ स्प्रिंट करें। हम बार-बार और पारदर्शी रूप से सुविधाएं प्रदान करने के लिए हाई-स्पीड सीआई/सीडी पाइपलाइनों का लाभ उठाते हैं।",
    "24/7 Global Delivery": "24/7 वैश्विक डिलीवरी",
    "Operating across multiple timezones (US, UK, Europe, MENA) to provide constant engineering velocity and active monitoring support.": "निरंतर इंजीनियरिंग गति और सक्रिय निगरानी सहायता प्रदान करने के लिए कई टाइमज़ोन (यूएस, यूके, यूरोप, एमईएनए) में संचालन।",
    "Premium Code Craftsmanship": "प्रीमियम कोड शिल्प कौशल",
    "Clean architecture with optimized performance. No shortcuts. Scalable codebase structures prepared for rapid investment scaling.": "इष्टतम प्रदर्शन के साथ स्वच्छ वास्तुकला। कोई शॉर्टकट नहीं। त्वरित निवेश स्केलिंग के लिए तैयार स्केलेबल कोडबेस संरचनाएं।",
    "100% Transparent Governance": "100% पारदर्शी शासन",
    "No hidden dependencies, no vendor lock-in. Real-time Jira / Slack updates so you always have immediate overview of milestone progress.": "कोई छिपी हुई निर्भरता नहीं, कोई विक्रेता लॉक-इन नहीं। रीयल-टाइम जिरा / स्लैक अपडेट ताकि आपके पास हमेशा मील के पत्थर की प्रगति का तत्काल अवलोकन हो।",

    // Pricing Section
    "Pricing Plans": "मूल्य निर्धारण योजनाएं",
    "Flexible Pricing for Every Business": "हर व्यवसाय के लिए लचीला मूल्य निर्धारण",
    "Choose the right solution for your business growth.": "अपने व्यवसाय के विकास के लिए सही समाधान चुनें।",
    "Starter": "स्टार्टर",
    "Essentials Suite": "एसेंशियल सूट",
    "Starting from ₹25,000": "₹25,000 से शुरू",
    "Perfect for startups, independent professionals, and small businesses aiming to establish a high-performance, polished digital footprint.": "स्टार्टअप्स, स्वतंत्र पेशेवरों और छोटे व्यवसायों के लिए बिल्कुल सही जो एक उच्च-प्रदर्शन, पॉलिश डिजिटल पदचिह्न स्थापित करने का लक्ष्य रखते हैं।",
    "Business Website": "व्यावसायिक वेबसाइट",
    "Contact Form": "संपर्क फ़ॉर्म",
    "Mobile Responsive": "मोबाइल रिस्पॉन्सिव",
    "Basic SEO": "बुनियादी एसईओ",
    "1 Month Support": "1 महीने का समर्थन",
    "Professional": "प्रोफेशनल",
    "Enterprise Core": "एंटरप्राइज कोर",
    "Starting from ₹75,000": "₹75,000 से शुरू",
    "Bespoke custom full-stack solutions, sophisticated admin tooling, intelligence automation pipelines, and robust database support.": "बेस्पोक कस्टम फुल-स्टैक समाधान, परिष्कृत एडमिन टूलिंग, इंटेलिजेंस ऑटोमेशन पाइपलाइन और मजबूत डेटाबेस समर्थन।",
    "Custom Web Application": "कस्टम वेब एप्लीकेशन",
    "Admin Dashboard": "एडमिन डैशबोर्ड",
    "AI Integration": "एआई एकीकरण",
    "API Integration": "एपीआई एकीकरण",
    "Database": "डेटाबेस",
    "3 Months Support": "3 महीने का समर्थन",
    "Enterprise": "एंटरप्राइज",
    "Bespoke Scale": "बेस्पोक स्केल",
    "Custom Quote": "कस्टम कोट",
    "Robust custom AI orchestration, integrated ERP/CRM systems, multi-platform applications, hardened enterprise-grade deployment pipelines, and premium SLA support.": "मजबूत कस्टम एआई ऑर्केस्ट्रेशन, एकीकृत ईआरपी/सीआरएम सिस्टम, मल्टी-प्लेटफ़ॉर्म एप्लिकेशन्स, सुरक्षित एंटरप्राइज-ग्रेड परिनियोजन पाइपलाइन्स और प्रीमियम एसएलए समर्थन।",
    "ERP / CRM": "ईआरपी / सीआरएम",
    "Mobile App": "मोबाइल ऐप",
    "Cloud Deployment": "क्लाउड परिनियोजन",
    "Security Audit": "सुरक्षा ऑडिट",
    "Priority Support": "प्राथमिकता सहायता",
    "Get Started": "शुरू करें",
    "Investment Parameters": "निवेश मानदंड",

    // Consultation Section
    "Book a Free Consultation": "मुफ़्त परामर्श बुक करें",
    "Direct Access Desk": "प्रत्यक्ष पहुंच डेस्क",
    "Accelerate your enterprise roadmap. Embed your own calendar slot or book directly using our custom system.": "अपने एंटरप्राइज रोडमैप को गति दें। अपना खुद का कैलेंडर स्लॉट एम्बेड करें या हमारे कस्टम सिस्टम का उपयोग करके सीधे बुक करें।",
    "Calendly Controller Desk": "कैलेंडली कंट्रोलर डेस्क",
    "Configure URL": "यूआरएल कॉन्फ़िगर करें",
    "Hide Config": "कन्फ़िग छुपाएं",
    "Reset Demo Link": "डेमो लिंक रीसेट करें",
    "Live Scheduling Desk": "लाइव शेड्यूलिंग डेस्क",
    "Select your preferred date & slot securely below.": "नीचे सुरक्षित रूप से अपनी पसंदीदा तिथि और स्लॉट चुनें।",
    "Launch New Tab": "नया टैब खोलें",
    "Multi-Timezone Synchronizer Active": "मल्टी-टाइमजोन सिंक्रोनाइज़र सक्रिय",
    "Architectural Discovery Call": "आर्किटेक्चरल डिस्कवरी कॉल",
    "Initiate a thorough technical audit of your existing platforms with our Lead Enterprise Architect. We’ll draft an actionable plan with no licensing constraints.": "हमारे लीड एंटरप्राइज आर्किटेक्ट के साथ अपने मौजूदा प्लेटफॉर्म का गहन तकनीकी ऑडिट शुरू करें। हम बिना किसी लाइसेंसिंग बाधाओं के एक व्यावहारिक योजना का मसौदा तैयार करेंगे।",
    "Schedule Meeting": "बैठक निर्धारित करें",
    "30-Minute Architecture Audit": "30 मिनट का वास्तुकला ऑडिट",
    "Deep-dive into your database parameters, software stack, and system bottlenecks.": "अपने डेटाबेस मापदंडों, सॉफ्टवेयर स्टैक और सिस्टम बाधाओं में गहराई से उतरें।",
    "Virtual Teleconference": "वर्चुअल टेलीकांफ्रेंस",
    "Connect securely via Google Meet or Zoom. Video and screen-sharing enabled.": "गूगल मीट या ज़ूम के माध्यम से सुरक्षित रूप से जुड़ें। वीडियो और स्क्रीन-शेयरिंग सक्षम।",
    "With Principal Architect": "प्रिंसिपल आर्किटेक्ट के साथ",
    "Direct conversation with our founding partner and engineering team Leads.": "हमारे संस्थापक भागीदार और इंजीनियरिंग टीम लीड के साथ सीधी बातचीत।",
    "100% Confidential Discovery": "100% गोपनीय खोज",
    "Protected by our mutual NDA agreements. Your source ideas are safe.": "हमारे पारस्परिक एनडीए समझौतों द्वारा सुरक्षित। आपके विचार सुरक्षित हैं।",
    "Weekly Slot Availability": "साप्ताहिक स्लॉट उपलब्धता",
    "Available": "उपलब्ध",
    "Booked": "बुक किया गया",
    "Free Architectural Slot": "मुफ़्त आर्किटेक्चरल स्लॉट",
    "Free Digital Consultation": "मुफ़्त डिजिटल परामर्श",

    // FAQ Section
    "Frequently Answered Questions": "अक्सर पूछे जाने वाले प्रश्न",
    "Everything you need to know about partnering with Aryan Global Solutions for your next high-performance digital build.": "आर्यन ग्लोबल सॉल्यूशंस के साथ आपकी अगली उच्च-प्रदर्शन डिजिटल निर्माण साझेदारी के बारे में वह सब कुछ जो आपको जानना आवश्यक है।",
    "Do you support integration of artificial intelligence models, such as the Gemini API?": "क्या आप आर्टिफिशियल इंटेलिजेंस मॉडल, जैसे जेमिनी एपीआई के एकीकरण का समर्थन करते हैं?",
    "Yes, we are official AI-integration specialists. We construct secure, server-side proxies using the modern @google/genai SDK to incorporate models such as Gemini 2.5 Flash and Pro for tasks like dynamic summaries, multi-modal analysis, and private vector searches.": "हाँ, हम आधिकारिक एआई-एकीकरण विशेषज्ञ हैं। हम गतिशील सारांश, मल्टी-मोडल विश्लेषण और निजी वेक्टर खोजों जैसे कार्यों के लिए जेमिनी 2.5 फ्लैश और प्रो जैसे मॉडल को शामिल करने के लिए आधिकारिक @google/genai एसडीके का उपयोग करके सुरक्षित, सर्वर-साइड प्रॉक्सी का निर्माण करते हैं।",
    "Do I retain 100% of the intellectual property (IP) and code ownership?": "क्या बौद्धिक संपदा (आईपी) और कोड स्वामित्व का 100% हिस्सा मेरे पास रहेगा?",
    "Yes, 100%. Once final milestones are delivered and settled, full repository credentials, cloud deployment permissions, assets, and database configurations are transferred directly to your organization. There are zero licensing fees or vendor lock-in traps.": "हाँ, 100%। एक बार अंतिम मील के पत्थर वितरित और तय हो जाने के बाद, पूर्ण रिपोजिटरी क्रेडेंशियल, क्लाउड परिनियोजन अनुमतियां, संपत्ति और डेटाबेस कॉन्फ़िगरेशन सीधे आपके संगठन में स्थानांतरित कर दिए जाते हैं। कोई लाइसेंसिंग शुल्क या विक्रेता लॉक-इन जाल नहीं हैं।",
    "Do you sign non-disclosure agreements (NDAs) before project discovery?": "क्या आप प्रोजेक्ट डिस्कवरी से पहले गैर-प्रकटीकरण समझौतों (एनडीए) पर हस्ताक्षर करते हैं?",
    "Absolutely. We respect corporate intelligence. We sign mutual NDAs prior to discussing any system architecture, business model, or proprietary dataset.": "बिल्कुल। हम कॉर्पोरेट गोपनीयता का सम्मान करते हैं। हम किसी भी सिस्टम आर्किटेक्चर, बिजनेस मॉडल या मालिकाना डेटासेट पर चर्चा करने से पहले पारस्परिक एनडीए पर हस्ताक्षर करते हैं।",
    "What is your geographic range of operations?": "आपके संचालन की भौगोलिक सीमा क्या है?",
    "We serve clients across the USA, UK, Europe, and India. Our communication pipelines and sprint planning sessions are mapped directly to your local timezone to ensure 100% collaboration overlap.": "हम यूएसए, यूके, यूरोप और भारत में ग्राहकों की सेवा करते हैं। 100% सहयोगात्मक ओवरलैप सुनिश्चित करने के लिए हमारे संचार पाइपलाइन और स्प्रिंट योजना सत्र सीधे आपके स्थानीय समय क्षेत्र के अनुसार मैप किए जाते हैं।",
    "What level of post-deployment support do you offer?": "आप परिनियोजन के बाद किस स्तर की सहायता प्रदान करते हैं?",
    "We offer structured Maintenance SLA tiers following product launch. This includes active uptime monitoring, automated dependency security patches, performance diagnostics, database cleanups, and a designated support ticket response channel.": "हम उत्पाद लॉन्च के बाद संरचित रखरखाव एसएलए स्तरों की पेशकश करते हैं। इसमें सक्रिय अपटाइम निगरानी, स्वचालित निर्भरता सुरक्षा पैच, प्रदर्शन निदान, डेटाबेस सफाई और एक निर्दिष्ट सहायता टिकट प्रतिक्रिया चैनल शामिल है।",
    "How do you ensure cybersecurity compliance and handle sensitive user data?": "आप साइबर सुरक्षा अनुपालन कैसे सुनिश्चित करते हैं और संवेदनशील उपयोगकर्ता डेटा को कैसे संभालते हैं?",
    "We deploy hardened architectures incorporating strict rules, OAuth token validation, SSL/TLS handshakes, and standard API proxy gateways. We align code with GDPR, CCPA, and PCI-DSS requirements to prevent client-side credential exposure.": "हम सख्त नियमों, OAuth टोकन सत्यापन, SSL/TLS हैंडशेक और मानक एपीआई प्रॉक्सी गेटवे को शामिल करते हुए सुरक्षित आर्किटेक्चर तैनात करते हैं। हम क्लाइंट-साइड क्रेडेंशियल एक्सपोज़र को रोकने के लिए कोड को GDPR, CCPA और PCI-DSS आवश्यकताओं के साथ संरेखित करते हैं।",
    "Can you work with legacy enterprise databases and outdated internal APIs?": "क्या आप पुराने एंटरप्राइज डेटाबेस और पुराने आंतरिक एपीआई के साथ काम कर सकते हैं?",
    "Yes. We frequently build robust, ultra-fast middleware proxy microservices. This allows us to connect legacy Mainframes, SAP setups, or on-prem databases directly to modern React or Next.js web frontends without breaking existing operational systems.": "हाँ। हम अक्सर मजबूत, अत्यधिक तेज़ मिडलवेयर प्रॉक्सी माइक्रोसर्विसेज का निर्माण करते हैं। यह हमें मौजूदा परिचालन प्रणालियों को तोड़े बिना विरासत मेनफ्रेम, एसएपी सेटअप या ऑन-प्रीम डेटाबेस को सीधे आधुनिक रिएक्ट या नेक्स्ट.जेएस वेब फ्रंटएंड से जोड़ने की अनुमति देता है।",
    "How do you handle project timeline changes and scope modifications?": "आप परियोजना समयरेखा परिवर्तनों और दायरे के संशोधनों को कैसे संभालते हैं?",
    "We utilize highly collaborative agile scrum methodologies. Every two weeks, we deliver a functional build of your application during sprint reviews, allowing you to modify priorities or adjust features incrementally with complete financial predictability.": "हम अत्यधिक सहयोगात्मक एजाइल स्क्रम पद्धतियों का उपयोग करते हैं। हर दो सप्ताह में, हम स्प्रिंट समीक्षाओं के दौरान आपके एप्लिकेशन का एक कार्यात्मक निर्माण प्रदान करते हैं, जिससे आप पूर्ण वित्तीय पूर्वानुमेयता के साथ प्राथमिकताओं को संशोधित कर सकते हैं या सुविधाओं को वृद्धिशील रूप से समायोजित कर सकते हैं।",
    "Do you assist with deploying applications to cloud services like Google Cloud or AWS?": "क्या आप गूगल क्लाउड या एडब्ल्यूएस जैसी क्लाउड सेवाओं पर एप्लिकेशन तैनात करने में सहायता करते हैं?",
    "Yes, we are cloud-native engineers. We handle complete deployment orchestration including Docker containerization, serverless Cloud Run setups, Kubernetes, automated CI/CD build pipelines, and persistent cloud database configuration.": "हाँ, हम क्लाउड-नेटिव इंजीनियर हैं। हम डॉकर कंटेनराइजेशन, सर्वरलेस क्लाउड रन सेटअप, कुबेरनेट्स, स्वचालित सीआई/सीडी बिल्ड पाइपलाइन और लगातार क्लाउड डेटाबेस कॉन्फ़िगरेशन सहित संपूर्ण परिनियोजन ऑर्केस्ट्रेशन संभालते हैं।",
    "What is the standard onboarding time for a dedicated squad?": "एक समर्पित टीम के लिए मानक ऑनबोर्डिंग समय क्या है?",
    "We can fully onboard and align a dedicated development squad with your Slack, Jira, and GitHub repositories within 48 to 72 hours of contract execution.": "हम अनुबंध निष्पादन के 48 से 72 घंटों के भीतर आपके स्लैक, जिरा और गिटहब रिपॉजिटरी के साथ एक समर्पित विकास दल को पूरी तरह से ऑनबोर्ड और संरेखित कर सकते हैं।",

    // Blog Section
    "Blog & Insights": "ब्लॉग और अंतर्दृष्टि",
    "Industry Knowledge": "उद्योग ज्ञान",
    "Explore our latest research, guidelines, and technological breakthroughs across enterprise sectors.": "उद्यम क्षेत्रों में हमारे नवीनतम शोध, दिशानिर्देशों और तकनीकी सफलताओं का पता लगाएं।",
    "Read More": "अधिक पढ़ें",
    "View Comprehensive Research Archive": "व्यापक अनुसंधान पुरालेख देखें",
    "Discuss these specifications with our Lead System Architect.": "हमारे लीड सिस्टम आर्किटेक्ट के साथ इन विशिष्टताओं पर चर्चा करें।",
    "Request Discovery Call": "डिस्कवरी कॉल का अनुरोध करें",
    "Classified Tags:": "वर्गीकृत टैग:",
    "All": "सभी",

    // Contact Section
    "Connect with Our Technical Desk": "हमारे तकनीकी डेस्क से जुड़ें",
    "Let's Build Something Exceptional": "आइए कुछ असाधारण बनाएं",
    "Send Message": "संदेश भेजें",
    "Full Name": "पूरा नाम",
    "Email Address": "ईमेल पता",
    "Subject": "विषय",
    "Your Message": "आपका संदेश",
    "Contact Information": "संपर्क जानकारी",
    "Registered Office": "पंजीकृत कार्यालय",
    "Direct Phone Support": "सीधा फोन समर्थन",
    "Official Electronic Mail": "आधिकारिक ईमेल",

    // Footer
    "About Aryan Global Solutions": "आर्यन ग्लोबल सॉल्यूशंस के बारे में",
    "Elite custom software engineering and intelligent AI automation agency. Serving enterprise clients globally with SLA-backed architectures.": "अभिजात वर्ग कस्टम सॉफ्टवेयर इंजीनियरिंग और बुद्धिमान एआई स्वचालन एजेंसी। एसएलए-समर्थित आर्किटेक्चर के साथ विश्व स्तर पर उद्यम ग्राहकों की सेवा करना।",
    "Quick Links": "त्वरित लिंक्स",
    "Legal": "कानूनी",
    "Privacy Policy": "गोपनीयता नीति",
    "Terms of Service": "सेवा की शर्तें",
    "Refund Policy": "रिफंड नीति",
    "Cookie Settings": "कुकी सेटिंग्स",
    "All rights reserved.": "सर्वाधिकार सुरक्षित।",
  }
};

const exchangeRates: Record<Currency, { symbol: string; rate: number; prefix: boolean }> = {
  USD: { symbol: '$', rate: 1.0, prefix: true },
  EUR: { symbol: '€', rate: 0.92, prefix: true },
  GBP: { symbol: '£', rate: 0.78, prefix: true },
  AED: { symbol: ' AED', rate: 3.67, prefix: false }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('currency');
    return (saved as Currency) || 'USD';
  });
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'dark';
  });
  const [activeSection, setActiveSection] = useState<AppSection>('home');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const setCurrency = (cur: Currency) => {
    setCurrencyState(cur);
    localStorage.setItem('currency', cur);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('theme', t);
  };

  useEffect(() => {
    // Sync theme with document elements
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  useEffect(() => {
    // Sync Arabic RTL layout
    const root = window.document.documentElement;
    if (language === 'ar') {
      root.dir = 'rtl';
    } else {
      root.dir = 'ltr';
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  const formatPrice = (usdAmount: number): string => {
    const info = exchangeRates[currency];
    const converted = Math.round(usdAmount * info.rate);
    const formatted = converted.toLocaleString(language === 'ar' ? 'ar-EG' : undefined);
    return info.prefix ? `${info.symbol}${formatted}` : `${formatted}${info.symbol}`;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        theme,
        setTheme,
        activeSection,
        setActiveSection,
        t,
        formatPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
