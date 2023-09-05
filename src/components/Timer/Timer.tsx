import React, { useState, useEffect } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";
import ScrollDiv from "../ScrollDiv/ScrollDiv";
import PlayIcon from "../../icons/PlayIcon/PlayIcon";
import PauseIcon from "../../icons/PauseIcon/PauseIcon";
import ArrowIcon from "../../icons/ArrowIcon/ArrowIcon";
import LapFunc from "../StopWatch/LapFunc/LapFunc";
import LapIcon from "../../icons/LapIcon/LapIcon";
import TimerText from "../TimerText/TimerText";
import DialDiv from "../DialDiv/DialDiv";

const Timer: React.FC = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lap, setLap] = useState<string[]>([]);

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
    setLap((prevLap) => [...prevLap, `${LapFunc(milliseconds)}`]);
  };

  const startStopwatch = () => {
    isRunning ? setIsRunning(false) : setIsRunning(true);
  };

  const resetStopwatch = () => {
    setMilliseconds(0);
    setIsRunning(false);
    setLap([]);
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
            <PlayIcon />
          </TimerButton>
        ) : (
          <>
            <TimerButton onClick={startStopwatch} className="red_button">
              <PauseIcon />
            </TimerButton>
            <TimerButton onClick={lapStopwatch} className="yellow_button">
              <LapIcon />
            </TimerButton>
          </>
        )}
        <TimerButton onClick={resetStopwatch} className="classic_button">
          <ArrowIcon />
        </TimerButton>
      </div>
      <div className="lap_list_block">
        <ScrollDiv className="classic_scroll">
          {lap.map((divText, index) => (
            <TimerText key={index} className="classic_timer_text">
              {divText}
            </TimerText>
          ))}
        </ScrollDiv>
      </div>
      <DialDiv radius={50}/>
    </div>
  );
};

export default Timer;
