"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will I actually write code?",
      answer:
        "Yes, but that's not the focus. First you find a problem worth solving. Then you design your product. Then you pick up the coding skills you need to build it. Code is just the tool.",
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
      question: "Will I actually launch my product?",
      answer:
        "Yes. By the end, you'll have a real working product that people can use. We help you put it online and get your first real users.",
    },
    {
      question: "Do I need my own laptop?",
      answer:
        "Laptop / device requirements will be shared before the first session (depends on school policy).",
    },
    {
      question: 'What if I\'m not "technical"?',
      answer:
        'Perfect. This is not for "top coders." This is for anyone who wants to solve problems, design things, talk to users, or build products people actually use.',
    },
    {
      question: "Is this part of school or an external class?",
      answer:
        "This program is being offered at Next School with approval from school leadership.",
    },
    {
      question: "What happens after the program ends?",
      answer:
        "You keep your product. You'll know how to keep improving it, get more users, and even build version 2 on your own.",
    },
  ];

  return (
    <section id="faq" className="bg-white px-6 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-5xl">
            Common Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Everything you need to know
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
          className="mt-8 md:mt-10 rounded-xl border-2 border-[#FFF1CB] bg-[#FFF1CB]/30 p-4 md:p-6"
        >
          <p className="text-center text-base font-medium text-gray-800">
            <strong>Important:</strong> The real goal is learning to spot problems, build solutions, and ship products that solve real problems for real users.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
