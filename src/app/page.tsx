"use client";
import React from "react";
import Header from "@/components/Header";
import StarsBackground from "@/components/StarsBackground";
import Image from "next/image";
import dashboard from "@/assets/images/dashboard.png";
import HeroCTA from "@/components/HeroCTA";
import { motion } from "framer-motion"; // Import motion

function Page() {
  return (
    <>
      <StarsBackground />
      <Header />
      <HeroCTA />
      <div className="flex justify-center items-center h-full mt-14">
        <motion.div
          className="relative rounded-md border border-zinc-900"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.2, // Starts after the HeroCTA animations
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Shadow element */}
          <div className="absolute inset-0 bg-[#0C3132]/45 blur-3xl -z-10 scale-105"></div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Image
              src={dashboard}
              width={1080}
              height={2040}
              alt="dashboard"
              className="relative z-10 shadow-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Page;
