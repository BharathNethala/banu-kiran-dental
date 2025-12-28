
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, MoveHorizontal, Sparkles } from 'lucide-react';

interface Case {
  id: number;
  title: string;
  description: string;
  before: string;
  after: string;
}

const CASES: Case[] = [
  {
    id: 1,
    title: 'Smile Makeover',
    description: 'Complete porcelain veneers for a symmetric smile.',
    before: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Teeth Whitening',
    description: 'Laser whitening removing years of staining in one hour.',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2074&auto=format&fit=crop'
  }
];

interface BeforeAfterProps {
  onAction: () => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ onAction }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section id="results" className="py-24 bg-white dark:bg-slate-950 px-6 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-4">
            Proven <span className="text-medical-blue">Results</span>
          </h2>
          <p className="text-secondary dark:text-slate-400">Real patients, real transformations. Use the slider to compare.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-8 reveal">
            <div className="space-y-2">
              <span className="text-xs font-bold text-medical-blue uppercase tracking-widest">Case Study</span>
              <h3 className="text-3xl font-heading font-extrabold text-primary dark:text-white">{CASES[currentIdx].title}</h3>
              <p className="text-secondary dark:text-slate-400 leading-relaxed">{CASES[currentIdx].description}</p>
            </div>
            
            <div className="flex gap-4">
              <button onClick={() => setCurrentIdx((prev) => (prev - 1 + CASES.length) % CASES.length)} className="p-4 rounded-xl bg-gray-50 dark:bg-slate-900 active:scale-95 transition-all"><ChevronLeft size={20} /></button>
              <button onClick={() => setCurrentIdx((prev) => (prev + 1) % CASES.length)} className="p-4 rounded-xl bg-gray-50 dark:bg-slate-900 active:scale-95 transition-all"><ChevronRight size={20} /></button>
            </div>

            <button 
              onClick={onAction}
              className="w-full bg-medical-blue text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all active:scale-95 shadow-lg"
            >
              <Sparkles size={20} /> Get This Look
            </button>
          </div>

          <div className="lg:col-span-8 reveal">
            <div 
              ref={containerRef}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50 dark:border-slate-800 cursor-col-resize select-none"
              onMouseMove={(e) => isDragging && handleMove(e.clientX)}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
            >
              <img src={CASES[currentIdx].after} className="absolute inset-0 w-full h-full object-cover" alt="After" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                <img src={CASES[currentIdx].before} className="absolute inset-0 h-full object-cover" style={{ width: containerRef.current?.offsetWidth }} alt="Before" />
              </div>
              <div className="absolute inset-y-0 w-1 bg-white flex items-center justify-center" style={{ left: `${sliderPos}%` }}>
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-medical-blue"><MoveHorizontal size={20} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
