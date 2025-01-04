import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProductionFeatureProps {
  icon: LucideIcon;
  children: React.ReactNode;
}

export default function ProductionFeature({ icon: Icon, children }: ProductionFeatureProps) {
  return (
    <div className="flex items-center">
      <Icon className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
      <span>{children}</span>
    </div>
  );
}