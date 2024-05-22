"use client";
import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";

import image from "/public/img/welcomeBk1.webp";

export default function LampDemo() {
  return (
    <div className="mt-[163px] ">
      <div className="flex place-content-center ">
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-5 ">
            <div className="text-[64px]  font-[800]">Be Smart, Make More</div>
            <div className="text-[20px] mb-5">
              Frictionless development with NFT Marketplace, Fiat-to-NFT, Crypto{" "}
              <br />
              On-Ramp , Auth and Wallet
            </div>
            <div className="flex gap-5">
              <Button size="lg" className=" text-black bg-[#ddff1a]">
                Get Started
              </Button>
              <Button
                size="lg"
                className="border border-[#ddff1a] text-[#ddff1a]   bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="">
            <Image src={image} alt="Lamp" width={500} height={477} />
          </div>
        </div>
      </div>
    </div>
  );
}
