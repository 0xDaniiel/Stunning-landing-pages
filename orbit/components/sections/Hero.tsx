"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import GradientOrb from "@/components/ui/GradientOrb";

const tags = ["Automated", "Connected", "Real-time", "Scalable"];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0f] px-6 text-white sm:px-10 lg:px-16">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-225 -translate-x-1/2 rounded-full bg-violet-700/10 blur-[140px]" />

      {/* nav */}
      <nav className="relative z-10 flex items-center justify-between py-8">
        <span className="text-lg font-semibold tracking-tight">Orbit</span>
        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </div>
        <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90">
          Get Started
        </button>
      </nav>

      {/* main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 py-16 lg:grid-cols-2 lg:py-24"
      >
        {/* left: copy */}
        <div>
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60"
          >
            Now in public beta
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Powering the
            <br />
            Future of Workflow
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-md text-base text-white/60 sm:text-lg"
          >
            Automate the busywork, connect every tool, and let your team focus
            on what actually matters.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8 flex items-center gap-5"
          >
            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
              Get Started
            </button>
            <button className="text-sm font-medium text-white/70 transition hover:text-white">
              Learn more →
            </button>
          </motion.div>
        </div>

        {/* right: orb + side tags */}
        <div className="flex items-center justify-center gap-10">
          <GradientOrb />

          <motion.div
            variants={fadeUp}
            custom={4}
            className="hidden flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex"
          >
            <div className="mb-1">
              <p className="text-sm font-medium">Built for scale</p>
              <p className="mt-1 text-xs text-white/50">
                Every integration, automated and synced in real time.
              </p>
            </div>
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-white/60">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
