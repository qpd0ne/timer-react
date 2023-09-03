import React, { FC, ReactNode } from "react";
import "./TimerButton.css";

interface ITimerButtonProps {
  children?: ReactNode,
  onClick?: () => void,
  className?: "green_button" | "yellow_button" | "red_button" | "classic_button" ,
}

const TimerButton: FC<ITimerButtonProps> = ({ onClick, children, className }) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default TimerButton;