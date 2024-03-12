"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <div className="text-[20px] container mt-96 mx-[200px] flex flex-col gap-[40em] mb-96">
        <motion.div
          className="bg-[#4a59de] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          transition={{ type: "spring", bounce: 0.8, duration: 1 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#a20b47] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          animate={{ x: 500 }}
          transition={{ type: "spring", damping: 300, duration: 1 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#5e7b50] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ rotate: 180 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#b82a4c] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ rotate: 180 }}
          transition={{ type: "spring", velocity: 2 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#29f294] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ rotate: 180 }}
          transition={{ type: "spring", restSpeed: 0.1 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#81c4b1] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ rotate: 180 }}
          transition={{ type: "spring", restDelta: 0.5 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#3c05b6] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ rotate: 780 }}
          transition={{ type: "inertia", velocity: 50 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#08c723] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          drag
          dragTransition={{
            power: 0,
            // Snap calculated target to nearest 50 pixels
            modifyTarget: (target) => Math.round(target / 50) * 50,
          }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#dae1a7] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          drag
          dragTransition={{
            min: 0,
            max: 100,
            bounceStiffness: 100,
          }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#266805] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          drag
          dragTransition={{
            min: 0,
            max: 400,
            bounceDamping: 8,
          }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#ff7fe0] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          drag
          dragTransition={{ power: 1 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#2b6f20] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          drag
          dragTransition={{ timeConstant: 200 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#f07c4a] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          drag
          dragTransition={{ restDelta: 10 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#66f3cf] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          drag
          dragTransition={{ min: 0, max: 100 }}
        >
          Box
        </motion.div>
        <motion.div
          className="bg-[#2da15c] rounded-xl w-[100px] h-[100px] pt-[1.6em] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 700 }}
          animate={{ baseFrequency: 0.5 }}
          transition={{ type: "spring", mass: 0.5 }}
        >
          Box
        </motion.div>
      </div>
    </div>
  );
}
