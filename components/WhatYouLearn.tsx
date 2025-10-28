"use client";

import { motion } from "framer-motion";

export default function WhatYouLearn() {
  const skills = [
    {
      icon: "💡",
      title: "Problem Solving",
      description: "See something annoying in daily life → design a fix.",
    },
    {
      icon: "💻",
      title: "Software Building",
      description: "Basics of how apps/websites/tools are made.",
    },
    {
      icon: "🎨",
      title: "UI & UX Thinking",
      description: '"Will other people actually like using this?"',
    },
    {
      icon: "🚀",
      title: "Launch Mindset",
      description: 'How to release version 1 instead of waiting for "perfect".',
    },
    {
      icon: "💬",
      title: "Talking to Users",
      description: 'Asking "What do you need?" and not getting shy.',
    },
    {
      icon: "💰",
      title: "Basics of Pricing & Selling",
      description: 'Understanding value, not "becoming a businessman overnight."',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 px-6 py-24 md:py-32">
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
            What You'll Learn
          </h2>
          <p className="text-xl text-gray-600">
            Skills You Actually Keep
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-3 text-4xl">{skill.icon}</div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {skill.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Parent reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border-2 border-[#B7A3E3] bg-[#B7A3E3]/5 p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="text-3xl">👨‍👩‍👧‍👦</span>
            <h3 className="text-xl font-semibold text-gray-900">
              For Parents
            </h3>
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            These are the same skills adult startup founders learn. We just teach them in a way that makes sense
            for 10–14 year olds — with <strong className="text-gray-900">lots of help</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
