"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="inline-block">
      <div className="conatiner mx-[600px] flex gap-[300px] pt-20 ">
        <div className="text-[20px] flex flex-col gap-5">
          <input
            className="py-2 ps-2 rounded-xl"
            value={text}
            onChange={handleChange}
          />
          <div className="flex items-center gap-5">
            <button
              className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[-70px_42px_0px_0px_#b71117] hover:bg-[#4a59de]"
              onClick={() => setText("hello")}
            >
              Reset
            </button>
            <p>You typed: {text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
