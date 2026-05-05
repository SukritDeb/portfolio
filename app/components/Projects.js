"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const row = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header — Machine / Monospace */}
        <div className="flex items-baseline justify-between mb-16 md:mb-20">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Selected Projects
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 dark:text-neutral-700">
            ({String(portfolioData.projects.length).padStart(2, "0")})
          </span>
        </div>

        {/* Project List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-0"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={row}
              className="group border-t border-neutral-200 dark:border-neutral-800 py-8 md:py-10 cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
                {/* Left Side */}
                <div className="flex items-baseline gap-6 md:gap-10 flex-1">
                  {/* Project ID — Machine / Monospace */}
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                    {project.id}
                  </span>
                  <div>
                    {/* Project Title — Narrative / Sans-Serif */}
                    <h3 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    {/* Project Description — Narrative / Sans-Serif */}
                    <p className="font-sans mt-1 text-sm tracking-tight text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-start md:items-end gap-3 md:min-w-[280px]">
                    {/* Impact — Machine / Monospace */}
                    {project.impact && (
                      <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                        {project.impact}
                      </span>
                    )}
                    {/* Tech Stack Tags — Machine / Monospace */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:border-neutral-900 dark:group-hover:border-neutral-100 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-900 dark:hover:border-neutral-100 transition-all group/gh"
                  >
                    <svg
                      className="w-4 h-4 group-hover/gh:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
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
