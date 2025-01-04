import React, { useRef } from 'react';
import { useImageUpload } from './useImageUpload';
import ImagePreview from './ImagePreview';
import UploadProgress from './UploadProgress';
import UploadError from './UploadError';

interface ImageUploadProps {
  memberId: string;
  currentImage: string;
  onImageChange: (image: string) => void;
  height?: string;
}

export default function ImageUpload({ memberId, currentImage, onImageChange, height }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const {
    previewUrl,
    isUploading,
    error,
    handleFileChange,
  } = useImageUpload({
    memberId,
    currentImage,
    onImageChange
  });

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative">
      <ImagePreview
        imageUrl={previewUrl}
        isUploading={isUploading}
        onUploadClick={handleUploadClick}
        height={height}
      />
      
      {isUploading && <UploadProgress />}
      {error && <UploadError message={error} />}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        disabled={isUploading}
      />
    </div>
  );
}