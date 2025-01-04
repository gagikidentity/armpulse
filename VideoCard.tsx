import React, { useRef, useState, useEffect } from 'react';
import { Play, Edit } from 'lucide-react';
import EditVideoModal from './EditVideoModal';
import { storeVideo } from '../../utils/videoStorage';

interface VideoCardProps {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export default function VideoCard({ id, title, category, videoUrl, thumbnailUrl }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(videoUrl);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) { // Only auto-play on desktop
      setIsHovered(true);
      if (videoRef.current) {
        timeoutRef.current = window.setTimeout(() => {
          videoRef.current?.play().catch(() => {});
        }, 100);
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleSaveVideo = (newUrl: string) => {
    setCurrentVideoUrl(newUrl);
    storeVideo(id, {
      id,
      title,
      category,
      videoUrl: newUrl,
      thumbnailUrl
    });
  };

  return (
    <>
      <div 
        className="relative overflow-hidden rounded-2xl group touch-manipulation"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="aspect-w-16 aspect-h-9 sm:aspect-w-9 sm:aspect-h-16">
          <video
            ref={videoRef}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
            loop
            muted
            playsInline
            poster={thumbnailUrl}
            preload="none"
          >
            <source src={currentVideoUrl} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="p-4 sm:p-6 w-full">
            <p className="text-sm text-amber-500">{category}</p>
            <h3 className="mt-2 text-lg sm:text-xl font-bold text-white">{title}</h3>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <Edit className="w-5 h-5 text-white" />
            </button>
            
            {!isHovered && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white opacity-80" />
              </div>
            )}
          </div>
        </div>
      </div>

      <EditVideoModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={handleSaveVideo}
        currentUrl={currentVideoUrl}
      />
    </>
  );
}