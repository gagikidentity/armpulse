import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TeamCard from './TeamCard';
import { TeamMember } from '../../types/team';

interface TeamCarouselProps {
  members: TeamMember[];
  initialIndex?: number;
  startAutoScroll?: boolean;
}

export default function TeamCarousel({ 
  members, 
  initialIndex = 0,
  startAutoScroll = false 
}: TeamCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const autoScrollIntervalRef = useRef<number>();
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  }, [members.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  }, [members.length]);

  // Start auto-scroll
  const initAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    autoScrollIntervalRef.current = window.setInterval(() => {
      handleNext();
    }, 3000);
  }, [handleNext]);

  // Stop auto-scroll
  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = undefined;
    }
  }, []);

  // Handle auto-scroll based on visibility
  useEffect(() => {
    if (!startAutoScroll) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          initAutoScroll();
        } else {
          stopAutoScroll();
        }
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      observer.disconnect();
      stopAutoScroll();
    };
  }, [startAutoScroll, initAutoScroll, stopAutoScroll]);

  return (
    <div className="relative w-full scrollbar-hide" ref={carouselRef}>
      <div className="relative w-full h-[28rem] md:h-[32rem] overflow-hidden">
        <button
          onClick={() => {
            handlePrevious();
            stopAutoScroll();
          }}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-40
                   bg-black/50 text-white p-3 rounded-full backdrop-blur-sm 
                   hover:bg-amber-500 hover:text-black transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          aria-label="Previous member"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => {
            handleNext();
            stopAutoScroll();
          }}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-40
                   bg-black/50 text-white p-3 rounded-full backdrop-blur-sm 
                   hover:bg-amber-500 hover:text-black transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          aria-label="Next member"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute inset-0 flex items-center justify-center">
          {members.map((member, index) => {
            const position = (index - activeIndex + members.length) % members.length;
            return (
              <TeamCard
                key={member.id}
                member={member}
                position={position}
                total={members.length}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                stopAutoScroll();
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6 bg-amber-500' : 'w-1.5 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}