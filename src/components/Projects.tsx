import { Reveal } from "./Reveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-line bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Projects
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Apps in production.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            Selected commercial work across Flutter, native Android, and education platforms.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 70}>
              <article className="group border-t border-line pt-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                    {project.team}
                  </span>
                </div>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  {project.description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent-deep">
                  {project.tech.join(" · ")}
                </p>
                <div className="mt-5 flex flex-wrap gap-4">
                  {project.links.play && (
                    <a
                      href={project.links.play}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      Play Store
                    </a>
                  )}
                  {"appStore" in project.links && project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      App Store
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
