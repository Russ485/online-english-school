"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  YoutubeLogoIcon,
  TiktokLogoIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
} from "@phosphor-icons/react";

const footerLinks = {
  company: [
    { label: "About us", href: "#" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  product: [
    { label: "For parents", href: "#" },
    { label: "For teachers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  { icon: InstagramLogoIcon, href: "#", label: "Instagram" },
  { icon: FacebookLogoIcon, href: "#", label: "Facebook" },
  { icon: YoutubeLogoIcon, href: "#", label: "YouTube" },
  { icon: TiktokLogoIcon, href: "#", label: "TikTok" },
];

const BRAND = "AnnaBer";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Footer() {
  const reduce = useReducedMotion();
  const giantRef = useRef<HTMLDivElement>(null);
  const giantInView = useInView(giantRef, { once: true, amount: 0.5 });

  const entranceVariants = {
    hidden: { opacity: 0, y: 40 },
    shown: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { duration: 0.75, ease, delay: 0.1 + i * 0.08 },
    }),
  };

  const letterVariants = {
    hidden: { width: 0 },
    shown: (i: number) => ({
      width: "auto",
      transition: reduce
        ? { duration: 0 }
        : { duration: 0.16, ease, delay: 0.35 + i * 0.1 },
    }),
  };

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          ref={giantRef}
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-0 select-none lg:bottom-[-36px]"
        >
          <span className="block pl-4 text-left font-[family-name:var(--font-display)] text-[min(16.5vw,12.5rem)] font-extrabold uppercase leading-none tracking-tight text-transparent sm:pl-6 lg:pl-8">
            {Array.from(BRAND).map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={giantInView ? "shown" : "hidden"}
                className="inline-block overflow-hidden [-webkit-text-stroke:2px_rgb(59,130,246,0.3)] transition-[color,-webkit-text-fill-color] duration-200 hover:[-webkit-text-fill-color:var(--color-primary-500)]"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </div>

        <div className="pointer-events-none relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            custom={0}
            variants={entranceVariants}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.5 }}
            className="lg:col-span-1"
          >
            <span className="group pointer-events-auto inline-block font-[family-name:var(--font-display)] text-2xl font-semibold">
              {Array.from(BRAND).map((letter, i) => (
                <span
                  key={`${letter}-${i}`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                  className={`inline-block transition-transform duration-150 ease-out group-hover:-translate-y-1 ${
                    i >= 4 ? "text-primary-500" : ""
                  }`}
                >
                  {letter}
                </span>
              ))}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              English that clicks for kids.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:hello@annaber.com"
                className="pointer-events-auto flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <EnvelopeSimpleIcon className="h-4 w-4" weight="regular" />
                hello@annaber.com
              </a>
              <a
                href="tel:+15551234567"
                className="pointer-events-auto flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <PhoneIcon className="h-4 w-4" weight="regular" />
                +1 (555) 123-4567
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={entranceVariants}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h4 className="font-[family-name:var(--font-display)] text-sm font-medium text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="pointer-events-auto text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={2}
            variants={entranceVariants}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h4 className="font-[family-name:var(--font-display)] text-sm font-medium text-white">
              Product
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="pointer-events-auto text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={3}
            variants={entranceVariants}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h4 className="font-[family-name:var(--font-display)] text-sm font-medium text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="pointer-events-auto text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          custom={4}
          variants={entranceVariants}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.3 }}
          className="pointer-events-none relative z-10 mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 md:flex-row"
        >
          <p className="text-sm text-gray-500">
            &copy; 2026 AnnaBer. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="pointer-events-auto text-gray-500 transition-colors hover:text-white"
              >
                <social.icon className="h-5 w-5" weight="regular" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
