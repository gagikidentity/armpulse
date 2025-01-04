import React from 'react';
import { translations } from '../../constants/translations';

export default function FooterNav() {
  return (
    <nav className="mb-8">
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        {Object.entries(translations.nav).map(([key, text]) => (
          <li key={key}>
            <a
              href={`#${key}`}
              className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}