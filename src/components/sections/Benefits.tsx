"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const benefits = [
  {
    image: "/benefits/school_3d.png",
    alt: "3D school building",
    title: "Real teachers, real progress",
    description:
      "Live sessions with certified English tutors who adapt to every child's pace",
    gradient: "from-white via-accent-50 to-accent-200",
    place: "",
  },
  {
    image: "/benefits/video_game_3d.png",
    alt: "3D game controller",
    title: "Learning through play",
    description:
      "Interactive games, quizzes, and challenges that make new words stick",
    gradient: "from-white via-violet-50 to-violet-200",
    place: "",
  },
  {
    image: "/benefits/bar_chart_3d.png",
    alt: "3D growth chart",
    title: "Track every step",
    description:
      "Parents see real progress — scores, streaks, and milestones in your dashboard",
    gradient: "from-white via-primary-50 to-primary-200",
    place: "",
  },
  {
    image: "/benefits/alarm_clock_3d.png",
    alt: "3D alarm clock",
    title: "Schedule that fits you",
    description:
      "Book sessions mornings, evenings, or weekends — flex around school and life",
    gradient: "from-white via-pink-50 to-pink-200",
    place: "lg:col-start-2",
  },
  {
    image: "/benefits/people_hugging_3d.png",
    alt: "3D friends hugging",
    title: "Small groups, big confidence",
    description:
      "Max 4 students per group class — enough friends, enough attention",
    gradient: "from-white via-violet-50 to-violet-200",
    place:
      "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] lg:col-start-4 lg:w-auto",
  },
];

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
};

const imgVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 6 },
};

export function Benefits() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      gsap.from("[data-reveal-item]", {
        y: 14,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: "[data-reveal]",
          start: "top 72%",
        },
      });
    },
    { scope: sectionRef },
  );

  const cardTransition = reduce
    ? undefined
    : {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      };
  const imgTransition = reduce
    ? undefined
    : { type: "spring" as const, stiffness: 400, damping: 10 };

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Why kids love learning with AnnaBer
          </h2>
        </div>

        <div
          data-reveal
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              data-reveal-item
              className={`lg:col-span-2 ${benefit.place}`}
            >
              <motion.div
                className={`benefit-card group relative h-full min-h-[264px] overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br ${benefit.gradient} p-6 md:p-8 transition-shadow duration-300 ease-out-expo hover:shadow-md`}
                initial="rest"
                animate="rest"
                whileHover={reduce ? undefined : "hover"}
                variants={cardVariants}
                transition={cardTransition}
              >
                <motion.div
                  variants={imgVariants}
                  transition={imgTransition}
                  className="pointer-events-none absolute -bottom-5 -right-5 h-36 w-36 sm:h-44 sm:w-44"
                >
                  <Image
                    src={benefit.image}
                    alt={benefit.alt}
                    width={200}
                    height={200}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 sm:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {benefit.description}
                  </p>
                  <div className="mt-auto flex items-center gap-1.5 pt-4">
                    <span className="text-sm font-medium text-gray-600 transition-colors duration-200 group-hover:text-primary-600">
                      Learn more
                    </span>
                    <ArrowRightIcon className="h-4 w-4 text-gray-500 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary-600" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
