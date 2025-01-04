import React, { useState } from 'react';
import SectionBackground from '../common/SectionBackground';
import PortfolioCarousel from './carousel/PortfolioCarousel';
import PortfolioTabs from './carousel/PortfolioTabs';
import { portfolioData as initialData } from '../../constants/portfolioData';
import { VideoData, PortfolioCategory } from '../../types/portfolio';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const [portfolioData, setPortfolioData] = useState<PortfolioCategory[]>(initialData);

  const handleVideoUpdate = (videoIndex: number, updatedVideo: VideoData) => {
    setPortfolioData(prevData => {
      const newData = [...prevData];
      newData[activeTab] = {
        ...newData[activeTab],
        videos: newData[activeTab].videos.map((video, index) =>
          index === videoIndex ? updatedVideo : video
        )
      };
      return newData;
    });
  };

  return (
    <SectionBackground id="portfolio">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Մեր Պորտֆոլիոն</h2>
        <p className="mt-4 text-xl text-gray-400">Լավագույն աշխատանքների ցուցադրություն</p>
      </div>

      <PortfolioTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="mt-8">
        <PortfolioCarousel 
          videos={portfolioData[activeTab].videos}
          onUpdateVideo={handleVideoUpdate}
        />
      </div>
    </SectionBackground>
  );
}