"use client";

import React from "react";

import Image from "next/image";
import logo from "/public/img/frame.webp";
import { BiArrowToRight } from "react-icons/bi";

export default function Home() {
  return (
    <div className="flex  place-content-center mt-[241px] ">
      <div className="flex justify-between items-center w-[70rem]">
        <div className="text-[36px]">Audited by</div>
        <div className="flex justify-between bg-[#ffffff0a] py-[40px] px-[3.3rem] w-full max-w-[46rem] rounded-[1.3rem]">
          <Image src={logo} alt="Lamp" width={124} height={30} />
          <BiArrowToRight size={30} />
        </div>
      </div>
    </div>
  );
}
