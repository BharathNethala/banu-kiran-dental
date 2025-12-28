
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  onBookClick: () => void;
}

const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Left Blue Part */}
    <path 
      d="M50 30C40 25 30 28 25 40C20 55 25 75 45 85C48 87 50 83 50 80C50 75 40 70 35 60C30 50 40 35 50 35V30Z" 
      fill="#0066CC" 
    />
    {/* Right Red Part */}
    <path 
      d="M50 30C60 25 70 28 75 40C80 55 75 75 55 85C52 87 50 83 50 80C50 75 60 70 65 60C70 50 60 35 50 35V30Z" 
      fill="#DC143C" 
    />
    {/* Smile Line */}
    <path 
      d="M35 55C40 60 60 60 65 55" 
      stroke="#DC143C" 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
  </svg>
);

export const Header: React.FC<HeaderProps> = ({ isScrolled, onBookClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Doctors', href: '#doctors', id: 'doctors' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      if (scrollPosition < 500) {
        setActiveSection('home');
        return;
      }
      const sections = navLinks
        .map(link => link.id)
        .filter(id => id !== 'home')
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      for (const section of sections.reverse()) {
        if (scrollPosition >= section.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out h-[var(--header-height)] flex items-center ${
        isScrolled || isMenuOpen 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand Logo Only */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center cursor-pointer group z-[110]"
        >
          <div className="transform transition-all group-hover:scale-110 drop-shadow-sm">
            <Logo className="h-12 w-12" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 h-full">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative h-full flex items-center text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300 ${
                activeSection === link.id 
                  ? 'text-medical-accent' 
                  : !isScrolled ? 'text-white/70 hover:text-white' : 'text-secondary hover:text-medical-darkBlue'
              }`}
            >
              {link.name}
              <span 
                className={`absolute bottom-0 left-0 h-[2px] bg-medical-accent transition-all duration-500 ${
                  activeSection === link.id ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-5">
        
        </div>

        {/* Mobile UI */}
        <div className="flex lg:hidden items-center gap-3 z-[110]">
          <button 
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${!isScrolled && !isMenuOpen ? 'text-white hover:bg-white/10' : 'text-medical-darkBlue hover:bg-slate-100'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Professional Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
        style={{ top: 'var(--header-height)', height: 'calc(100vh - var(--header-height))' }}
      >
        <div className="flex flex-col items-center justify-center h-full px-8 pb-12 gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-2xl font-heading font-bold transition-all duration-500 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} ${activeSection === link.id ? 'text-medical-accent' : 'text-medical-darkBlue'}`}
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="mt-4 bg-medical-blue text-white w-full max-w-xs py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/10 active:scale-95 transition-all"
            onClick={() => {
              setIsMenuOpen(false);
              onBookClick();
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
};
