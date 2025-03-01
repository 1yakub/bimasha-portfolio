import React from 'react';
import { twMerge } from 'tailwind-merge';

export type CardVariant = 'default' | 'filled' | 'outline' | 'premium' | 'brutalist' | 'brutalist-premium';

export interface CardProps {
  variant?: CardVariant;
  hoverable?: boolean;
  withShadow?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700',
  filled: 'bg-neutral-100 dark:bg-neutral-800 border-none',
  outline: 'bg-transparent border border-neutral-200 dark:border-neutral-700',
  premium: 'bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-accent/20 dark:border-accent-dark/20',
  brutalist: 'bg-white dark:bg-neutral-800 border-[3px] border-black dark:border-white',
  'brutalist-premium': 'bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border-[3px] border-accent dark:border-accent-dark'
};

const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverable = false,
  withShadow = false,
  className = '',
  children,
  onClick
}) => {
  const shadowClass = withShadow 
    ? variant === 'premium' 
      ? 'shadow-premium hover:shadow-premium-hover' 
      : variant === 'brutalist'
        ? 'shadow-brutalist hover:shadow-brutalist-dark'
        : variant === 'brutalist-premium'
          ? 'shadow-brutalist-lg hover:shadow-brutalist-xl'
          : 'shadow-luxury hover:shadow-luxury-hover'
    : '';

  const hoverClass = hoverable
    ? variant === 'brutalist' || variant === 'brutalist-premium'
      ? 'hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-300 ease-premium cursor-pointer'
      : 'hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300 ease-premium cursor-pointer'
    : '';

  const baseClasses = twMerge(
    'once-card rounded-lg transition-all duration-200',
    variantClasses[variant],
    hoverClass,
    shadowClass,
    onClick ? 'cursor-pointer' : '',
    className
  );

  return (
    <div className={baseClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card; 