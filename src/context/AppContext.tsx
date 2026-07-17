import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar' | 'fr' | 'de';
export type Currency = 'USD' | 'EUR' | 'GBP' | 'AED';
export type Theme = 'dark' | 'light';
export type AppSection = 'home' | 'hire' | 'careers' | 'resources';

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
    contact: 'Contact',
    blog: 'Insights',
    careers: 'Careers',
    resources: 'Resources',
    hireDevs: 'Hire Developers',
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
    contact: 'اتصل بنا',
    blog: 'المدونة',
    careers: 'الوظائف',
    resources: 'الموارد',
    hireDevs: 'توظيف المطورين',
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
    contact: 'Contact',
    blog: 'Actualités',
    careers: 'Carrières',
    resources: 'Ressources',
    hireDevs: 'Recruter des Développeurs',
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
    contact: 'Kontakt',
    blog: 'Blog',
    careers: 'Karriere',
    resources: 'Ressourcen',
    hireDevs: 'Entwickler Einstellen',
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
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeSection, setActiveSection] = useState<AppSection>('home');

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
    return translations[language][key] || translations['en'][key] || key;
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
