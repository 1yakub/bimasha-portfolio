import React from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon';
import type { IconName } from '../icons';

export type BadgeVariant = 'default' | 'outline' | 'premium' | 'brutalist';
export type BadgeColor = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  leftIcon?: IconName;
  rightIcon?: IconName;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'font-medium',
  outline: 'border font-medium',
  premium: 'font-medium bg-gradient-to-r shadow-premium',
  brutalist: 'font-medium border-[2px] shadow-brutalist-sm'
};

const colorClasses: Record<BadgeColor, Record<BadgeVariant, string>> = {
  primary: {
    default: 'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200',
    outline: 'border-accent text-accent-700 dark:border-accent-dark dark:text-accent-300',
    premium: 'from-accent to-accent-400 text-white',
    brutalist: 'bg-white text-black border-black dark:bg-neutral-800 dark:text-white dark:border-white'
  },
  secondary: {
    default: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
    outline: 'border-neutral-400 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300',
    premium: 'from-neutral-600 to-neutral-700 text-white',
    brutalist: 'bg-white text-black border-black dark:bg-neutral-800 dark:text-white dark:border-white'
  },
  accent: {
    default: 'bg-vibrant-100 text-vibrant-800 dark:bg-vibrant-900 dark:text-vibrant-200',
    outline: 'border-vibrant-500 text-vibrant-700 dark:border-vibrant-400 dark:text-vibrant-300',
    premium: 'from-vibrant-500 to-vibrant-600 text-white',
    brutalist: 'bg-vibrant-500 text-white border-black dark:border-white'
  },
  success: {
    default: 'bg-forest-light text-forest-dark dark:bg-forest-dark dark:text-forest-light',
    outline: 'border-forest text-forest dark:border-forest-light dark:text-forest-light',
    premium: 'from-forest to-forest-light text-white',
    brutalist: 'bg-forest text-white border-black dark:border-white'
  },
  warning: {
    default: 'bg-mandarin-light text-mandarin-dark dark:bg-mandarin-dark dark:text-mandarin-light',
    outline: 'border-mandarin text-mandarin dark:border-mandarin-light dark:text-mandarin-light',
    premium: 'from-mandarin to-mandarin-light text-black',
    brutalist: 'bg-mandarin text-black border-black dark:border-white'
  },
  error: {
    default: 'bg-persimmon-light text-persimmon-dark dark:bg-persimmon-dark dark:text-persimmon-light',
    outline: 'border-persimmon text-persimmon dark:border-persimmon-light dark:text-persimmon-light',
    premium: 'from-persimmon to-persimmon-light text-white',
    brutalist: 'bg-persimmon text-white border-black dark:border-white'
  },
  neutral: {
    default: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
    outline: 'border-neutral-400 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300',
    premium: 'from-neutral-600 to-neutral-700 text-white',
    brutalist: 'bg-white text-black border-black dark:bg-neutral-800 dark:text-white dark:border-white'
  }
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-0.5',
  lg: 'text-base px-3 py-1'
};

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  color = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  children
}) => {
  // Adjust radius for brutalist variant
  const radiusClass = variant === 'brutalist' ? 'rounded-none' : 'rounded-full';
  
  // Add hover effects for premium and brutalist variants
  const hoverClass = variant === 'premium' 
    ? 'hover:shadow-premium-hover transition-all duration-300 ease-premium' 
    : variant === 'brutalist'
      ? 'hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-200'
      : '';
  
  const baseClasses = twMerge(
    'once-badge inline-flex items-center justify-center transition-colors',
    variantClasses[variant],
    colorClasses[color][variant],
    sizeClasses[size],
    radiusClass,
    hoverClass,
    className
  );

  return (
    <span className={baseClasses}>
      {leftIcon && (
        <Icon name={leftIcon} size="xs" className="mr-1" />
      )}
      {children}
      {rightIcon && (
        <Icon name={rightIcon} size="xs" className="ml-1" />
      )}
    </span>
  );
};

export default Badge; 