"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import Card3dAcert from "@/componentsUi/compon-Aceternity-user/Card3dAcert";

export default function Home() {
  return (
    <div className="">
      <div className="text-[20px] container mt-96 mx-[200px] flex flex-col gap-[40em] mb-[400px]">
        <motion.div
          className="bg-[#4a59de] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 300 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#4a59de] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 300 }}
        >
          Box
        </motion.div>
        <Card3dAcert />
      </div>
    </div>
  );
}
