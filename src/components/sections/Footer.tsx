"use client";

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
  ],
  product: [
    { label: "For parents", href: "#" },
    { label: "For teachers", href: "#" },
    { label: "Learning platform", href: "#" },
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

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <span className="font-[family-name:var(--font-display)] text-2xl font-semibold">
              Anna<span className="text-primary-400">Ber</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              English that clicks for kids.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:hello@annaber.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
              >
                <EnvelopeSimpleIcon className="h-4 w-4" weight="regular" />
                hello@annaber.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
              >
                <PhoneIcon className="h-4 w-4" weight="regular" />
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-medium text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-medium text-white">
              Product
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-medium text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; 2026 AnnaBer. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-500 transition-colors hover:text-white"
              >
                <social.icon className="h-5 w-5" weight="regular" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
