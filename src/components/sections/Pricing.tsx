"use client";

import { useRef, useEffect } from "react";
import { Check, ArrowRight } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

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

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".pricing-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Simple plans, honest prices
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-primary-500 text-white shadow-xl ring-2 ring-primary-500"
                  : "bg-white shadow-soft hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-4 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3
                className={`font-[family-name:var(--font-display)] text-xl font-medium ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  plan.popular ? "text-primary-100" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`font-[family-name:var(--font-display)] text-4xl font-semibold ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.popular ? "text-primary-100" : "text-gray-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        plan.popular ? "text-primary-100" : "text-success"
                      }`}
                      weight="bold"
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${
                  plan.popular
                    ? "bg-white text-primary-600 hover:bg-primary-50"
                    : "bg-primary-500 text-white hover:bg-primary-600 hover:shadow-md"
                }`}
              >
                Start learning
                <ArrowRight className="h-4 w-4" weight="bold" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
