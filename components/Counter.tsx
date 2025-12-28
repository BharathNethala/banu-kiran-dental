
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const Counter: React.FC<CounterProps> = ({ target, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startCount();
        } else {
          // Reset count and cancel animation when out of view
          if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
          }
          setCount(0);
        }
      },
      { threshold: 0.2 } // Lower threshold for more responsive triggering
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    const startCount = () => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * target);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId.current = window.requestAnimationFrame(step);
        }
      };
      animationFrameId.current = window.requestAnimationFrame(step);
    };

    return () => {
      observer.disconnect();
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={countRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};
