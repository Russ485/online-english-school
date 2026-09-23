"use client";

import { StarIcon } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "My daughter went from shy to confident in three months. She actually asks to do her English lessons now — I never thought I'd see that.",
    name: "Sarah M.",
    child: "Emma, age 9",
    initials: "SM",
    color: "bg-primary-100 text-primary-600",
  },
  {
    quote:
      "The teachers really get how to keep kids engaged. My son loves the games, and I love seeing his progress in the dashboard.",
    name: "David K.",
    child: "Lucas, age 11",
    initials: "DK",
    color: "bg-accent-100 text-accent-600",
  },
  {
    quote:
      "We tried other online schools before. AnnaBer is the first one where he actually sticks with it. The small group classes make a huge difference.",
    name: "Maria L.",
    child: "Daniel, age 14",
    initials: "ML",
    color: "bg-success/10 text-success",
  },
];

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Parents say it best
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-4 w-4 text-accent-400"
                    weight="fill"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.color}`}
                >
                  <span className="text-xs font-semibold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Parent of {testimonial.child}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
