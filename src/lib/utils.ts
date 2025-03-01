import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values into a single className string,
 * with proper handling of Tailwind CSS classes.
 * 
 * @param inputs - Class values to be combined
 * @returns A merged className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date into a human-readable string
 * 
 * @param date - Date to format
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }
) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', options);
}

/**
 * Truncates a string to a specified length and adds an ellipsis
 * 
 * @param str - String to truncate
 * @param length - Maximum length
 * @returns Truncated string
 */
export function truncate(str: string, length: number) {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
}

/**
 * Generates a random ID
 * 
 * @param length - Length of the ID
 * @returns Random ID string
 */
export function generateId(length: number = 8) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

/**
 * Debounces a function
 * 
 * @param fn - Function to debounce
 * @param ms - Debounce delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  ms: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;
  
  return function(this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
} 