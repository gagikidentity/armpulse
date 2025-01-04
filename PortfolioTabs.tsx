import React from 'react';
import { portfolioData } from '../../../constants/portfolioData';

interface PortfolioTabsProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

export default function PortfolioTabs({ activeTab, onTabChange }: PortfolioTabsProps) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex p-1 space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-lg">
        {portfolioData.map((category, index) => (
          <button
            key={index}
            onClick={() => onTabChange(index)}
            className={`
              px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${activeTab === index 
                ? 'bg-amber-500 text-black shadow-lg' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }
            `}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}