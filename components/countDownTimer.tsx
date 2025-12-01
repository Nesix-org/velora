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

const calculateTimeLeft = (targetTimeStamp: number): TimeLeft => {
  const difference = targetTimeStamp - new Date().getTime();

  let durationLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    durationLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return durationLeft;
};
export default function CountDownTimer({ targetDate }: CountDownProps) {
  const targetTimeStamp = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetTimeStamp)
  );
  const [saleEnded, setSaleEnded] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft(targetTimeStamp);
      setTimeLeft(remaining);

      // Clear interval when countdown reaches zero
      if (
        remaining.days === 0 &&
        remaining.hours === 0 &&
        remaining.minutes === 0 &&
        remaining.seconds === 0
      ) {
        clearInterval(timer);
        setSaleEnded(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimeStamp]);
  return (
    <div
      role="timer"
      aria-live="polite"
      aria-label="Flash sale countdown timer"
      className="md:w-md flex md:gap-5 gap-2 items-center justify-center"
    >
      {saleEnded ? (
        <p> Flash Sale is over </p>
      ) : (
        <>
          {timeLeft.days > 0 && (
            <>
              <div className="flex flex-col gap-1 md:gap-2">
                <span className="md:text-xl"> Days </span>
                <span className="text-xl md:text-4xl font-bold">
                  {timeLeft.days.toString().padStart(2, "0")}
                </span>
              </div>
              <span
                aria-hidden="true"
                className="text-3xl md:text-4xl font-bold text-bgLemon translate-y-1 md:translate-y-2"
              >
                :
              </span>
            </>
          )}

          <div className="flex flex-col gap-1 md:gap-2">
            <span className="md:text-xl"> Hours </span>
            <span className="text-xl md:text-4xl font-bold">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="text-3xl md:text-4xl font-bold text-bgLemon translate-y-1 md:translate-y-2"
          >
            :
          </span>
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="md:text-xl"> Minutes </span>
            <span className="text-xl md:text-4xl font-bold">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="text-3xl md:text-4xl font-bold text-bgLemon translate-y-1 md:translate-y-2"
          >
            :
          </span>
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="md:text-xl"> Seconds </span>
            <span className="text-xl md:text-4xl font-bold">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
