"use client";

import { StarIcon } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "My daughter went from shy to confident in three months. She actually asks to do her English lessons now — I never thought I'd see that.",
    name: "Sarah M.",
    child: "Emma, age 9",
    initials: "SM",
    color: "bg-primary-100 text-primary-700",
  },
  {
    quote:
      "The teachers really get how to keep kids engaged. My son loves the games, and I love seeing his progress in the dashboard.",
    name: "David K.",
    child: "Lucas, age 11",
    initials: "DK",
    color: "bg-accent-100 text-accent-700",
  },
  {
    quote:
      "We tried other online schools before. AnnaBer is the first one where he actually sticks with it. The small group classes make a huge difference.",
    name: "Maria L.",
    child: "Daniel, age 14",
    initials: "ML",
    color: "bg-success/10 text-success-700",
  },
];

const SETS = 4;

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-accent-600" weight="fill" />
        ))}
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.color}`}
        >
          <span className="text-xs font-semibold">{testimonial.initials}</span>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-500">Parent of {testimonial.child}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const reduce = useReducedMotion();

  const entranceVariants = {
    hidden: { opacity: 0, y: 40 },
    shown: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { duration: 0.75, ease, delay: 0.1 + i * 0.18 },
    }),
  };

  return (
    <section className="overflow-hidden bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          variants={entranceVariants}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Parents say it best
          </h2>
        </motion.div>
      </div>

      <motion.div
        custom={1}
        variants={entranceVariants}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.3 }}
        className="group relative mt-12 w-full overflow-hidden"
      >
        <div className="marquee-track flex w-max py-1">
          {Array.from({ length: SETS }).flatMap((_, setIndex) =>
            testimonials.map((testimonial, i) => (
              <div
                key={`${setIndex}-${i}`}
                aria-hidden={setIndex > 0}
                className="mr-6 shrink-0"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            )),
          )}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-50 to-gray-50/0 sm:w-1/3"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-50 to-gray-50/0 sm:w-1/3"
        />
      </motion.div>
    </section>
  );
}
