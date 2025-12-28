
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-[700px] flex items-center pt-[70px] overflow-hidden bg-medical-blue text-white">
      {/* Background Layer: Vibrant Blue gradient on the left, Clinical Image on the right */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue via-medical-blue/95 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074&auto=format&fit=crop" 
          alt="Professional Dental Procedure"
          className="absolute right-0 top-0 w-full lg:w-3/5 h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content Box */}
          <div className="max-w-2xl py-12">
            <h1 className="reveal text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] mb-8" style={{ transitionDelay: '100ms' }}>
              Precision Clinical <br />
              <span className="text-medical-accent">Dental Care.</span>
            </h1>
            
            <h2 className="reveal text-xl md:text-2xl font-subheading font-semibold text-blue-50/90 mb-8 max-w-lg leading-relaxed" style={{ transitionDelay: '200ms' }}>
              Experience painless, specialized dentistry led by Dr. Surendra's 20+ years of expertise.
            </h2>
            
            <div className="reveal flex flex-col sm:flex-row gap-5" style={{ transitionDelay: '400ms' }}>
              <button 
                onClick={onBookClick}
                className="bg-white text-medical-blue font-subheading font-bold px-12 py-4 rounded-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center text-sm uppercase tracking-widest shadow-xl shadow-black/20"
              >
                Book Now
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white text-white font-subheading font-semibold px-10 py-4 rounded-lg transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
              >
                Our Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Quick Trust Badges */}
            <div className="reveal mt-16 flex items-center gap-8 border-t border-white/10 pt-10" style={{ transitionDelay: '500ms' }}>
              <div>
                <p className="text-2xl font-heading font-bold">20+</p>
                <p className="text-[10px] uppercase tracking-tighter opacity-60 font-semibold">Years Practice</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-heading font-bold">50k+</p>
                <p className="text-[10px] uppercase tracking-tighter opacity-60 font-semibold">Happy Patients</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-heading font-bold">4.9/5</p>
                <p className="text-[10px] uppercase tracking-tighter opacity-60 font-semibold">Google Rating</p>
              </div>
            </div>
          </div>
          
          {/* Right Side Empty space for image visibility */}
          <div className="hidden lg:block h-[600px]" />
        </div>
      </div>
      
      {/* Decorative medical line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-medical-accent/50 via-transparent to-transparent opacity-30" />
    </section>
  );
};
