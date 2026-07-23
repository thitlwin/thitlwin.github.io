import { Reveal } from "./Reveal";
import { awards, education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="section-pad border-t border-line bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Education
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Learning & credentials.
              </h2>
            </Reveal>

            <ul className="mt-10 space-y-6">
              {education.map((item, i) => (
                <Reveal key={item.title} delay={i * 50}>
                  <li className="border-t border-line pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-base font-bold text-ink md:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-ink-soft">{item.org}</p>
                      </div>
                      <span className="shrink-0 text-sm font-medium text-accent-deep">
                        {item.year}
                      </span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Awards
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Recognition.
              </h2>
            </Reveal>

            <ul className="mt-10 space-y-6">
              {awards.map((item, i) => (
                <Reveal key={item.title} delay={i * 50}>
                  <li className="border-t border-line pt-5">
                    <h3 className="font-display text-base font-bold text-ink md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.org}</p>
                    <p className="mt-2 text-sm text-ink-soft">{item.detail}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
