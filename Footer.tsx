import React from 'react';
import FooterNav from '../common/FooterNav';
import { translations } from '../../constants/translations';

export default function Footer() {
  const copyrightText = translations.footer.copyright.split('։');
  
  return (
    <footer className="bg-black py-12 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <FooterNav />
          <div className="text-center text-gray-400 mb-4">
            <div className="sm:hidden flex flex-col space-y-1">
              <span>{copyrightText[0]}։</span>
              <span>{copyrightText[1]}</span>
            </div>
            <div className="hidden sm:block">
              {translations.footer.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}