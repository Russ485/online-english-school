"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { useReducedMotion } from "framer-motion";

const benefits = [
  {
    image: "/benefits/school_3d.png",
    alt: "3D school building",
    title: "Real teachers, real progress",
    description:
      "Live sessions with certified English tutors who adapt to every child's pace.",
  },
  {
    image: "/benefits/video_game_3d.png",
    alt: "3D game controller",
    title: "Learning through play",
    description:
      "Interactive games, quizzes, and challenges that make new words stick.",
  },
  {
    image: "/benefits/bar_chart_3d.png",
    alt: "3D growth chart",
    title: "Track every step",
    description:
      "Parents see real progress — scores, streaks, and milestones in your dashboard.",
  },
  {
    image: "/benefits/alarm_clock_3d.png",
    alt: "3D alarm clock",
    title: "Schedule that fits you",
    description:
      "Book sessions mornings, evenings, or weekends — flex around school and life.",
  },
  {
    image: "/benefits/people_hugging_3d.png",
    alt: "3D friends hugging",
    title: "Small groups, big confidence",
    description:
      "Max 4 students per group class — enough friends, enough attention.",
  },
];

export function Benefits() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduce || typeof IntersectionObserver === "undefined")
      return;
    const cards = Array.from(section.querySelectorAll(".benefit-card"));
    cards.forEach((card, i) => {
      card.classList.add("opacity-0", "translate-y-10");
      (card as HTMLElement).style.transitionDelay = `${i * 100}ms`;
    });
    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target as HTMLElement;
          io.unobserve(card);
          card.classList.remove("opacity-0", "translate-y-10");
          // clear stagger delay after entrance so hover stays instant
          timers.push(
            setTimeout(() => {
              card.style.transitionDelay = "0ms";
            }, 650)
          );
        });
      },
      { threshold: 0.25 }
    );
    cards.forEach((card) => io.observe(card));
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      cards.forEach((card) => {
        card.classList.remove("opacity-0", "translate-y-10");
        (card as HTMLElement).style.transitionDelay = "0ms";
      });
    };
  }, [reduce]);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Why kids love learning with AnnaBer
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`benefit-card group flex min-h-[240px] flex-col gap-6 rounded-xl border border-gray-200 bg-gray-50 p-6 opacity-100 shadow-soft transition-[translate,box-shadow,opacity] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-md sm:flex-row sm:items-start ${
                index === benefits.length - 1
                  ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-0.75rem)]"
                  : ""
              }`}
            >
              <div className="shrink-0">
                <Image
                  src={benefit.image}
                  alt={benefit.alt}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                />
              </div>
              <div className="flex h-full flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <ArrowRightIcon className="h-5 w-5 text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
