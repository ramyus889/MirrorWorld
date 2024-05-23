"use client";

import React from "react";

import Image from "next/image";
import logo from "/public/img/frame.webp";
import { BiArrowToRight } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="flex  place-content-center mt-[241px] px-5 ">
      <div className="flex flex-col gap-5 justify-center lg:flex-row lg:justify-between items-center w-[70rem]">
        <div data-aos="fade-right" data-aos-delay="100" className="text-[36px]">
          Audited by
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="flex justify-between bg-[#ffffff0a] py-[40px] px-[3.3rem] w-full max-w-[46rem] rounded-[1.3rem]"
        >
          <Image src={logo} alt="Lamp" width={124} height={30} />
          <BiArrowToRight size={30} />
        </div>
      </div>
    </div>
  );
}
