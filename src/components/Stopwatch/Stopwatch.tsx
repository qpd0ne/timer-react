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

const Stopwatch: React.FC = () => {
  const [milliseconds, setMilliseconds] = useState(0); // Состояние мсю
  const [isRunning, setIsRunning] = useState(false); // Состояние работы секундомера
  const [lap, setLap] = useState<string[]>([]); // Состояние кругов-меток

  // Анимация циферблата относительно мс.
  const { transform } = useSpring({
    transform: `rotate(${isRunning ? milliseconds * 0.06 : 0}deg)`, // Каждая мс - 0.06 градусов
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
      <div className="time_block">
        <div className="dial_block">
          <animated.div
            style={{
              transform,
            }}
            className="dial_animated"
          >
            <div className="arrow_block" />
          </animated.div>
          <div className="format_time">
            <div className="minutes_block">{formattedMinutes}'</div>
            <div className="seconds_block">{formattedSeconds}</div>
            <div className="milliseconds_block">'{formattedMilliseconds}</div>
          </div>
          <div className="buttons_lap_block">
            <div className="buttons_block">
              {!isRunning ? (
                <>
                <div className="none_button"/>
                <StopwatchButton
                  onClick={startStopwatch}
                  className="big_green_button"
                >
                  <PlayIcon />
                </StopwatchButton>
                </>
                
              ) : (
                <>
                  <StopwatchButton
                    onClick={lapStopwatch}
                    className="yellow_button"
                  >
                    <LapIcon />
                  </StopwatchButton>
                  <StopwatchButton
                    onClick={startStopwatch}
                    className="big_red_button"
                  >
                    <PauseIcon />
                  </StopwatchButton>
                </>
              )}
              <StopwatchButton
                onClick={resetStopwatch}
                className="classic_button"
              >
                <ArrowIcon />
              </StopwatchButton>
            </div>
            <div className="lap_list_block">
              <ScrollDiv className="classic_scroll">
                {lap.map((divText, index) => (
                  <StopwatchLapDiv
                    key={index}
                    className="classic_stopwatch_text"
                  >
                    {divText}
                  </StopwatchLapDiv>
                ))}
              </ScrollDiv>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="stopwatch_ui">
      <div className="stopwatch_block">{formatTime(milliseconds)}</div>
    </div>
  );
};

export default Stopwatch;
