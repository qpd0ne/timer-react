import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./Stopwatch.css";
import StopwatchButton from "../StopwatchButton/StopwatchButton";
import ScrollDiv from "../ScrollDiv/ScrollDiv";
import PlayIcon from "../../icons/PlayIcon/PlayIcon";
import PauseIcon from "../../icons/PauseIcon/PauseIcon";
import ArrowIcon from "../../icons/ArrowIcon/ArrowIcon";
import LapFunc from "./LapFunc/LapFunc";
import LapIcon from "../../icons/LapIcon/LapIcon";
import StopwatchLapDiv from "../StopwatchLapDiv/StopwatchLapDiv";
import DialDiv from "../../icons/Dial/Dial";
import Arrow from "../../icons/Dial/Arrow";

const Stopwatch: React.FC = () => {
  const [milliseconds, setMilliseconds] = useState(0); // Состояние мсю
  const [isRunning, setIsRunning] = useState(false); // Состояние работы секундомера
  const [lap, setLap] = useState<string[]>([]); // Состояние кругов-меток

  // Анимация циферблата относительно мс.
  const { transform } = useSpring({
    transform: `rotate(${isRunning ? 180 + milliseconds * 0.06 : 180}deg)`, // Каждая мс - 0.06 градусов
    config: { tension: 100, friction: 20 },
  });

  useEffect(() => {
    let stopwatch: NodeJS.Timeout;

    // Состояние запуска таймера
    if (isRunning) {
      stopwatch = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 1);
      }, 10);
    }

    return () => clearInterval(stopwatch);
  }, [isRunning]);

  // Круг-метка
  const lapStopwatch = () => {
    setLap((prevLap) => [...prevLap, `${LapFunc(milliseconds)}`]); // LapFunc - импортированная ф-я
  };

  // Старт-Стоп
  const startStopwatch = () => {
    isRunning ? setIsRunning(false) : setIsRunning(true);
  };

  // Сброс
  const resetStopwatch = () => {
    setMilliseconds(0);
    setIsRunning(false);
    setLap([]);
  };

  // Функция преведения к мм:сс:мс
  const formatTime = (time: number) => {
    const fminutes = Math.floor(time / 6000);
    const fseconds = Math.floor((time / 100) % 60);
    const fmilliseconds = time % 100;

    const formattedMinutes = fminutes < 10 ? `0${fminutes}` : fminutes;
    const formattedSeconds = fseconds < 10 ? `0${fseconds}` : fseconds;
    const formattedMilliseconds =
      fmilliseconds < 10 ? `0${fmilliseconds}` : fmilliseconds;

    return (
      <>
        <div className="dial_block">
          <animated.div style={{ transform }} className="dial_animated">
            <Arrow className="arrow_block" />
          </animated.div>
          <DialDiv className="dial_size_block" />
        </div>
        <div className="time_and_buttons_block">
          <div className="lap_reset_buttons_block">
            {!isRunning ? (
              <StopwatchButton
                onClick={resetStopwatch}
                className="classic_button"
              >
                <ArrowIcon />
              </StopwatchButton>
            ) : (
              <StopwatchButton
                onClick={lapStopwatch}
                className="classic_button"
              >
                <LapIcon />
              </StopwatchButton>
            )}
          </div>
          <div className="time_div_block">
            <div className="minutes_block">{formattedMinutes}:</div>
            <div className="seconds_block">{formattedSeconds},</div>
            <div className="milliseconds_block">{formattedMilliseconds}</div>
          </div>
          <div className="start_stop_buttons_block">
            {!isRunning ? (
              <StopwatchButton
                onClick={startStopwatch}
                className="green_button"
              >
                <PlayIcon />
              </StopwatchButton>
            ) : (
              <StopwatchButton onClick={startStopwatch} className="red_button">
                <PauseIcon />
              </StopwatchButton>
            )}
          </div>
        </div>
        <div className="lap_list_block">
          <ScrollDiv className="classic_scroll">
            {lap.map((divText, index) => (
              <StopwatchLapDiv key={index} className="classic_stopwatch_text">
                {divText}
              </StopwatchLapDiv>
            ))}
          </ScrollDiv>
        </div>
      </>
    );
  };

  return (
    <div className="stopwatch_ui">
      <div className="stopwatch_block">{formatTime(milliseconds)}</div>
    </div>
  );
};

export default Stopwatch;
