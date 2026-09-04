"use client";

import { useRef, useEffect } from "react";
import { CalendarBlank, UserPlus, BookOpen } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: CalendarBlank,
    title: "Book your free trial",
    description:
      "Pick a time that works — no card needed, no commitment.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Meet your teacher",
    description:
      "A quick chat to find the right match for your child's level and personality.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Start learning",
    description:
      "Jump into your first lesson — fun, interactive, and zero pressure.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".step-item", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.2,
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
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Three steps to better English
          </h2>
        </div>

        <div className="relative mt-12 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200 md:block" />

          {steps.map((step) => (
            <div key={step.number} className="step-item relative text-center">
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-md">
                <step.icon className="h-6 w-6" weight="regular" />
              </div>
              <div className="mt-4 font-[family-name:var(--font-display)] text-sm font-medium text-primary-500">
                Step {step.number}
              </div>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-medium text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
