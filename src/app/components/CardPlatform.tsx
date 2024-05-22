"use client";

import React from "react";
import Image from "next/image";

import platform from "/public/img/component-152.svg";
import platform2 from "/public/img/component-1521.svg";

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
  return (
    <div className="mt-[180px]">
      <div className="">
        <div className="text-[36px] font-[800] mb-12 text-center">
          Chains and Platforms Support
        </div>
        <div className="flex place-content-center">
          <div className="flex flex-col gap-5">
            <div className="border border-[#ffffff14] bg-[#ffffff0a] rounded-xl px-[2.5rem]">
              <div className="flex justify-center items-center gap-5 border-b py-[1.6rem] border-[#ffffff14] ">
                <Image src={platform} alt="Lamp" width={21} height={21} />
                <div className="text-[#03bb90] text-lg">
                  Multiple Blockchains
                </div>
              </div>

              <div className="flex gap-14">
                {multimage.map((item, index) => (
                  <div key={index} className="py-[2.5rem]">
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

            <div className="border border-[#ffffff14] bg-[#ffffff0a] rounded-xl px-[2.5rem]">
              <div className="flex justify-center items-center gap-5 border-b py-[1.6rem] border-[#ffffff14] ">
                <Image src={platform2} alt="Lamp" width={21} height={21} />
                <div className="text-[#ceee19] text-lg">Multiple Platforms</div>
              </div>

              <div className="flex gap-14 place-content-center">
                {multimage2.map((item, index) => (
                  <div key={index} className="py-[2.5rem]">
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
  );
}
