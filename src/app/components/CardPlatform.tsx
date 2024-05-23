"use client";

import React from "react";
import Image from "next/image";

import platform from "/public/img/component-152.svg";
import platform2 from "/public/img/component-1521.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const multimage = [
  {
    icon: "/img/eth.webp",
  },
  {
    icon: "/img/matic.webp",
  },
  {
    icon: "/img/bnb.webp",
  },
  {
    icon: "/img/solana.webp",
  },
  {
    icon: "/img/sui.webp",
  },
  {
    icon: "/img/sea.webp",
  },
  {
    icon: "/img/ana.webp",
  },
  {
    icon: "/img/op.webp",
  },
  {
    icon: "/img/oasys.webp",
  },
];
const multimage2 = [
  {
    icon: "/img/ios.webp",
  },
  {
    icon: "/img/android.webp",
  },
  {
    icon: "/img/unity.webp",
  },
  {
    icon: "/img/rust.webp",
  },
  {
    icon: "/img/js.webp",
  },
];

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="mt-[180px]">
      <div className="">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[20px] font-[800] mb-12 px-5 md:text-[25px] lg:text-[36px] text-center"
        >
          Chains and Platforms Support
        </div>
        <div className="flex place-content-center">
          <div className="flex flex-col gap-5">
            <div className="px-5">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="border border-[#ffffff14] bg-[#ffffff0a] rounded-xl px-[2.5rem]"
              >
                <div className="flex justify-center items-center gap-5 border-b py-[1.6rem] border-[#ffffff14] ">
                  <Image
                    data-aos="fade-up"
                    data-aos-delay="200"
                    src={platform}
                    alt="Lamp"
                    width={21}
                    height={21}
                  />
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-[#03bb90] text-lg"
                  >
                    Multiple Blockchains
                  </div>
                </div>
                <div className="flex place-content-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 gap-10 py-[2.5rem]">
                    {multimage.map((item, index) => (
                      <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        key={index}
                        className=""
                      >
                        <Image
                          src={item.icon}
                          alt="Marquee"
                          width={72}
                          height={72}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="border border-[#ffffff14] bg-[#ffffff0a] rounded-xl px-[2.5rem]"
              >
                <div className="flex justify-center items-center gap-5 border-b py-[1.6rem] border-[#ffffff14] ">
                  <Image
                    data-aos="fade-up"
                    data-aos-delay="400"
                    src={platform2}
                    alt="Lamp"
                    width={21}
                    height={21}
                  />
                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="text-[#ceee19] text-lg"
                  >
                    Multiple Platforms
                  </div>
                </div>
                <div className="flex place-content-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 xl:grid-cols-5 gap-14 py-[2.5rem]">
                    {multimage2.map((item, index) => (
                      <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        key={index}
                        className=""
                      >
                        <Image
                          src={item.icon}
                          alt="Marquee"
                          width={72}
                          height={72}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
