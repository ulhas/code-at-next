"use client";

import { motion } from "framer-motion";

export default function WhoCanJoin() {
  const eligibility = [
    {
      icon: "🎓",
      title: "Next School Students Only",
      description: "This workshop is for Next School students.",
    },
    {
      icon: "📚",
      title: "Grade 5 and Up",
      description: "Ages 10+. Any grade from 5 onwards.",
    },
    {
      icon: "✨",
      title: "Never Built a Product? Perfect.",
      description: "We start from zero. Complete beginners welcome.",
    },
    {
      icon: "🔥",
      title: "Want to Build Real Things",
      description: "Be curious. Be ready to ship. Not just learn.",
    },
  ];

  return (
    <section className="bg-white px-6 py-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-5xl">
            Who Can Join?
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Here's who this is for
          </p>
        </motion.div>

        {/* Eligibility cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="mb-8 md:mb-10 grid gap-4 md:gap-5 md:grid-cols-2"
        >
          {eligibility.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div className="mb-3 text-4xl">{item.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Session format */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border-2 border-[#C2E2FA] bg-[#C2E2FA]/5 p-8 md:p-10"
        >
          <h3 className="mb-8 text-2xl font-bold text-gray-900">
            How It Works
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white">
                1
              </div>
              <div>
                <h4 className="mb-1 text-lg font-semibold text-gray-900">Weekly Sessions</h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  1-2 hours per week. At school. Small groups.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white">
                2
              </div>
              <div>
                <h4 className="mb-1 text-lg font-semibold text-gray-900">A Few Months</h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  Not a weekend workshop. Time to build something real.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white">
                3
              </div>
              <div>
                <h4 className="mb-1 text-lg font-semibold text-gray-900">Ship Your Product</h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  By the end, you'll have launched something real. With real users.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
