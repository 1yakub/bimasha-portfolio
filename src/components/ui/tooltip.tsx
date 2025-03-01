'use client'

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  variant?: 'default' | 'premium' | 'dark' | 'light';
  delay?: number;
  className?: string;
  contentClassName?: string;
  arrow?: boolean;
  maxWidth?: number;
}

export default function Tooltip({
  children,
  content,
  position = 'top',
  variant = 'default',
  delay = 0.2,
  className,
  contentClassName,
  arrow = true,
  maxWidth = 200,
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    setIsMounted(true);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  // Position styles
  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  // Arrow position styles
  const arrowPositionStyles = {
    top: "top-full left-1/2 -translate-x-1/2 -mt-[5px] border-t-0 border-l-transparent border-r-transparent",
    right: "right-full top-1/2 -translate-y-1/2 -mr-[5px] border-r-0 border-t-transparent border-b-transparent",
    bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-[5px] border-b-0 border-l-transparent border-r-transparent",
    left: "left-full top-1/2 -translate-y-1/2 -ml-[5px] border-l-0 border-t-transparent border-b-transparent",
  };

  // Variant styles
  const variantStyles = {
    default: "bg-white text-gray-800 border border-gray-200 shadow-md dark:bg-navy-800 dark:text-gray-200 dark:border-navy-700",
    premium: "bg-gradient-to-br from-background to-background/90 text-secondary backdrop-blur-md border border-accent/10 shadow-luxury dark:from-navy-900 dark:to-navy-900/90 dark:text-secondary-dark",
    dark: "bg-gray-800 text-white border border-gray-700 shadow-md",
    light: "bg-white text-gray-800 border border-gray-200 shadow-md",
  };

  // Arrow variant styles
  const arrowVariantStyles = {
    default: "border-gray-200 dark:border-navy-700",
    premium: "border-accent/10",
    dark: "border-gray-700",
    light: "border-gray-200",
  };

  // Animation variants
  const tooltipVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      ...(position === 'top' && { y: 5 }),
      ...(position === 'right' && { x: -5 }),
      ...(position === 'bottom' && { y: -5 }),
      ...(position === 'left' && { x: 5 }),
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  if (!isMounted) return <>{children}</>;

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={cn(
              "absolute z-50 px-3 py-2 text-sm rounded pointer-events-none whitespace-normal",
              positionStyles[position],
              variantStyles[variant],
              contentClassName
            )}
            style={{ maxWidth }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tooltipVariants}
          >
            {content}
            {arrow && (
              <div
                className={cn(
                  "absolute w-0 h-0 border-[6px]",
                  arrowPositionStyles[position],
                  arrowVariantStyles[variant]
                )}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 