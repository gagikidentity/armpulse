import React from 'react';
import SectionBackground from '../common/SectionBackground';
import GalleryGrid from './GalleryGrid';
import { galleryData } from '../../constants/galleryData';

export default function Gallery() {
  return (
    <SectionBackground id="portfolio">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Պատկերասրահ</h2>
        <p className="mt-4 text-xl text-gray-400">Մեր լավագույն աշխատանքները</p>
      </div>

      <GalleryGrid items={galleryData} />
    </SectionBackground>
  );
}