import React, { FC, ReactNode } from "react";
import "./TimerText.css";

interface TimerTextProps {
  className?: "classic_timer_text";
  children: ReactNode;
}

const TimerText: FC<TimerTextProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default TimerText;