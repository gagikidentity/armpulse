import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroButtonProps {
  href: string;
  variant: 'primary' | 'secondary';
  icon: LucideIcon;
  className?: string;
  children: React.ReactNode;
}

export default function HeroButton({ href, variant, icon: Icon, className = '', children }: HeroButtonProps) {
  const baseStyles = "rounded-lg px-8 py-4 text-lg font-semibold shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-amber-500 text-black hover:bg-amber-400 focus:ring-4 ring-amber-500/50",
    secondary: "bg-black/40 backdrop-blur-sm text-white border-2 border-amber-500/50 hover:border-amber-500 hover:bg-black/60 focus:ring-4 ring-amber-500/30"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <Icon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}