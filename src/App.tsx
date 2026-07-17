import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Industries from './components/Industries';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import CookieConsent from './components/CookieConsent';

// Premium Enterprise Additions
import Preloader from './components/Preloader';
import ClientLogos from './components/ClientLogos';
import TechStack from './components/TechStack';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Awards from './components/Awards';
import Blog from './components/Blog';
import ClientReviews from './components/ClientReviews';
import WhatsAppButton from './components/WhatsAppButton';
import SchedulerModal from './components/SchedulerModal';
import ComplianceModal from './components/ComplianceModal';

export default function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);
  const [complianceTab, setComplianceTab] = useState<'privacy' | 'terms' | 'refund' | 'cookies'>('privacy');

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieBanner(true);
    }

    const handleOpenScheduler = () => {
      setIsSchedulerOpen(true);
    };
    window.addEventListener('open-scheduler', handleOpenScheduler);

    const handleOpenCompliance = (e: Event) => {
      const customEvent = e as CustomEvent<'privacy' | 'terms' | 'refund' | 'cookies'>;
      if (customEvent.detail) {
        setComplianceTab(customEvent.detail);
      }
      setIsComplianceOpen(true);
    };
    window.addEventListener('open-compliance', handleOpenCompliance);

    // Inject Structured Data (Schema.org) for SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Aryan Global Solutions",
      "image": "https://aryanglobalsolutions.com/og-image.jpg",
      "@id": "https://aryanglobalsolutions.com",
      "url": "https://aryanglobalsolutions.com",
      "telephone": "+91 7878743214",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "100 Tech Venture Way",
        "addressLocality": "Silicon Valley",
        "addressRegion": "CA",
        "postalCode": "94025",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://www.linkedin.com/company/aryanglobalsolutions",
        "https://twitter.com/aryanglobal_ai"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      window.removeEventListener('open-scheduler', handleOpenScheduler);
      window.removeEventListener('open-compliance', handleOpenCompliance);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#050816] text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden antialiased min-h-screen">
      {/* Loading Animation Preloader */}
      <Preloader />

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ClientLogos />
          <Stats />
          <Services />
          <TechStack />
          <WhyChooseUs />
          <Portfolio />
          <CaseStudies />
          <ClientReviews />
          <Industries />
          <Team />
          <Awards />
          <Process />
          <Pricing />
          <FAQ />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
        <WhatsAppButton />

        {/* Global Scheduler Modal */}
        <SchedulerModal
          isOpen={isSchedulerOpen}
          onClose={() => setIsSchedulerOpen(false)}
        />

        {/* Global Compliance & legal Modal */}
        <ComplianceModal
          isOpen={isComplianceOpen}
          onClose={() => setIsComplianceOpen(false)}
          initialTab={complianceTab}
        />
        
        <AnimatePresence>
          {showCookieBanner && (
            <CookieConsent 
              onAccept={() => {
                localStorage.setItem('cookieConsent', 'accepted');
                setShowCookieBanner(false);
              }}
              onDecline={() => {
                localStorage.setItem('cookieConsent', 'declined');
                setShowCookieBanner(false);
              }}
              onClose={() => setShowCookieBanner(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
