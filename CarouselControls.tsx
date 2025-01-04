import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalSlides: number;
}

export default function CarouselControls({
  onPrevious,
  onNext,
  currentIndex,
  totalSlides
}: CarouselControlsProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full
                 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                 hover:bg-amber-500 hover:text-black"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full
                 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                 hover:bg-amber-500 hover:text-black"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-amber-500 w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </>
  );
}