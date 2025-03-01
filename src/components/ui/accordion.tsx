'use client'

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  onToggle?: (isOpen: boolean) => void;
}

export function AccordionItem({
  title,
  children,
  icon,
  defaultOpen = false,
  disabled = false,
  className,
  titleClassName,
  contentClassName,
  onToggle,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const handleToggle = () => {
    if (!disabled) {
      const newState = !isOpen;
      setIsOpen(newState);
      if (onToggle) onToggle(newState);
    }
  };

  return (
    <div
      className={cn(
        "border-b border-gray-200 dark:border-navy-700 last:border-0",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={cn(
          "flex w-full items-center justify-between py-4 text-left font-medium transition-all",
          "focus:outline-none hover:text-accent dark:hover:text-accent-dark",
          titleClassName
        )}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span>{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-gray-400"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={cn("pb-4 pt-2", contentClassName)}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
  }[];
  variant?: 'default' | 'premium' | 'bordered' | 'separated';
  defaultOpen?: string[];
  allowMultiple?: boolean;
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  onChange?: (openItems: string[]) => void;
}

export default function Accordion({
  items,
  variant = 'default',
  defaultOpen = [],
  allowMultiple = false,
  className,
  itemClassName,
  titleClassName,
  contentClassName,
  onChange,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(defaultOpen);

  const handleToggle = (id: string, isOpen: boolean) => {
    let newOpenItems: string[];

    if (isOpen) {
      newOpenItems = allowMultiple ? [...openItems, id] : [id];
    } else {
      newOpenItems = openItems.filter((item) => item !== id);
    }

    setOpenItems(newOpenItems);
    if (onChange) onChange(newOpenItems);
  };

  // Variant styles
  const variantStyles = {
    default: "divide-y divide-gray-200 dark:divide-navy-700",
    premium: "bg-background/50 dark:bg-navy-900/50 backdrop-blur-sm rounded-lg border border-accent/10 shadow-sm divide-y divide-gray-200/50 dark:divide-navy-700/50",
    bordered: "border border-gray-200 dark:border-navy-700 rounded-lg divide-y divide-gray-200 dark:divide-navy-700",
    separated: "space-y-2",
  };

  // Item variant styles
  const itemVariantStyles = {
    default: "",
    premium: "",
    bordered: "",
    separated: "border border-gray-200 dark:border-navy-700 rounded-lg overflow-hidden bg-white dark:bg-navy-900 shadow-sm",
  };

  return (
    <div className={cn(variantStyles[variant], "w-full", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          icon={item.icon}
          defaultOpen={openItems.includes(item.id)}
          disabled={item.disabled}
          className={cn(itemVariantStyles[variant], itemClassName)}
          titleClassName={cn(
            variant === 'premium' && "px-4",
            variant === 'bordered' && "px-4",
            variant === 'separated' && "px-4",
            titleClassName
          )}
          contentClassName={cn(
            variant === 'premium' && "px-4",
            variant === 'bordered' && "px-4",
            variant === 'separated' && "px-4",
            contentClassName
          )}
          onToggle={(isOpen) => handleToggle(item.id, isOpen)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
} 