"use client";

import { motion } from "framer-motion";

export default function ClientHome() {
  return (
    <div className="text-[20px] container mx-[600px] mt-20 flex flex-col gap-10">
      <div className="flex gap-20">
        <div className="mt-[340px]  flex flex-col gap-10">
          <motion.div
            className="bg-green-600 rounded-xl w-[100px] h-[100px] pt-[1.5em] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ x: 300 }}
            drag="x"
            dragConstraints={{ left: -300, right: 300 }}
            transition={{
              duration: 1,
            }}
          >
            Box
          </motion.div>
          <motion.div
            className="bg-green-600 rounded-xl w-[100px] h-[100px] pt-[1.5em] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ x: 300 }}
            drag="x"
            dragConstraints={{ left: -300, right: 300 }}
            transition={{
              duration: 1,
            }}
          >
            Box
          </motion.div>
          <motion.div
            className="bg-green-600 rounded-xl w-[100px] h-[100px] pt-[1.5em] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ x: 300 }}
            drag="x"
            dragConstraints={{ left: -300, right: 300 }}
            transition={{
              duration: 1,
            }}
          >
            Box
          </motion.div>
        </div>

        <div className="flex gap-10 ms-[500px] mt-[340px]">
          <motion.div
            className="bg-red-600 rounded-xl w-[100px] h-[100px] pt-[1.5em] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ y: 300 }}
            drag="y"
            dragConstraints={{ top: -300, bottom: 300 }}
            transition={{
              duration: 1,
            }}
          >
            Box
          </motion.div>
          <motion.div
            className="bg-red-600 rounded-xl w-[100px] h-[100px] pt-[1.5em] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ y: 300 }}
            drag="y"
            dragConstraints={{ top: -300, bottom: 300 }}
            transition={{
              duration: 1,
            }}
          >
            Box
          </motion.div>
          <motion.div
            className="bg-red-600 rounded-xl w-[100px] h-[100px] pt-[1.5em] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ y: 300 }}
            drag="y"
            dragConstraints={{ top: -300, bottom: 300 }}
            transition={{
              duration: 1,
            }}
          >
            Box
          </motion.div>
        </div>
      </div>
    </div>
  );
}
