import React from 'react';

interface MenuIconProps {
  isOpen: boolean;
  className?: string;
}

export default function MenuIcon({ isOpen, className = '' }: MenuIconProps) {
  return (
    <div className={`flex flex-col justify-center space-y-1.5 ${className}`}>
      <div className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 translate-y-2' : 'w-6'}`} />
      <div className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
      <div className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-5 rotate-45 -translate-y-2' : 'w-5'}`} />
    </div>
  );
}