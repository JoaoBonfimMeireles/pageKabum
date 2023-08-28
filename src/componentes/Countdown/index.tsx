import React, { useState, useEffect } from 'react';
import './styles.css';
import IconTime from '../Icons/IconTime';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown(): JSX.Element {
  const targetDate: number = new Date('2023-09-01T02:59:59').getTime();

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeRemaining = (): void => {
    const now: number = new Date().getTime();
    const timeLeft: number = targetDate - now;

    const days: number = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setTimeRemaining({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(calculateTimeRemaining, 1000);
    return (): void => clearInterval(timer);
  }, []);

  return (
    <div className='countdown-container'>
      <span className='countdown-semana'>SEMANA GAMER</span>
      <div className='countdown-item'>
        <span className='countdown-label'>TERMINA EM: </span>
        <span className='countdown-icon'><IconTime /></span>
        <span className='countdown-value'>{timeRemaining.days}D</span>
        <span className='countdown-value'>{timeRemaining.hours}:</span>
        <span className='countdown-value'>{timeRemaining.minutes}:</span>
        <span className='countdown-value'>{timeRemaining.seconds}</span>
      </div>
    </div>
  );
}
