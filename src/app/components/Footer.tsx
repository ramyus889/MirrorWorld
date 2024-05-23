"use client";

import React from "react";
import Image from "next/image";

import logo from "/public/img/rectangle.webp";
import { Button, Input } from "@nextui-org/react";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="">
      <div className="">
        <footer className="flex flex-col lg:flex-row gap-10 lg:justify-between py-[72px] xl:px-[120px] sm:px-[40px] px-[20px] bg-[#ffffff0a] mt-[250px] border-b">
          <div className="flex gap-5">
            <div className="">
              <Image
                src={logo}
                alt="Lamp"
                width={120}
                height={120}
                className="rounded-xl max-[700px]:hidden"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[1.3rem] text-[#ddff1a] font-bold">
                STAY UP TO DATE
              </div>
              <div className="text-[0.97rem]">
                Sign up to keep track of all things about Mirror World!
              </div>
              <div className="flex gap-3">
                <Input placeholder="Enter your email" type="email" />
                <Button
                  radius="sm"
                  className="bg-[#ddff1a] text-black font-bold"
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-[50px] sm:gap-[100px] lg:gap-[40px] xl:gap-[100px] text-slate-400">
              <div className="flex flex-col gap-3 ">
                <div className="text-white">Developer</div>
                <div className="">Blog</div>
                <div className="">Twitter</div>
                <div className="">Discord</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-white">Web</div>
                <div className="">Telegram</div>
                <div className="">Dashboard</div>
                <div className="">Home</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-white">Player</div>
                <div className="">Blog</div>
                <div className="">Twitter</div>
                <div className="">Discord</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <footer className="flex flex-col sm:flex-row gap-5 sm:justify-between py-[35px] xl:px-[120px] px-[60px] bg-[#ffffff0a] ">
        <div className="text-slate-400 text-center sm:text-start hover:text-[#ddff1a] transition duration-500">
          Copyright © 2023 Mirror World. All rights reserved
        </div>
        <div className="flex place-content-center gap-4">
          <AiOutlineTwitter size={26} />
          <BsDiscord size={26} />
          <BsTelegram size={26} />
        </div>
      </footer>
    </div>
  );
}
