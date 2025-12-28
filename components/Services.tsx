
import React from 'react';
import { Activity, Shield, Smile, Heart, Sparkles, UserRound, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  const services = [
    { title: 'Digital Dentistry', desc: 'Precision diagnostics using 3D scanning technology.', icon: <Activity size={24} /> },
    { title: 'Laser Whitening', desc: 'Medical-grade whitening for immediate results.', icon: <Smile size={24} /> },
    { title: 'Zirconia Implants', desc: 'Highly durable, biocompatible restorative solutions.', icon: <Shield size={24} /> },
    { title: 'Invisible Aligners', desc: 'Discrete orthodontic correction for all ages.', icon: <Heart size={24} /> },
    { title: 'Smile Makeovers', desc: 'Tailored aesthetic reconstruction plans.', icon: <Sparkles size={24} /> },
    { title: 'Pediatric Care', desc: 'Gentle clinical environment for young patients.', icon: <UserRound size={24} /> }
  ];

  return (
    <section id="services" className="py-24 bg-dental-white-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-dental-gray-primary mb-4">
            Clinical Services
          </h2>
          <p className="text-dental-gray-secondary font-sans italic">Advanced procedures delivered with medical excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group bg-white p-8 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 bg-dental-white-secondary rounded-xl flex items-center justify-center text-dental-blue-primary mb-6 transition-colors group-hover:bg-dental-blue-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-subheading font-semibold text-dental-gray-primary mb-3">{service.title}</h3>
              <p className="text-dental-gray-secondary font-sans text-sm leading-relaxed mb-6">{service.desc}</p>
              <button 
                onClick={() => onBookService(service.title)}
                className="inline-flex items-center gap-2 text-dental-blue-primary font-subheading font-semibold text-xs uppercase tracking-widest transition-all group-hover:gap-4"
              >
                Inquire Now <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
