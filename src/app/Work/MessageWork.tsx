"use client";
import { useEffect, useState } from "react";
import UserSkeleton from "../../componentsUi/UserSkeleton";
import { motion } from "framer-motion";

export default function Home() {
  const [message, setMessage] = useState("");
  const [click, setClick] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const msg = await messagePromise();
      setMessage(msg);
      setLoading(false);
    };
    fetchData();
  }, []);

  const messagePromise = async () => {
    return new Promise((res) => setTimeout(res, 1000));
  };
  return (
    <div className="">
      {loading ? (
        <UserSkeleton />
      ) : (
        <div className="flex flex-col items-center">
          <motion.div
            animate={{
              x: click ? 100 : -100,
              rotate: click ? 360 : 0,
              scale: click ? 1.5 : 1,
            }}
            transition={{ duration: 1, type: "spring" }}
            onClick={() => setClick(!click)}
            className="flex flex-col gap-[10px] cursor-pointer"
          >
            {click ? "Backend" : "Frontend"}
          </motion.div>

          <button
            onClick={() => setClick(!click)}
            className="mt-[40px] px-5 py-3 rounded-xl border-4 border-slate-500"
          >
            Click
          </button>
        </div>
      )}
    </div>
  );
}
