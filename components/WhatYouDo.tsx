"use client";

import { motion } from "framer-motion";

export default function WhatYouDo() {
  const steps = [
    {
      icon: "💡",
      title: "Pick a Real Problem",
      description: "Find something in your life, school, or home that bugs you or could be better.",
    },
    {
      icon: "🎨",
      title: "Design Your Solution",
      description: "Create an app or tool that actually solves it. Make it yours.",
    },
    {
      icon: "⚙️",
      title: "Build It Step by Step",
      description: "We'll show you how. You'll learn as you go. No experience needed.",
    },
    {
      icon: "🚀",
      title: "Launch It for Real",
      description: "Make it live so people can actually use what you built.",
    },
    {
      icon: "💰",
      title: "Learn to Sell It",
      description: "Understand how to show it to others and what it means to charge for value.",
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
    <section className="bg-gradient-to-b from-amber-50 via-white to-amber-50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            What You'll Do in This Workshop
          </h2>
          <p className="text-xl text-gray-600">
            This is what you're actually signing up for
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
          className="mb-12 rounded-xl border-2 border-[#FFF1CB] bg-[#FFF1CB]/40 p-6"
        >
          <p className="text-base font-semibold text-gray-900">
            ⚡ Very important:{" "}
            <span className="font-normal text-gray-700">
              No previous coding experience needed. We'll start from zero.
            </span>
          </p>
        </motion.div>

        {/* Mini example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm"
        >
          <div className="mb-6">
            <span className="inline-block rounded-full bg-gray-900 px-4 py-1.5 text-sm font-semibold text-white">
              EXAMPLE PROJECT
            </span>
          </div>

          <h3 className="mb-6 text-3xl font-bold text-gray-900">
            "Homework Reminder App"
          </h3>

          <div className="space-y-4 text-lg text-gray-700 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p>Sends you (and maybe your parent) reminders so you never forget assignments</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p>You charge other students ₹99/month</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p>Boom, your first SaaS</p>
            </div>
          </div>

          {/* Legal disclaimer */}
          <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
            <p className="text-sm text-gray-600">
              Note: We can't promise you'll make money. We <em>can</em> teach you how to try.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
