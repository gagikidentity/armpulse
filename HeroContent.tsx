import React from 'react';
import HeroButton from './HeroButton';
import { ChevronRight, Phone } from 'lucide-react';
import { translations } from '../../constants/translations';

export default function HeroContent() {
  const { hero } = translations;

  return (
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
      <h1 className="relative inline-block">
        <span className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl -z-10 scale-110" />
        <span className="relative text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          {hero.title}
        </span>
      </h1>
      
      <div className="relative mt-8 max-w-2xl mx-auto">
        <span className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px] rounded-lg -z-10" />
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed animate-fade-in-up">
          {hero.description}
        </p>
      </div>
      
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 animate-fade-in-up">
        <HeroButton 
          href="#services" 
          variant="primary" 
          icon={ChevronRight}
          className="group"
        >
          {hero.buttons.services}
        </HeroButton>
        
        <HeroButton 
          href="tel:077-79-99-24" 
          variant="secondary" 
          icon={Phone}
          className="group"
        >
          {hero.buttons.portfolio}
        </HeroButton>
      </div>
    </div>
  );
}