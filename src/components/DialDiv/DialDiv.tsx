import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

interface StopwatchProps {
  radius: number;
}

const DialDiv: React.FC<StopwatchProps> = ({ radius }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Создаем анимацию для вращения циферблата
  const { transform } = useSpring({
    transform: `rotate(${isRunning ? seconds * 6 : 0}deg)`, // Каждая секунда - 6 градусов
    config: { tension: 100, friction: 20 },
  });
  let interval: NodeJS.Timeout;
  useEffect(() => {
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>
      <div
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          borderRadius: '50%',
          background: 'lightgray',
          position: 'relative',
          cursor: 'pointer',
        }}
        onClick={startStop}
      >
        <animated.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformOrigin: 'center center',
            transform,
          }}
        >
          <div
            style={{
              width: '2px',
              height: `${radius}px`,
              backgroundColor: 'red',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              transformOrigin: 'center bottom',
            }}
          />
        </animated.div>
      </div>
      <div>
        <button onClick={reset}>Сбросить</button>
      </div>
      <div>
        <p>Секунды: {seconds}</p>
      </div>
    </div>
  );
};

export default DialDiv;