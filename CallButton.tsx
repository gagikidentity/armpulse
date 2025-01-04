import React from 'react';
import { Phone } from 'lucide-react';

export default function CallButton() {
  return (
    <a
      href="tel:077-79-99-24"
      className="fixed top-4 right-4 z-[60] flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
    >
      <Phone className="h-5 w-5" />
      <span className="font-medium">Հարցեր ունեմ</span>
    </a>
  );
}