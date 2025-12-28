
import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Phone, User, Stethoscope, Loader2, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService: string | null;
}

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TREATMENT_CONFIG: Record<string, { duration: number; label: string }> = {
  'Cleaning': { duration: 1, label: 'Teeth Cleaning' },
  'Whitening': { duration: 2, label: 'Laser Whitening' },
  'Implants': { duration: 3, label: 'Dental Implants' },
  'Aligners': { duration: 1, label: 'Invisible Aligners' },
  'Checkup': { duration: 1, label: 'General Consultation' }
};

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedService }) => {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: '',
    date: new Date().toISOString().split('T')[0],
    time: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      setFormState(prev => ({
        ...prev,
        service: preselectedService || ''
      }));
    }
  }, [isOpen, preselectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name required';
    if (!formState.phone.match(/^\d{10}$/)) newErrors.phone = '10-digit phone required';
    if (!formState.service) newErrors.service = 'Select service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.time) {
      setErrors({ time: 'Please select a time' });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleWhatsApp = () => {
    const serviceName = TREATMENT_CONFIG[formState.service]?.label || formState.service;
    const msg = encodeURIComponent(`Inquiry from ${formState.name}: Appointment request for ${serviceName} on ${formState.date} at ${formState.time}.`);
    window.open(`https://wa.me/919912939531?text=${msg}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-100 dark:border-slate-800">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
          <h2 className="text-xl font-heading font-bold text-primary dark:text-white">
            {isSuccess ? 'Confirmed' : step === 1 ? 'Patient Information' : 'Appointment Schedule'}
          </h2>
          <button onClick={onClose} className="p-1.5 rounded-lg text-secondary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><X size={18} /></button>
        </div>

        <div className="p-8">
          {isSuccess ? (
            <div className="text-center py-6 animate-fade-in">
              <div className="w-16 h-16 bg-medical-mint/10 text-medical-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Registration Complete</h3>
              <p className="text-secondary dark:text-slate-400 text-sm mb-8 leading-relaxed">Our clinical coordinator will contact you shortly to confirm clinical availability.</p>
              <button onClick={handleWhatsApp} className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-[#128C7E] active:scale-95 transition-all text-sm uppercase tracking-widest">
                <WhatsAppIcon size={20} /> Instant Confirmation
              </button>
            </div>
          ) : step === 1 ? (
            <div className="space-y-5">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-secondary ml-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-medical-accent transition-colors" size={16} />
                    <input type="text" placeholder="e.g. Alexander Graham" className={`w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none border transition-all text-sm ${errors.name ? 'border-red-500/30' : 'border-transparent focus:border-medical-accent focus:bg-white'}`} value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-secondary ml-1">Contact Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-medical-accent transition-colors" size={16} />
                    <input type="tel" placeholder="10-digit mobile" className={`w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none border transition-all text-sm ${errors.phone ? 'border-red-500/30' : 'border-transparent focus:border-medical-accent focus:bg-white'}`} value={formState.phone} onChange={e => setFormState({...formState, phone: e.target.value})} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-secondary ml-1">Clinical Service</label>
                  <div className="relative group">
                    <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-medical-accent transition-colors" size={16} />
                    <select className={`w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none border transition-all appearance-none text-sm ${errors.service ? 'border-red-500/30' : 'border-transparent focus:border-medical-accent focus:bg-white'}`} value={formState.service} onChange={e => setFormState({...formState, service: e.target.value})}>
                      <option value="">Select Department</option>
                      {Object.keys(TREATMENT_CONFIG).map(k => <option key={k} value={k}>{TREATMENT_CONFIG[k].label}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <button onClick={handleNext} className="w-full bg-medical-blue text-white py-4 rounded-xl font-bold active:scale-95 transition-all shadow-md text-xs uppercase tracking-widest mt-4">Continue to Scheduling</button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {['09:00 AM', '11:00 AM', '04:00 PM', '06:00 PM'].map(time => (
                  <button key={time} onClick={() => setFormState({...formState, time})} className={`py-4 rounded-xl border font-bold transition-all text-sm ${formState.time === time ? 'bg-medical-blue border-medical-blue text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 border-transparent hover:border-slate-200'}`}>
                    {time}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <button onClick={handleSubmit} disabled={isSubmitting || !formState.time} className="w-full bg-medical-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95 shadow-lg text-xs uppercase tracking-widest">
                  {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <><Send size={16} /> Confirm Selection</>}
                </button>
                <button onClick={() => setStep(1)} className="text-center text-secondary font-bold py-2 text-[10px] uppercase tracking-[0.2em] active:opacity-60 transition-opacity">Return to Patient Details</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
