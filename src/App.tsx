import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import TrustedAndTestimonials from './components/TrustedAndTestimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Industries from './components/Industries';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Consultation from './components/Consultation';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ChatAssistant from './components/ChatAssistant';
import CookieConsent from './components/CookieConsent';

// Premium Enterprise Additions
import Preloader from './components/Preloader';
import { useApp } from './context/AppContext';
import SkeletonLoader from './components/SkeletonLoader';
import ClientLogos from './components/ClientLogos';
import TechStack from './components/TechStack';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Awards from './components/Awards';
import Blog from './components/Blog';
import WhatsAppButton from './components/WhatsAppButton';
import SchedulerModal from './components/SchedulerModal';
import ComplianceModal from './components/ComplianceModal';

// Lazy load heavy sections
const HireDevelopers = lazy(() => import('./components/HireDevelopers'));
const Careers = lazy(() => import('./components/Careers'));
const Resources = lazy(() => import('./components/Resources'));
const ClientPortal = lazy(() => import('./components/ClientPortal'));

export default function App() {
  const { activeSection } = useApp();
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);
  const [complianceTab, setComplianceTab] = useState<'privacy' | 'terms' | 'refund' | 'cookies'>('privacy');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Set Dynamic Page Title & Back-to-top visibility
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Aryan Global Solutions | Enterprise Software & AI Engineering',
      hire: 'Hire Elite Developers | Aryan Global Solutions',
      careers: 'Careers & Technical Openings | Aryan Global Solutions',
      resources: 'Enterprise Documentation & Specs | Aryan Global Solutions',
      portal: 'Secure Partner Dashboard | Aryan Global Solutions',
    };
    
    document.title = titles[activeSection] || 'Aryan Global Solutions | Enterprise Software & AI Engineering';
    
    // Scroll to top on section switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    return () => {
      window.removeEventListener('open-scheduler', handleOpenScheduler);
      window.removeEventListener('open-compliance', handleOpenCompliance);
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
          {activeSection === 'home' && (
            <>
              <Hero />
              <ClientLogos />
              <Services />
              <FeaturedProjects />
              <TrustedAndTestimonials />
              <TechStack />
              <WhyChooseUs />
              <Portfolio />
              <CaseStudies />
              <Pricing />
              <Consultation />
              <Industries />
              <Team />
              <Awards />
              <Process />
              <FAQ />
              <Blog />
              <Contact />
            </>
          )}
          <Suspense fallback={
            <div className="py-24 px-4 max-w-7xl mx-auto">
              <SkeletonLoader type={activeSection === 'portal' ? 'dashboard' : 'card'} count={1} />
            </div>
          }>
            {activeSection === 'hire' && <HireDevelopers />}
            {activeSection === 'careers' && <Careers />}
            {activeSection === 'resources' && <Resources />}
            {activeSection === 'portal' && <ClientPortal />}
          </Suspense>
        </main>
        <Footer />
        <FloatingCTA />
        <WhatsAppButton />
        <ChatAssistant />

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#090d22]/80 border border-white/15 text-cyan-400 hover:text-white hover:bg-cyan-500/20 shadow-lg cursor-pointer backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          )}
        </AnimatePresence>

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
