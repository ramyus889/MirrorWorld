"use client";

import AnimBeam from "./components/AnimBeam";
import Audited from "./components/Audited";
import CardPlatform from "./components/CardPlatform";
import Footer from "./components/Footer";
import FootMain from "./components/FootMain";
import Intern from "./components/Intern";
import LiveFoot from "./components/LiveFoot";
import MagicOrbit from "./components/MagicOrbit";
import Main from "./components/Main";
import Products from "./components/Products";
import SmartPlatform from "./components/SmartPlatform";
import UserMurquee from "./components/UserMurquee";

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
