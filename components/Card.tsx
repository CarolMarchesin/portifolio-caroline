import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <div className={`bg-white dark:bg-secondary rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-foreground mb-2 text-center md:text-start">{title}</h3>
      {children}
    </div>
  );
}