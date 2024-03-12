"use client";
import { useState } from "react";

export default function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <div className="inline-block">
      <div className="conatiner mx-[600px] flex gap-[300px] pt-20 ">
        <div className="text-[20px] flex flex-col gap-5">
          <button
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500 hover:shadow-[0px_-76px_0px_0px_#b71117] hover:bg-[#4a59de]"
            onClick={handleReset}
          >
            Reset
          </button>
          <Form key={version} />
        </div>
      </div>
    </div>
  );
}

function Form() {
  const [name, setName] = useState("Taylor");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </>
  );
}
