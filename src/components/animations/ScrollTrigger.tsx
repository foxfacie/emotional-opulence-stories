
import React, { useEffect, useRef, useState } from 'react';

interface ScrollTriggerProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
  duration?: number;
}

const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
  children,
  className = '',
  threshold = 0.1,
  animation = 'fadeIn',
  delay = 0,
  duration = 600
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, delay]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`;
    const durationClass = `duration-${duration}`;
    
    if (!isVisible) {
      switch (animation) {
        case 'slideUp':
          return `${baseClasses} ${durationClass} translate-y-12 opacity-0`;
        case 'slideLeft':
          return `${baseClasses} ${durationClass} translate-x-12 opacity-0`;
        case 'slideRight':
          return `${baseClasses} ${durationClass} -translate-x-12 opacity-0`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} scale-90 opacity-0`;
        default:
          return `${baseClasses} ${durationClass} opacity-0`;
      }
    }
    
    return `${baseClasses} ${durationClass} translate-y-0 translate-x-0 scale-100 opacity-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollTrigger;
