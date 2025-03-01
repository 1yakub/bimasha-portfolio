import React from 'react';
import { iconLibrary } from '../icons';
import { twMerge } from 'tailwind-merge';

export type IconName = keyof typeof iconLibrary;

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type IconColor = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral' | 'white' | 'black' | 'inherit' | 'muted' | 'premium' | 'vibrant';
export type IconBackground = 'brand-weak' | 'brand-strong' | 'accent-weak' | 'accent-strong' | 'neutral-weak' | 'neutral-strong' | 'premium' | 'brutalist' | 'none';
export type IconStyle = 'default' | 'premium' | 'brutalist';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: IconColor;
  onBackground?: IconBackground;
  style?: IconStyle;
  className?: string;
}

const sizeMap = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10',
  '3xl': 'w-12 h-12',
};

const colorMap = {
  primary: 'text-primary dark:text-primary-dark',
  secondary: 'text-secondary dark:text-secondary-dark',
  accent: 'text-accent dark:text-accent-dark',
  success: 'text-forest dark:text-forest-light',
  warning: 'text-mandarin dark:text-mandarin-light',
  error: 'text-persimmon dark:text-persimmon-light',
  neutral: 'text-neutral-500 dark:text-neutral-400',
  muted: 'text-neutral-400 dark:text-neutral-500',
  white: 'text-white',
  black: 'text-black',
  inherit: 'text-inherit',
  premium: 'text-accent dark:text-accent-dark',
  vibrant: 'text-vibrant-500 dark:text-vibrant-400',
};

const backgroundMap = {
  'brand-weak': 'p-1 bg-accent-100 dark:bg-accent-900 rounded-md',
  'brand-strong': 'p-1 bg-accent dark:bg-accent-dark rounded-md text-white',
  'accent-weak': 'p-1 bg-vibrant-100 dark:bg-vibrant-900 rounded-md',
  'accent-strong': 'p-1 bg-vibrant-500 dark:bg-vibrant-600 rounded-md text-white',
  'neutral-weak': 'p-1 bg-neutral-100 dark:bg-neutral-800 rounded-md',
  'neutral-strong': 'p-1 bg-neutral-700 dark:bg-neutral-600 rounded-md text-white',
  'premium': 'p-1 bg-gradient-to-r from-accent to-accent-400 rounded-md text-white shadow-premium',
  'brutalist': 'p-1 bg-white border-[2px] border-black dark:bg-neutral-800 dark:border-white rounded-none shadow-brutalist-sm',
  'none': '',
};

const styleMap = {
  default: '',
  premium: 'filter drop-shadow-sm',
  brutalist: 'transform rotate-[2deg]',
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'inherit',
  onBackground = 'none',
  style = 'default',
  className = '',
}) => {
  const IconComponent = iconLibrary[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon library`);
    return null;
  }

  const sizeClass = sizeMap[size];
  const colorClass = colorMap[color];
  const backgroundClass = backgroundMap[onBackground];
  const styleClass = styleMap[style];

  // Add hover effects for premium and brutalist backgrounds
  const hoverClass = onBackground === 'premium' 
    ? 'hover:shadow-premium-hover transition-all duration-300 ease-premium' 
    : onBackground === 'brutalist'
      ? 'hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-200'
      : '';

  return (
    <span className={twMerge(
      'inline-flex items-center justify-center',
      sizeClass,
      colorClass,
      backgroundClass,
      styleClass,
      hoverClass,
      className
    )}>
      <IconComponent className="w-full h-full" />
    </span>
  );
};

export default Icon; 