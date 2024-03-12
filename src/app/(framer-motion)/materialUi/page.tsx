"use client";

import Image from "next/image";

import profilePic8 from "/public/img/Untitled1.png";
import profilePic27 from "/public/img/Untitled2.png";
import profilePic58 from "/public/img/Untitled3.png";
import profilePic12 from "/public/img/Untitled4.png";

export default function Home() {
  const menuItems = [
    { title: "Home", color: "#1f5383" },
    { title: "Team", color: "#0f8580" },
    { title: "Projects", color: "#ea065a" },
    { title: "Reports", color: "#439025" },
  ];
  const navMenuItems = [
    {
      title: "Home",
      color: "#1f5383",
      colorItem2: "#1071e8",
      colorItem3: "#432f52",
      count: "Bosnia & Herzegovina",
      name: "Horton",
      url: "/",
    },
    {
      title: "Team",
      color: "#0f8580",
      colorItem2: "#79fb90",
      colorItem3: "#152f47",
      count: "Libya",
      name: "Medina",
      url: "/client",
    },
    {
      title: "Projects",
      color: "#ea065a",
      colorItem2: "#6da0df",
      colorItem3: "#491cf0",
      count: "Antarctica",
      name: "Ferguson",
      url: "/scroll",
    },
    {
      title: "Reports",
      color: "#439025",
      colorItem2: "#8c1982",
      colorItem3: "#2bb0d3",
      count: "Cape Verde",
      name: "Murphy",
      url: "/MotionUser",
    },
  ];
  return (
    <div className="">
      <div className=" container mt-60 flex mb-52 mx-[500px]">
        <div className="inline-block *:mb-5">
          <div className="flex gap-40 mb-5">
            <div className="[&_p]:text-red-500 [&_div]:text-green-500 [&_a]:text-indigo-500">
              <div className="">
                <div className="">Iraq</div>
                <a href="#">Maldives</a>
                <p className="">Lopez</p>
                <a href="#">Christensen</a>
                <div className="">Pauline Hodges</div>
                <a href="#">Franklin Henry</a>
                <p className="">tofduwi@hu.mt</p>
              </div>
            </div>
            <ul className="">
              {menuItems.map(({ title, color }) => (
                <li style={{ color: color }} key={title}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <nav className="flex sm:justify-center space-x-4">
              {navMenuItems.map(
                ({
                  title,
                  count,
                  name,
                  color,
                  colorItem2,
                  colorItem3,
                  url,
                }) => (
                  <a
                    href={url}
                    key={url}
                    style={{ color: color }}
                    className="rounded-lg px-3 py-2 flex flex-col odd:bg-slate-800  gap-3  hover:text-violet-700 font-medium hover:bg-slate-700 transition duration-500 "
                  >
                    {title}
                    <div
                      style={{ color: colorItem2 }}
                      className="hover:text-orange-500 transition duration-500"
                    >
                      {count}
                    </div>
                    <div
                      style={{ color: colorItem3 }}
                      className=" hover:text-red-500 transition duration-500"
                    >
                      {name}
                    </div>
                  </a>
                )
              )}
            </nav>
          </div>
          <div className="flex flex-col gap-5 pt-5">
            <div className="underline"> Frontend </div>
            <div className="underline"> Backend </div>
            <div className="underline"> Fullstack </div>
            <div className="underline"> UI Components </div>
          </div>
        </div>
      </div>
    </div>
  );
}
