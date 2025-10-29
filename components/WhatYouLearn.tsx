"use client";

import { motion } from "framer-motion";

export default function WhatYouLearn() {
  const skills = [
    {
      icon: "💡",
      title: "Finding Real Problems",
      description: "Spot problems worth solving. Build solutions.",
    },
    {
      icon: "🎨",
      title: "Product Design",
      description: "Design products people actually want to use.",
    },
    {
      icon: "💻",
      title: "Building Software",
      description: "Turn your idea into working code.",
    },
    {
      icon: "🚀",
      title: "Shipping Products",
      description: "Launch version 1. Iterate. Don't wait.",
    },
    {
      icon: "💬",
      title: "User Feedback",
      description: "Talk to users. Learn what works. Improve.",
    },
    {
      icon: "🎯",
      title: "Founder Mindset",
      description: "Think like someone who builds companies.",
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
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 px-6 py-12 md:py-20">
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
            What You'll Learn
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Founder skills. Product skills. Real skills.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 md:mb-10 grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3"
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

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border-2 border-[#B7A3E3] bg-[#B7A3E3]/5 p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="text-3xl">✨</span>
            <h3 className="text-xl font-semibold text-gray-900">
              Real Skills
            </h3>
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            These are the same skills adults use to build real products. We just teach them in a way that makes sense for you. With <strong className="text-gray-900">lots of help</strong> along the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
