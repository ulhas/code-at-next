"use client";

import { motion } from "framer-motion";

export default function WhyDifferent() {
  return (
    <section className="bg-white px-6 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-5xl">
            Why This Is Way Different
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Not a coding class. A product workshop.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
          {/* Normal Coding Class */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-gray-300 bg-gray-50 p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-3xl">😴</span>
              <h3 className="text-xl font-semibold text-gray-700">
                Normal Coding Class
              </h3>
            </div>

            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold">✗</span>
                <span>Learn syntax</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold">✗</span>
                <span>Watch teacher code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold">✗</span>
                <span>Do exercises</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold">✗</span>
                <span>Make a calculator app you'll never use</span>
              </li>
            </ul>
          </motion.div>

          {/* This Workshop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl border-2 border-[#FF8F8F] bg-[#FF8F8F]/5 p-8"
          >
            <div className="relative mb-6 flex items-center gap-3">
              <span className="text-3xl">🔥</span>
              <h3 className="text-xl font-semibold text-gray-900">
                This Workshop
              </h3>
            </div>

            <ul className="relative space-y-3 text-base text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  Build a <strong className="text-gray-900">real product</strong> that solves a real problem for real users
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  Think like a <strong className="text-gray-900">founder</strong>, not a student doing homework
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  Actually <strong className="text-gray-900">launch your product</strong>. Get real users. Get feedback.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  Pick up <strong className="text-gray-900">coding skills</strong> as you build, not before
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-10 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-gray-800">
            Build like a <span className="text-[#FF8F8F]">founder</span>. Ship like a <span className="text-[#FF8F8F]">startup</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
