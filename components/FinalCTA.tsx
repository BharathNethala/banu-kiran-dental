
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-medical-blue rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl shadow-blue-500/40">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="reveal text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              Book your appointment <br className="hidden md:block" /> 
              <span className="relative inline-block">
                today
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-medical-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <p className="reveal text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium" style={{ transitionDelay: '150ms' }}>
              Join thousands of happy patients who trust us with their smiles. Start your journey to better dental health now.
            </p>

            <button 
              onClick={onBookClick}
              className="reveal bg-white hover:bg-gray-100 text-medical-blue px-12 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto group"
              style={{ transitionDelay: '300ms' }}
            >
              Book Appointment Now
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <div className="reveal mt-12 flex flex-wrap justify-center gap-8 text-sm font-semibold text-blue-100/80" style={{ transitionDelay: '450ms' }}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-medical-mint"></div>
                New Patient Discounts
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-medical-mint"></div>
                No Insurance? No Problem
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-medical-mint"></div>
                Flexible Financing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
