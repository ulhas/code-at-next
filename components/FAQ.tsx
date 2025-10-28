"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will my child be writing code?",
      answer:
        "Yes, but not on day 1. First we decide what we're building. Then we learn just enough tech to make it work.",
    },
    {
      question: "Is this safe / supervised?",
      answer:
        "Sessions happen on campus, in small groups, guided by an experienced instructor.",
    },
    {
      question: "How much time per week?",
      answer:
        "Around 1–2 hours/week in school + some optional work at home if they want to improve their idea.",
    },
    {
      question: 'Will kids be pushed to "make money"?',
      answer:
        "We teach them how money on the internet works (subscriptions, selling digital tools, etc.) in an age-appropriate and ethical way. There is zero pressure to sell. Learning the process is the goal.",
    },
    {
      question: "Does my child need a laptop?",
      answer:
        "Laptop / device requirements will be shared before the first session (depends on school policy).",
    },
    {
      question: 'What if my child is shy or not "technical"?',
      answer:
        'Perfect. This is not only for "top coders." This is for kids who like solving problems, designing, drawing UIs, talking to people, or just making stuff that others use.',
    },
    {
      question: "Is this part of school or an external class?",
      answer:
        "This program is being offered at Next School with approval from school leadership.",
    },
    {
      question: "What happens after the program ends?",
      answer:
        "Your child keeps what they built. They'll know how to keep improving it, and how to launch version 2 on their own.",
    },
  ];

  return (
    <section id="faq" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            FAQ for Parents
          </h2>
          <p className="text-xl text-gray-600">
            Questions we get asked most often
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-gray-50 md:p-6"
              >
                <h3 className="pr-4 text-base font-semibold text-gray-900 md:text-lg">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-6 w-6 shrink-0 items-center justify-center text-gray-600"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200 bg-gray-50 p-5 md:p-6">
                      <p className="text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Responsible note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-xl border-2 border-[#FFF1CB] bg-[#FFF1CB]/30 p-5 md:p-6"
        >
          <p className="text-center text-base font-medium text-gray-800">
            <strong>Important:</strong> This is not financial advice. The real goal is confidence, creativity, and
            entrepreneurial thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
