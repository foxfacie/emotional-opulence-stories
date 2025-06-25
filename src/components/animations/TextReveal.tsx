
import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 1000
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
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const words = text.split(' ');

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all ease-out ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
            transitionDuration: `${duration}ms`
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};

export default TextReveal;
