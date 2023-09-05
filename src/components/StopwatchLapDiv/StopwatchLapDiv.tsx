import React, { FC, ReactNode } from "react";
import "./StopwatchLapDiv.css";

interface StopwatchLapDivProps {
  className?: "classic_stopwatch_text";
  children: ReactNode;
}

const StopwatchLapDiv: FC<StopwatchLapDivProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default StopwatchLapDiv;