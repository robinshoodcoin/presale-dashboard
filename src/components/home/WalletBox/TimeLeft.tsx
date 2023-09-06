// import { useEffect, useState } from "react";
// import { calculateTimeLeft } from "@/utils";

const TimeLeft = ({ timeLeft }: { timeLeft: any }) => {
  // const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft(date));

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft(date));
  //   }, 1000);

  //   return () => {
  //     clearTimeout(id);
  //   };
  // });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    // if (!timeLeft[interval]) {
    //   return;
    // }

    return (
      <div
        className="rounded-lg w-1/5 text-lg bg-white text-black min-w-[60px] sm:min-w-[80px] py-2 px-[5px] text-center"
        key={interval}
      >
        {timeLeft[interval]}
        {interval.substring(0, 1)}
      </div>
    );
  });

  return (
    <div className="flex items-center justify-between gap-3 font-semibold text-[20px] mb-3">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <>
          <div className="rounded-lg w-1/5 text-lg bg-white text-black min-w-[60px] sm:min-w-[80px] py-2 px-[5px] text-center">
            0d
          </div>
          <div className="rounded-lg w-1/5 text-lg bg-white text-black min-w-[60px] sm:min-w-[80px] py-2 px-[5px] text-center">
            0h
          </div>
          <div className="rounded-lg w-1/5 text-lg bg-white text-black min-w-[60px] sm:min-w-[80px] py-2 px-[5px] text-center">
            0m
          </div>
          <div className="rounded-lg w-1/5 text-lg bg-white text-black min-w-[60px] sm:min-w-[80px] py-2 px-[5px] text-center">
            0s
          </div>
        </>
      )}
    </div>
  );
};

export default TimeLeft;
