"use client";

import { useEffect, useRef } from "react";
import classNames from "classnames";

interface ArrowProps {
  trigger: string;
  scale?: number;
  color?: "primary" | "accent" | "white";
  className?: string;
}

export const Arrow: React.FC<ArrowProps> = ({
  trigger,
  scale = 0.8,
  color = "primary",
  className,
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove the # if it exists at the beginning of the trigger
    const triggerSelector = trigger.startsWith('#') ? trigger : `#${trigger}`;
    const triggerElement = document.querySelector(triggerSelector);

    if (triggerElement && arrowRef.current) {
      const handleMouseOver = () => {
        if (arrowRef.current) {
          arrowRef.current.classList.add('arrow-active');
        }
      };

      const handleMouseOut = () => {
        if (arrowRef.current) {
          arrowRef.current.classList.remove('arrow-active');
        }
      };

      triggerElement.addEventListener("mouseenter", handleMouseOver);
      triggerElement.addEventListener("mouseleave", handleMouseOut);

      return () => {
        triggerElement.removeEventListener("mouseenter", handleMouseOver);
        triggerElement.removeEventListener("mouseleave", handleMouseOut);
      };
    }
  }, [trigger]);

  const colorClasses = {
    primary: "bg-primary dark:bg-primary-dark",
    accent: "bg-accent dark:bg-accent-dark",
    white: "bg-white dark:bg-white",
  };

  return (
    <div
      ref={arrowRef}
      className={classNames(
        "relative flex items-center justify-center transition-all duration-300",
        className
      )}
      style={{
        transform: `scale(${scale})`,
      }}
    >
      {/* Arrow line */}
      <div 
        className={classNames(
          "w-16 h-0.5 transition-all duration-300 transform origin-left",
          colorClasses[color],
          "arrow-active:w-24"
        )}
      />
      
      {/* Arrow head */}
      <div className="absolute right-0 flex">
        <div 
          className={classNames(
            "w-3 h-0.5 transform rotate-45 origin-left",
            colorClasses[color]
          )}
        />
        <div 
          className={classNames(
            "w-3 h-0.5 transform -rotate-45 origin-left ml-[-3px]",
            colorClasses[color]
          )}
        />
      </div>
    </div>
  );
};

Arrow.displayName = "Arrow";
