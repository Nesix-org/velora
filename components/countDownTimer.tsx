"use client";

import { useEffect, useState } from "react";

type CountDownProps = {
  targetDate: string | Date;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: string | Date): TimeLeft => {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  let timeLeftTimer: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeftTimer = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeftTimer;
};
export default function CountDownTimer({ targetDate }: CountDownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div className="md:w-md flex md:gap-5 gap-2 items-center justify-center">
      <div className="flex flex-col gap-1 md:gap-2">
        <span className="md:text-xl"> Days </span>
        {timeLeft.days > 0 && (
          <span className="text-xl md:text-4xl font-bold"> {timeLeft.days}</span>
        )}
      </div>
       <span className="text-3xl md:text-4xl font-bold text-bgLemon translate-y-1 md:translate-y-2">:</span>
     <div className="flex flex-col gap-1 md:gap-2">
       <span className="md:text-xl"> Hours </span>
        <span className="text-xl md:text-4xl font-bold">
          {timeLeft.hours.toString().padStart(2, "0")}
        </span>
      </div>
  <span className="text-3xl md:text-4xl font-bold text-bgLemon translate-y-1 md:translate-y-2">:</span>
  <div className="flex flex-col gap-1 md:gap-2">
       <span className="md:text-xl"> Minutes </span>
        <span className="text-xl md:text-4xl font-bold">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </span>
      </div>
  <span className="text-3xl md:text-4xl font-bold text-bgLemon translate-y-1 md:translate-y-2">:</span>
      <div className="flex flex-col gap-1 md:gap-2">
        <span className="md:text-xl"> Seconds </span>
        <span className="text-xl md:text-4xl font-bold">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
