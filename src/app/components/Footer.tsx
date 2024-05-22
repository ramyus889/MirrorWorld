"use client";

import React from "react";
import Image from "next/image";

import logo from "/public/img/rectangle.webp";
import { Button, Input } from "@nextui-org/react";
import logoB from "/public/img/tab-bar-icon.svg";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Home() {
  return (
    <div className="">
      <footer className="flex justify-between py-[72px] px-[120px] bg-[#ffffff0a] mt-[150px] border-b">
        <div className="flex gap-5">
          <div className="">
            <Image
              src={logo}
              alt="Lamp"
              width={120}
              height={120}
              className="rounded-xl"
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
              <Button radius="sm" className="bg-[#ddff1a] text-black font-bold">
                Join Now
              </Button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-32 text-slate-400">
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
      <footer className="flex justify-between py-[35px] px-[120px] bg-[#ffffff0a] ">
        <div className="text-slate-400 hover:text-[#ddff1a] transition duration-500">
          Copyright © 2023 Mirror World. All rights reserved
        </div>
        <div className="flex gap-4">
          <AiOutlineTwitter size={26} />
          <BsDiscord size={26} />
          <Image src={logoB} alt="Acme Logo" width={32} height={32} />
        </div>
      </footer>
    </div>
  );
}
