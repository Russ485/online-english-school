"use client";

import { useRef, useEffect } from "react";
import {
  ChalkboardTeacher,
  GameController,
  TrendUp,
  Clock,
  Users,
} from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: ChalkboardTeacher,
    title: "Real teachers, real progress",
    description:
      "Live sessions with certified English tutors who adapt to every child's pace.",
    color: "bg-primary-100 text-primary-600",
  },
  {
    icon: GameController,
    title: "Learning through play",
    description:
      "Interactive games, quizzes, and challenges that make new words stick.",
    color: "bg-accent-100 text-accent-600",
  },
  {
    icon: TrendUp,
    title: "Track every step",
    description:
      "Parents see real progress — scores, streaks, and milestones in your dashboard.",
    color: "bg-success/10 text-success",
  },
  {
    icon: Clock,
    title: "Schedule that fits you",
    description:
      "Book sessions mornings, evenings, or weekends — flex around school and life.",
    color: "bg-primary-100 text-primary-600",
  },
  {
    icon: Users,
    title: "Small groups, big confidence",
    description:
      "Max 4 students per group class — enough friends, enough attention.",
    color: "bg-accent-100 text-accent-600",
  },
];

export function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".benefit-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
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
            Why kids love learning with AnnaBer
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="benefit-card group rounded-xl bg-gray-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${benefit.color}`}
              >
                <benefit.icon className="h-6 w-6" weight="regular" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-medium text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
