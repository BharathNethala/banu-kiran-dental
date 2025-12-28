
import React, { useState, useEffect, useCallback } from 'react';
import { Quote, Star, MessageCircle, ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      name: 'Venkata Nandan',
      role: 'Local Guide',
      text: "Treatment was very effective... Doctor and reception talking was friendly.. Good cost",
      rating: 5,
      date: '3 weeks ago',
      ownerResponse: 'thank you sir',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'venu babu',
      role: 'Local Guide',
      text: "I have got cleaned my teeth here, Dr. Bhanu Kiran sir treated me very well and did the treatment very carefully. I recommend this dental clinic.",
      rating: 5,
      date: '3 months ago',
      image: 'https://images.unsplash.com/photo-1595053826286-2e59efd9ff18?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Verified Patient',
      text: "Excellent service and very professional staff. Dr. Bhanu Kiran explained the procedure clearly and made me feel at ease throughout the treatment.",
      rating: 5,
      date: '1 month ago',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Rahul Verma',
      role: 'Local Resident',
      text: "The clinic is very clean and follows all safety protocols. Highly impressed with the high-tech equipment used for my dental surgery.",
      rating: 5,
      date: '5 months ago',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Anjali Gupta',
      role: 'Local Resident',
      text: "Got my wisdom tooth extracted here. It was completely painless! Dr. Bhanu Kiran's hand is very steady. Highly recommended.",
      rating: 5,
      date: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop'
    },
    {
      name: 'Kiran Kumar',
      role: 'Verified Patient',
      text: "The best dental experience I've had. Friendly environment and affordable costs compared to other clinics in the city.",
      rating: 5,
      date: '1 year ago',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  }, [reviews.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-64 h-64 bg-medical-softBlue dark:bg-medical-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-blue/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-4">
            Patient Success Stories
          </h2>
          <p className="text-lg text-secondary dark:text-slate-400">Direct feedback from our community on Google</p>
          <div className="flex items-center justify-center gap-1 text-medical-yellow mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            <span className="ml-2 text-primary dark:text-white font-bold">4.9/5 Rating</span>
          </div>
        </div>

        <div 
          className="relative max-w-5xl mx-auto reveal"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden px-4 py-8">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((rev, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 dark:bg-slate-900 p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col relative h-full min-h-[420px]">
                    <Quote className="absolute top-8 right-8 text-medical-blue/10 w-16 h-16 md:w-24 md:h-24" />
                    
                    <div className="flex items-center gap-5 mb-8">
                      <div className="relative">
                        <img 
                          src={rev.image} 
                          alt={rev.name} 
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-white dark:ring-slate-800 shadow-md" 
                        />
                        <div className="absolute -bottom-1 -right-1 bg-medical-mint text-white p-1 rounded-full border-2 border-white dark:border-slate-800">
                          <ShieldCheck size={14} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-primary dark:text-white">{rev.name}</h4>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs text-medical-blue font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full uppercase tracking-wider">{rev.role}</span>
                          <span className="text-xs text-secondary dark:text-slate-500">{rev.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-medical-yellow mb-6">
                      {[...Array(rev.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>

                    <p className="text-xl md:text-2xl text-primary dark:text-slate-200 font-medium leading-relaxed mb-10 italic relative z-10">
                      "{rev.text}"
                    </p>

                    {rev.ownerResponse && (
                      <div className="mt-auto pt-8 border-t border-gray-200 dark:border-slate-800">
                        <div className="flex gap-4 items-start bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm">
                          <div className="bg-medical-blue/10 p-2.5 rounded-xl text-medical-blue">
                            <MessageCircle size={22} />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-primary dark:text-white">Dr. Bhanu Kiran Dental clinic (Owner)</p>
                            <p className="text-secondary dark:text-slate-400 text-sm italic mt-1">"{rev.ownerResponse}"</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center text-primary dark:text-white hover:bg-medical-blue hover:text-white transition-all z-20 border border-gray-100 dark:border-slate-700 active:scale-90"
            aria-label="Previous review"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center text-primary dark:text-white hover:bg-medical-blue hover:text-white transition-all z-20 border border-gray-100 dark:border-slate-700 active:scale-90"
            aria-label="Next review"
          >
            <ChevronRight size={28} />
          </button>

          <div className="flex justify-center gap-3 mt-10">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-10 bg-medical-blue' : 'w-2.5 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16 reveal">
          <a 
            href="https://www.google.com/maps/search/Dr.+Bhanu+Kiran+Dental+Clinic+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-medical-blue font-bold text-lg hover:underline underline-offset-4"
          >
            View all 500+ Google Reviews 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
