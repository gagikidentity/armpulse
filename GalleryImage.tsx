import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import EditImageModal from './EditImageModal';

interface GalleryImageProps {
  id: string;
  url: string;
  className?: string;
  onImageUpdate: (id: string, newUrl: string) => void;
}

export default function GalleryImage({ id, url, className = '', onImageUpdate }: GalleryImageProps) {
  const { session } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <div className={`relative group overflow-hidden rounded-lg ${className}`}>
        <div className="aspect-video w-full h-full">
          <img
            src={url}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 
              group-hover:scale-105"
            onClick={(e) => e.preventDefault()}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        />
        
        {session && (
          <button
            onClick={() => setShowEditModal(true)}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 
              group-hover:opacity-100 hover:bg-amber-500 hover:text-black 
              transition-all duration-300 transform hover:scale-110"
          >
            <Edit className="w-5 h-5" />
          </button>
        )}
      </div>

      <EditImageModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        currentUrl={url}
        onSave={(newUrl) => {
          onImageUpdate(id, newUrl);
          setShowEditModal(false);
        }}
      />
    </>
  );
}