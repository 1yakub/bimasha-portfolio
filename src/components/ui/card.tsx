import * as React from "react";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'premium' | 'glass' | 'outline';
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverEffect = false, ...props }, ref) => {
    const baseStyles = "rounded-xl border transition-all duration-300";
    
    const variantStyles = {
      default: "bg-card text-card-foreground border-border/40 shadow-sm",
      premium: "bg-gradient-to-br from-background to-background/80 text-card-foreground border-accent/10 shadow-luxury backdrop-blur-sm",
      glass: "bg-background/60 text-card-foreground border-background/20 shadow-sm backdrop-blur-md",
      outline: "bg-transparent text-card-foreground border-border/60 shadow-none",
    };
    
    const hoverStyles = hoverEffect 
      ? "hover:shadow-luxury hover:border-accent/20 hover:translate-y-[-2px]" 
      : "";

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

// Animated version of Card
const MotionCard = React.forwardRef<HTMLDivElement, CardProps & React.ComponentProps<typeof motion.div>>(
  ({ className, variant = 'default', hoverEffect = false, ...props }, ref) => {
    const baseStyles = "rounded-xl border transition-all duration-300";
    
    const variantStyles = {
      default: "bg-card text-card-foreground border-border/40 shadow-sm",
      premium: "bg-gradient-to-br from-background to-background/80 text-card-foreground border-accent/10 shadow-luxury backdrop-blur-sm",
      glass: "bg-background/60 text-card-foreground border-background/20 shadow-sm backdrop-blur-md",
      outline: "bg-transparent text-card-foreground border-border/60 shadow-none",
    };

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        whileHover={hoverEffect ? { y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      />
    );
  }
);
MotionCard.displayName = "MotionCard";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center p-6 pt-0 ${className}`}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, MotionCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
