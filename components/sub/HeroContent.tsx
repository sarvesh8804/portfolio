"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Sarvesh Portfolio Website
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[800px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Synergizing{" "}
            </span>
            Technology and Creativity
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I’m a B.E. Information Technology student at Mumbai University with a passion for problem-solving, clean code, and continuous learning. I'm curious, self-driven, and enjoy turning complex challenges into simple, effective solutions. Competitive programming and development have shaped me into a logical thinker who thrives in fast-paced, collaborative environments.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4" // Added flex and gap to align buttons horizontally
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://drive.google.com/file/d/1b5IxXmvqlCAxnzWroYAMrCYCRfEpuUVu/view?usp=sharing"
            target="_blank"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-blue-600"
          >
            Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/sarvesh8804"
            target="_blank"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-gray-800"
          >
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/sarvesh-h-74836b205"
            target="_blank"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-gray-800"
          >
            Linked In
          </motion.a>
          <br />
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.geeksforgeeks.org/user/sarvesh_huddar/"
            target="_blank"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-gray-800"
          >
            G F G
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://leetcode.com/u/sarvesh_huddar/"
            target="_blank"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-gray-800"
          >
            Leetcode
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://codeforces.com/profile/sarvesh.huddar1"
            target="_blank"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-gray-800"
          >
            Codeforces
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.codechef.com/users/noobcoder_8804"
            target="_blank"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-gray-800"
          >
            CodeChef
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        // initial={{ rotate: 0 }}
        // animate={{ rotate: 45 }}
        // transition={{ duration: 1.5 }}
        animate={{
          rotate: [30, 45, 30], // Rotate from 0 to 45 and back to 0
        }}
        transition={{
          duration: 4, // Duration for one complete cycle
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: "loop", // Keep it looping continuously
          ease: "easeInOut", // Smooth easing for the animation
        }}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/sarvesh3.png"
          alt="work icons"
          height={650}
          width={650}
          className="relative drop-shadow-[0_0_25px_rgba(128,0,255,0.8)]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
