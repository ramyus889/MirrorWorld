"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./magicui/animated-beam";

import React, { forwardRef, useRef } from "react";
import { BiAdjust, BiLogoAndroid } from "react-icons/bi";
import { SiOpenai } from "react-icons/si";
import { FaApple, FaJs, FaRust, FaUnity } from "react-icons/fa";

// eslint-disable-next-line react/display-name
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex place-content-center mt-[200px]">
      <div
        className="relative flex w-full max-w-[700px] items-center justify-center overflow-hidden rounded-lg  bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <FaRust className="h-6 w-6 text-black" />
            </Circle>
            <Circle ref={div5Ref}>
              <FaJs className="h-6 w-6 text-black" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <FaApple className="h-6 w-6 text-black" />
            </Circle>
            <Circle ref={div4Ref} className="h-16 w-16">
              <SiOpenai className="h-8 w-8 text-black" />
            </Circle>
            <Circle ref={div6Ref}>
              <FaUnity className="h-6 w-6 text-black" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <BiLogoAndroid className="h-6 w-6 text-black" />
            </Circle>
            <Circle ref={div7Ref}>
              <BiAdjust className="h-6 w-6 text-black" />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          reverse
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          reverse
          endYOffset={10}
        />
      </div>
    </div>
  );
}
