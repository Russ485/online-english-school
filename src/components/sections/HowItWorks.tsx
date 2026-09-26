"use client";

import { useEffect, useState } from "react";
import { CalendarBlankIcon, UserPlusIcon, BookOpenIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion, type Transition } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: CalendarBlankIcon,
    title: "Book your free trial",
    description:
      "Pick a time that works — no card needed, no commitment",
    image: "/howitworks/step-01.jpg",
  },
  {
    number: "02",
    icon: UserPlusIcon,
    title: "Meet your teacher",
    description:
      "A quick chat to find the right match for your child's level and personality",
    image: "/howitworks/step-02.jpg",
  },
  {
    number: "03",
    icon: BookOpenIcon,
    title: "Start learning",
    description:
      "Jump into your first lesson — fun, interactive, and zero pressure",
    image: "/howitworks/step-03.jpg",
  },
];

const COLS = 4;
const ROWS = 4;

const tiles = [
  { c: 0, r: 0, cs: 2, rs: 2 },
  { c: 2, r: 0, cs: 2, rs: 1 },
  { c: 2, r: 1, cs: 1, rs: 1 },
  { c: 3, r: 1, cs: 1, rs: 1 },
  { c: 0, r: 2, cs: 2, rs: 1 },
  { c: 2, r: 2, cs: 2, rs: 2 },
  { c: 0, r: 3, cs: 1, rs: 1 },
  { c: 1, r: 3, cs: 1, rs: 1 },
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

const CYCLE = 6.2;
const STAGGER = 0.065;
const HOLD_END = 0.83;
const PEAK_AT = 0.5;
const APPEAR = 0.93;
const REST = 0.96;

const clipInset = (v: number) => `inset(${((1 - v) / 2) * 100}% round 16px)`;

const tileRest = { opacity: 1, clipPath: clipInset(1) };
const tileHidden = { opacity: 0, clipPath: clipInset(APPEAR) };

const tileLoop = (i: number) => {
  const wait = (STAGGER * i) / CYCLE;
  const transition: Transition = {
    duration: CYCLE,
    repeat: Infinity,
    times: [0, wait, wait + 0.11, PEAK_AT, HOLD_END, 1],
    ease: ["linear", ease, "easeInOut", "easeInOut", "linear"],
  };
  return {
    opacity: [0, 0, 1, 1, 1, 0],
    clipPath: [APPEAR, APPEAR, REST, 1, REST, REST].map(clipInset),
    transition,
  };
};

export function HowItWorks() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [loopStarted, setLoopStarted] = useState(false);
  const loopLive = loopStarted && !reduce;

  useEffect(() => {
    steps.forEach((step) => {
      const img = new Image();
      img.src = step.image;
    });
  }, []);

  const activate = (index: number) => {
    setActive(index);
    if (!loopStarted) setLoopStarted(true);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Three steps to better English
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                variants={entranceVariants}
                initial={reduce ? "shown" : "hidden"}
                whileInView="shown"
                viewport={{ once: true, amount: 0.4 }}
              >
                <motion.button
                  type="button"
                  variants={hoverVariants}
                  initial="rest"
                  animate="rest"
                  whileHover={reduce ? undefined : "hover"}
                  onFocus={() => activate(index)}
                  onMouseEnter={() => activate(index)}
                  onClick={() => activate(index)}
                  aria-pressed={active === index}
                  className={`flex w-full items-start gap-4 rounded-2xl border-2 p-4 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${
                    active === index
                      ? "border-primary-500 bg-white shadow-soft"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-white">
                    <step.icon className="h-5 w-5" weight="regular" />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-[family-name:var(--font-display)] text-sm font-medium ${
                        active === index ? "text-accent-500" : "text-gray-400"
                      }`}
                    >
                      Step {step.number}
                    </span>
                    <span
                      className={`mt-0.5 block font-[family-name:var(--font-display)] text-lg font-medium ${
                        active === index ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </span>
                  </span>
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            custom={3}
            variants={entranceVariants}
            initial={reduce ? "shown" : "hidden"}
            whileInView="shown"
            viewport={{ once: true, amount: 0.3 }}
            role="img"
            aria-label={`${steps[active].title} illustration`}
            className="relative h-[300px] sm:h-[360px] lg:h-[440px]"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={`${active}-${loopStarted}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.3, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1.5">
                  {tiles.map((tile, i) => (
                    <motion.div
                      key={i}
                      initial={loopLive ? tileHidden : tileRest}
                      animate={loopLive ? tileLoop(i) : tileRest}
                      style={{
                        gridColumn: `${tile.c + 1} / span ${tile.cs}`,
                        gridRow: `${tile.r + 1} / span ${tile.rs}`,
                      }}
                      className="relative overflow-hidden rounded-lg bg-gray-100"
                    >
                      <motion.img
                        src={steps[active].image}
                        alt=""
                        draggable={false}
                        className="absolute max-w-none object-cover"
                        style={{
                          width: `${(COLS / tile.cs) * 100}%`,
                          height: `${(ROWS / tile.rs) * 100}%`,
                          left: `${-(tile.c / tile.cs) * 100}%`,
                          top: `${-(tile.r / tile.rs) * 100}%`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
