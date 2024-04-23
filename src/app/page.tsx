"use client";

import Head from "./components/Head";
import History from "./components/History";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex place-content-center font-['Inter']">
      <div className="w-[400px] mt-20 px-3">
        <Head />
        <History />
        <Footer />
      </div>
    </div>
  );
}
