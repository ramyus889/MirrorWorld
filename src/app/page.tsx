"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-20 ms-20">
      <div className="text-[40px] ">
        <div className="">Frontend {count}</div>
        <button onClick={() => setCount((count) => count + 1)}>Click</button>
      </div>
    </div>
  );
}
