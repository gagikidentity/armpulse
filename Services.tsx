import React from 'react';
import { Camera, Edit } from 'lucide-react';
import { translations } from '../constants/translations';

export default function Services() {
  const { services } = translations;
  const icons = { Camera, Edit };

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{services.title}</h2>
          <p className="mt-4 text-xl text-gray-400">{services.subtitle}</p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-gray-800 ring-1 ring-gray-700/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="space-y-6">
                  <Camera className="h-8 w-8 text-amber-500" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <p className="text-amber-500 font-semibold">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}