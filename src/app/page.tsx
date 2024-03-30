"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="">
      <div className="inline-block">
        <div className="conatiner text-[20px] mx-[700px] flex flex-col gap-[100px] pt-20 mb-20">
          <div data-aos="zoom-out-down" className="my-[1000px]">
            Next.js
          </div>
        </div>
      </div>
    </div>
  );
}
