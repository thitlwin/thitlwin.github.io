"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-mist/85 backdrop-blur-md border-b border-line shadow-[0_1px_0_rgba(15,26,31,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="section-pad mx-auto flex max-w-6xl items-center justify-between py-4">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.links.cv}
              className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-mist transition-colors hover:bg-accent"
              download
            >
              Download CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-ink transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-ink transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-mist/95 backdrop-blur-md md:hidden">
          <ul className="section-pad flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profile.links.cv}
                className="inline-flex rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-mist"
                download
                onClick={() => setOpen(false)}
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
