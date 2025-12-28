
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, CheckCircle2, Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';

const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 30C40 25 30 28 25 40C20 55 25 75 45 85C48 87 50 83 50 80C50 75 40 70 35 60C30 50 40 35 50 35V30Z" fill="#0066CC" />
    <path d="M50 30C60 25 70 28 75 40C80 55 75 75 55 85C52 87 50 83 50 80C50 75 60 70 65 60C70 50 60 35 50 35V30Z" fill="#DC143C" />
    <path d="M35 55C40 60 60 60 65 55" stroke="#DC143C" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubscribed(true);
        setTimeout(() => setIsSubscribed(false), 5000);
        setEmail('');
      }, 1500);
    }
  };

  const clinicAddress = "123 Dental Street, Medical Enclave, New Delhi";
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Dr.+Surendra+Dental+Clinic";

  return (
    <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 border-t border-gray-100 dark:border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Logo & Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="group-hover:rotate-6 transition-transform">
                <Logo className="h-14 w-14" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-medical-darkBlue dark:text-white transition-colors group-hover:text-medical-blue">
                Dr. Surendra <span className="text-medical-accent">Dental</span>
              </span>
            </div>
            <p className="text-secondary dark:text-slate-400 leading-relaxed">
              We provide world-class dental care with specialized treatments for the whole family. Led by Dr. Surendra, we ensure your journey is safe, painless, and effective.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-11 h-11 rounded-2xl bg-gray-50 dark:bg-slate-900 flex items-center justify-center text-secondary dark:text-slate-400 hover:bg-medical-blue hover:text-white hover:scale-110 active:scale-90 transition-all border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:rotate-6"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-primary dark:text-white text-lg mb-8 uppercase tracking-widest border-b-2 border-medical-blue/20 pb-2 w-fit">Quick Links</h4>
            <ul className="space-y-4 text-secondary dark:text-slate-400 font-medium">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-medical-blue transition-all flex items-center gap-2 group hover:translate-x-1"><span className="w-1.5 h-1.5 rounded-full bg-medical-blue opacity-0 group-hover:opacity-100 transition-opacity"></span> Home</button></li>
              <li><a href="#about" className="hover:text-medical-blue transition-all flex items-center gap-2 group hover:translate-x-1"><span className="w-1.5 h-1.5 rounded-full bg-medical-blue opacity-0 group-hover:opacity-100 transition-opacity"></span> About Us</a></li>
              <li><a href="#services" className="hover:text-medical-blue transition-all flex items-center gap-2 group hover:translate-x-1"><span className="w-1.5 h-1.5 rounded-full bg-medical-blue opacity-0 group-hover:opacity-100 transition-opacity"></span> Our Services</a></li>
              <li><a href="#results" className="hover:text-medical-blue transition-all flex items-center gap-2 group hover:translate-x-1"><span className="w-1.5 h-1.5 rounded-full bg-medical-blue opacity-0 group-hover:opacity-100 transition-opacity"></span> Case Studies</a></li>
              <li><a href="#contact" className="hover:text-medical-blue transition-all flex items-center gap-2 group hover:translate-x-1"><span className="w-1.5 h-1.5 rounded-full bg-medical-blue opacity-0 group-hover:opacity-100 transition-opacity"></span> Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-bold text-primary dark:text-white text-lg mb-8 uppercase tracking-widest border-b-2 border-medical-blue/20 pb-2 w-fit">Contact Us</h4>
            <div className="space-y-6">
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group card-perfect p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-900 border border-transparent hover:border-blue-100 dark:hover:border-slate-800">
                <div className="text-medical-blue mt-1 group-hover:scale-110 transition-transform"><MapPin size={20} /></div>
                <span className="text-secondary dark:text-slate-400 group-hover:text-medical-blue transition-colors text-sm">{clinicAddress}</span>
              </a>
              <a href="tel:+919999988888" className="flex items-center gap-4 group card-perfect p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-900 border border-transparent hover:border-blue-100 dark:hover:border-slate-800">
                <div className="text-medical-accent group-hover:scale-110 transition-transform"><Phone size={20} /></div>
                <span className="text-secondary dark:text-slate-400 group-hover:text-medical-blue transition-colors text-sm font-bold">+91 99999 88888</span>
              </a>
              <a href="mailto:care@surendradental.com" className="flex items-center gap-4 group card-perfect p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-900 border border-transparent hover:border-blue-100 dark:hover:border-slate-800">
                <div className="text-medical-blue group-hover:scale-110 transition-transform"><Mail size={20} /></div>
                <span className="text-secondary dark:text-slate-400 group-hover:text-medical-blue transition-colors text-sm">care@surendradental.com</span>
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-primary dark:text-white text-lg mb-8 uppercase tracking-widest border-b-2 border-medical-blue/20 pb-2 w-fit">Newsletter</h4>
            <p className="text-secondary dark:text-slate-400 mb-6 text-sm leading-relaxed">Join our newsletter to receive the latest updates on dental health and special offers.</p>
            {isSubscribed ? (
              <div className="flex items-center gap-3 text-medical-accent font-bold p-5 bg-red-50 dark:bg-red-900/10 rounded-2xl animate-fade-in border-2 border-medical-accent/20 shadow-lg shadow-red-500/5">
                <CheckCircle2 size={24} className="animate-bounce" /> 
                <div>
                  <p className="text-sm">You're subscribed!</p>
                  <p className="text-[10px] opacity-70">Welcome to the healthy smile club.</p>
                </div>
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleSubscribe}>
                <div className="relative group">
                  <input 
                    required
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-gray-50 dark:bg-slate-900 border-2 border-transparent focus:border-medical-blue rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all dark:text-white text-sm"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="absolute right-2 top-2 bottom-2 bg-medical-blue text-white px-4 rounded-xl font-bold hover:bg-blue-700 active:scale-90 transition-all flex items-center justify-center disabled:opacity-50 shadow-md"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                  </button>
                </div>
                <p className="text-[10px] text-secondary dark:text-slate-500 px-2 italic">We never share your email with third parties.</p>
              </form>
            )}
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-10 border-t border-gray-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-secondary dark:text-slate-500 text-sm">
            © 2024 <span className="font-bold text-medical-darkBlue dark:text-slate-300">Dr. Surendra Dental Clinic</span>. Proudly keeping smiles bright.
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-secondary dark:text-slate-500 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-medical-blue transition-colors focus:ring-2 focus:ring-medical-blue/20 rounded-md px-1">Privacy</a>
            <a href="#" className="hover:text-medical-blue transition-colors focus:ring-2 focus:ring-medical-blue/20 rounded-md px-1">Terms</a>
            <a href="#" className="hover:text-medical-blue transition-colors focus:ring-2 focus:ring-medical-blue/20 rounded-md px-1">Patient Policy</a>
            <a href="#" className="hover:text-medical-blue transition-colors focus:ring-2 focus:ring-medical-blue/20 rounded-md px-1">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
