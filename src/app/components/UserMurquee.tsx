"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import useCustomHooks from "../hooks/useCustomHooks";

export default function Home() {
  const { usericon } = useCustomHooks();
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="mt-[200px]">
      <div className="">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[20px] font-[800] mb-10 px-5 text-[#6c6c6c] text-center"
        >
          Fueling the Future of Web3 Gaming
        </div>
        <Marquee data-aos="fade-up" data-aos-delay="200">
          {usericon.map((item, index) => (
            <div key={index} className="">
              <Image src={item.icon} alt="Marquee" width={180} height={81} />
            </div>
          ))}
          {usericon.map((item, index) => (
            <div key={index} className="">
              <Image src={item.icon} alt="Marquee" width={180} height={81} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
