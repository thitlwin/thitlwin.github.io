import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section-pad border-t border-line bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h2 className="font-display max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Building mobile products people rely on — from architecture to the store.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {profile.about}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {[
            { value: "12+", label: "Years in software" },
            { value: "6+", label: "Years native Android" },
            { value: "6", label: "Production apps shipped" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={150 + i * 80}>
              <div className="border-t border-line pt-5">
                <p className="font-display text-4xl font-bold text-accent md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-ink-soft">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
