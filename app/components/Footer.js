"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { social_links, personal_info } = portfolioData;

  const links = [
    { label: "LinkedIn", href: social_links.linkedin },
    { label: "GitHub", href: social_links.github },
    { label: "Hashnode", href: social_links.hashnode },
    { label: "Email", href: `mailto:${personal_info.email}` },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-950 dark:bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white dark:text-neutral-900 leading-[0.95] max-w-5xl">
            Let&apos;s build something intelligent.
          </h2>

          <div className="mt-16 md:mt-20 flex flex-wrap gap-6 md:gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group text-sm text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-neutral-900 transition-colors flex items-center gap-2"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {link.label}
                </span>
                <svg
                  className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-20 md:mt-28 pt-8 border-t border-neutral-800 dark:border-neutral-200 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
              &copy; {new Date().getFullYear()} {personal_info.name}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
              Built with intention.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
