"use client";

import { motion } from "framer-motion";

export default function WhoCanJoin() {
  const eligibility = [
    {
      icon: "🎓",
      title: "Students of Next School",
      description: "This workshop is exclusively for Next School students.",
    },
    {
      icon: "📚",
      title: "Grade 5 and Above",
      description: "Perfect for students aged approximately 9–14 years.",
    },
    {
      icon: "✨",
      title: "No Coding Experience Needed",
      description: "Complete beginners welcome. We start from zero.",
    },
    {
      icon: "🔥",
      title: "Curious & Ready to Build",
      description: "You need to be curious and willing to build, not just watch.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Who Can Join?
          </h2>
          <p className="text-xl text-gray-600">
            Here's who this is for
          </p>
        </motion.div>

        {/* Eligibility cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="mb-12 grid gap-5 md:grid-cols-2"
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
                <h4 className="mb-1 text-lg font-semibold text-gray-900">Weekly In-Person Sessions</h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  Small-group sessions at school, 1–2 hours each week
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white">
                2
              </div>
              <div>
                <h4 className="mb-1 text-lg font-semibold text-gray-900">Runs for a Few Months</h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  Not just a 1-weekend thing. You'll have time to build something real.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white">
                3
              </div>
              <div>
                <h4 className="mb-1 text-lg font-semibold text-gray-900">You'll Ship Something Real</h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  By the end, you'll have something you can show and say "I built this."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
