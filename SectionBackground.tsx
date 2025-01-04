import React, { forwardRef } from 'react';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionBackground = forwardRef<HTMLElement, SectionBackgroundProps>(
  ({ children, className = '', id }, ref) => {
    return (
      <section 
        ref={ref}
        id={id} 
        className={`
          relative py-16 sm:py-24 
          bg-gradient-to-b from-transparent via-gray-900/95 to-black
          before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/0 before:via-black/20 before:to-transparent
          before:pointer-events-none
          transition-colors duration-500 ease-in-out
          ${className}
        `}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60 opacity-75 transition-opacity duration-500" 
          style={{ willChange: 'opacity' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

SectionBackground.displayName = 'SectionBackground';

export default SectionBackground;