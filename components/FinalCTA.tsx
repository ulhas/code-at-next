"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="register" className="bg-gradient-to-br from-rose-50 via-white to-orange-50 px-6 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 md:mb-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Ready to Build Something Real?
          </h2>
          <p className="mb-6 text-lg text-gray-700 md:text-xl leading-relaxed max-w-2xl mx-auto">
            Tell us you're interested. We'll let you know the start date and batch details.
          </p>

          {/* Reassurance */}
          <div className="mb-8 inline-block rounded-xl border border-gray-200 bg-white px-5 py-2.5 shadow-sm">
            <p className="text-base text-gray-700">
              <strong className="text-gray-900">Just register your interest.</strong> We'll let you know about seats and groups.
            </p>
          </div>

          {/* Tally form button */}
          <div className="mb-8 md:mb-10">
            <button
              data-tally-open="wzpyaa"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-10 py-5 text-lg font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
            >
              Register Your Interest
            </button>
          </div>

          {/* Additional trust elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-3"
          >
            <div className="text-center">
              <div className="mb-2 text-3xl">🏫</div>
              <p className="text-sm font-semibold text-gray-900">At Next School</p>
              <p className="text-sm text-gray-600">Safe, supervised sessions</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl">👥</div>
              <p className="text-sm font-semibold text-gray-900">Small Groups</p>
              <p className="text-sm text-gray-600">Personalized attention</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl">🚀</div>
              <p className="text-sm font-semibold text-gray-900">Real Projects</p>
              <p className="text-sm text-gray-600">Build & launch your app</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
