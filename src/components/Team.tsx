import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Linkedin, 
  Github, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Layers, 
  Fingerprint, 
  Compass, 
  Workflow 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface TeamMember {
  key: string;
  image: string;
  linkedin: string;
  github: string;
  icon: React.ComponentType<any>;
}

export default function Team() {
  const { language, theme, t } = useApp();

  const members: TeamMember[] = [
    {
      key: 'ceo',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://www.linkedin.com/company/aryanglobalsolutions',
      github: 'https://github.com/aryanglobalsolutions',
      icon: Fingerprint
    },
    {
      key: 'ai',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://www.linkedin.com/company/aryanglobalsolutions',
      github: 'https://github.com/aryanglobalsolutions',
      icon: Cpu
    },
    {
      key: 'fs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://www.linkedin.com/company/aryanglobalsolutions',
      github: 'https://github.com/aryanglobalsolutions',
      icon: Database
    },
    {
      key: 'ux',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://www.linkedin.com/company/aryanglobalsolutions',
      github: 'https://github.com/aryanglobalsolutions',
      icon: Compass
    },
    {
      key: 'devops',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://www.linkedin.com/company/aryanglobalsolutions',
      github: 'https://github.com/aryanglobalsolutions',
      icon: Layers
    },
    {
      key: 'pm',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://www.linkedin.com/company/aryanglobalsolutions',
      github: 'https://github.com/aryanglobalsolutions',
      icon: Workflow
    }
  ];

  const localTranslations = useMemo(() => {
    return {
      en: {
        badge: "Our Elite Minds",
        title: "Meet Our Leadership & Architects",
        desc: "A multidisciplinary team of senior software engineers, AI researchers, and digital product designers driving next-generation enterprise solutions.",
        activeSla: "ACTIVE SECURITY CLEARANCE",
        ceo: {
          name: "Aryan Jain",
          role: "CEO & Founder",
          bio: "A visionary tech entrepreneur and lead system architect guiding enterprise-scale software engineering, global integrations, and AI roadmaps.",
          skills: ["Enterprise Systems", "Strategic Leadership", "Cloud Infrastructure", "System Security"]
        },
        ai: {
          name: "Dr. Sarah Jenkins",
          role: "AI Engineer",
          bio: "Former systems research lead designing private LLM swarms, Retrieval-Augmented Generation (RAG) pipelines, and localized agent orchestration workflows.",
          skills: ["Generative AI", "Vector Search", "Python / PyTorch", "Deep Learning"]
        },
        fs: {
          name: "Vikram Singh",
          role: "Full Stack Developer",
          bio: "Specialist in highly concurrent server layers, high-availability relational databases, and crafting fluid, highly interactive React user interfaces.",
          skills: ["React / Vite", "Node.js / Express", "PostgreSQL", "TypeScript"]
        },
        ux: {
          name: "Elena Rostova",
          role: "UI/UX Designer",
          bio: "Creating immersive digital layouts, premium glassmorphic interfaces, and comprehensive design systems that maximize customer conversion.",
          skills: ["Figma Enterprise", "Design Systems", "Prototyping", "UX Architecture"]
        },
        devops: {
          name: "Marcus Vance",
          role: "Cloud & DevOps Engineer",
          bio: "Enforcing zero-downtime container deployments, secure VPC private networking, and optimized Kubernetes configurations on GCP and AWS.",
          skills: ["Kubernetes", "Docker / Cloud Run", "Terraform", "CI/CD Automations"]
        },
        pm: {
          name: "Nisha Pillai",
          role: "Project Manager",
          bio: "Streamlining agile delivery sprints, managing enterprise service SLA timelines, and aligning technical milestones with corporate objectives.",
          skills: ["Scrum Master", "SLA Auditing", "Risk Mitigation", "Enterprise Relations"]
        }
      },
      hi: {
        badge: "हमारे विशिष्ट विशेषज्ञ",
        title: "हमारे नेतृत्व और आर्किटेक्ट्स से मिलें",
        desc: "वरिष्ठ सॉफ्टवेयर इंजीनियरों, एआई शोधकर्ताओं और डिजिटल उत्पाद डिजाइनरों की एक बहु-विषयक टीम जो अगली पीढ़ी के उद्यम समाधान चला रही है।",
        activeSla: "सक्रिय सुरक्षा मंजूरी",
        ceo: {
          name: "आर्यन जैन",
          role: "सीईओ और संस्थापक",
          bio: "उद्यम-स्तरीय सॉफ़्टवेयर इंजीनियरिंग, वैश्विक एकीकरण और एआई रोडमैप का मार्गदर्शन करने वाले एक दूरदर्शी तकनीकी उद्यमी और प्रमुख सिस्टम आर्किटेक्ट।",
          skills: ["एंटरप्राइज सिस्टम", "रणनीतिक नेतृत्व", "क्लाउड इन्फ्रास्ट्रक्चर", "सिस्टम सुरक्षा"]
        },
        ai: {
          name: "डॉ. सारा जेनकिंस",
          role: "एआई इंजीनियर",
          bio: "पूर्व प्रणालियों के अनुसंधान प्रमुख, जो निजी एलएलएम झुंड, रिट्रीवल-ऑगमेंटेड जनरेशन (RAG) पाइपलाइन और स्थानीयकृत एजेंट वर्कफ़्लो तैयार करते हैं।",
          skills: ["जेनरेटिव एआई", "वेक्टर खोज", "पायथन / पायटॉर्च", "डीप लर्निंग"]
        },
        fs: {
          name: "विक्रम सिंह",
          role: "फुल स्टैक डेवलपर",
          bio: "अत्यधिक समवर्ती सर्वर परतों, उच्च-उपलब्धता रिलेशनल डेटाबेस, और तरल, अत्यधिक संवादात्मक रिएक्ट यूजर इंटरफेस तैयार करने में विशेषज्ञ।",
          skills: ["रिएक्ट / विट", "नोड.जेएस / एक्सप्रेस", "पोस्टग्रेएसक्यूएल", "टाइपस्क्रिप्ट"]
        },
        ux: {
          name: "एलेना रोस्तोवा",
          role: "यूआई/यूएक्स डिजाइनर",
          bio: "इमर्सिव डिजिटल लेआउट, प्रीमियम ग्लास्मोर्फिक इंटरफेस और व्यापक डिजाइन सिस्टम बनाना जो ग्राहक रूपांतरण को अधिकतम करते हैं।",
          skills: ["फिग्मा एंटरप्राइज", "डिजाइन सिस्टम", "प्रोटोटाइपिंग", "यूएक्स आर्किटेक्चर"]
        },
        devops: {
          name: "मार्कस वेंस",
          role: "क्लाउड और डेवऑप्स इंजीनियर",
          bio: "शून्य-डाउनटाइम कंटेनर परिनियोजन, सुरक्षित वीपीसी निजी नेटवर्किंग और जीसीपी और एडब्ल्यूएस पर अनुकूलित कुबेरनेट्स कॉन्फ़िगरेशन लागू करना।",
          skills: ["कुबेरनेट्स", "डॉकर / क्लाउड रन", "टेराफॉर्म", "सीआई/सीडी स्वचालन"]
        },
        pm: {
          name: "निशा पिल्लई",
          role: "परियोजना प्रबंधक",
          bio: "चुस्त वितरण स्प्रिंट को सुव्यवस्थित करना, एंटरप्राइज़ सेवा एसएलए समयसीमा का प्रबंधन करना और कॉर्पोरेट उद्देश्यों के साथ तकनीकी मील के पत्थर संरेखित करना।",
          skills: ["स्क्रम मास्टर", "एसएलए ऑडिटिंग", "जोखिम शमन", "एंटरप्राइज संबंध"]
        }
      },
      ar: {
        badge: "عقولنا النخبة",
        title: "تعرف على قادتنا ومهندسينا",
        desc: "فريق متعدد التخصصات من كبار مهندسي البرمجيات وباحثي الذكاء الاصطناعي ومصممي المنتجات الرقمية الذين يقودون حلول المؤسسات من الجيل القادم.",
        activeSla: "تصريح أمني نشط",
        ceo: {
          name: "آريان جين",
          role: "الرئيس التنفيذي والمؤسس",
          bio: "رائد أعمال تقني ذو رؤية ومهندس أنظمة رائد يقود هندسة البرمجيات على مستوى المؤسسات والدمج العالمي وخرائط طريق الذكاء الاصطناعي.",
          skills: ["أنظمة المؤسسات", "القيادة الاستراتيجية", "البنية التحتية السحابية", "أمن الأنظمة"]
        },
        ai: {
          name: "د. سارة جينكينز",
          role: "مهندس ذكاء اصطناعي",
          bio: "رئيسة أبحاث الأنظمة السابقة التي تصمم أسراب النماذج اللغوية الخاصة، وقنوات توليد المعلومات المدعومة بالاسترجاع (RAG)، وتنسيق الوكلاء المحليين.",
          skills: ["الذكاء الاصطناعي التوليدي", "البحث المتجه", "بايثون / بايتورتش", "التعلم العميق"]
        },
        fs: {
          name: "فيكرام سينغ",
          role: "مطور ويب متكامل",
          bio: "متخصص في طبقات الخوادم عالية التزامن، وقواعد البيانات المترابطة عالية التوافر، وصياغة واجهات مستخدم تفاعلية وسلسة للغاية باستخدام React.",
          skills: ["React / Vite", "Node.js / Express", "PostgreSQL", "TypeScript"]
        },
        ux: {
          name: "إيلينا روستوفا",
          role: "مصمم واجهات المستخدم (UI/UX)",
          bio: "إنشاء تخطيطات رقمية غامرة، وواجهات زجاجية متميزة، وأنظمة تصميم شاملة تزيد من معدل تحويل العملاء.",
          skills: ["Figma للمؤسسات", "أنظمة التصميم", "بناء النماذج الأولية", "بنية تجربة المستخدم"]
        },
        devops: {
          name: "ماركوس فانس",
          role: "مهندس السحابة والعمليات (DevOps)",
          bio: "تطبيق عمليات نشر الحاويات دون توقف، والشبكات الخاصة الافتراضية الآمنة VPC، وتكوينات Kubernetes المحسنة على منصات GCP و AWS.",
          skills: ["Kubernetes", "Docker / Cloud Run", "Terraform", "قنوات CI/CD"]
        },
        pm: {
          name: "نيشا بيلاي",
          role: "مدير المشروع",
          bio: "تبسيط جولات تسليم البرمجيات المرنة، وإدارة الجداول الزمنية لاتفاقيات مستوى الخدمة (SLA)، ومحاذاة المعالم التقنية مع أهداف الشركة.",
          skills: ["Scrum Master", "تدقيق اتفاقيات SLA", "تخفيف المخاطر", "علاقات المؤسسات"]
        }
      },
      fr: {
        badge: "Nos Esprits d'Élite",
        title: "Rencontrez Notre Direction & Architectes",
        desc: "Une équipe multidisciplinaire d'ingénieurs logiciels seniors, de chercheurs en IA et de designers de produits digitaux qui impulsent les solutions d'entreprise de nouvelle génération.",
        activeSla: "HABILITATION DE SÉCURITÉ ACTIVE",
        ceo: {
          name: "Aryan Jain",
          role: "Directeur Général & Fondateur",
          bio: "Entrepreneur technologique visionnaire et architecte système principal guidant l'ingénierie logicielle d'entreprise, les intégrations mondiales et les feuilles de route IA.",
          skills: ["Systèmes d'Entreprise", "Leadership Stratégique", "Infrastructure Cloud", "Sécurité des Systèmes"]
        },
        ai: {
          name: "Dr. Sarah Jenkins",
          role: "Ingénieur IA",
          bio: "Ancienne directrice de recherche en systèmes concevant des essaims de LLM privés, des pipelines RAG (Retrieval-Augmented Generation) et des orchestrations d'agents locaux.",
          skills: ["IA Générative", "Recherche Vectorielle", "Python / PyTorch", "Deep Learning"]
        },
        fs: {
          name: "Vikram Singh",
          role: "Développeur Full Stack",
          bio: "Spécialiste des couches serveurs hautement concurrentes, des bases de données relationnelles à haute disponibilité, et de la création d'interfaces React fluides et hautement interactives.",
          skills: ["React / Vite", "Node.js / Express", "PostgreSQL", "TypeScript"]
        },
        ux: {
          name: "Elena Rostova",
          role: "Designer UI/UX",
          bio: "Création de maquettes numériques immersives, d'interfaces glassmorphes haut de gamme et de systèmes de design complets qui maximisent la conversion des clients.",
          skills: ["Figma Enterprise", "Systèmes de Design", "Prototypage", "Architecture UX"]
        },
        devops: {
          name: "Marcus Vance",
          role: "Ingénieur Cloud & DevOps",
          bio: "Déploiement de conteneurs avec zéro temps d'arrêt, réseaux privés virtuels sécurisés (VPC) et configurations Kubernetes optimisées sur GCP et AWS.",
          skills: ["Kubernetes", "Docker / Cloud Run", "Terraform", "Pipelines CI/CD"]
        },
        pm: {
          name: "Nisha Pillai",
          role: "Directeur de Projet",
          bio: "Optimisation des sprints de livraison agiles, gestion des délais SLA de services d'entreprise et alignement des jalons techniques avec les objectifs de l'entreprise.",
          skills: ["Scrum Master", "Audit de SLA", "Atténuation des Risques", "Relations Entreprise"]
        }
      },
      de: {
        badge: "Unsere Elite-Köpfe",
        title: "Lernen Sie unsere Führung & Architekten kennen",
        desc: "Ein multidisziplinäres Team von erfahrenen Software-Ingenieuren, KI-Forschern und digitalen Produktdesignern, die Unternehmenslösungen der nächsten Generation entwickeln.",
        activeSla: "AKTIVE SICHERHEITSÜBERPRÜFUNG",
        ceo: {
          name: "Aryan Jain",
          role: "Gründer & Systemarchitekt",
          bio: "Ein visionärer Tech-Unternehmer und führender Systemarchitekt, der die Softwareentwicklung auf Unternehmensebene, globale Integrationen und KI-Roadmaps leitet.",
          skills: ["Unternehmenssysteme", "Strategische Führung", "Cloud-Infrastruktur", "System-Sicherheit"]
        },
        ai: {
          name: "Dr. Sarah Jenkins",
          role: "KI-Ingenieur",
          bio: "Ehemalige Leiterin der Systemforschung, die private LLM-Swarms, Retrieval-Augmented Generation (RAG)-Pipelines und lokalisierte Agenten-Orchestrierungs-Workflows entwickelt.",
          skills: ["Generative KI", "Vektorsuche", "Python / PyTorch", "Deep Learning"]
        },
        fs: {
          name: "Vikram Singh",
          role: "Full-Stack-Entwickler",
          bio: "Spezialisiert auf hochgradig parallele Server-Schichten, hochverfügbare relationale Datenbanken und die Erstellung flüssiger, interaktiver React-Benutzeroberflächen.",
          skills: ["React / Vite", "Node.js / Express", "PostgreSQL", "TypeScript"]
        },
        ux: {
          name: "Elena Rostova",
          role: "UI/UX-Designer",
          bio: "Erstellung immersiver digitaler Layouts, erstklassiger glassmorpher Benutzeroberflächen und umfassender Designsysteme, die die Kundenkonversion maximieren.",
          skills: ["Figma Enterprise", "Design-Systeme", "Prototyping", "UX-Architektur"]
        },
        devops: {
          name: "Marcus Vance",
          role: "Cloud- & DevOps-Ingenieur",
          bio: "Gewährleistung von Container-Deployments ohne Ausfallzeiten, sicherer privater VPC-Netzwerke und optimierter Kubernetes-Konfigurationen auf GCP und AWS.",
          skills: ["Kubernetes", "Docker / Cloud Run", "Terraform", "CI/CD-Pipelines"]
        },
        pm: {
          name: "Nisha Pillai",
          role: "Projektmanager",
          bio: "Optimierung agiler Liefer-Sprints, Verwaltung von SLA-Zeitplänen für Unternehmensservices und Abstimmung technischer Meilensteine mit Unternehmenszielen.",
          skills: ["Scrum Master", "SLA-Auditierung", "Risikominderung", "Unternehmensbeziehungen"]
        }
      }
    };
  }, []);

  const currentText = localTranslations[language] || localTranslations.en;

  return (
    <section id="about" className="py-24 px-6 relative bg-gradient-to-b from-[#050816] to-[#070b1e] overflow-hidden">
      {/* Background soft glowing spheres */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
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

        {/* 6-Card Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => {
            const memberData = currentText[member.key as keyof typeof currentText] as any;
            const Icon = member.icon;

            return (
              <motion.div
                key={member.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#090d22]/40 border border-white/5 hover:border-white/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:bg-[#090d22]/80 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 relative group overflow-hidden"
              >
                {/* Micro hover top glow accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  {/* Photo Section with Gradient Ring Frame */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay z-10 pointer-events-none" />
                    <img
                      src={member.image}
                      alt={memberData.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-103"
                    />
                    
                    {/* Floating role icon badge */}
                    <div className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-cyan-400 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-300">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Identity */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-extrabold text-white tracking-wide group-hover:text-cyan-300 transition-colors duration-200">
                        {memberData.name}
                      </h3>
                      <p className="text-xs font-mono text-indigo-400 mt-1 uppercase tracking-wider font-semibold">
                        {memberData.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio Description */}
                  <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal min-h-[72px]">
                    {memberData.bio}
                  </p>

                  {/* Dynamic Skill Badge Chips */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {memberData.skills.map((skill: string) => (
                      <span 
                        key={skill} 
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono text-cyan-300 group-hover:text-white group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all font-semibold tracking-wider"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer with Security SLA & Social Media connections */}
                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] text-gray-500 font-mono flex items-center gap-1 font-semibold tracking-widest uppercase">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 animate-pulse" /> {currentText.activeSla}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/10"
                      aria-label={`${memberData.name} LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4 text-cyan-400" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/10"
                      aria-label={`${memberData.name} GitHub`}
                    >
                      <Github className="h-4 w-4 text-purple-400" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
