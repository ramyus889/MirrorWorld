"use client";

import React from "react";

import Image from "next/image";
import logo from "/public/img/jump.webp";
import { Button } from "@nextui-org/react";

import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsAndroid } from "react-icons/bs";

export default function Home() {
  return (
    <div className="mt-[200px]">
      <div className="flex place-content-center">
        <div className="">
          <div className="text-[2.5rem] text-center mb-14">Live Demo</div>
          <div className="flex gap-2">
            <div className="flex flex-col">
              <Image src={logo} alt="Lamp" width={640} height={315} />
              <div className="bg-gradient-to-b from-[#00033300]  to-[#000333] p-[2.5rem] max-w-[640px] w-full">
                Mirrors Jump fully utilizes the Mirror World Smart SDK including
                Smart Auth, Smart Wallet and Smart Marketplace. All solutions
                can be integrated within 15 minutes.{" "}
                <div className="pt-5">
                  To make it easier for developers to test features or to
                  co-create, Mirror World offers a Devnet version and
                  open-sources the game code on GitHub.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4 bg-[#ffffff0a] py-[90.5px] ps-[39px] pe-[37px]">
                <div className="text-[#ddff1a] text-[1.6rem]">
                  Developer Version
                </div>
                <div className="flex gap-5">
                  <Button
                    startContent={<BsAndroid size={20} />}
                    className="text-[0.97rem] bg-white text-black"
                  >
                    Android
                  </Button>
                  <Button
                    startContent={<AiFillGithub size={20} />}
                    className="text-[0.97rem] bg-white text-black"
                  >
                    Github
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-[#ffffff0a] py-[90.5px] ps-[39px] pe-[37px]">
                <div className="text-[#ddff1a] text-[1.6rem]">
                  Player Version
                </div>
                <div className="flex gap-5">
                  <Button
                    startContent={<BsGooglePlay size={20} />}
                    className="text-[0.97rem] bg-white text-black"
                  >
                    Google Play
                  </Button>
                  <Button
                    startContent={<BsAndroid size={20} />}
                    className="text-[0.97rem] bg-white text-black"
                  >
                    Android
                  </Button>
                  <Button
                    startContent={<AiFillApple size={20} />}
                    className="text-[0.97rem] bg-white text-black"
                  >
                    Apple
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
