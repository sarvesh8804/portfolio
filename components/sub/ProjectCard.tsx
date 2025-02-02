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
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <br />
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={website}
          target="_blank"
          className="mt-4 py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-blue-600"
        >
          View on Github
        </motion.a>
        <br />
      </div>
    </div>
  );
};

export default ProjectCard;
