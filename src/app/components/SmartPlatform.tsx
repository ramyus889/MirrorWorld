"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import useCustomHooks from "../hooks/useCustomHooks";

export default function Home() {
  const { cardplatform } = useCustomHooks();
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="mt-[242px]">
      <div className="flex place-content-center">
        <div className="flex flex-col xl:flex-row items-center gap-10 px-5">
          <div className="max-w-[31rem] w-full flex flex-col gap-[1.6rem]">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-[2.5rem] text-center xl:text-start font-[600]"
            >
              Smart Platform by Mirror World
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-[1.5rem] text-center xl:text-start text-[#ffffff7a]"
            >
              The first all-in-one application development platform that helps
              developers deploy, grow and monetize their blockchain applications
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            {cardplatform.map((item, index) => (
              <div
                data-aos="fade-left"
                data-aos-delay={item.delay}
                key={index}
                className="md:w-[45rem] sm:w-[35rem] w-[20rem]"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center px-[3.3rem] py-[2.5rem] rounded-[1.3rem] bg-[#ffffff0a]">
                  <div className="text-[2rem] text-[#00ffc2] ">
                    {item.textgreen}
                  </div>
                  <div className="text-[1.25rem] text-center sm:text-end">
                    {item.textwhite}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
