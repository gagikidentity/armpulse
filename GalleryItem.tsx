import React, { useState } from 'react';
import { Edit, Play } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import EditGalleryItemModal from './EditGalleryItemModal';
import { GalleryItem as GalleryItemType } from '../../types/gallery';

interface GalleryItemProps {
  item: GalleryItemType;
  className?: string;
  onUpdate: (id: string, updatedItem: GalleryItemType) => void;
}

export default function GalleryItem({ item, className = '', onUpdate }: GalleryItemProps) {
  const { session } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);

  const displayUrl = item.type === 'video' ? (item.thumbnailUrl || item.url) : item.url;

  return (
    <>
      <div className={`relative group overflow-hidden rounded-lg ${className}`}>
        <div className="aspect-video w-full h-full">
          <img
            src={displayUrl}
            alt={item.title || ''}
            className="w-full h-full object-cover transition-transform duration-500 
              group-hover:scale-105"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.title && (
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg font-medium">{item.title}</h3>
            </div>
          )}
        </div>

        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-16 h-16 text-white opacity-75 group-hover:opacity-100 
              transition-all duration-300 transform group-hover:scale-110" />
          </div>
        )}
        
        {session && (
          <button
            onClick={() => setShowEditModal(true)}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 
              group-hover:opacity-100 hover:bg-amber-500 hover:text-black 
              transition-all duration-300 transform hover:scale-110"
          >
            <Edit className="w-5 w-5" />
          </button>
        )}
      </div>

      <EditGalleryItemModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        item={item}
        onSave={(updatedItem) => {
          onUpdate(item.id, updatedItem);
          setShowEditModal(false);
        }}
      />
    </>
  );
}