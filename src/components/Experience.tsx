"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section-pad border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Where I&apos;ve built and led.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {experience.map((job, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={`${job.company}-${job.period}`} delay={index * 60}>
                <article>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:bg-mist-deep/40 md:items-center md:gap-8 md:py-7"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-bold text-ink md:text-xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm text-ink-soft md:text-base">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                      <span className="hidden text-sm font-medium text-ink-soft sm:block">
                        {job.period}
                      </span>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border border-line text-lg leading-none text-accent transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-0 pr-2 md:pl-0">
                        <p className="mb-4 text-sm font-medium text-ink-soft sm:hidden">
                          {job.period}
                        </p>
                        <ul className="space-y-3">
                          {job.highlights.map((item) => (
                            <li
                              key={item}
                              className="relative pl-5 text-[0.95rem] leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-accent-deep">
                          {job.tech.join(" · ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
