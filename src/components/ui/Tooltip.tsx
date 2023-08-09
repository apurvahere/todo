import classNames from "classnames";
import { useState } from "react";

interface TooltipProps {
  text: string;
  secondaryText?: string | React.ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Tooltip = ({
  text,
  secondaryText,
  position = "top",
  arrow = true,
  children,
  className = "",
}: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div className="relative inline-block">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <div
          className={classNames(
            position === "top"
              ? "bottom-full left-1/2 transform -translate-x-1/2 mb-4"
              : position === "right"
              ? "left-full top-1/2 transform -translate-y-1/2 ml-4"
              : position === "bottom"
              ? "top-full left-1/2 transform -translate-x-1/2 mt-4"
              : position === "left"
              ? "right-full top-1/2 transform -translate-y-1/2 mr-4"
              : "hidden",
            "absolute z-50 w-48 p-2 text-sm text-white bg-black rounded-lg shadow-lg",
            className
          )}
        >
          <div className="mb-2 relative z-50 flex flex-col gap-1">
            <span className="font-medium text-sm text-center">{text}</span>
            {secondaryText && (
              <span className="font-medium text-xs">{secondaryText}</span>
            )}
          </div>
          {arrow && (
            <div
              className={classNames(
                position === "top"
                  ? "-bottom-1 left-1/2 transform -translate-x-1/2"
                  : position === "right"
                  ? "top-1/2 -left-1 transform -translate-y-1/2"
                  : position === "bottom"
                  ? "-top-1 left-1/2 transform -translate-x-1/2"
                  : "top-1/2 -right-1 transform -translate-y-1/2",
                "absolute w-3 h-3 bg-black transform rotate-45"
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
