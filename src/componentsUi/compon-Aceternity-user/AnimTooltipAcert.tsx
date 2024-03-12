"use client";
import React from "react";
import { AnimatedTooltip } from "../compon-Aceternity-ui/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/img/Untitled3.png",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/img/Untitled2.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/img/Untitled4.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/img/Untitled2.png",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/img/Untitled1.png",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "/img/Untitled3.png",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
