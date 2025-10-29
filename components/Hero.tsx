"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white px-6 py-16 md:py-24 flex items-center">

      <div className="relative mx-auto max-w-6xl w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <Image
            src="/next-logo.png"
            alt="Next School"
            width={120}
            height={60}
            className="opacity-90"
            priority
          />
        </motion.div>

        {/* Main content */}
        <div className="max-w-4xl">
          {/* Kid-facing headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-4xl font-bold leading-[1.1] text-gray-900 md:text-6xl lg:text-7xl"
          >
            Kickstart Your Startup.
            <br />
            Build a Software Product.
            <br />
            <span className="text-[#FF8F8F]">Solve Real Problems for Real Users</span>
          </motion.h1>

          {/* Sub-head for kids */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-gray-600 md:text-xl leading-relaxed max-w-2xl"
          >
            Build a{" "}
            <span className="font-semibold text-gray-900">real software product</span>{" "}
            that solves a problem you care about. Launch it. Get real users. Think like a founder.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <button
              data-tally-open="wzpyaa"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="rounded-lg bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
            >
              I Want In
            </button>
            <a
              href="#faq"
              className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2 group"
            >
              Learn More
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
