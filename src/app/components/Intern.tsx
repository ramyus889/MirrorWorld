"use client";

import React from "react";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const image = [
  {
    icon: "/img/galaxy.webp",
  },
  {
    icon: "/img/republic-crypto.webp",
  },
  {
    icon: "/img/mirana-ventures.svg",
  },
  {
    icon: "/img/okx-ventures.webp",
  },
  {
    icon: "/img/ivc.webp",
  },
  {
    icon: "/img/alchemy-ventures.svg",
  },
  {
    icon: "/img/sky9-capital.svg",
  },
  {
    icon: "/img/smrti-labs.webp",
  },
  {
    icon: "/img/lucid-blue.svg",
  },
  {
    icon: "/img/Marq7.webp",
  },
];
const image2 = [
  {
    icon: "/img/Property1.webp",
  },
  {
    icon: "/img/solana.svg",
  },
  {
    icon: "/img/Property2.svg",
  },
  {
    icon: "/img/Property3.svg",
  },
  {
    icon: "/img/Property4.svg",
  },
  {
    icon: "/img/Property5.svg",
  },
  {
    icon: "/img/Property6.svg",
  },
  {
    icon: "/img/Property7.svg",
  },
  {
    icon: "/img/Property8.webp",
  },
  {
    icon: "/img/Property9.svg",
  },
];

export default function Home() {
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
