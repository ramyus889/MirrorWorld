"use client";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="inline-block">
      <div className="conatiner mx-[600px] flex gap-[300px] pt-20 ">
        <div className="text-[20px] flex flex-col gap-5">
          <button
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500  hover:bg-[#4a59de]"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500  hover:bg-[#4a59de]"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <CountLabel count={count} />
        </div>
      </div>
    </div>
  );
}

function CountLabel({ count }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count < 1 ? "decreasing" : "increasing");
  }
  return (
    <>
      <h1
        className={` py-2 px-3 bg-slate-700 rounded-xl ${
          count < 1 ? "text-red-500" : "text-green-500"
        }${count === 0 ? "text-yellow-500" : ""}`}
      >
        {count}
      </h1>
      {trend && (
        <p className="py-2 px-3 bg-slate-700 rounded-xl">
          The count is{" "}
          <span
            className={
              trend === "increasing" ? "text-green-500" : "text-red-500"
            }
          >
            {trend}
          </span>
        </p>
      )}
    </>
  );
}
