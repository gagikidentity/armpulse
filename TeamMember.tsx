import React from 'react';
import type { LucideIcon } from 'lucide-react';
import ImageUpload from './ImageUpload';

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  image: string;
  specialties: Array<{
    icon: LucideIcon;
    text: string;
  }>;
  imageHeight?: string;
}

export default function TeamMember({ id, name, role, image, specialties, imageHeight }: TeamMemberProps) {
  const handleImageChange = (newImageUrl: string) => {
    // Image URL will be updated automatically through Supabase storage
    console.log('Image updated:', newImageUrl);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-gray-800 p-6 rounded-lg">
        <div className="mb-6">
          <ImageUpload 
            memberId={id}
            currentImage={image}
            onImageChange={handleImageChange}
            height={imageHeight}
          />
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-amber-500 mb-4">{role}</p>
        {specialties.length > 0 && (
          <div className="space-y-2">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <specialty.icon className="h-5 w-5 text-amber-500 mr-2" />
                <span>{specialty.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}