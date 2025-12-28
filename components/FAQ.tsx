
import React, { useState } from 'react';
import { ChevronDown, Search, X, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FAQ_DATA: FAQItem[] = [
  {
    question: "How often should I visit Dr. Bhanu Kiran Dental Clinic?",
    answer: "We generally recommend a routine check-up and cleaning every 6 months. However, based on your oral health status, our specialists might suggest more frequent visits."
  },
  {
    question: "Are dental procedures at your clinic painful?",
    answer: "Not at all. We use advanced local anesthesia and minimally invasive techniques to ensure a 100% painless experience."
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Yes, we prioritize dental emergencies like severe toothaches or broken teeth. Call our clinic immediately if you need urgent care."
  },
  {
    question: "What are the benefits of Zirconia Implants?",
    answer: "Zirconia implants are metal-free, highly biocompatible, and offer superior aesthetics as they match the natural color of teeth."
  }
];

interface FAQProps {
  onAction: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onAction }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-6">
            Common <span className="text-medical-blue">Questions</span>
          </h2>
          
          <div className="relative max-w-md mx-auto group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-medical-blue transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search your concern..."
              className="w-full pl-12 pr-12 py-4 bg-white dark:bg-slate-800 border-2 border-transparent focus:border-medical-blue rounded-2xl shadow-sm focus:outline-none transition-all dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary"><X size={18} /></button>
            )}
          </div>
        </div>

        <div className="space-y-4 reveal">
          {filteredFaqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`border-2 transition-all duration-300 rounded-3xl overflow-hidden ${
                openIdx === idx ? 'bg-white dark:bg-slate-800 border-medical-blue shadow-md' : 'bg-white/50 dark:bg-slate-800/50 border-transparent hover:border-gray-200 dark:hover:border-slate-700'
              }`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left gap-4"
              >
                <span className={`font-bold transition-colors ${openIdx === idx ? 'text-medical-blue' : 'text-primary dark:text-white'}`}>
                  {faq.question}
                </span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-medical-blue' : 'text-secondary'}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIdx === idx ? 'max-h-40' : 'max-h-0'}`}>
                <div className="px-8 pb-6 text-secondary dark:text-slate-400 text-sm leading-relaxed border-t border-gray-50 dark:border-slate-700 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-medical-blue rounded-[2.5rem] p-10 text-center text-white reveal shadow-xl">
          <h4 className="text-2xl font-bold mb-4">Didn't find your answer?</h4>
          <p className="mb-8 opacity-90">Our specialists are available for direct consultation on your specific dental needs.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onAction}
              className="bg-white text-medical-blue px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gray-100 active:scale-95 transition-all flex items-center gap-2"
            >
              Contact Specialists <ArrowRight size={18} />
            </button>
            <a 
              href="https://wa.me/919912939531" 
              className="bg-green-500/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-green-500/40 active:scale-95 transition-all flex items-center gap-2"
            >
              <WhatsAppIcon size={20} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
