import React, { useEffect, useRef, useState } from 'react';
import TeamCarousel from './TeamCarousel';
import SectionBackground from '../common/SectionBackground';

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Reorder array to show Gagik first, Nonna second, and Pavel third
  const teamMembers = [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      name: "Գագիկ Հարությունյան",
      role: "Filmmaker",
      image: "https://i.ibb.co/MGXJSB8/image.jpg",
      specialties: []
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440001',
      name: "Նոննա Ալավերդյան",
      role: "Graphic designer",
      image: "https://i.ibb.co/5nxBM2m/image.jpg",
      specialties: []
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440002',
      name: "Պավել Տերտերյան",
      role: "Filmmaker",
      image: "https://i.ibb.co/w6YSW9V/image.jpg",
      specialties: []
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.3 // Start when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionBackground id="team" ref={sectionRef}>
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Մեր Թիմը</h2>
        <p className="mt-4 text-xl text-gray-400">
          Փորձառու մասնագետներ, ովքեր կօգնեն իրականացնել ձեր տեսլականը
        </p>
      </div>
      
      <TeamCarousel 
        members={teamMembers} 
        initialIndex={1} // Start with Nonna (index 1)
        startAutoScroll={isVisible}
      />
    </SectionBackground>
  );
}