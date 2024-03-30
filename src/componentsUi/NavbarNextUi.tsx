"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import DropdownNextUi from "./DropdownNextUi";

export default function App() {
  const pathname = usePathname();
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">Frontend</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/" ? "text-red-500 font-bold" : ""
            }`}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/Work" ? "text-red-500 font-bold" : ""
            }`}
            href="/Work"
          >
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ps-5 ${
              pathname === "/client" ? "text-red-500 font-bold" : ""
            }`}
            href="/client"
          >
            Client
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ps-5 ${
              pathname === "/scroll" ? "text-red-500 font-bold" : ""
            }`}
            href="/scroll"
          >
            Scroll
          </Link>
        </NavbarItem>
        <NavbarItem>
          <DropdownNextUi />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
