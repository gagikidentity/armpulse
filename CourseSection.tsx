import React from 'react';

interface CourseSectionProps {
  title: string;
  emoji: string;
  children: React.ReactNode;
}

export default function CourseSection({ title, emoji, children }: CourseSectionProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-amber-500">{emoji} {title}</h3>
      {children}
    </section>
  );
}