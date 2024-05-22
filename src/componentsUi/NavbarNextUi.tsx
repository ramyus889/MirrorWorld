"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

import Image from "next/image";
import logo from "/public/img/logo.svg";
import logoB from "/public/img/tab-bar-icon.svg";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={logo} alt="Acme Logo" width={150} height={28} />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/"
                ? "dark:text-white font-bold"
                : "dark:text-slate-400 text-black"
            }`}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/About"
                ? "text-white font-bold"
                : "dark:text-slate-400 text-black"
            }`}
            href="/About"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ps-5 ${
              pathname === "/Resource"
                ? "text-white font-bold"
                : "dark:text-slate-400 text-black"
            }`}
            href="/Resource"
          >
            Resource
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ps-5 ${
              pathname === "/Pricing"
                ? "text-white font-bold"
                : "dark:text-slate-400 text-black"
            }`}
            href="/Pricing"
          >
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex items-center gap-5">
          <Image src={logoB} alt="Acme Logo" width={32} height={32} />
          <AiOutlineTwitter size={26} />
          <BsDiscord size={26} />
          <Button
            size="md"
            className="border border-[#ddff1a] text-[#ddff1a]  px-[12px] bg-transparent"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
