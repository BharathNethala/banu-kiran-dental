
import React from 'react';
import { Award, Users, Stethoscope, Star } from 'lucide-react';
import { Counter } from './Counter';

interface StatsProps {
  onStatClick: (sectionId: string) => void;
}

export const Stats: React.FC<StatsProps> = ({ onStatClick }) => {
  const stats = [
    {
      icon: <Award className="text-medical-blue" size={24} />,
      target: 20,
      suffix: '+',
      label: 'Years Excellence',
      desc: 'Dedicated Clinical Practice',
      targetId: 'about'
    },
    {
      icon: <Users className="text-medical-mint" size={24} />,
      target: 50000,
      suffix: '+',
      label: 'Patient Care',
      desc: 'Successful Procedures',
      targetId: 'reviews'
    },
    {
      icon: <Stethoscope className="text-medical-blue" size={24} />,
      target: 15,
      suffix: '+',
      label: 'Dental Specialists',
      desc: 'Certified Medical Staff',
      targetId: 'doctors'
    },
    {
      icon: <Star className="text-medical-yellow" size={24} fill="currentColor" />,
      target: 4,
      suffix: '.9 Google',
      label: 'Trusted Clinic',
      desc: 'Based on Verified Reviews',
      targetId: 'reviews'
    }
  ];

  return (
    <section id="stats" className="bg-medical-softBlue dark:bg-slate-900 py-16 sm:py-20 overflow-hidden px-6 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <button 
              key={idx} 
              onClick={() => onStatClick(stat.targetId)}
              className="group bg-white dark:bg-slate-800 p-8 rounded-2xl flex flex-col items-center text-center reveal w-full border border-slate-100 dark:border-slate-800 active:scale-95 transition-all shadow-sm hover:shadow-trust"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-5 p-3 rounded-lg bg-slate-50 dark:bg-slate-950 text-medical-blue transform transition-all group-hover:scale-110">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-heading font-bold text-primary dark:text-white mb-1">
                <Counter target={stat.target} suffix={stat.suffix} />
              </h3>
              <p className="text-medical-accent font-subheading font-semibold text-[10px] uppercase tracking-widest mt-1 mb-2">{stat.label}</p>
              <p className="text-secondary dark:text-slate-500 font-sans text-[10px] leading-relaxed group-hover:text-primary dark:group-hover:text-slate-300 transition-colors">
                {stat.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
