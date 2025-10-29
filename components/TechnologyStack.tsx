"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function TechnologyStack() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 50 || velocity > 500) {
      // Swipe right - go to previous
      setCurrentSlide((prev) => Math.max(0, prev - 1));
    } else if (offset < -50 || velocity < -500) {
      // Swipe left - go to next
      setCurrentSlide((prev) => Math.min(techCategories.length - 1, prev + 1));
    }
  };

  const techCategories = [
    {
      icon: "🎨",
      title: "Frontend",
      description: "Build what people see. Make it look amazing.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: "⚙️",
      title: "Backend",
      description: "The engine behind your app. Where the magic happens.",
      technologies: ["Node.js", "APIs", "Databases"],
    },
    {
      icon: "📱",
      title: "Mobile",
      description: "Apps that work on phones. Anywhere, anytime.",
      technologies: ["React Native", "iOS & Android"],
    },
    {
      icon: "🚀",
      title: "Infrastructure",
      description: "Put your app online. Make it live for everyone.",
      technologies: ["Vercel", "GitHub", "Deployment"],
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
    <section className="bg-gradient-to-b from-green-50 via-white to-green-50 px-6 py-12 md:py-20">
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
            Tech You'll Actually Use
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Real tools. Used by real companies.
          </p>
        </motion.div>

        {/* Tech categories - Carousel on mobile, grid on desktop */}
        <div className="relative">
          {/* Mobile Carousel */}
          <div className="md:hidden overflow-hidden">
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {techCategories.map((category, index) => (
                <div
                  key={index}
                  className="min-w-full px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
                  >
                    {/* Icon */}
                    <div className="mb-4 text-4xl">{category.icon}</div>

                    {/* Content */}
                    <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="mb-4 text-base text-gray-600 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Pagination dots */}
            <div className="mt-6 flex justify-center gap-2">
              {techCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-gray-900"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden md:grid gap-6 md:grid-cols-2"
          >
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-gray-300 hover:shadow-md"
              >
                {/* Icon */}
                <div className="mb-4 text-4xl">{category.icon}</div>

                {/* Content */}
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>
                <p className="mb-4 text-base text-gray-600 leading-relaxed">
                  {category.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-10 rounded-xl border-2 border-[#C2E2FA] bg-[#C2E2FA]/5 p-4 md:p-6"
        >
          <p className="text-base text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Don't worry about memorizing everything.</strong> We teach you what you need, when you need it. As you build.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
