"use client";
import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";

import image from "/public/img/logo2.webp";

export default function LampDemo() {
  return (
    <div className="mt-[163px] ">
      <div className="flex place-content-center ">
        <div className="flex items-center ">
          <div className="flex flex-col gap-5 ">
            <div className="text-[2.5rem]  font-[800]">
              Shaping the Future of Web3!
            </div>
            <div className="flex gap-5 mb-5">
              <div className="text-[20px] ">0 Upfront Cost</div>
              <div className="text-[20px] ">Free Web3 Resources</div>
              <div className="text-[20px] ">24/7 Support</div>
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
            <Image src={image} alt="Lamp" width={760} height={482} />
          </div>
        </div>
      </div>
    </div>
  );
}
