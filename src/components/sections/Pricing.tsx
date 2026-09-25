"use client";

import { CheckCircleIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "Perfect for trying things out",
    features: [
      "4 individual lessons per month",
      "Access to games and vocabulary builder",
      "Progress dashboard for parents",
      "Cancel anytime",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/mo",
    description: "Most popular for steady progress",
    features: [
      "12 individual lessons per month",
      "2 group sessions per week",
      "Full access to learning platform",
      "Priority scheduling",
      "Monthly progress report",
    ],
    popular: true,
  },
  {
    name: "Mastery",
    price: "$149",
    period: "/mo",
    description: "For serious fluency goals",
    features: [
      "Unlimited individual lessons",
      "Daily group sessions",
      "Full platform + premium content",
      "Dedicated teacher assignment",
      "Weekly 1-on-1 parent check-in",
      "Exam preparation support",
    ],
    popular: false,
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const entranceVariants = {
  hidden: { opacity: 0, y: 40 },
  shown: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease, delay: 0.1 + i * 0.18 },
  }),
};

const hoverVariants = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.15, ease } },
};

export function Pricing() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,var(--color-primary-200),transparent_70%)] opacity-75"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Simple plans,{" "}
            <span className="rounded-lg bg-accent-200 px-2 pb-0.5">
              honest prices
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              variants={entranceVariants}
              initial={reduce ? "shown" : "hidden"}
              whileInView="shown"
              viewport={{ once: true, amount: 0.5 }}
              className="h-full"
            >
              <motion.div
                variants={hoverVariants}
                initial="rest"
                animate="rest"
                whileHover={reduce ? undefined : "hover"}
                className={`flex h-full flex-col rounded-2xl p-6 transition-shadow duration-200 ease-out-expo md:p-7 ${
                  plan.popular
                    ? "border-2 border-primary-500 bg-gradient-to-b from-white to-primary-100 shadow-lg hover:shadow-xl"
                    : "border border-gray-200 bg-white shadow-soft hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="mt-2 min-h-[2.5rem] text-sm leading-relaxed text-gray-500">
                  {plan.description}
                </p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <button
                  type="button"
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${
                    plan.popular
                      ? "bg-gradient-to-b from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30 hover:from-primary-600 hover:to-primary-700 hover:shadow-xl hover:shadow-primary-500/40"
                      : "bg-gray-900 shadow-lg shadow-gray-900/20 hover:bg-gray-700 hover:shadow-xl hover:shadow-gray-900/25"
                  }`}
                >
                  Start learning
                  <ArrowRightIcon className="h-4 w-4" weight="bold" />
                </button>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircleIcon
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                          plan.popular ? "text-primary-500" : "text-success"
                        }`}
                        weight="regular"
                      />
                      <span className="text-sm leading-snug text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
