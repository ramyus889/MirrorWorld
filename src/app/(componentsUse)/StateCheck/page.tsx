"use client";
import { useState } from "react";

export default function MyCheckbox() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <div className="inline-block">
      <div className="conatiner mx-[600px] flex gap-[300px] pt-20">
        <div className="text-[20px] flex flex-col gap-5">
          <button
            className="bg-[#46779c] py-5 px-10 rounded-xl font-bold transition duration-500  hover:bg-[#4a59de]"
            onClick={handleReset}
          >
            Reset
          </button>
          <InputLabel key={version} />
        </div>
      </div>
    </div>
  );
}

function InputLabel() {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <label>
        <input
          className="bg-[#46779c] text-[20px] rounded-xl font-bold transition duration-500 hover:shadow-[-10px_-10px_0px_0px_#b71117,-10px_10px_0px_0px_#b71117] "
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        I liked this
      </label>
      <p>
        You{"  "}
        <span className={liked ? "text-green-500" : "text-red-500"}>
          {liked ? "liked" : "did not like"}
        </span>{" "}
        this.{" "}
        <span className={liked ? "" : "text-red-500"}>
          {liked ? "" : "Error..."}
        </span>
      </p>
    </>
  );
}
