"use client";

import React from "react";
import OrbitingCircles from "./magicui/orbiting-circles";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
export default function OrbitingCirclesDemo() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="lg:flex hidden place-content-center mt-[200px]">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl"
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Mirror
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
         <SiTypescript />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
           <SiTailwindcss />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          reverse
          radius={190}
          duration={20}
        >
          <TbBrandNextjs size={30} />
         
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          reverse
          radius={190}
          duration={20}
          delay={20}
        >
           <FaReact size={30} />
          
        </OrbitingCircles>
      </div>
    </div>
  );
}
