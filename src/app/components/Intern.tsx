"use client";

import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import useCustomHooks from "../hooks/useCustomHooks";

export default function Home() {
  const { image, image2 } = useCustomHooks();
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="mt-[242px]">
      <div className="">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mb-10 text-[36px] text-center"
        >
          Our Investors
        </div>
        <div className="flex place-content-center">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border-t border-b grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 py-10"
          >
            {image.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                key={index}
                className=""
              >
                <Image src={item.icon} alt="Lamp" width={180} height={80} />
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mb-10 mt-[241px] text-[36px] text-center"
        >
          Partners
        </div>
        <div className="flex place-content-center">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border-t border-b grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-10 py-10"
          >
            {image2.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                key={index}
                className=""
              >
                <Image src={item.icon} alt="Lamp" width={180} height={80} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
