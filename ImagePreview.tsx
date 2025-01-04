import React from 'react';
import { Camera } from 'lucide-react';

interface ImagePreviewProps {
  imageUrl: string;
  isUploading: boolean;
  onUploadClick: () => void;
  height?: string;
}

export default function ImagePreview({ imageUrl, isUploading, onUploadClick, height = '16rem' }: ImagePreviewProps) {
  return (
    <div className="relative group">
      <div className="w-full rounded-lg overflow-hidden" style={{ height }}>
        <img
          src={imageUrl}
          alt="Team member"
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          style={{ objectPosition: '50% 25%' }}
        />
      </div>
      
      {!isUploading && (
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-lg">
          <button
            onClick={onUploadClick}
            className="flex flex-col items-center cursor-pointer hover:text-amber-500 transition-colors"
          >
            <Camera className="h-8 w-8 text-white mb-2" />
            <span className="text-white text-sm">Փոխել նկարը</span>
          </button>
        </div>
      )}
    </div>
  );
}