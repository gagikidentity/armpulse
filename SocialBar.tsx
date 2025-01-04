import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/armpulse_production/",
    label: "Instagram",
    color: "hover:text-pink-500"
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/ArmPulseProduction",
    label: "Facebook",
    color: "hover:text-blue-500"
  },
  {
    icon: Youtube,
    href: "https://youtube.com/channel/UCzRWLQ_rTuZzYqSMJF-2HBw",
    label: "Youtube",
    color: "hover:text-red-500"
  }
];

export default function SocialBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center space-x-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${link.color} transition-all duration-300 
                hover:scale-110 p-2`}
              aria-label={link.label}
            >
              <link.icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}