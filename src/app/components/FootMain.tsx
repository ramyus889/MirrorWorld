"use client";
import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";

import image from "/public/img/logo2.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LampDemo() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="mt-[163px] ">
      <div className="flex place-content-center px-10">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center ">
          <div className="flex flex-col gap-5 ">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-[1.5rem] xl:text-[2.5rem] lg:text-start text-center font-[800]"
            >
              Shaping the Future of Web3!
            </div>
            <div className="flex gap-5 mb-5 flex-wrap place-content-center lg:place-content-start">
              <div
                data-aos="fade-right"
                data-aos-delay="400"
                className="text-[20px] "
              >
                0 Upfront Cost
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-[20px] "
              >
                Free Web3 Resources
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-[20px] "
              >
                24/7 Support
              </div>
            </div>
            <div className="flex place-content-center lg:place-content-start gap-5">
              <Button
                data-aos="fade-right"
                data-aos-delay="500"
                size="lg"
                className=" text-black bg-[#ddff1a]"
              >
                Get Started
              </Button>
              <Button
                data-aos="fade-left"
                data-aos-delay="600"
                size="lg"
                className="border border-[#ddff1a] text-[#ddff1a]   bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="">
            <Image
              data-aos="fade-up"
              data-aos-delay="200"
              src={image}
              alt="Lamp"
              width={760}
              height={482}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
