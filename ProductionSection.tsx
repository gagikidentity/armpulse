import React from 'react';

interface ProductionSectionProps {
  title: string;
  emoji: string;
  children: React.ReactNode;
}

export default function ProductionSection({ title, emoji, children }: ProductionSectionProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-amber-500">{emoji} {title}</h3>
      {children}
    </section>
  );
}