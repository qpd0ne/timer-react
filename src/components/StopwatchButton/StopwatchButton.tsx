import React, { FC, ReactNode } from "react";
import "./StopwatchButton.css";

interface StopwatchButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string
    | "green_button"
    | "red_button"
    | "classic_button"
}

const StopwatchButton: FC<StopwatchButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default StopwatchButton;
