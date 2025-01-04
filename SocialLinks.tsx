import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

interface SocialLink {
  icon: React.ComponentType<any>;
  href: string;
  label: string;
  color: string;
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
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

  return (
    <div className="flex items-center space-x-8">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 ${link.color} transition-all duration-300 transform hover:scale-110`}
          aria-label={link.label}
        >
          <link.icon className="w-8 h-8 sm:w-10 sm:h-10" />
        </a>
      ))}
    </div>
  );
}