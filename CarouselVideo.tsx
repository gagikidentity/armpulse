import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Edit, AlertCircle } from 'lucide-react';
import { VideoData } from '../../../types/portfolio';
import EditPortfolioModal from './EditPortfolioModal';
import { isValidVideoUrl } from '../../../utils/videoValidation';

interface CarouselVideoProps {
  video: VideoData;
  isActive: boolean;
  onUpdate: (updatedVideo: VideoData) => void;
}

export default function CarouselVideo({ video, isActive, onUpdate }: CarouselVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current && video.videoUrl && !hasError) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          setHasError(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEdit = (updatedVideo: VideoData) => {
    setHasError(false); // Reset error state when video is updated
    onUpdate(updatedVideo);
    setIsEditing(false);
  };

  const isImage = !video.videoUrl || !isValidVideoUrl(video.videoUrl);
  const showError = hasError || (video.videoUrl && !isValidVideoUrl(video.videoUrl));

  return (
    <>
      <div className="min-w-full relative group">
        <div className="aspect-video">
          {isImage ? (
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={video.thumbnailUrl}
              src={video.videoUrl}
              playsInline
              loop
              muted
              onError={() => setHasError(true)}
            />
          )}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-lg font-bold text-white">{video.title}</h3>
            <p className="text-sm text-amber-500">{video.category}</p>
          </div>
          
          <button
            onClick={() => setIsEditing(true)}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 
                     hover:bg-amber-500 hover:text-black transition-all duration-200"
          >
            <Edit className="w-5 h-5" />
          </button>
          
          {!isImage && !showError && (
            <button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-amber-500 text-black rounded-full p-4 opacity-90 hover:opacity-100
                       transition-all duration-200 hover:scale-110 z-10"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
          )}

          {showError && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          text-center text-red-500">
              <AlertCircle className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Տեսանյութը հասանելի չէ</p>
            </div>
          )}
        </div>
      </div>

      <EditPortfolioModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={handleEdit}
        item={video}
      />
    </>
  );
}