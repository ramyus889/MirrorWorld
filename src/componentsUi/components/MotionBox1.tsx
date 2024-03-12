"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <div className="text-[20px] container mt-96 mx-[200px] flex flex-col gap-[40em] mb-96">
        <motion.div
          className="bg-[#4a59de] rounded-xl w-[100px] h-[100px] mt-52 pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          transition={{ type: "spring", bounce: 0.8, duration: 1 }}
        >
          Box
        </motion.div>
      </div>
    </div>
  );
}
