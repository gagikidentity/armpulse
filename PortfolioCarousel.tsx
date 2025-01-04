import React, { useState, useRef } from 'react';
import { VideoData } from '../../../types/portfolio';
import CarouselVideo from './CarouselVideo';
import CarouselControls from './CarouselControls';

interface PortfolioCarouselProps {
  videos: VideoData[];
  onUpdateVideo: (index: number, updatedVideo: VideoData) => void;
}

export default function PortfolioCarousel({ videos, onUpdateVideo }: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const handleVideoUpdate = (index: number) => (updatedVideo: VideoData) => {
    onUpdateVideo(index, updatedVideo);
  };

  return (
    <div className="relative group">
      <div 
        ref={containerRef}
        className="relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm"
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {videos.map((video, index) => (
            <CarouselVideo
              key={index}
              video={video}
              isActive={index === currentIndex}
              onUpdate={handleVideoUpdate(index)}
            />
          ))}
        </div>
      </div>

      <CarouselControls
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentIndex={currentIndex}
        totalSlides={videos.length}
      />
    </div>
  );
}