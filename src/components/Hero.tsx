import Image from "next/image";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-field relative min-h-[100svh] overflow-hidden"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />

      <div
        className="animate-drift pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl md:h-96 md:w-96"
        aria-hidden
      />

      {/* Full-bleed headshot plane — edge-to-edge on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] md:block lg:w-[48%]">
        <Image
          src="/headshot.png"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-[center_15%]"
          sizes="48vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--mist) 0%, rgba(232,238,242,0.72) 18%, transparent 42%), linear-gradient(180deg, var(--mist) 0%, transparent 18%), linear-gradient(0deg, var(--mist-deep) 0%, transparent 22%)",
          }}
          aria-hidden
        />
      </div>

      <div className="section-pad relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center py-28 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-8">
          <div className="relative z-10 max-w-xl">
            <p className="animate-rise mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">
              {profile.location}
            </p>

            <h1 className="animate-rise-delay-1 font-display text-[clamp(3.25rem,11vw,7rem)] font-extrabold leading-[0.9] tracking-tight text-ink">
              {profile.name}
            </h1>

            <p className="animate-rise-delay-2 mt-5 font-display text-xl font-semibold text-ink-soft md:text-2xl">
              {profile.title}
            </p>

            <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              {profile.tagline}
            </p>

            <div className="animate-rise-delay-3 mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-mist transition-transform hover:scale-[1.02] hover:bg-accent"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-deep"
              >
                View projects
              </a>
            </div>
          </div>

          {/* Mobile headshot — full-width visual under copy */}
          <div className="animate-fade relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden md:hidden">
            <Image
              src="/headshot.png"
              alt={`${profile.name} — ${profile.title}`}
              fill
              priority
              unoptimized
              className="object-cover object-top"
              sizes="90vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, var(--mist-deep) 0%, transparent 30%)",
              }}
              aria-hidden
            />
          </div>

          {/* Desktop spacer so text doesn't collide with bleed image */}
          <div className="hidden md:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}
