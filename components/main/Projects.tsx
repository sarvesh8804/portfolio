"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {/* Tripify Project */}
        <div>
          <ProjectCard
            src="/tripify-homepage3.jpg"
            title="Tripify"
            description="It is a MERN stack-based tour planner website featuring Augmented Reality (AR) of hotel rooms for an immersive travel experience. 🚀✨"
            website="https://github.com/sarvesh8804/Tripify"
          />
        </div>

        {/* Cortex Project */}
        <div>
          <ProjectCard
            src="/cortex-homepage2.jpg"
            title="Cortex"
            description="It is a Python-based voice assistant that navigates your computer, fetches news, searches multiple engines, solves math, draws shapes, plays music, and more—all through voice commands. 🎤🤖"
            website="https://github.com/sarvesh8804/Tripify"
          />
        </div>

        {/* JobMarshal Project */}
        <div>
          <ProjectCard
            src="/jobmarshal-homepage.jpg"
            title="JobMarshal"
            description="It is a Next.js MERN website powered by Prisma's PostgreSQL, integrating multiple APIs and a payment gateway to help daily wage workers find jobs efficiently. 🚀💼"
            website="https://github.com/sarvesh8804/Tripify"
          />
        </div>

        {/* MindZapper Project */}
        <div>
          <ProjectCard
            src="/mindzapper-homepage.jpg"
            title="MindZapper"
            description="It is a Java-based quiz application with a MySQL database, offering challenges across various coding domains along with a leaderboard to track top performers. 🚀💻"
            website="https://github.com/sarvesh8804/Tripify"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
