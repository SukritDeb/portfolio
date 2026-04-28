"use client";

import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <About />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
