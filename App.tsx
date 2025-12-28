
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BeforeAfter } from './components/BeforeAfter';
import { Doctors } from './components/Doctors';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Phone } from 'lucide-react';

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBooking = (serviceName: string | null = null) => {
    // Standardizing service keys for the modal
    const serviceMap: Record<string, string> = {
      'Digital Dentistry': 'Checkup',
      'Laser Teeth Whitening': 'Whitening',
      'Zirconia Implants': 'Implants',
      'Invisible Aligners': 'Aligners',
      'Smile Makeovers': 'Whitening',
      'Kids Special Care': 'Checkup',
      'Specialist Consultation': 'Checkup',
      'Teeth Cleaning': 'Cleaning',
      'Whitening': 'Whitening',
      'Implants': 'Implants',
      'Aligners': 'Aligners',
      'Checkup': 'Checkup'
    };
    
    const mappedService = serviceName && serviceMap[serviceName] ? serviceMap[serviceName] : serviceName;
    setSelectedService(mappedService);
    setIsBookingModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Dr. Surendra Dental Clinic, I'd like to book an appointment for a dental consultation.");
    window.open(`https://wa.me/919912939531?text=${message}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 selection:bg-medical-blue selection:text-white transition-colors duration-300">
      <Header isScrolled={isScrolled} onBookClick={() => openBooking()} />
      
      <main className="flex-grow">
        <Hero onBookClick={() => openBooking()} />
        <Stats onStatClick={scrollToSection} />
        <Services onBookService={(service) => openBooking(service)} />
        <WhyChooseUs onBenefitClick={(ctx) => openBooking(ctx)} />
        <BeforeAfter onAction={() => openBooking('Whitening')} />
        <Doctors onDoctorClick={() => openBooking('Checkup')} />
        <Testimonials onAction={() => openBooking('Checkup')} />
        <FAQ onAction={() => scrollToSection('contact')} />
        <Contact onBookClick={() => openBooking()} />
        <FinalCTA onBookClick={() => openBooking()} />
      </main>

      <Footer />

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        preselectedService={selectedService}
      />

      {/* Floating Action Elements - Focused on Direct Communication */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 items-end group pointer-events-none">
        <a 
          href="tel:+919912939531"
          className="pointer-events-auto bg-medical-blue text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 active:scale-90 border-2 border-white/20"
        >
          <Phone size={20} />
        </a>
        
        <button 
          onClick={openWhatsApp}
          className="pointer-events-auto bg-[#25D366] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-3xl shadow-green-500/30 flex items-center justify-center active:scale-90 transition-all animate-float border-2 border-white/20 hover:bg-[#128C7E]"
          aria-label="Contact on WhatsApp"
        >
          <WhatsAppIcon size={32} />
        </button>
      </div>
    </div>
  );
};

export default App;
