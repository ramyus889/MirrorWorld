"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const usericon = [
  {
    icon: "/img/Marq1.webp",
  },
  {
    icon: "/img/Marq2.webp",
  },
  {
    icon: "/img/Marq3.webp",
  },
  {
    icon: "/img/Marq4.webp",
  },
  {
    icon: "/img/Marq5.webp",
  },
  {
    icon: "/img/Marq6.webp",
  },
  {
    icon: "/img/Marq7.webp",
  },
  {
    icon: "/img/Marq8.webp",
  },
  {
    icon: "/img/Marq9.webp",
  },
];

export default function Home() {
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
