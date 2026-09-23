"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon, PlayIcon } from "@phosphor-icons/react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// HERO — canonical (ex-HeroFinal v2.3). Adapted from 21st 1503 Hero Parallax.
// Web/desktop done: tilt 12° [0,0.2], translateY [-370,70], h-[180vh], scroll-only X ±1000,
// cyclic 2×, no blur over grid, light hover black/30 + translate 300ms, z-20 text over z-10.
// Mobile/tablet adaptive — follow-up after dedicated grill (separate ticket).

export const annaBerProducts = [
  {
    title: "Vocabulary Jungle",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Grammar Quest — Live",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Story Time with Anna",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Speak & Play — Group 4",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Pronunciation Lab",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Flashcards Fun",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Baamboozle Game",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Progress Dashboard",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Mini Group — Max 4",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "First Words — 7-9",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Conversations — 14-16",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Homework — Game Mode",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Teacher Feedback",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Certificate — Level Up",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Trial Lesson — Free",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductCard({
  product,
  translate,
  reduce,
}: {
  product: { title: string; link: string; thumbnail: string };
  translate: MotionValue<number>;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      style={reduce ? undefined : { x: translate }}
      className="group/product relative h-56 w-64 flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-soft transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl md:h-72 md:w-80 lg:h-80 lg:w-[26rem]"
    >
      <Link href={product.link} className="block h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/35 via-gray-900/5 to-transparent opacity-90" />
      </Link>
      <div className="pointer-events-none absolute inset-0 bg-black/0 opacity-0 transition-opacity duration-200 group-hover/product:bg-black/30 group-hover/product:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-gray-900 shadow-soft backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-success" />
          {product.title}
        </p>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 120, damping: 30, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [12, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [12, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-370, 70]),
    springConfig
  );

  useEffect(() => {
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.5 })
        .from(".hero-title", { opacity: 0, y: 30, duration: 0.6 }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".hero-cta", { opacity: 0, y: 20, duration: 0.4 }, "-=0.2");

      gsap.to(".hero-blur-1", {
        yPercent: -18,
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".hero-blur-2", {
        yPercent: -10,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  const firstRow = annaBerProducts.slice(0, 5);
  const secondRow = annaBerProducts.slice(5, 10);
  const thirdRow = annaBerProducts.slice(10, 15);
  const firstRowLoop = [...firstRow, ...firstRow];
  const secondRowLoop = [...secondRow, ...secondRow];
  const thirdRowLoop = [...thirdRow, ...thirdRow];

  return (
    <section ref={sectionRef} className="hero relative h-[180vh] overflow-hidden bg-gray-50">
      <div
        aria-hidden
        className="hero-blur-1 pointer-events-none absolute -top-24 -left-24 z-0 h-72 w-72 rounded-full bg-primary-100/60 blur-[50px] md:h-96 md:w-96"
      />
      <div
        aria-hidden
        className="hero-blur-2 pointer-events-none absolute left-1/2 top-[22%] z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-100/50 blur-[50px] md:h-96 md:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[18%] z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-50 blur-3xl md:h-80 md:w-80"
      />

      <div className="sticky top-0 flex h-screen flex-col justify-start overflow-visible [perspective:1000px] [transform-style:preserve-3d] pt-16 md:pt-20">
        <div className="relative z-20 mx-auto max-w-7xl translate-y-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-gray-700 shadow-soft">
              <span className="h-2 w-2 rounded-full bg-success" />
              Online English for kids 7–16
            </span>
            <h1 className="hero-title mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Where kids actually{" "}
              <span className="text-primary-500">enjoy</span> learning English
            </h1>
            <p className="hero-subtitle mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Fun, interactive lessons with real teachers that build confidence and
              fluency — from first words to full conversations.
            </p>
            <div className="hero-cta mt-8 flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-[15px] font-medium text-white shadow-soft transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 active:translate-y-0 active:shadow-soft">
                Start learning
                <ArrowRightIcon className="h-4 w-4" weight="bold" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border-2 border-primary-200 bg-white px-7 py-3.5 text-[15px] font-medium text-primary-600 transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-primary-500 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 active:translate-y-0">
                <PlayIcon className="h-4 w-4" weight="fill" />
                See how it works
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              No contracts • Cancel anytime • Max 4 kids per group
            </p>
          </div>
        </div>

        <motion.div
          style={
            reduce
              ? { opacity: 1 }
              : {
                  rotateX,
                  rotateZ,
                  translateY,
                  opacity,
                }
          }
          className="hero-preview relative z-10 mt-8 flex flex-col [perspective:1000px] [transform-style:preserve-3d] md:mt-10"
        >
          <motion.div className="flex flex-row-reverse items-center gap-6 px-6 md:gap-8 md:px-8 mb-6 md:mb-8">
            {firstRowLoop.map((product, idx) => (
              <ProductCard
                key={`${product.title}-${idx}`}
                product={product}
                translate={translateX}
                reduce={!!reduce}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row items-center gap-6 px-6 md:gap-8 md:px-8 mb-6 md:mb-8">
            {secondRowLoop.map((product, idx) => (
              <ProductCard
                key={`${product.title}-${idx}`}
                product={product}
                translate={translateXReverse}
                reduce={!!reduce}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse items-center gap-6 px-6 md:gap-8 md:px-8">
            {thirdRowLoop.map((product, idx) => (
              <ProductCard
                key={`${product.title}-${idx}`}
                product={product}
                translate={translateX}
                reduce={!!reduce}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
