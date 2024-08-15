export default function MPage() {
  const usericon = [
    {
      icon: "/img/Marq1.webp",
    },
    {
      icon: "/img/Marq2.webp",
    },
    {
      icon: "/img/Marq3.webp",
    },
    {
      icon: "/img/Marq4.webp",
    },
    {
      icon: "/img/Marq5.webp",
    },
    {
      icon: "/img/Marq6.webp",
    },
    {
      icon: "/img/Marq7.webp",
    },
    {
      icon: "/img/Marq8.webp",
    },
    {
      icon: "/img/Marq9.webp",
    },
  ];
  const multimage = [
    {
      icon: "/img/eth.webp",
    },
    {
      icon: "/img/matic.webp",
    },
    {
      icon: "/img/bnb.webp",
    },
    {
      icon: "/img/solana.webp",
    },
    {
      icon: "/img/sui.webp",
    },
    {
      icon: "/img/sea.webp",
    },
    {
      icon: "/img/ana.webp",
    },
    {
      icon: "/img/op.webp",
    },
    {
      icon: "/img/oasys.webp",
    },
  ];
  const multimage2 = [
    {
      icon: "/img/ios.webp",
    },
    {
      icon: "/img/android.webp",
    },
    {
      icon: "/img/unity.webp",
    },
    {
      icon: "/img/rust.webp",
    },
    {
      icon: "/img/js.webp",
    },
  ];
  const cardplatform = [
    {
      textgreen: "3rd",
      textwhite: "On Product Hunt",
      delay: "300",
    },
    {
      textgreen: "140,000+",
      textwhite: "Community Members",
      delay: "400",
    },
    {
      textgreen: "2,000+",
      textwhite: "Projects Built on Smart Platform",
      delay: "500",
    },
    {
      textgreen: "15 min",
      textwhite: "Full Integration Time",
      delay: "600",
    },
  ];
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
  const image = [
    {
      icon: "/img/galaxy.webp",
    },
    {
      icon: "/img/republic-crypto.webp",
    },
    {
      icon: "/img/mirana-ventures.svg",
    },
    {
      icon: "/img/okx-ventures.webp",
    },
    {
      icon: "/img/ivc.webp",
    },
    {
      icon: "/img/alchemy-ventures.svg",
    },
    {
      icon: "/img/sky9-capital.svg",
    },
    {
      icon: "/img/smrti-labs.webp",
    },
    {
      icon: "/img/lucid-blue.svg",
    },
    {
      icon: "/img/Marq7.webp",
    },
  ];
  const image2 = [
    {
      icon: "/img/Property1.webp",
    },
    {
      icon: "/img/solana.svg",
    },
    {
      icon: "/img/Property2.svg",
    },
    {
      icon: "/img/Property3.svg",
    },
    {
      icon: "/img/Property4.svg",
    },
    {
      icon: "/img/Property5.svg",
    },
    {
      icon: "/img/Property6.svg",
    },
    {
      icon: "/img/Property7.svg",
    },
    {
      icon: "/img/Property8.webp",
    },
    {
      icon: "/img/Property9.svg",
    },
  ];
  return {
    tabs,
    image,
    image2,
    usericon,
    multimage,
    multimage2,
    cardplatform,
  };
}
