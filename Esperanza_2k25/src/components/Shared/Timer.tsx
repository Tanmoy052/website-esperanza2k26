"use client";
import { getRemainingTime } from "@/utils/functions/countdown";
import { Sedgwick_Ave_Display } from "next/font/google";
import { useEffect, useState } from "react";

const sedgwick = Sedgwick_Ave_Display({
  weight: "400",
  subsets: ["latin-ext"],
});

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState<string | null>();
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime("2025-04-22T00:00:00"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!remainingTime)
    return (
      <div
        className={`text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-red-800 text-center ${sedgwick.className}`}
      >
        Countdown is Loading
      </div>
    );

  return (
    <div className={`flex justify-center flex-col items-center gap-2 ${sedgwick.className}`}>
        <span>Cant Wait to be the witness of some explosive things </span>
      <h1
        className={`text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-red-600 ${sedgwick.className}`}
      >
        {remainingTime}
      </h1>
    </div>
  );
};

export default Timer;
