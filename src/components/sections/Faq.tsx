"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const faqs = [
  {
    question: "What ages is AnnaBer for?",
    answer:
      "We teach kids from 7 to 16. Lessons are matched to your child's level, not just their age — so everyone learns at the right pace.",
  },
  {
    question: "How long are the lessons?",
    answer:
      "Individual sessions are 25 minutes. Group sessions are 45 minutes. Short enough to keep focus, long enough to make progress.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no cancellation fees. You can pause or stop your plan whenever you need to.",
  },
  {
    question: "What if my child doesn't like their teacher?",
    answer:
      "No problem — we'll match you with a different teacher. Finding the right fit is part of what we do.",
  },
  {
    question: "Do you teach British or American English?",
    answer:
      "Both. You choose the accent and curriculum that fits your goals — we'll make sure the teacher matches.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes — your first lesson is completely free. No card, no commitment. Just book and show up.",
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Faq() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const entranceVariants = {
    hidden: { opacity: 0, y: 40 },
    shown: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { duration: 0.75, ease, delay: 0.1 + i * 0.08 },
    }),
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          variants={entranceVariants}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Questions? We&apos;ve got answers
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-col gap-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                custom={index + 1}
                variants={entranceVariants}
                initial="hidden"
                whileInView="shown"
                viewport={{ once: true, amount: 0.3 }}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-primary-200 bg-primary-50"
                    : "border-gray-200 bg-white hover:border-primary-200"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary-500 ${
                      isOpen ? "text-primary-600" : "text-gray-900"
                    }`}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span
                      aria-hidden
                      className={`relative flex h-6 w-6 shrink-0 items-center justify-center ${
                        isOpen ? "text-primary-500" : "text-gray-500"
                      }`}
                    >
                      <span
                        className={`absolute h-[1.5px] w-2.5 rounded-full bg-current transition-transform duration-300 ${
                          isOpen ? "rotate-0" : "rotate-90"
                        }`}
                      />
                      <span className="absolute h-[1.5px] w-2.5 rounded-full bg-current" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.2, ease }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
