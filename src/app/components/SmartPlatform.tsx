"use client";

import React from "react";

const cardplatform = [
  {
    textgreen: "3rd",
    textwhite: "On Product Hunt",
  },
  {
    textgreen: "140,000+",
    textwhite: "Community Members",
  },
  {
    textgreen: "2,000+",
    textwhite: "Projects Built on Smart Platform",
  },
  {
    textgreen: "15 min",
    textwhite: "Full Integration Time",
  },
];

export default function Home() {
  return (
    <div className="mt-[242px]">
      <div className="flex place-content-center">
        <div className="flex items-center gap-10">
          <div className="max-w-[31rem] w-full flex flex-col gap-[1.6rem]">
            <div className="text-[2.5rem] font-[600]">
              Smart Platform by Mirror World
            </div>
            <div className="text-[1.5rem] text-[#ffffff7a]">
              The first all-in-one application development platform that helps
              developers deploy, grow and monetize their blockchain applications
            </div>
          </div>
          <div className="flex flex-col gap-5 w-[45rem]">
            {cardplatform.map((item, index) => (
              <div key={index} className=" w-full">
                <div className="flex justify-between items-center px-[3.3rem] py-[2.5rem]  rounded-[1.3rem] bg-[#ffffff0a]">
                  <div className="text-[2rem] text-[#00ffc2] ">
                    {item.textgreen}
                  </div>
                  <div className="text-[1.25rem]">{item.textwhite}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
