'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: {
    id: string;
    label: React.ReactNode;
    content: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
  }[];
  defaultTab?: string;
  variant?: 'default' | 'premium' | 'underline' | 'pills' | 'minimal';
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  tabsClassName?: string;
  contentClassName?: string;
  onChange?: (id: string) => void;
}

export default function Tabs({
  tabs,
  defaultTab,
  variant = 'default',
  orientation = 'horizontal',
  size = 'md',
  className,
  tabsClassName,
  contentClassName,
  onChange,
}: TabsProps) {
  const [activeTab, setActiveTab] = React.useState<string>(
    defaultTab || (tabs.length > 0 ? tabs[0].id : '')
  );

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    if (onChange) onChange(id);
  };

  // Size styles
  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  // Tab button size styles
  const tabSizeStyles = {
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-6 py-3",
  };

  // Variant styles for tab container
  const containerVariantStyles = {
    default: "border-b border-gray-200 dark:border-navy-700",
    premium: "bg-background/50 dark:bg-navy-900/50 backdrop-blur-sm rounded-lg p-1 border border-accent/10 shadow-sm",
    underline: "border-b border-gray-200 dark:border-navy-700",
    pills: "bg-gray-100 dark:bg-navy-800 rounded-lg p-1",
    minimal: "",
  };

  // Variant styles for individual tabs
  const tabVariantStyles = {
    default: "border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:text-accent dark:hover:text-accent-dark",
    premium: "rounded-md hover:bg-accent/5 dark:hover:bg-accent-dark/5",
    underline: "border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:text-accent dark:hover:text-accent-dark",
    pills: "rounded-md hover:bg-white dark:hover:bg-navy-700 hover:text-accent dark:hover:text-accent-dark",
    minimal: "hover:text-accent dark:hover:text-accent-dark",
  };

  // Active tab styles
  const activeTabStyles = {
    default: "border-b-2 border-accent dark:border-accent-dark text-accent dark:text-accent-dark",
    premium: "bg-gradient-to-r from-accent/10 to-vibrant-500/10 text-accent dark:text-accent-dark shadow-sm",
    underline: "border-b-2 border-accent dark:border-accent-dark text-accent dark:text-accent-dark",
    pills: "bg-white dark:bg-navy-700 text-accent dark:text-accent-dark shadow-sm",
    minimal: "text-accent dark:text-accent-dark font-medium",
  };

  // Orientation styles
  const orientationStyles = {
    horizontal: "flex-row",
    vertical: "flex-col",
  };

  // Content orientation styles
  const contentOrientationStyles = {
    horizontal: "mt-4",
    vertical: "ml-4",
  };

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("flex", orientationStyles[orientation])}>
        <div
          className={cn(
            orientation === 'horizontal' ? "flex space-x-1" : "flex flex-col space-y-1",
            containerVariantStyles[variant],
            tabsClassName
          )}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => !tab.disabled && handleTabChange(tab.id)}
                disabled={tab.disabled}
                className={cn(
                  "relative flex items-center justify-center transition-all duration-200 focus:outline-none",
                  sizeStyles[size],
                  tabSizeStyles[size],
                  tabVariantStyles[variant],
                  isActive && activeTabStyles[variant],
                  tab.disabled && "opacity-50 cursor-not-allowed",
                  orientation === 'horizontal' ? "" : "text-left justify-start"
                )}
              >
                {tab.icon && (
                  <span className={cn("mr-2", orientation === 'vertical' && "mr-3")}>
                    {tab.icon}
                  </span>
                )}
                {tab.label}
                {isActive && variant === 'premium' && (
                  <motion.div
                    layoutId="premium-tab-highlight"
                    className="absolute inset-0 rounded-md bg-accent/5 dark:bg-accent-dark/5 -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                {isActive && variant === 'pills' && (
                  <motion.div
                    layoutId="pill-tab-highlight"
                    className="absolute inset-0 rounded-md bg-white dark:bg-navy-700 -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
        <div
          className={cn(
            "w-full",
            orientation === 'horizontal' ? contentOrientationStyles.horizontal : contentOrientationStyles.vertical,
            contentClassName
          )}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(activeTab === tab.id ? "block" : "hidden")}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 