"use client";
import React from "react";
import { Archivo_Black } from "next/font/google";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
});

function HeroCTA() {
  // Headline animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
  };

  // Description text animation
  const descriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6, // Starts after headline animation
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8, // Starts after description
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <div className="flex flex-col items-center justify-center pt-25">
      {/* Animated Headline */}
      <motion.div
        className={`${archivoBlack.className} font-black text-6xl text-center`}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={child} style={{ display: "inline-block" }}>
          Trade&nbsp;
        </motion.span>
        <motion.span variants={child} style={{ display: "inline-block" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-600">
            Fearlessly,
          </span>
        </motion.span>
        <br />
        <motion.span variants={child} style={{ display: "inline-block" }}>
          Learn&nbsp;
        </motion.span>
        <motion.span variants={child} style={{ display: "inline-block" }}>
          Risk-Free!
        </motion.span>
      </motion.div>

      {/* Animated Description */}
      <motion.p
        className="text-zinc-400 text-xl text-center mt-4"
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        Experience real-time paper trading with live market data. <br />
        Buy, Sell, and trade stocks without risk.
      </motion.p>

      {/* Animated Button */}
      <motion.div
        className="flex rounded-lg h-10 px-3 font-medium items-center justify-center p-[1px] bg-gray-200 hover:bg-white mt-8"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      >
        <button className="cursor-pointer text-black rounded-xl h-full w-full flex items-center justify-center space-x-2">
          Get Started
          <IoIosArrowForward className="ml-2" />
        </button>
      </motion.div>
    </div>
  );
}

export default HeroCTA;
