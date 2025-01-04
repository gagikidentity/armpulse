import React from 'react';
import { TeamMember } from '../../types/team';

interface TeamCardProps {
  member: TeamMember;
  position: number;
  total: number;
}

export default function TeamCard({ member, position, total }: TeamCardProps) {
  const getStyles = () => {
    const isActive = position === 0;
    const isPrevious = position === total - 1;
    const isNext = position === 1;

    let transform = '';
    let zIndex = 0;
    let opacity = 0;

    if (isActive) {
      transform = 'translateX(0) scale(1)';
      zIndex = 30;
      opacity = 1;
    } else if (isPrevious) {
      transform = 'translateX(-75%) scale(0.85)';
      zIndex = 20;
      opacity = 0.7;
    } else if (isNext) {
      transform = 'translateX(75%) scale(0.85)';
      zIndex = 20;
      opacity = 0.7;
    } else {
      transform = `translateX(${position > 1 ? '150%' : '-150%'}) scale(0.7)`;
      zIndex = 10;
      opacity = 0;
    }

    return {
      transform,
      zIndex,
      opacity,
      transition: 'all 0.7s ease-in-out',
      position: 'absolute' as const,
      width: '85%',
      maxWidth: '400px'
    };
  };

  return (
    <div 
      style={getStyles()} 
      className="select-none"
    >
      <div className="bg-gray-800 rounded-lg p-6 transform transition-transform duration-500">
        <div className="mb-6 w-full rounded-lg overflow-hidden" style={{ height: '16rem' }}>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: '50% 25%' }}
          />
        </div>
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-amber-500">{member.role}</p>
      </div>
    </div>
  );
}