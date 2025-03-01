"use client";

import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon';
import type { IconName } from '../icons';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'premium' | 'brutalist';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  leftIcon?: IconName;
  rightIcon?: IconName;
  isLoading?: boolean;
  isFullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-600 dark:bg-accent-dark dark:hover:bg-accent-500',
  secondary: 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-200',
  accent: 'bg-vibrant-500 hover:bg-vibrant-600 text-white dark:bg-vibrant-400 dark:hover:bg-vibrant-500',
  outline: 'bg-transparent border border-neutral-300 hover:bg-neutral-100 text-neutral-800 dark:border-neutral-600 dark:hover:bg-neutral-800 dark:text-neutral-200',
  ghost: 'bg-transparent hover:bg-neutral-100 text-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200',
  premium: 'bg-gradient-to-r from-accent to-accent-400 hover:from-accent-600 hover:to-accent-500 text-white shadow-premium hover:shadow-premium-hover transition-all duration-300 ease-premium',
  brutalist: 'bg-white text-black border-[3px] border-black hover:bg-black hover:text-white dark:bg-neutral-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black shadow-brutalist-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200'
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'py-1.5 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-2.5 px-5 text-lg'
};

const radiusClasses: Record<ButtonRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  radius = 'md',
  leftIcon,
  rightIcon,
  isLoading = false,
  isFullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  // Adjust radius for brutalist variant
  const actualRadius = variant === 'brutalist' ? 'none' : radius;
  
  const baseClasses = twMerge(
    'once-button inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none',
    variant !== 'brutalist' ? 'focus:ring-2 focus:ring-offset-2 focus:ring-accent dark:focus:ring-accent-dark dark:focus:ring-offset-neutral-900' : '',
    variantClasses[variant],
    sizeClasses[size],
    radiusClasses[actualRadius],
    isFullWidth ? 'w-full' : '',
    disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
    className
  );

  return (
    <button
      className={baseClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 animate-spin">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      ) : leftIcon ? (
        <Icon name={leftIcon} size="sm" className="mr-2" />
      ) : null}
      
      {children}
      
      {rightIcon && !isLoading && (
        <Icon name={rightIcon} size="sm" className="ml-2" />
      )}
    </button>
  );
};

export default Button;
