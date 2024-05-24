"use client";

import React from "react";

import Main from "./components/Main";
import UserMurquee from "./components/UserMurquee";
import AnimBeam from "./components/AnimBeam";
import CardPlatform from "./components/CardPlatform";
import SmartPlatform from "./components/SmartPlatform";
import Products from "./components/Products";
import Audited from "./components/Audited";
import Intern from "./components/Intern";
import MagicOrbit from "./components/MagicOrbit";
import FootMain from "./components/FootMain";
import LiveFoot from "./components/LiveFoot";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Main />
      <UserMurquee />
      <AnimBeam />
      <CardPlatform />
      <SmartPlatform />
      <Products />
      <Audited />
      <Intern />
      <MagicOrbit />
      <FootMain />
      <LiveFoot />
      <Footer />
    </div>
  );
}
