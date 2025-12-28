
import React from 'react';
import { 
  Smile, 
  Cpu, 
  Award, 
  ShieldCheck, 
  Wallet, 
  HeartPulse,
  ChevronRight,
  CheckCircle2,
  Zap
} from 'lucide-react';

interface WhyChooseUsProps {
  onBenefitClick: (context?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBenefitClick }) => {
  const benefits = [
    { 
      title: 'Painless Treatments', 
      desc: 'Advanced sedation for a 100% fear-free experience.',
      icon: <Smile className="text-medical-blue" size={32} />,
      ctx: 'Checkup'
    },
    { 
      title: 'Advanced Equipment', 
      desc: 'Equipped with AI diagnostics and 3D intraoral scanners.',
      icon: <Cpu className="text-medical-mint" size={32} />,
      ctx: 'Checkup'
    },
    { 
      title: 'Expert Dentists', 
      desc: 'Led by MDS specialists with 20+ years of experience.',
      icon: <Award className="text-medical-yellow" size={32} />,
      ctx: 'Checkup'
    },
    { 
      title: 'Hygienic Safety', 
      desc: '7-step sterilization protocol ensuring world-class safety.',
      icon: <ShieldCheck className="text-medical-blue" size={32} />,
      ctx: 'Checkup'
    },
    { 
      title: 'Affordable Pricing', 
      desc: 'Flexible EMI options without compromising on quality.',
      icon: <Wallet className="text-medical-mint" size={32} />,
      ctx: 'Checkup'
    },
    { 
      title: 'Personalized Care', 
      desc: 'Treatment plans custom-built for your facial aesthetics.',
      icon: <HeartPulse className="text-medical-yellow" size={32} />,
      ctx: 'Checkup'
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="fluid-h2 font-heading font-extrabold text-primary dark:text-white mb-6">
            Trusted Dental <span className="text-medical-blue">Excellence</span>
          </h2>
          <p className="text-lg text-secondary dark:text-slate-400 italic">"Providing compassionate care since 2004"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {benefits.map((benefit, idx) => (
            <button 
              key={idx}
              onClick={() => onBenefitClick(benefit.ctx)}
              className="group bg-gray-50/50 dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 text-left reveal active:scale-95 shadow-sm hover:shadow-md"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="mb-6 w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center transform transition-all group-hover:scale-110 group-hover:bg-medical-blue group-hover:text-white shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-2 group-hover:text-medical-blue transition-colors">
                {benefit.title}
              </h3>
              <p className="text-secondary dark:text-slate-500 text-sm leading-relaxed mb-6">{benefit.desc}</p>
              <div className="flex items-center gap-2 text-medical-blue font-extrabold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Learn More <ChevronRight size={14} />
              </div>
            </button>
          ))}
        </div>

        {/* Actionable Policy Section */}
        <div className="reveal bg-slate-50 dark:bg-slate-900/60 rounded-[3rem] p-8 lg:p-16 border border-slate-100 dark:border-slate-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 text-medical-blue rounded-full text-[10px] font-bold uppercase tracking-widest">
                <CheckCircle2 size={14} /> Clinical Standards
              </div>
              <h4 className="text-3xl lg:text-4xl font-heading font-extrabold text-primary dark:text-white">
                Our Commitment to <span className="text-medical-blue">Your Safety</span>
              </h4>
              <p className="text-secondary dark:text-slate-400 text-lg leading-relaxed">
                We strictly adhere to international sterilization protocols to ensure a zero-infection environment for every procedure.
              </p>
              <button 
                onClick={() => onBenefitClick('Checkup')}
                className="bg-medical-blue text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-700 active:scale-95 transition-all shadow-lg"
              >
                Book Safe Appointment
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700">
                <ShieldCheck className="text-medical-blue mb-4" size={32} />
                <h5 className="font-bold text-primary dark:text-white mb-2">Class B Sterilization</h5>
                <p className="text-xs text-secondary">Advanced autoclave technology for 100% sterile instruments.</p>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700">
                <Zap className="text-medical-mint mb-4" size={32} />
                <h5 className="font-bold text-primary dark:text-white mb-2">Digital X-Rays</h5>
                <p className="text-xs text-secondary">90% less radiation than traditional dental radiography.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
