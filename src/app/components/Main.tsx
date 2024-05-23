"use client";
import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import image from "/public/img/welcomeBk1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LampDemo() {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="lg:mt-[163px] mt-[50px] ">
      <div className="flex place-content-center ">
        <div className="flex flex-col lg:flex-row items-center gap-5 px-5">
          <div className="flex flex-col gap-5 ">
            <div
              data-aos="fade-right"
              className="text-[30px] text-center lg:text-start xl:text-[64px] sm:text-[40px] font-[800]"
            >
              Be Smart, Make More
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-[20px] mb-5 text-center lg:text-start lg:max-w-[700px] max-w-[500px] w-full"
            >
              Frictionless development with NFT Marketplace, Fiat-to-NFT, Crypto{" "}
              On-Ramp , Auth and Wallet
            </div>
            <div className="flex gap-5 place-content-center lg:place-content-start">
              <Button
                data-aos="fade-up"
                data-aos-delay="200"
                size="lg"
                className=" text-black bg-[#ddff1a]"
              >
                Get Started
              </Button>
              <Button
                data-aos="fade-up"
                data-aos-delay="300"
                size="lg"
                className="border border-[#ddff1a] text-[#ddff1a]   bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="">
            <Image
              data-aos="fade-left"
              data-aos-delay="500"
              src={image}
              alt="Lamp"
              width={500}
              height={477}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
