import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function App() {
  let tabs = [
    {
      id: "marketplace",
      label: "Marketplace",
      image: "/img/marketplaceGif1.gif",
      width: 194,
      height: 419,
      video: "/img/marketplace.mov",
      title: "Smart Marketplace",
      text: "Smart Marketplace allows developers to quickly setup an in-app marketplace across multiple platforms & multi-chain, go beyond existing walled gardens of App Store and Google Play",
      list: [
        "iOS & Android Compatible",
        "One-Click Deployment of Multi-Chain Marketplace",
        "Support for Minting API & Payment",
        "Configurable Storefront for Developers",
      ],
    },
    {
      id: "fiat-to-nft",
      label: "Fiat-to-NFT",
      video: "/img/fiat-to-nft.mp4",
      width: 435,
      height: 245,
      title: "Smart Fiat-to-NFT",
      text: "Smart Fiat-to-NFT enables users to directly purchase NFTs using fiat currency, simplifying the user journey and increasing the conversion rate of NFT asset purchases",
      list: [
        "Support for Credit Card and Varies of Payment Method",
        "Fully-Featured UI/UX Widget",
        "Comprehensive API Simplifying Development Processes",
        "Seamlessly Compatible with Diverse Smart Contracts",
      ],
    },
    {
      id: "on-ramp aggregator",
      label: "On-Ramp Aggregator",
      video: "/img/on-ramp.mp4",
      width: 194,
      height: 419,
      title: "Smart On-Ramp Aggregator",
      text: "Smart On-Ramp Aggregator consolidates top on-ramp services, ensuring lowest fee rates and highest purchase success rate",
      list: [
        "Supporting Global Payment Methods Across 150+ Countries",
        "50+ Local Payment Methods in 30+ Asia Pacific Countries",
        "Game & App Friendly UI/UX Widget",
        "Rich, Simple API for Effortless Integration",
      ],
    },
    {
      id: "nft managment",
      label: "NFT Managment",
      video: "/img/management.mov",
      width: 435,
      height: 245,
      title: "Smart NFT Management",
      text: "Smart NFT Management helps developers manage NFTs with ease, including creating collections, minting NFTs, fetching information, querying existing NFTs and more",
      list: [
        "Powerful NFT Management APIs",
        "Support for All Categories of Applications",
      ],
    },
    {
      id: "auth",
      label: "Auth",
      video: "/img/auth.mp4",
      width: 194,
      height: 419,
      title: "Smart Auth",
      text: "Smart Auth enables free, seamless, one-click authentication - onboarding million of Web3 users with fraction of the cost",
      list: [
        "Free to Get Started",
        "All Mainstream Social Auth Methods",
        "Supporting Your Login Providers",
        "Complete UI/UX Widget Solution",
      ],
    },
    {
      id: "wallet",
      label: "Wallet",
      video: "/img/wallet-demo.mp4",
      width: 194,
      height: 419,
      title: "Smart Wallet",
      text: "Smart Wallet enables one-click payment integration for developers, solves the issue of geographic coverage",
      list: [
        "Robust API And SDK Tailored For Your Development Needs",
        "Multi-Chain Support and Gasless Transaction Solutions",
        "Embedded Wallet for Web2 Users",
        "Configurable UI/UX for Better User Experience",
      ],
    },
  ];

  return (
    <div className="flex place-content-center mt-[200px]">
      <div className="flex  flex-col">
      <div className="text-center">
        <div className="text-[36px] mb-5">Products</div>
        <div className="text-[18px] text-slate-500 mb-10">
          Integrate under 15 minutes, support multi-chain right within your app
        </div>
      </div>
        <Card className="rounded-[20px]">
          <Tabs
            size="lg"
            aria-label="Options"
            items={tabs}
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                " w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-[#00ffc2]",
              tab: "max-w-fit py-[35px] ",
              tabContent: "group-data-[selected=true]:text-[#00ffc2]",
            }}
          >
            {(item) => (
              <Tab
                key={item.id}
                title={
                  <div className="text-[1.18rem] px-[30px] ">{item.label}</div>
                }
              >
                <CardBody className="px-[64px] py-[24px]">
                  <div className="flex gap-10 items-center justify-between">
                    <div className="">
                      <div className="flex flex-col gap-8">
                        <div className="text-[30px] text-[#ddff1a] font-bold">
                          {item.title}
                        </div>
                        <div className="w-[40rem] border-b border-[#ffffff29] text-[#ffffff7a] pb-[33px] text-[1.11rem]">
                          {item.text}
                        </div>
                      </div>

                      <ul className="list-disc mt-[32px] flex flex-col gap-5">
                        {item.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <video
                        autoPlay
                        loop
                        width={item.width}
                        height={item.height}
                        className="rounded-xl"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </CardBody>
              </Tab>
            )}
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
