"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

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

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Questions? We&apos;ve got answers
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-gray-200 transition-all duration-200 hover:border-primary-200"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
                className="flex w-full items-center justify-between p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary-500"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <CaretDown
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  weight="bold"
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
