import React, { useState, useEffect } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";
import ScrollDiv from "../ScrollDiv/ScrollDiv";

const Timer: React.FC = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 1);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const lapStopwatch = () => {
    
  };

  const startStopwatch = () => {
    isRunning ? setIsRunning(false) : setIsRunning(true);
  };

  const resetStopwatch = () => {
    setMilliseconds(0);
    setIsRunning(false);
  };

  const formatTime = (time: number) => {
    const fminutes = Math.floor(time / 6000);
    const fseconds = Math.floor((time / 100) % 60);
    const fmilliseconds = time % 100;

    const formattedMinutes = fminutes < 10 ? `0${fminutes}` : fminutes;
    const formattedSeconds = fseconds < 10 ? `0${fseconds}` : fseconds;
    const formattedMilliseconds =
      fmilliseconds < 10 ? `0${fmilliseconds}` : fmilliseconds;

    return (
      <div className="time_block">
        <div className="minutes_block">{formattedMinutes}</div>
        <div className="seconds_block">{formattedSeconds}</div>
        <div className="milliseconds_block">{formattedMilliseconds}</div>
      </div>
    );
  };

  return (
    <div className="timer_ui">
      <div className="numbers_block">{formatTime(milliseconds)}</div>
      <div className="buttons_block">
        {!isRunning ? (
          <TimerButton onClick={startStopwatch} className="green_button">
            <svg
              width="66px"
              height="66px"
              viewBox="0 0 228 256"
              fill="#006605"
            >
              <path
                d="M59 61.922c0-9.768 13.016-15.432 22.352-11.615 10.695 7.017 101.643 58.238 109.869 65.076 8.226 6.838 10.585 17.695-.559 25.77-11.143 8.074-99.712 60.203-109.31 64.73-9.6 4.526-21.952-1.632-22.352-13.088-.4-11.456 0-121.106 0-130.873zm13.437 8.48c0 2.494-.076 112.852-.216 115.122-.23 3.723 3 7.464 7.5 5.245 4.5-2.22 97.522-57.704 101.216-59.141 3.695-1.438 3.45-5.1 0-7.388C177.488 121.952 82.77 67.76 80 65.38c-2.77-2.381-7.563 1.193-7.563 5.023z"
                stroke="#006605"
              />
            </svg>
          </TimerButton>
        ) : (
          <TimerButton onClick={lapStopwatch} className="yellow_button">
            <TimerButton onClick={startStopwatch} className="red_button">
              <svg width="80px" height="80px" viewBox="-1 -1 26 26" fill="none">
                <path
                  d="M15 6V18M9 6V18"
                  stroke="#800000"
                  strokeWidth="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </TimerButton>
          </TimerButton>
        )}
        <TimerButton onClick={resetStopwatch} className="classic_button">
          <svg
            width="100px"
            height="100px"
            viewBox="-9 -7.5 34.4 34.4"
            version="1.1"
          >
            <g stroke="none" strokeWidth="1" fill="none">
              <g
                transform="translate(-342.000000, -7080.000000)"
                fill="#000000"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path d="M300.002921,6930.85894 C299.524118,6934.16792 296.32507,6936.61291 292.744585,6935.86392 C290.471022,6935.38792 288.623062,6933.55693 288.145263,6931.29294 C287.32919,6927.42196 290.007276,6923.99998 294.022397,6923.99998 L294.022397,6925.99997 L299.041299,6922.99998 L294.022397,6920 L294.022397,6921.99999 C289.003495,6921.99999 285.16002,6926.48297 286.158782,6931.60494 C286.767072,6934.72392 289.294592,6937.23791 292.425383,6937.8439 C297.170253,6938.7619 301.37007,6935.51592 301.990406,6931.12594 C302.074724,6930.52994 301.591905,6929.99995 300.988633,6929.99995 L300.989637,6929.99995 C300.490758,6929.99995 300.074189,6930.36694 300.002921,6930.85894"></path>
                </g>
              </g>
            </g>
          </svg>
        </TimerButton>
      </div>
      <div className="lap_list_block">
        <ScrollDiv className="classic_scroll"></ScrollDiv>
      </div>
    </div>
  );
};

export default Timer;
