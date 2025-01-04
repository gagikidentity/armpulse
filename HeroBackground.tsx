import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full object-cover"
        style={{ filter: 'brightness(0.4)' }}
      >
        <source 
          src="https://player.vimeo.com/external/403661701.hd.mp4?s=42e2cc5f0b63c5c86f8d6f8f8c1a7d2d8c7c6d6d" 
          type="video/mp4" 
        />
      </video>
    </div>
  );
}