import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Globe, DollarSign, ChevronDown } from 'lucide-react';
import { useApp, Language, Currency, Theme, AppSection } from '../context/AppContext';

export default function Navbar() {
  const { 
    language, 
    setLanguage, 
    currency, 
    setCurrency, 
    theme, 
    setTheme, 
    activeSection, 
    setActiveSection, 
    t 
  } = useApp();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showCurrDropdown, setShowCurrDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), key: 'home' as const, href: '#home' },
    { name: t('services'), key: 'services' as const, href: '#services' },
    { name: t('whyUs'), key: 'whyUs' as const, href: '#why-choose-us' },
    { name: t('portfolio'), key: 'portfolio' as const, href: '#portfolio' },
    { name: t('process'), key: 'process' as const, href: '#process' },
    { name: t('pricing'), key: 'pricing' as const, href: '#pricing' },
    { name: t('faq'), key: 'faq' as const, href: '#faq' },
  ];

  const secondaryTabs = [
    { name: t('hireDevs'), key: 'hire' as const },
    { name: t('careers'), key: 'careers' as const },
    { name: t('resources'), key: 'resources' as const },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
  ];

  const currencies: { code: Currency; label: string; symbol: string }[] = [
    { code: 'USD', label: 'USD', symbol: '$' },
    { code: 'EUR', label: 'EUR', symbol: '€' },
    { code: 'GBP', label: 'GBP', symbol: '£' },
    { code: 'AED', label: 'AED', symbol: 'د.إ' },
  ];

  const handleLinkClick = (sec: AppSection) => {
    setActiveSection(sec);
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isRTL = language === 'ar';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? theme === 'dark' 
          ? 'bg-[#050816]/90 backdrop-blur-md border-b border-white/10 py-3' 
          : 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={() => handleLinkClick('home')}
          className={`flex items-center gap-2 font-black text-lg tracking-wider transition-colors ${
            theme === 'dark' 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-400' 
              : 'text-gray-900'
          }`}
        >
          ARYAN <span className="text-cyan-500 font-light">GLOBAL</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={link.href}
              onClick={() => handleLinkClick('home')}
              className={`text-xs uppercase tracking-wider transition-colors duration-200 font-bold ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Secondary tabs */}
          {secondaryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleLinkClick(tab.key)}
              className={`text-xs uppercase tracking-wider transition-colors duration-200 font-bold cursor-pointer relative ${
                activeSection === tab.key
                  ? 'text-cyan-400 font-black'
                  : theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab.name}
              {activeSection === tab.key && (
                <motion.span 
                  layoutId="activeNavLine" 
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 rounded-full" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Header Actions (Selector Toggles) */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button 
              onClick={() => { setShowLangDropdown(!showLangDropdown); setShowCurrDropdown(false); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                  : 'bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <Globe className="h-3.5 w-3.5 text-cyan-500" />
              <span className="uppercase">{language}</span>
              <ChevronDown className="h-3 w-3 opacity-60" />
            </button>
            <AnimatePresence>
              {showLangDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`absolute right-0 mt-2 w-36 rounded-xl shadow-2xl border p-1 z-50 ${
                    theme === 'dark'
                      ? 'bg-[#0c102b] border-white/10 text-white'
                      : 'bg-white border-gray-100 text-gray-800'
                  }`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                        language === lang.code
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                          : theme === 'dark'
                            ? 'hover:bg-white/5'
                            : 'hover:bg-gray-100'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Currency Selector Dropdown */}
          <div className="relative">
            <button 
              onClick={() => { setShowCurrDropdown(!showCurrDropdown); setShowLangDropdown(false); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                  : 'bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <DollarSign className="h-3.5 w-3.5 text-indigo-400" />
              <span>{currency}</span>
              <ChevronDown className="h-3 w-3 opacity-60" />
            </button>
            <AnimatePresence>
              {showCurrDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`absolute right-0 mt-2 w-36 rounded-xl shadow-2xl border p-1 z-50 ${
                    theme === 'dark'
                      ? 'bg-[#0c102b] border-white/10 text-white'
                      : 'bg-white border-gray-100 text-gray-800'
                  }`}
                >
                  {currencies.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        setCurrency(curr.code);
                        setShowCurrDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                        currency === curr.code
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                          : theme === 'dark'
                            ? 'hover:bg-white/5'
                            : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-bold mr-1.5">{curr.symbol}</span>
                      {curr.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border cursor-pointer transition-colors ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 hover:bg-white/10 text-yellow-400'
                : 'bg-gray-100 border-gray-200 hover:bg-gray-200 text-indigo-600'
            }`}
            title="Switch Theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* CTA Trigger */}
          <a 
            href="#contact" 
            onClick={() => handleLinkClick('home')}
            className="px-5 py-2 rounded-full text-xs font-extrabold tracking-wider uppercase bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t('ctaQuote')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded-lg border cursor-pointer transition-colors ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-yellow-400'
                : 'bg-gray-100 border-gray-200 text-indigo-600'
            }`}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`p-1.5 rounded-lg border cursor-pointer ${
              theme === 'dark' ? 'text-white border-white/10' : 'text-gray-800 border-gray-200'
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-full left-0 w-full border-b flex flex-col p-6 gap-4 lg:hidden z-50 ${
              theme === 'dark'
                ? 'bg-[#050816]/98 border-white/10 text-white'
                : 'bg-white border-gray-200 text-gray-800'
            }`}
          >
            {navLinks.map((link) => (
              <a 
                key={link.key} 
                href={link.href} 
                onClick={() => handleLinkClick('home')}
                className="text-sm font-semibold uppercase tracking-wider py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile secondary tabs */}
            {secondaryTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleLinkClick(tab.key)}
                className={`text-sm font-semibold uppercase tracking-wider py-2 border-b border-white/5 text-left cursor-pointer ${
                  activeSection === tab.key ? 'text-cyan-400' : ''
                }`}
              >
                {tab.name}
              </button>
            ))}

            {/* Language & Currency selector grids for Mobile */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className={`w-full p-2.5 rounded-xl text-xs font-semibold border ${
                    theme === 'dark' 
                      ? 'bg-[#0c102b] border-white/10 text-white' 
                      : 'bg-gray-100 border-gray-200 text-gray-700'
                  }`}
                >
                  {languages.map((l) => (
                    <option key={l.code} value={l.code}>{l.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as Currency)}
                  className={`w-full p-2.5 rounded-xl text-xs font-semibold border ${
                    theme === 'dark' 
                      ? 'bg-[#0c102b] border-white/10 text-white' 
                      : 'bg-gray-100 border-gray-200 text-gray-700'
                  }`}
                >
                  {currencies.map((c) => (
                    <option key={c.code} value={c.code}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <a 
              href="#contact" 
              onClick={() => handleLinkClick('home')}
              className="mt-4 w-full text-center py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
            >
              {t('ctaQuote')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
