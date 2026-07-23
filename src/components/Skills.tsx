import { Reveal } from "./Reveal";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Skills
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Tools I ship with.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 60}>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{category}</h3>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
