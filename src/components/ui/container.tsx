import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  centered?: boolean;
}

export default function Container({ 
  children, 
  className = '',
  size = 'lg',
  padding = 'md',
  centered = false
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[90rem]',
    full: 'max-w-full'
  };

  const paddingClasses = {
    none: 'px-0',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12'
  };

  const centeredClass = centered ? 'flex flex-col items-center' : '';

  return (
    <div className={cn(
      'mx-auto w-full',
      sizeClasses[size],
      paddingClasses[padding],
      centeredClass,
      className
    )}>
      {children}
    </div>
  );
}