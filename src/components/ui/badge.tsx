import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'premium' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'default' | 'full';
  glow?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', rounded = 'default', glow = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors";
    
    const variantStyles = {
      default: "bg-accent/10 text-accent border border-accent/20",
      outline: "bg-transparent border border-accent text-accent",
      premium: "bg-gradient-to-r from-accent to-vibrant-500 text-white border-0",
      secondary: "bg-secondary/10 text-secondary border border-secondary/20",
      success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30",
      warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30",
      danger: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800/30",
      info: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400 border border-sky-200 dark:border-sky-800/30",
    };
    
    const sizeStyles = {
      sm: "text-xs px-2 py-0.5",
      md: "text-sm px-2.5 py-0.5",
      lg: "text-base px-3 py-1",
    };
    
    const roundedStyles = {
      default: "rounded",
      full: "rounded-full",
    };
    
    const glowStyle = glow ? "shadow-glow" : "";
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          roundedStyles[rounded],
          glowStyle,
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

// Animated version of Badge
const MotionBadge = React.forwardRef<HTMLDivElement, BadgeProps & React.ComponentProps<typeof motion.div>>(
  ({ className, variant = 'default', size = 'md', rounded = 'default', glow = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors";
    
    const variantStyles = {
      default: "bg-accent/10 text-accent border border-accent/20",
      outline: "bg-transparent border border-accent text-accent",
      premium: "bg-gradient-to-r from-accent to-vibrant-500 text-white border-0",
      secondary: "bg-secondary/10 text-secondary border border-secondary/20",
      success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30",
      warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30",
      danger: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800/30",
      info: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400 border border-sky-200 dark:border-sky-800/30",
    };
    
    const sizeStyles = {
      sm: "text-xs px-2 py-0.5",
      md: "text-sm px-2.5 py-0.5",
      lg: "text-base px-3 py-1",
    };
    
    const roundedStyles = {
      default: "rounded",
      full: "rounded-full",
    };
    
    const glowStyle = glow ? "shadow-glow" : "";
    
    return (
      <motion.div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          roundedStyles[rounded],
          glowStyle,
          className
        )}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      />
    );
  }
);
MotionBadge.displayName = "MotionBadge";

export { Badge, MotionBadge }; 