import React, { useState, useEffect } from "react";

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

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
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
      <div>
        {formattedMinutes}:{formattedSeconds}:{formattedMilliseconds}
      </div>
    );
  };

  return (
    <div>
      <div>{formatTime(milliseconds)}</div>
      <button onClick={startStopwatch}>Старт</button>
      <button onClick={stopStopwatch}>Стоп</button>
      <button onClick={resetStopwatch}>Сброс</button>
    </div>
  );
};

export default Timer;