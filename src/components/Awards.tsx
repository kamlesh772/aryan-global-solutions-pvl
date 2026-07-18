import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Cloud, 
  Database, 
  Layers, 
  ShieldCheck, 
  Settings, 
  Workflow, 
  Cpu, 
  Sparkles, 
  Trophy, 
  Users, 
  Activity, 
  PhoneCall, 
  Calendar,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Certification {
  id: string;
  titleKey: string;
  issuerKey: string;
  year: string;
  descKey: string;
  icon: React.ComponentType<any>;
  colorClass: string;
}

interface CounterItem {
  id: string;
  value: string;
  labelKey: string;
  subKey: string;
  icon: React.ComponentType<any>;
  colorClass: string;
}

export default function Awards() {
  const { language, t } = useApp();

  const counters: CounterItem[] = [
    {
      id: 'projects',
      value: '100+',
      labelKey: 'cntProjectsLabel',
      subKey: 'cntProjectsSub',
      icon: Trophy,
      colorClass: 'from-amber-400 to-orange-500'
    },
    {
      id: 'clients',
      value: '50+',
      labelKey: 'cntClientsLabel',
      subKey: 'cntClientsSub',
      icon: Users,
      colorClass: 'from-cyan-400 to-indigo-500'
    },
    {
      id: 'uptime',
      value: '99.9%',
      labelKey: 'cntUptimeLabel',
      subKey: 'cntUptimeSub',
      icon: Activity,
      colorClass: 'from-emerald-400 to-teal-500'
    },
    {
      id: 'support',
      value: '24×7',
      labelKey: 'cntSupportLabel',
      subKey: 'cntSupportSub',
      icon: PhoneCall,
      colorClass: 'from-purple-400 to-rose-500'
    }
  ];

  const certifications: Certification[] = [
    {
      id: 'gcp',
      titleKey: 'certGcpTitle',
      issuerKey: 'certGcpIssuer',
      year: 'Active',
      descKey: 'certGcpDesc',
      icon: Cloud,
      colorClass: 'text-blue-400 border-blue-500/20 bg-blue-500/5'
    },
    {
      id: 'aws',
      titleKey: 'certAwsTitle',
      issuerKey: 'certAwsIssuer',
      year: 'Active',
      descKey: 'certAwsDesc',
      icon: Database,
      colorClass: 'text-orange-400 border-orange-500/20 bg-orange-500/5'
    },
    {
      id: 'microsoft',
      titleKey: 'certMsTitle',
      issuerKey: 'certMsIssuer',
      year: 'Active',
      descKey: 'certMsDesc',
      icon: Layers,
      colorClass: 'text-sky-400 border-sky-500/20 bg-sky-500/5'
    },
    {
      id: 'iso27001',
      titleKey: 'certIsoSecTitle',
      issuerKey: 'certIsoSecIssuer',
      year: 'Audited / Active',
      descKey: 'certIsoSecDesc',
      icon: ShieldCheck,
      colorClass: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5'
    },
    {
      id: 'iso9001',
      titleKey: 'certIsoQualTitle',
      issuerKey: 'certIsoQualIssuer',
      year: 'Audited / Active',
      descKey: 'certIsoQualDesc',
      icon: Settings,
      colorClass: 'text-rose-400 border-rose-500/20 bg-rose-500/5'
    },
    {
      id: 'scrum',
      titleKey: 'certScrumTitle',
      issuerKey: 'certScrumIssuer',
      year: 'Certified',
      descKey: 'certScrumDesc',
      icon: Workflow,
      colorClass: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5'
    },
    {
      id: 'nvidia',
      titleKey: 'certNvidiaTitle',
      issuerKey: 'certNvidiaIssuer',
      year: 'Active Partner',
      descKey: 'certNvidiaDesc',
      icon: Cpu,
      colorClass: 'text-lime-400 border-lime-500/20 bg-lime-500/5'
    },
    {
      id: 'openai',
      titleKey: 'certOpenaiTitle',
      issuerKey: 'certOpenaiIssuer',
      year: 'Certified',
      descKey: 'certOpenaiDesc',
      icon: Sparkles,
      colorClass: 'text-purple-400 border-purple-500/20 bg-purple-500/5'
    }
  ];

  const localTranslations = useMemo(() => {
    return {
      en: {
        badge: "Global Compliance & Accolades",
        title: "Awards & Certified Architectures",
        desc: "Our methodologies are audited, our technical workflows are standardized, and our systems operate under stringent global security rules.",
        verificationText: "All registration IDs, credentials, and partner audit records are fully verifiable during corporate onboarding. Secure document keys are available upon request.",
        verifyButton: "Request Security Folder",
        activeBadge: "ACTIVE COMPLIANCE",
        
        // Counter labels
        cntProjectsLabel: "Enterprise Systems",
        cntProjectsSub: "Successfully deployed globally",
        cntClientsLabel: "Global Clients",
        cntClientsSub: "Fortune 500 & scale networks",
        cntUptimeLabel: "Uptime Guarantee",
        cntUptimeSub: "Enforced via binding SLAs",
        cntSupportLabel: "NOC Center Support",
        cntSupportSub: "Active real-time engineers",

        // Certifications
        certGcpTitle: "Google Cloud Partner",
        certGcpIssuer: "Google Cloud Partner Network",
        certGcpDesc: "Accredited for deploying enterprise container clusters, high-concurrency Cloud Run pipelines, and serverless architectures.",
        
        certAwsTitle: "AWS Solutions Provider",
        certAwsIssuer: "Amazon Web Services Partner Desk",
        certAwsDesc: "Recognized for architecting fault-tolerant databases, secure VPC private networks, and globally replicated high-performance CDNs.",
        
        certMsTitle: "Microsoft Solutions Partner",
        certMsIssuer: "Microsoft Enterprise Network",
        certMsDesc: "Certified for deploying high-integrity enterprise application frameworks, corporate databases, and complex legacy migrations.",
        
        certIsoSecTitle: "ISO/IEC 27001 Certified",
        certIsoSecIssuer: "International Standards Authority",
        certIsoSecDesc: "Fully audited information security management system (ISMS) ensuring 100% protection of proprietary corporate data repositories.",
        
        certIsoQualTitle: "ISO 9001 Quality Certified",
        certIsoQualIssuer: "Quality Accreditation Forum",
        certIsoQualDesc: "Standardized quality control cycles across agile sprint pipelines, software test coverage pipelines, and delivery models.",
        
        certScrumTitle: "Scrum Alliance Partner",
        certScrumIssuer: "Scrum Alliance Global Board",
        certScrumDesc: "Applying systematic sprint methodologies, automated ticketing systems, and highly transparent project alignment logs.",
        
        certNvidiaTitle: "NVIDIA AI Partner",
        certNvidiaIssuer: "NVIDIA Inception Program",
        certNvidiaDesc: "Specialized in GPU compute optimization, private localized language model swarms, and quantized deep learning networks.",
        
        certOpenaiTitle: "OpenAI Solutions Partner",
        certOpenaiIssuer: "OpenAI Enterprise Alliance",
        certOpenaiDesc: "Certified in designing complex multi-agent reasoning graphs, semantic token caching, and context-window optimizations."
      },
      hi: {
        badge: "वैश्विक अनुपालन और सम्मान",
        title: "पुरस्कार और प्रमाणित आर्किटेक्चर",
        desc: "हमारी कार्यप्रणाली का ऑडिट किया जाता है, हमारे तकनीकी वर्कफ़्लो मानकीकृत हैं, और हमारी प्रणालियाँ सख्त वैश्विक सुरक्षा नियमों के तहत काम करती हैं।",
        verificationText: "कॉर्पोरेट ऑनबोर्डिंग के दौरान सभी पंजीकरण आईडी, क्रेडेंशियल और भागीदार ऑडिट रिकॉर्ड पूरी तरह से सत्यापन योग्य हैं। अनुरोध पर सुरक्षित दस्तावेज़ उपलब्ध हैं।",
        verifyButton: "सुरक्षा फ़ोल्डर का अनुरोध करें",
        activeBadge: "सक्रिय अनुपालन",
        
        cntProjectsLabel: "एंटरप्राइज सिस्टम",
        cntProjectsSub: "विश्व स्तर पर सफलतापूर्वक तैनात",
        cntClientsLabel: "वैश्विक ग्राहक",
        cntClientsSub: "फॉर्च्यून 500 और बड़े नेटवर्क",
        cntUptimeLabel: "अपटाइम गारंटी",
        cntUptimeSub: "बाध्यकारी एसएलए के माध्यम से लागू",
        cntSupportLabel: "एनओसी केंद्र सहायता",
        cntSupportSub: "सक्रिय वास्तविक समय इंजीनियर",

        certGcpTitle: "गूगल क्लाउड पार्टनर",
        certGcpIssuer: "गूगल क्लाउड पार्टनर नेटवर्क",
        certGcpDesc: "एंटरप्राइज कंटेनर क्लस्टर, हाई-समवर्ती क्लाउड रन पाइपलाइनों और सर्वरलेस आर्किटेक्चर को तैनात करने के लिए मान्यता प्राप्त।",
        
        certAwsTitle: "एडब्ल्यूएस समाधान प्रदाता",
        certAwsIssuer: "अमेज़ॅन वेब सर्विसेज पार्टनर डेस्क",
        certAwsDesc: "गलती-सहिष्णु डेटाबेस, सुरक्षित वीपीसी निजी नेटवर्क और वैश्विक स्तर पर दोहराए गए उच्च-प्रदर्शन सीडीएन के निर्माण के लिए मान्यता प्राप्त।",
        
        certMsTitle: "माइक्रोसॉफ्ट सॉल्यूशंस पार्टनर",
        certMsIssuer: "माइक्रोसॉफ्ट एंटरप्राइज नेटवर्क",
        certMsDesc: "उच्च-अखंडता एंटरप्राइज़ एप्लिकेशन फ्रेमवर्क, कॉर्पोरेट डेटाबेस और जटिल विरासत प्रणालियों के माइग्रेशन के लिए प्रमाणित।",
        
        certIsoSecTitle: "आईएसओ/आईईसी 27001 प्रमाणित",
        certIsoSecIssuer: "अंतर्राष्ट्रीय मानक प्राधिकरण",
        certIsoSecDesc: "स्वामित्व वाली कॉर्पोरेट डेटा रिपॉजिटरी की 100% सुरक्षा सुनिश्चित करने वाला पूरी तरह से ऑडिटेड सूचना सुरक्षा प्रबंधन प्रणाली (ISMS)।",
        
        certIsoQualTitle: "आईएसओ 9001 गुणवत्ता प्रमाणित",
        certIsoQualIssuer: "गुणवत्ता प्रत्यायन मंच",
        certIsoQualDesc: "फुर्तीले स्प्रिंट वर्कफ़्लो, सॉफ्टवेयर परीक्षण कवरेज और वितरण मॉडल में मानकीकृत गुणवत्ता नियंत्रण चक्र लागू।",
        
        certScrumTitle: "स्क्रम एलायंस पार्टनर",
        certScrumIssuer: "स्क्रम एलायंस ग्लोबल बोर्ड",
        certScrumDesc: "व्यवस्थित स्प्रिंट कार्यप्रणाली, स्वचालित टिकटिंग प्रणाली और अत्यधिक पारदर्शी परियोजना संरेखण लॉग लागू करना।",
        
        certNvidiaTitle: "एनवीडिया एआई पार्टनर",
        certNvidiaIssuer: "एनवीडिया इनसेप्शन प्रोग्राम",
        certNvidiaDesc: "जीपीयू कंप्यूट अनुकूलन, निजी स्थानीयकृत भाषा मॉडल झुंड, और क्वांटाइज़्ड डीप लर्निंग नेटवर्क में विशेषज्ञता।",
        
        certOpenaiTitle: "ओपनएआई सॉल्यूशंस पार्टनर",
        certOpenaiIssuer: "ओपनएआई एंटरप्राइज एलायंस",
        certOpenaiDesc: "जटिल मल्टी-एजेंट रीजनिंग ग्राफ़, सिमेंटिक टोकन कैशिंग और संदर्भ-विंडो अनुकूलन डिजाइन करने में प्रमाणित।"
      },
      ar: {
        badge: "الامتثال العالمي والاعتمادات",
        title: "الجوائز والاعتمادات المعمارية",
        desc: "منهجياتنا مدققة، سير العمل التقني لدينا موحد، وتعمل أنظمتنا بموجب قواعد أمنية عالمية صارمة.",
        verificationText: "جميع معرفات التسجيل والاعتمادات وسجلات تدقيق الشركاء قابلة للتحقق بالكامل أثناء عملية إعداد الشركات. مفاتيح المستندات الآمنة متاحة عند الطلب.",
        verifyButton: "طلب الملف الأمني",
        activeBadge: "الامتثال النشط",
        
        cntProjectsLabel: "أنظمة المؤسسات",
        cntProjectsSub: "تم نشرها بنجاح عالمياً",
        cntClientsLabel: "العملاء العالميون",
        cntClientsSub: "شبكات فورتشن 500 والشركات الكبرى",
        cntUptimeLabel: "ضمان الجهوزية",
        cntUptimeSub: "مطبق بموجب اتفاقيات SLA ملزمة",
        cntSupportLabel: "دعم مركز NOC",
        cntSupportSub: "مهندسون نشطون في الوقت الفعلي",

        certGcpTitle: "شريك جوجل السحابي",
        certGcpIssuer: "شبكة شركاء Google Cloud",
        certGcpDesc: "معتمد لنشر مجموعات حاويات المؤسسات، وقنوات Cloud Run عالية التزامن، والبنى التحتية الخادمة.",
        
        certAwsTitle: "مزود حلول AWS",
        certAwsIssuer: "مكتب شركاء Amazon Web Services",
        certAwsDesc: "معترف به لتصميم قواعد بيانات مقاومة للأعطال، وشبكات VPC الخاصة الآمنة، وشبكات CDN المكررة عالمياً عالية الأداء.",
        
        certMsTitle: "شريك حلول مايكروسوفت",
        certMsIssuer: "شبكة مؤسسات Microsoft",
        certMsDesc: "معتمد لنشر أطر تطبيقات المؤسسات عالية النزاهة، وقواعد بيانات الشركات، وعمليات الترحيل المعقدة للأنظمة القديمة.",
        
        certIsoSecTitle: "معتمد ISO/IEC 27001",
        certIsoSecIssuer: "الهيئة الدولية للمواصفات",
        certIsoSecDesc: "نظام إدارة أمن المعلومات (ISMS) المدقق بالكامل والذي يضمن حماية بنسبة 100% لمستودعات بيانات الشركات الخاصة.",
        
        certIsoQualTitle: "معتمد الجودة ISO 9001",
        certIsoQualIssuer: "منتدى اعتماد الجودة",
        certIsoQualDesc: "دورات موحدة لمراقبة الجودة عبر قنوات التطوير السريع (Sprint)، وتغطية اختبارات البرمجيات، ونماذج التسليم.",
        
        certScrumTitle: "شريك تحالف Scrum",
        certScrumIssuer: "المجلس العالمي لتحالف Scrum",
        certScrumDesc: "تطبيق منهجيات السبرنت المنهجية، وأنظمة التذاكر الآلية، وسجلات محاذاة المشاريع الشفافة للغاية.",
        
        certNvidiaTitle: "شريك NVIDIA للذكاء الاصطناعي",
        certNvidiaIssuer: "برنامج NVIDIA Inception",
        certNvidiaDesc: "متخصص في تحسين حسابات GPU، وأسراب نماذج اللغة المحلية الخاصة، وشبكات التعلم العميق المكممة.",
        
        certOpenaiTitle: "شريك حلول OpenAI",
        certOpenaiIssuer: "تحالف OpenAI للمؤسسات",
        certOpenaiDesc: "معتمد في تصميم رسومات الاستدلال المعقدة متعددة الوكلاء، والتخزين المؤقت للرموز الدلالية، وتحسينات نافذة السياق."
      },
      fr: {
        badge: "Conformité Globale & Distinctions",
        title: "Prix & Architectures Certifiées",
        desc: "Nos méthodologies sont auditées, nos flux techniques sont standardisés et nos systèmes fonctionnent sous des règles de sécurité mondiales rigoureuses.",
        verificationText: "Tous les identifiants d'enregistrement, d'accréditation et d'audit des partenaires sont entièrement vérifiables lors de l'intégration des clients. Clés sécurisées disponibles sur demande.",
        verifyButton: "Demander le Dossier Sécurité",
        activeBadge: "CONFORMITÉ ACTIVE",
        
        cntProjectsLabel: "Systèmes d'Entreprise",
        cntProjectsSub: "Déployés avec succès dans le monde",
        cntClientsLabel: "Clients Globaux",
        cntClientsSub: "Fortune 500 & réseaux d'envergure",
        cntUptimeLabel: "Garantie de Disponibilité",
        cntUptimeSub: "Appliquée par des contrats SLA",
        cntSupportLabel: "Support Centre NOC",
        cntSupportSub: "Ingénieurs actifs en temps réel",

        certGcpTitle: "Partenaire Google Cloud",
        certGcpIssuer: "Google Cloud Partner Network",
        certGcpDesc: "Accrédité pour le déploiement de clusters de conteneurs d'entreprise, de pipelines Cloud Run à haute concurrence et d'architectures serverless.",
        
        certAwsTitle: "Fournisseur de Solutions AWS",
        certAwsIssuer: "Amazon Web Services Partner Desk",
        certAwsDesc: "Reconnu pour l'architecture de bases de données tolérantes aux pannes, de réseaux privés VPC sécurisés et de CDN hautement performants.",
        
        certMsTitle: "Partenaire Solutions Microsoft",
        certMsIssuer: "Microsoft Enterprise Network",
        certMsDesc: "Certifié pour le déploiement de frameworks d'applications d'entreprise de haute intégrité, de bases de données et de migrations héritées.",
        
        certIsoSecTitle: "Certifié ISO/IEC 27001",
        certIsoSecIssuer: "Autorité Internationale des Normes",
        certIsoSecDesc: "Système de gestion de la sécurité de l'information (ISMS) entièrement audité garantissant une protection à 100 % des données d'entreprise.",
        
        certIsoQualTitle: "Certifié Qualité ISO 9001",
        certIsoQualIssuer: "Forum d'Accréditation Qualité",
        certIsoQualDesc: "Cycles de contrôle qualité standardisés à travers nos pipelines de livraison agiles, couverture de tests et modèles de livraison.",
        
        certScrumTitle: "Partenaire Scrum Alliance",
        certScrumIssuer: "Scrum Alliance Global Board",
        certScrumDesc: "Application de méthodologies de sprint systématiques, de systèmes de tickets automatisés et de rapports d'alignement transparents.",
        
        certNvidiaTitle: "Partenaire NVIDIA AI",
        certNvidiaIssuer: "Programme NVIDIA Inception",
        certNvidiaDesc: "Spécialisé dans l'optimisation des calculs GPU, les essaims de modèles de langage privés et les réseaux de deep learning quantifiés.",
        
        certOpenaiTitle: "Partenaire Solutions OpenAI",
        certOpenaiIssuer: "OpenAI Enterprise Alliance",
        certOpenaiDesc: "Certifié dans la conception de graphes de raisonnement multi-agents complexes, le cache sémantique et l'optimisation de fenêtres."
      },
      de: {
        badge: "Globale Compliance & Auszeichnungen",
        title: "Zertifikate & Ausgezeichnete Architekturen",
        desc: "Unsere Methoden sind auditiert, unsere technischen Workflows standardisiert und unsere Systeme arbeiten unter strengen globalen Sicherheitsregeln.",
        verificationText: "Alle Registrierungs-IDs, Zertifikate und Partner-Audit-Protokolle sind während des Onboardings vollständig überprüfbar. Sichere Dokumentenschlüssel auf Anfrage.",
        verifyButton: "Sicherheitsordner anfordern",
        activeBadge: "AKTIVE COMPLIANCE",
        
        cntProjectsLabel: "Unternehmenssysteme",
        cntProjectsSub: "Erfolgreich weltweit implementiert",
        cntClientsLabel: "Globale Kunden",
        cntClientsSub: "Fortune 500 & Großkonzerne",
        cntUptimeLabel: "Verfügbarkeitsgarantie",
        cntUptimeSub: "Durch verbindliche SLAs erzwungen",
        cntSupportLabel: "NOC-Center Support",
        cntSupportSub: "Aktive Echtzeit-Ingenieure",

        certGcpTitle: "Google Cloud Partner",
        certGcpIssuer: "Google Cloud Partner Network",
        certGcpDesc: "Akkreditiert für die Bereitstellung von Enterprise-Container-Clustern, hochperformanten Cloud Run-Pipelines und Serverless-Architekturen.",
        
        certAwsTitle: "AWS-Lösungsanbieter",
        certAwsIssuer: "Amazon Web Services Partner Desk",
        certAwsDesc: "Anerkannt für die Architektur fehlertoleranter Datenbanken, sicherer VPC-Netzwerke und global replizierter Hochleistungs-CDNs.",
        
        certMsTitle: "Microsoft Solutions Partner",
        certMsIssuer: "Microsoft Enterprise Network",
        certMsDesc: "Zertifiziert für die Bereitstellung hochintegrierter Anwendungs-Frameworks, Unternehmensdatenbanken und komplexer Legacy-Migrationen.",
        
        certIsoSecTitle: "ISO/IEC 27001 zertifiziert",
        certIsoSecIssuer: "Internationale Normenbehörde",
        certIsoSecDesc: "Vollständig geprüftes Informationssicherheits-Managementsystem (ISMS) für 100%igen Schutz proprietärer Unternehmensdaten.",
        
        certIsoQualTitle: "ISO 9001 Qualitätszertifiziert",
        certIsoQualIssuer: "Akkreditierungsforum für Qualität",
        certIsoQualDesc: "Standardisierte Qualitätskontrollzyklen in agilen Sprint-Workflows, Software-Testabdeckungen und Liefermodellen.",
        
        certScrumTitle: "Scrum Alliance Partner",
        certScrumIssuer: "Scrum Alliance Global Board",
        certScrumDesc: "Anwendung systematischer Sprint-Methoden, automatisierter Ticket-Systeme und hochtransparenter Projekt-Abgleichprotokolle.",
        
        certNvidiaTitle: "NVIDIA KI-Partner",
        certNvidiaIssuer: "NVIDIA Inception-Programm",
        certNvidiaDesc: "Spezialisiert auf GPU-Compute-Optimierung, private lokale Sprachmodell-Swarms und quantisierte Deep-Learning-Netzwerke.",
        
        certOpenaiTitle: "OpenAI-Lösungspartner",
        certOpenaiIssuer: "OpenAI Enterprise Alliance",
        certOpenaiDesc: "Zertifiziert für das Design komplexer Multi-Agenten-Argumentationsgraphen, semantisches Token-Caching und Kontextfenster-Optimierung."
      }
    };
  }, []);

  const currentText = localTranslations[language] || localTranslations.en;

  return (
    <section id="awards" className="py-24 px-6 relative bg-gradient-to-b from-[#070b1e] to-[#050816] overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest bg-white/5 border border-white/10 text-cyan-400 mb-4">
              <Sparkles className="h-3 w-3 animate-pulse text-cyan-400" /> {currentText.badge}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight"
          >
            {currentText.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            {currentText.desc}
          </motion.p>
        </div>

        {/* Premium Achievement Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {counters.map((cnt, idx) => {
            const Icon = cnt.icon;
            return (
              <motion.div
                key={cnt.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#090d22]/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-white/10 hover:bg-[#090d22]/70 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Micro accent top glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-gradient-to-r group-hover:${cnt.colorClass} group-hover:text-black transition-all duration-300`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[8px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                    100% SLA
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-cyan-200">
                      {cnt.value}
                    </span>
                  </h3>
                  <h4 className="text-xs font-bold text-gray-200 font-sans uppercase tracking-wider mb-1">
                    {currentText[cnt.labelKey as keyof typeof currentText]}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-normal leading-normal">
                    {currentText[cnt.subKey as keyof typeof currentText]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 8 Certification Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.96, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#090d22]/40 border border-white/5 rounded-3xl p-6 sm:p-7 hover:border-white/20 backdrop-blur-xl hover:bg-[#0a0f2e]/85 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-500 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Radial glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Corner accent indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div>
                  {/* Icon & Year/Status Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl border ${cert.colorClass} transition-all duration-500 group-hover:scale-105`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <span className="text-[8px] font-mono text-cyan-400/80 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full uppercase font-bold tracking-wider">
                      {cert.year === 'Active' ? 'ACTIVE' : 'AUDITED'}
                    </span>
                  </div>

                  {/* Meta details */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500 mb-2">
                    <Calendar className="h-3 w-3 text-cyan-400" />
                    <span>2026</span>
                    <span>•</span>
                    <span className="truncate max-w-[150px]">{currentText[cert.issuerKey as keyof typeof currentText]}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-extrabold text-white mb-3 tracking-wide group-hover:text-cyan-300 transition-colors duration-200">
                    {currentText[cert.titleKey as keyof typeof currentText]}
                  </h3>
                  
                  <p className="text-xs text-gray-400 leading-relaxed font-normal min-h-[64px]">
                    {currentText[cert.descKey as keyof typeof currentText]}
                  </p>
                </div>

                {/* Footer line */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono font-bold text-gray-500 group-hover:text-cyan-400/80 transition-colors">
                  <span className="flex items-center gap-1">
                    <Lock className="h-3 w-3 text-emerald-500 animate-pulse" /> {currentText.activeBadge}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verification Call-to-Action Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* subtle decoration lines */}
          <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-2xl">
            <h4 className="text-sm font-extrabold text-white mb-2 uppercase tracking-wide flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> Audit Verification Policy
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              {currentText.verificationText}
            </p>
          </div>

          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full md:w-auto px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 inline-flex items-center justify-center gap-1.5 cursor-pointer font-mono shadow-sm"
          >
            <span>{currentText.verifyButton}</span>
            <ArrowUpRight className="h-4 w-4 text-cyan-400" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
