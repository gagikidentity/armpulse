import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { GalleryImage } from '../../types/gallery';
import { lockScroll, unlockScroll } from '../../utils/scrollLock';

interface ImageModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    if (image) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => unlockScroll();
  }, [image]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
      >
        <X className="h-8 w-8" />
      </button>

      <div className="max-w-7xl w-full">
        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src={image.url}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}