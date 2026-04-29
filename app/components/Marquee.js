"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Marquee() {
  const skills = portfolioData.skills_marquee;
  // Duplicate for seamless loop
  const duplicated = [...skills, ...skills];

  return (
    <section className="py-12 md:py-16 border-y border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <motion.div
        className="flex gap-8 md:gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((skill, index) => (
          <span
            key={index}
            className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest text-neutral-200 dark:text-neutral-800 flex items-center gap-8 md:gap-12 select-none"
          >
            {skill}
            <span className="text-neutral-300 dark:text-neutral-700 text-lg">
              ◆
            </span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
