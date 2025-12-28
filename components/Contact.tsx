
import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, MapPin } from 'lucide-react';

interface ContactProps {
  onBookClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBookClick }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <h2 className="text-4xl font-heading font-bold text-dental-gray-primary mb-6">
              Clinic Contact
            </h2>
            <p className="text-dental-gray-secondary font-sans mb-10 leading-relaxed">
              Reach out for specialized consultations or clinical inquiries. Our support team is available during standard operational hours.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-dental-white-secondary flex items-center justify-center text-dental-blue-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-subheading font-semibold text-dental-gray-secondary uppercase tracking-widest">Call Clinic</p>
                  <p className="font-heading font-bold text-dental-gray-primary">+91 99129 39531</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-dental-white-secondary flex items-center justify-center text-dental-blue-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-subheading font-semibold text-dental-gray-secondary uppercase tracking-widest">Email Team</p>
                  <p className="font-heading font-bold text-dental-gray-primary">care@surendradental.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-dental-white-secondary flex items-center justify-center text-dental-blue-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs font-subheading font-semibold text-dental-gray-secondary uppercase tracking-widest">Hours</p>
                  <p className="font-heading font-bold text-dental-gray-primary">Mon - Sat: 9 AM - 8 PM</p>
                </div>
              </div>
            </div>

            <button onClick={onBookClick} className="btn-secondary w-full sm:w-auto font-subheading font-semibold">
              Request Callback
            </button>
          </div>

          <div className="bg-dental-white-secondary p-8 rounded-xl border border-gray-100 reveal" style={{ transitionDelay: '200ms' }}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-subheading font-semibold text-dental-gray-secondary uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 rounded-xl border-2 border-transparent focus:border-dental-blue-primary outline-none transition-all text-sm font-sans"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-subheading font-semibold text-dental-gray-secondary uppercase tracking-widest ml-1">Contact Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-5 py-4 rounded-xl border-2 border-transparent focus:border-dental-blue-primary outline-none transition-all text-sm font-sans"
                  placeholder="10-digit mobile number"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-subheading font-semibold text-dental-gray-secondary uppercase tracking-widest ml-1">Inquiry Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border-2 border-transparent focus:border-dental-blue-primary outline-none transition-all text-sm resize-none font-sans"
                  placeholder="Briefly describe your concern..."
                />
              </div>
              <button className="w-full bg-dental-blue-primary text-white py-5 rounded-xl font-subheading font-semibold transition-all hover:bg-blue-900 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-xs shadow-lg shadow-blue-900/10">
                Submit Clinical Inquiry <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
