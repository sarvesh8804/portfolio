import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  website: string;
}

const ProjectCard = ({ src, title, description, website }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group"
    >
      {/* Invisible link layer over entire card */}
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      />

      {/* Card content */}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 z-20">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <br />
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-blue-600 inline-block"
        >
          View on Github
        </motion.a>
        <br />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
