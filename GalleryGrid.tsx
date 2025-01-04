import React, { useState } from 'react';
import { GalleryItem as GalleryItemType } from '../../types/gallery';
import GalleryItem from './GalleryItem';

interface GalleryGridProps {
  items: GalleryItemType[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [galleryItems, setGalleryItems] = useState<GalleryItemType[]>(items);

  const handleItemUpdate = (id: string, updatedItem: GalleryItemType) => {
    setGalleryItems(prev => 
      prev.map(item => item.id === id ? updatedItem : item)
    );
  };

  if (!items || items.length === 0) {
    return (
      <div className="text-center text-gray-400">
        Պատկերասրահը դատարկ է
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {galleryItems.map((item, index) => {
        const isLarge = index === 0;
        const isTall = index === 2;
        const isWide = index === 3;
        
        const sizeClasses = isLarge
          ? 'sm:col-span-2'
          : isTall
          ? 'row-span-2'
          : isWide
          ? 'sm:col-span-2'
          : '';

        return (
          <GalleryItem
            key={item.id}
            item={item}
            className={sizeClasses}
            onUpdate={handleItemUpdate}
          />
        );
      })}
    </div>
  );
}