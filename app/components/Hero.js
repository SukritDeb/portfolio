"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { name, role, location, availability } =
    portfolioData.personal_info;

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 md:px-12 w-full py-24 md:py-32"
      >
        {/* Main Headline — Narrative / Sans-Serif */}
        <motion.h1
          variants={item}
          className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9] text-neutral-900 dark:text-neutral-100"
        >
          {name}
        </motion.h1>

        {/* Role — Narrative / Sans-Serif */}
        <motion.p
          variants={item}
          className="font-sans mt-4 md:mt-6 text-base sm:text-lg md:text-xl font-light leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-3xl tracking-tight"
        >
          {role}
        </motion.p>

        {/* Location — Machine / Monospace */}
        <motion.p
          variants={item}
          className="font-mono mt-3 text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500"
        >
          sys.location // {location}
        </motion.p>

        {/* Status Pills */}
        <motion.div
          variants={item}
          className="mt-8 md:mt-10 flex flex-wrap gap-3"
        >
          {/* Availability Pill — Machine / Monospace */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-300">
              {availability}
            </span>
          </div>

          {/* Resume Download — Machine / Monospace */}
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-transparent hover:text-neutral-900 dark:hover:bg-transparent dark:hover:text-neutral-100 transition-all duration-300"
          >
            <svg
              className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest">
              Resume
            </span>
          </a>
        </motion.div>

        {/* Scroll indicator — Machine / Monospace */}
        <motion.div
          variants={item}
          className="mt-20 md:mt-28 flex items-center gap-3 text-neutral-400 dark:text-neutral-600"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
          <span className="font-mono text-xs uppercase tracking-widest">
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
