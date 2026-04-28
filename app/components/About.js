"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16"
        >
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-mono">
              About
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100 leading-[0.95]">
              {portfolioData.about.headline}
            </h2>
            <p className="mt-8 md:mt-12 text-base md:text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-2xl">
              {portfolioData.about.description}
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 h-px bg-neutral-200 dark:bg-neutral-800 origin-left"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
