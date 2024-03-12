"use client";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);
  const [dev, setDev] = useState("Frontend");

  return (
    <div className="inline-block">
      <div className="conatiner mx-[600px] flex gap-[300px] pt-20 ">
        <div className="text-[20px] flex flex-col gap-5">
          <input
            className="py-2 ps-2 rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>
            Hello, {name} - {dev}. You are {age}.
          </p>
          <button
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[-250px_0px_100px_0px_#b71117] hover:bg-[#4a59de]"
            onClick={() => setAge(age + 1)}
          >
            Increment age + 1
          </button>
          <button
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[-250px_0px_100px_0px_#b71117] hover:bg-[#4a59de]"
            onClick={() => setAge(age - 1)}
          >
            Increment age - 1
          </button>
          <button
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[-250px_0px_100px_0px_#b71117] hover:bg-[#4a59de]"
            onClick={() => setAge(age * 2)}
          >
            Increment age * 2
          </button>
          <button
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[-250px_0px_100px_0px_#b71117] hover:bg-[#4a59de]"
            onClick={() => setAge(age / 2)}
          >
            Increment age / 2
          </button>
        </div>
      </div>
    </div>
  );
}
