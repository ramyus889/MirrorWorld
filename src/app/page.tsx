"use client";

import React from "react";

import Main from "./components/Main";
import UserMurquee from "./components/UserMurquee";
import CardPlatform from "./components/CardPlatform";
import SmartPlatform from "./components/SmartPlatform";
import Products from "./components/Products";
import Audited from "./components/Audited";
import InvestPatern from "./components/InvestPatern";
import FootMain from "./components/FootMain";
import LiveFoot from "./components/LiveFoot";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Main />
      <UserMurquee />
      <CardPlatform />
      <SmartPlatform />
      <Products />
      <Audited />
      <InvestPatern />
      <FootMain />
      <LiveFoot />
      <Footer/>
    </div>
  );
}
