"use client";

import React from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = React.useState(
    new Date().toLocaleTimeString()
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      key={currentTime}
      suppressHydrationWarning={true}
      className="px-3 py-2 rounded-xl border border-slate-500"
    >
      {currentTime}
    </div>
  );
}
