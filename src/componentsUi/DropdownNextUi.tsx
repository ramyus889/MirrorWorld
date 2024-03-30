"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function App() {
  const pathname = usePathname();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">
          <Link
            className={`  px-10  py-3 ${
              pathname === "/StateAddItem" ? "text-red-500 font-bold" : ""
            }`}
            href="/StateAddItem"
          >
            StateAddItem
          </Link>
        </DropdownItem>
        <DropdownItem key="copy">
          <Link
            className={`  px-10 py-3 ${
              pathname === "/StateCheck" ? "text-red-500 font-bold" : ""
            }`}
            href="/StateCheck"
          >
            StateCheck
          </Link>
        </DropdownItem>
        <DropdownItem key="delete">
          <Link
            className={`  px-10 py-3 ${
              pathname === "/StateCount" ? "text-red-500 font-bold" : ""
            }`}
            href="/StateCount"
          >
            StateCount
          </Link>
        </DropdownItem>
        <DropdownItem key="count">
          <Link
            className={`  px-10 py-3 ${
              pathname === "/StateCountLabel" ? "text-red-500 font-bold" : ""
            }`}
            href="/StateCountLabel"
          >
            StateCountLabel
          </Link>
        </DropdownItem>
        <DropdownItem key="form">
          <Link
            className={`  px-10 py-3 ${
              pathname === "/StateForm" ? "text-red-500 font-bold" : ""
            }`}
            href="/StateForm"
          >
            StateForm
          </Link>
        </DropdownItem>
        <DropdownItem key="reset">
          <Link
            className={`  px-10 py-3 ${
              pathname === "/StateReset" ? "text-red-500 font-bold" : ""
            }`}
            href="/StateReset"
          >
            StateReset
          </Link>
        </DropdownItem>
        <DropdownItem key="resetkey">
          <Link
            className={`  px-10 py-3 ${
              pathname === "/StateResettingKey" ? "text-red-500 font-bold" : ""
            }`}
            href="/StateResettingKey"
          >
            StateResettingKey
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
