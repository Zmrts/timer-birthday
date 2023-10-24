import { useEffect, useState } from "react";
import { TimerItem } from "./TimerItem";

function Timer() {
  const targetDate = "2024-10-21 23:59:59";




  const timeUntil = (targetDate) => {
    const target = new Date(targetDate);
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      const title = document.querySelector('.title');
      title.style.opacity = 0; 
      
      setTimeout(() => {
        title.textContent = 'HAPPY BIRTHDAY KIRILL'
      }, 2000);
      setTimeout(() => {
        title.style.color = 'orange';
        title.style.opacity = 1;
      }, 2500);
      return {diff: false, days:0, hours: 0, minutes: 0, seconds: 0}
    }
   

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {diff, days, hours, minutes, seconds };
  };


  const [timeLeft, setTimeLeft] = useState(timeUntil(targetDate));

  useEffect(() => {
      let interval;
   
      if (timeUntil(targetDate).diff !== false) {
        interval = setInterval(() => {
          setTimeLeft(timeUntil(targetDate));
        }, 1000); 
      } else {
        clearInterval(interval);
      }
    
   

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);


  return (
    <>
      <div className="timer">
        <h1 className="title">
          Kirill's birthday time left
        </h1>
        <div className="timer_numbers">
          <TimerItem>
            <div className="timer_item-number">
              <p>{timeLeft.days}</p>
            </div>
            <p className="timer_item-description">days</p>
          </TimerItem>
          <TimerItem>
            <div className="timer_item-number">
              <p>{timeLeft.hours}</p>
            </div>
            <p className="timer_item-description">hours</p>
          </TimerItem>
          <TimerItem>
            <div className="timer_item-number">
              <p>{timeLeft.minutes}</p>
            </div>
            <p className="timer_item-description">minutes</p>
          </TimerItem>
          <TimerItem>
            <div className="timer_item-number">
              <p>{timeLeft.seconds}</p>
            </div>
            <p className="timer_item-description">seconds</p>
          </TimerItem>
        </div>
      </div>
    </>
  );
}

export { Timer };
