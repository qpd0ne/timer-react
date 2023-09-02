import React from "react";
import Timer from "../../components/Timer/Timer";
import "./TimerPage.css"

function TimerPage() {
  return (
    <div className="body_block">
      <div className="center_block">
        <div className="timer_block">
            <Timer />
        </div>
      </div>
    </div>
  );
}

export default TimerPage;
