import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { translations } from '../constants/translations';
import MenuIcon from './common/MenuIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { nav } = translations;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('menu-button');
      if (
        menu && 
        !menu.contains(event.target as Node) && 
        button && 
        !button.contains(event.target as Node) && 
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Camera className="h-7 w-7 text-amber-500" />
            <button
              id="menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-400 hover:text-amber-500 transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <MenuIcon isOpen={isOpen} />
            </button>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {Object.entries(nav).map(([key, text]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="text-gray-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`
          md:hidden fixed inset-0 top-16 
          bg-gradient-to-b from-black via-black/95 to-black/90
          backdrop-blur-md
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
      >
        <div className="px-2 pt-2 pb-3 h-full space-y-1">
          {Object.entries(nav).map(([key, text]) => (
            <a
              key={key}
              href={`#${key}`}
              className="
                block px-4 py-3
                text-base font-medium
                rounded-lg
                bg-gray-800/50 backdrop-blur-sm
                text-gray-200
                hover:bg-amber-500/10 hover:text-amber-500
                active:bg-amber-500/20
                transition-all duration-200
              "
              onClick={() => setIsOpen(false)}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}