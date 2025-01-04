import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Video, GraduationCap } from 'lucide-react';
import { translations } from '../constants/translations';
import SectionBackground from './common/SectionBackground';

export default function Contact() {
  const { contact } = translations;

  const actionButtons = [
    {
      icon: Video,
      text: 'Պատվիրել ռիլ',
      href: 'tel:077-79-99-24',
      color: 'bg-blue-500 hover:bg-blue-400'
    },
    {
      icon: GraduationCap,
      text: 'Գրանցվել դասընթացին',
      href: 'tel:077-79-99-24',
      color: 'bg-green-500 hover:bg-green-400'
    },
    {
      icon: MessageCircle,
      text: 'Հարցեր ունեմ',
      href: 'tel:077-79-99-24',
      color: 'bg-amber-500 hover:bg-amber-400'
    }
  ];

  return (
    <SectionBackground id="contact">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{contact.title}</h2>
        <p className="mt-4 text-xl text-gray-400">{contact.subtitle}</p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Contact Information - First on Mobile */}
        <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <Phone className="h-8 w-8 text-amber-500" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">{contact.info.phone}</h3>
              <p className="mt-1 text-lg text-gray-400">077-79-99-24</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <Mail className="h-8 w-8 text-amber-500" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">{contact.info.email}</h3>
              <p className="mt-1 text-lg text-gray-400">armpulseproduction@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <MapPin className="h-8 w-8 text-amber-500" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">{contact.info.location}</h3>
              <p className="mt-1 text-lg text-gray-400">{contact.info.locationText}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Second on Mobile */}
        <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
          {actionButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`flex items-center justify-center gap-3 px-6 py-4 ${button.color} 
                text-white rounded-lg font-semibold text-lg transition-all duration-200 
                transform hover:scale-105 hover:shadow-lg`}
            >
              <button.icon className="w-6 h-6" />
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
}