"use client";

import { motion } from "framer-motion";

export default function WhatYouDo() {
  const steps = [
    {
      icon: "💡",
      title: "Find a Problem That Bugs You",
      description: "Something annoying at school? At home? With homework? That's your starting point.",
    },
    {
      icon: "🎨",
      title: "Design Your Own Solution",
      description: "Imagine an app that fixes it. Sketch it out. Make it exactly how YOU want it.",
    },
    {
      icon: "⚙️",
      title: "Build Your Product",
      description: "Turn your idea into working software. Pick up coding skills as you build. Start from zero.",
    },
    {
      icon: "🚀",
      title: "Launch It to Real People",
      description: "Put your app out there. Watch friends and classmates actually use what you made.",
    },
    {
      icon: "🎯",
      title: "Get People to Use It",
      description: "Learn how to get your app in front of real users. Make something people want.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-b from-amber-50 via-white to-amber-50 px-6 py-12 md:py-20">
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
            Here's What You'll Actually Do
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            From problem to product. From idea to launch.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10 md:mb-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl">{step.icon}</div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 rounded-xl border-2 border-[#FFF1CB] bg-[#FFF1CB]/40 p-4 md:p-6"
        >
          <p className="text-base font-semibold text-gray-900">
            ⚡ Very important:{" "}
            <span className="font-normal text-gray-700">
              This isn't about memorizing code. It's about building something real. Coding is just the tool.
            </span>
          </p>
        </motion.div>

        {/* Mini example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
        >
          <div className="mb-4">
            <span className="inline-block rounded-full bg-gray-900 px-4 py-1.5 text-sm font-semibold text-white">
              EXAMPLE PROJECT
            </span>
          </div>

          <h3 className="mb-4 md:mb-5 text-2xl md:text-3xl font-bold text-gray-900">
            "Campus Swap" - School Marketplace App
          </h3>

          <div className="space-y-3 text-base md:text-lg text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p><strong>The problem:</strong> Students want to trade books, sell old games, swap snacks. No easy way to do it.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p><strong>Your solution:</strong> Build a marketplace app just for your school. Post items, chat with buyers, make trades happen.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p><strong>Real impact:</strong> 50+ classmates using it. Real transactions happening. You're solving an actual problem.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
