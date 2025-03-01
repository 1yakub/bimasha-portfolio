import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon';
import type { IconName } from '../icons';

export type InputVariant = 'default' | 'filled' | 'outline' | 'premium' | 'brutalist';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  fullWidth?: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
}

const variantClasses: Record<InputVariant, string> = {
  default: 'bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:border-accent dark:focus:border-accent-dark',
  filled: 'bg-neutral-100 dark:bg-neutral-900 border border-transparent focus:bg-white dark:focus:bg-neutral-800 focus:border-accent dark:focus:border-accent-dark',
  outline: 'bg-transparent border border-neutral-300 dark:border-neutral-700 focus:border-accent dark:focus:border-accent-dark',
  premium: 'bg-white dark:bg-neutral-800 border border-accent/30 dark:border-accent-dark/30 focus:border-accent dark:focus:border-accent-dark shadow-premium focus:shadow-premium-hover',
  brutalist: 'bg-white dark:bg-neutral-800 border-[3px] border-black dark:border-white focus:bg-neutral-100 dark:focus:bg-neutral-700 shadow-brutalist-sm'
};

const sizeClasses: Record<InputSize, string> = {
  sm: 'py-1.5 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-2.5 px-5 text-lg'
};

const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'default',
  size = 'md',
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  helperTextClassName = '',
  errorClassName = '',
  disabled = false,
  type = 'text',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const actualType = isPassword && showPassword ? 'text' : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Adjust radius for brutalist variant
  const radiusClass = variant === 'brutalist' ? 'rounded-none' : 'rounded-md';
  
  // Adjust focus ring for different variants
  const focusRingClass = variant === 'brutalist' 
    ? 'focus:outline-none' 
    : variant === 'premium'
      ? 'focus:outline-none focus:ring-2 focus:ring-accent/30 dark:focus:ring-accent-dark/30'
      : 'focus:outline-none focus:ring-2 focus:ring-accent/20 dark:focus:ring-accent-dark/20';

  const containerClasses = twMerge(
    'once-input-container flex flex-col',
    fullWidth ? 'w-full' : '',
    className
  );

  const inputContainerClasses = twMerge(
    'relative flex items-center',
    disabled ? 'opacity-60 cursor-not-allowed' : ''
  );

  const inputClasses = twMerge(
    'once-input w-full outline-none transition-all duration-200',
    radiusClass,
    focusRingClass,
    variantClasses[variant],
    sizeClasses[size],
    leftIcon ? 'pl-10' : '',
    (rightIcon || isPassword) ? 'pr-10' : '',
    error ? 'border-persimmon dark:border-persimmon-light focus:border-persimmon dark:focus:border-persimmon-light' : '',
    disabled ? 'cursor-not-allowed' : '',
    inputClassName
  );

  // Adjust label styles based on variant
  const labelVariantClass = variant === 'premium' 
    ? 'text-accent-800 dark:text-accent-200' 
    : variant === 'brutalist'
      ? 'font-bold uppercase tracking-wider'
      : '';

  const labelClasses = twMerge(
    'once-input-label text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1',
    labelVariantClass,
    labelClassName
  );

  const helperTextClasses = twMerge(
    'once-input-helper-text text-xs text-neutral-500 dark:text-neutral-400 mt-1',
    helperTextClassName
  );

  const errorClasses = twMerge(
    'once-input-error text-xs text-persimmon dark:text-persimmon-light mt-1',
    errorClassName
  );

  return (
    <div className={containerClasses}>
      {label && (
        <label className={labelClasses}>
          {label}
        </label>
      )}
      <div className={inputContainerClasses}>
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
            <Icon name={leftIcon} size="sm" />
          </div>
        )}
        <input
          ref={ref}
          type={actualType}
          disabled={disabled}
          className={inputClasses}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400 focus:outline-none"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size="sm" />
          </button>
        )}
        {rightIcon && !isPassword && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
            <Icon name={rightIcon} size="sm" />
          </div>
        )}
      </div>
      {helperText && !error && (
        <p className={helperTextClasses}>{helperText}</p>
      )}
      {error && (
        <p className={errorClasses}>{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input; 