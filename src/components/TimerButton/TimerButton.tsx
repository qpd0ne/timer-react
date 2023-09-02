import React, { FC, ReactNode } from "react";
import "./TimerButton.css";

interface TimerButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

const TimerButton: FC<TimerButtonProps> = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className="TimerButton">
      {children}
    </div>
  );
};

export default TimerButton;