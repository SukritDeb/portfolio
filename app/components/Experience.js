"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const row = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header — Machine / Monospace */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Leadership &amp; Experience
          </h2>
        </div>

        {/* Experience List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-0"
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={row}
              className="group border-t border-neutral-200 dark:border-neutral-800 py-6 md:py-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8">
                {/* Left — Role & Date */}
                <div className="flex items-center gap-6 md:gap-10">
                  {/* Date Pill — Machine / Monospace */}
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 border ${
                      exp.date === "Present"
                        ? "border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100"
                        : "border-neutral-300 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500"
                    }`}
                  >
                    {exp.date}
                  </span>
                  {/* Role — Narrative / Sans-Serif */}
                  <h3 className="font-sans text-lg md:text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:translate-x-1 transition-transform duration-300">
                    {exp.role}
                  </h3>
                </div>

                {/* Right — Organization (Narrative / Sans-Serif) */}
                <p className="font-sans text-sm tracking-tight text-neutral-400 dark:text-neutral-500 md:text-right pl-16 md:pl-0 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {exp.organization}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-neutral-200 dark:border-neutral-800"></div>
        </motion.div>
      </div>
    </section>
  );
}
