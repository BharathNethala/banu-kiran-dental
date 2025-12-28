
import React from 'react';

interface DoctorsProps {
  onDoctorClick: () => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onDoctorClick }) => {
  const doctors = [
    {
      name: 'Dr. Bhanu Kiran',
      qual: 'MDS Specialist',
      exp: 'Experienced Dental Surgeon',
      spec: 'Lead Dental Specialist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop'
    },
    {
      name: 'Our Dental Team',
      qual: 'Certified Staff',
      exp: 'Friendly & Supportive',
      spec: 'Clinical Excellence',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <section id="doctors" className="py-24 bg-medical-softBlue dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-4">
            Meet Dr. Bhanu Kiran
          </h2>
          <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            Providing expert dental care with a gentle touch and careful attention to every patient's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {doctors.map((doc, idx) => (
            <button 
              key={idx} 
              onClick={onDoctorClick}
              className="group bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-lg shadow-blue-500/5 dark:shadow-none hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3 active:scale-[0.98] border border-white dark:border-slate-700 reveal w-full text-left"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold text-lg">Click to Book Consultation</span>
                </div>
              </div>
              <div className="p-8">
                <p className="text-medical-blue font-bold text-sm uppercase tracking-widest mb-2">{doc.spec}</p>
                <h3 className="text-2xl font-heading font-bold text-primary dark:text-white mb-1 group-hover:text-medical-blue transition-colors">{doc.name}</h3>
                <p className="text-secondary dark:text-slate-400 text-sm mb-4">{doc.qual}</p>
                <div className="w-full h-px bg-gray-100 dark:bg-slate-700 mb-4"></div>
                <div className="flex items-center gap-2 text-medical-mint font-semibold">
                  <div className="w-2 h-2 rounded-full bg-medical-mint animate-pulse"></div>
                  {doc.exp}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
