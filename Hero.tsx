import React from 'react';
import HeroContent from './HeroContent';
import SectionBackground from '../common/SectionBackground';

export default function Hero() {
  return (
    <SectionBackground id="home" className="min-h-screen flex items-center justify-center p-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-30"
          style={{ 
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        >
          <source 
            src="https://player.vimeo.com/progressive_redirect/playback/735543529/rendition/720p/file.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>
      <HeroContent />
    </SectionBackground>
  );
}