"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white px-6 py-20 md:py-32 flex items-center">

      <div className="relative mx-auto max-w-6xl w-full">
        {/* Logo and trust line */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between"
        >
          <Image
            src="/next-logo.png"
            alt="Next School"
            width={120}
            height={60}
            className="opacity-90"
            priority
          />
          <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
            In partnership with Next School
          </div>
        </motion.div>

        {/* Main content */}
        <div className="max-w-4xl">
          {/* Kid-facing headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-bold leading-[1.1] text-gray-900 md:text-6xl lg:text-7xl"
          >
            Build Your Own App.
            <br />
            Launch It.
            <br />
            <span className="text-[#FF8F8F]">Maybe Even Make Money</span>
          </motion.h1>

          {/* Sub-head for kids */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-xl text-gray-600 md:text-2xl leading-relaxed max-w-3xl"
          >
            A hands-on workshop at Next School where you create{" "}
            <span className="font-semibold text-gray-900">real software</span>{" "}
            (not homework), ship it, and learn how to sell it like a mini startup founder.
          </motion.p>

          {/* Trust line for parents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 rounded-xl bg-[#C2E2FA]/30 border border-[#C2E2FA]/50 p-6 max-w-3xl"
          >
            <p className="text-base text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">For parents:</span> Led by Ulhas Mandrawadkar, founder of Procedure
              Technologies with 8+ years building real products for real clients. A guided, project-based
              program in software building and entrepreneurship for Grade 5+ students.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#register"
              className="rounded-lg bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
            >
              I Want In
            </a>
            <a
              href="#faq"
              className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2 group"
            >
              Info for Parents
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
