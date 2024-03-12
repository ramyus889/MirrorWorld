"use client";

import { SiApple } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

export default function Home() {
  return (
    <div className="">
      <div className="inline-block">
        <div className="conatiner text-[20px] mx-[700px] flex flex-col gap-[100px] pt-20 mb-20 ">
          <div className="flex gap-3 items-center">
            <SiApple className="text-[30px]" />
            Frontend
            <DiGithubBadge className="text-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
