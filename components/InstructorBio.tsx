"use client";

import { motion } from "framer-motion";

export default function InstructorBio() {
  return (
    <section className="bg-gradient-to-b from-purple-50 via-white to-purple-50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Who's Teaching You?
          </h2>
          <p className="text-xl text-gray-600">
            Meet your instructor
          </p>
        </motion.div>

        {/* Instructor card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
        >
          <div className="border-b border-gray-200 p-8 md:p-10 text-center">
            {/* Placeholder for photo */}
            <div className="mb-6 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-50 text-5xl md:h-28 md:w-28">
                👨‍💻
              </div>
            </div>

            <h3 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
              Ulhas Mandrawadkar
            </h3>
            <p className="text-lg text-gray-600">
              Founder, Procedure Technologies
            </p>
          </div>

          <div className="p-8 md:p-10">
            {/* First-person intro */}
            <div className="mb-8 rounded-xl bg-gray-50 p-6 md:p-8 border-l-4 border-gray-900">
              <p className="text-base text-gray-700 leading-relaxed">
                Hi, I'm <strong className="text-gray-900">Ulhas Mandrawadkar</strong>.
                <br />
                <br />
                I run a software company that builds real products for real clients.
                <br />
                <br />
                I've taught adults and fresh graduates how to become software engineers and ship production apps.
                <br />
                <br />
                Now I want to bring that same builder energy to students who are still in school — because I believe{" "}
                <strong className="text-gray-900">you shouldn't have to wait until you're 25 to build something real</strong>.
              </p>
            </div>

            {/* Credentials */}
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-5 border border-gray-200">
                <div className="mb-2 text-3xl">💼</div>
                <h4 className="mb-2 text-base font-semibold text-gray-900">8+ Years Experience</h4>
                <p className="text-sm text-gray-600">
                  Building real products with real clients in production
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5 border border-gray-200">
                <div className="mb-2 text-3xl">🎓</div>
                <h4 className="mb-2 text-base font-semibold text-gray-900">Proven Teacher</h4>
                <p className="text-sm text-gray-600">
                  Trained adults and graduates to become professional engineers
                </p>
              </div>
            </div>

            {/* Parent note */}
            <div className="rounded-xl border-2 border-[#FFF1CB] bg-[#FFF1CB]/30 p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <h4 className="text-lg font-semibold text-gray-900">
                  For Parents
                </h4>
              </div>
              <ul className="space-y-2 text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Sessions are conducted <strong className="text-gray-900">in school</strong>, in a structured and safe environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Focus is on creativity, problem solving, ethical use of technology, and responsible selling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong className="text-gray-900">Approved by school leadership</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
