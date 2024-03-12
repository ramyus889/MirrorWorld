"use client";

import { useState } from "react";

export default function Home() {
  const [age, setAge] = useState(42);
  const [name, setName] = useState("Taylor");
  const [work, setWork] = useState("Frontend");

  function handleClick() {
    setName("Robin");
    setAge("34");
    setWork("Backend");
  }

  return (
    <div className="text-[20px] flex items-center gap-5">
      <div className="flex flex-col gap-8">
        <button
          onClick={() => setName(name == "Taylor" ? "Robin" : "Taylor")}
          className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[142px_0px_0px_0px_#781156] focus:shadow-[142px_0px_0px_0px_#781156] hover:bg-[#4a59de]"
        >
          Name
        </button>
        <button
          onClick={() => setAge(age == "42" ? "34" : "42")}
          className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[-142px_0px_0px_0px_#781156] focus:shadow-[-142px_0px_0px_0px_#781156]  hover:bg-[#4a59de]"
        >
          Age
        </button>
        <button
          onClick={() => setWork(work == "Frontend" ? "Backend" : "Frontend")}
          className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[142px_0px_0px_0px_#781156] focus:shadow-[142px_0px_0px_0px_#781156]  hover:bg-[#4a59de]"
        >
          Work
        </button>
      </div>
      <div className="flex">
        {name} - {age} -{" "}
        <span
          className={`${
            work == "Frontend" ? "text-green-500" : "text-red-500"
          }  `}
        >
          &nbsp;{work}
        </span>
      </div>
      <Dev />
      <div className="">
        <Framework />
      </div>
    </div>
  );
}

function Dev() {
  const [dev, setDev] = useState("Frontend");
  const [count, setCount] = useState(1);

  function handleDev() {
    setDev("Backend");
    setCount();
  }
  return (
    <div className="ms-10">
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-10">
          <button
            onClick={() => setDev(dev == "Frontend" ? "Backend" : "Frontend")}
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[0px_-80px_0px_0px_#781156] focus:shadow-[0px_-80px_0px_0px_#781156]  hover:bg-[#4a59de]"
          >
            Dev
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[0px_80px_0px_0px_#781156] focus:shadow-[0px_80px_0px_0px_#781156]  hover:bg-[#4a59de]"
          >
            Count
          </button>
        </div>
        <div className="">
          {dev} + {count}
        </div>
      </div>
    </div>
  );
}

function Framework() {
  const [framework, setFramework] = useState("Next.js");

  function handleFramework() {
    setFramework("React.js");
  }
  return (
    <div className="ms-10">
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-10">
          <button
            onClick={() =>
              setFramework(framework == "Next.js" ? "React.js" : "Next.js")
            }
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[0px_-80px_0px_0px_#781156] focus:shadow-[0px_-80px_0px_0px_#781156]  hover:bg-[#4a59de]"
          >
            Framework
          </button>
        </div>
        <div className="">{framework}</div>
      </div>
    </div>
  );
}
