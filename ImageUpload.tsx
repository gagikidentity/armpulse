import React, { useState, useRef } from 'react';
import { Camera, Loader2 } from 'lucide-react';

interface ImageUploadProps {
  currentImage: string;
  onImageChange: (image: string) => void;
  height?: string;
}

export default function ImageUpload({ currentImage, onImageChange, height = '16rem' }: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState(currentImage);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Show preview immediately
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
      onImageChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative group">
      <div className="w-full rounded-lg overflow-hidden" style={{ height }}>
        <img
          src={previewUrl}
          alt="Team member"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: '50% 25%' }}
        />
      </div>
      
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-lg">
        {!isUploading && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center cursor-pointer hover:text-amber-500 transition-colors"
          >
            <Camera className="h-8 w-8 text-white mb-2" />
            <span className="text-white text-sm">Փոխել նկարը</span>
          </button>
        )}
        
        {isUploading && (
          <div className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 text-amber-500 animate-spin mb-2" />
            <span className="text-white text-sm">Վերբեռնում...</span>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
        disabled={isUploading}
      />
    </div>
  );
}