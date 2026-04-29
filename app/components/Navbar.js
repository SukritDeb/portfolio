"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { portfolioData } from "../data/portfolioData";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Left — Logo */}
        <a
          href="#"
          className="hover:opacity-60 transition-opacity"
        >
          <img
            src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
            alt={portfolioData.personal_info.name}
            className="h-7 w-auto"
          />
        </a>

        {/* Right — Links + Toggle */}
        <div className="flex items-center gap-8">
          {/* Nav Links — Machine / Monospace */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hidden md:block font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
          >
            {/* Sun */}
            <svg
              className={`w-4 h-4 absolute transition-all duration-300 ${theme === "light"
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-0"
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            {/* Moon */}
            <svg
              className={`w-4 h-4 absolute transition-all duration-300 ${theme === "dark"
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-0"
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
