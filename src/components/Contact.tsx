import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden border-t border-line py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, var(--hero-b) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, var(--hero-a) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Let&apos;s build something that ships.
          </h2>
          <p className="mt-4 max-w-lg text-ink-soft">
            Open to Senior Software Engineer roles and freelance collaborations. Reach out anytime.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-4">
            <a
              href={profile.links.email}
              className="font-display text-xl font-bold text-ink underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent md:text-2xl"
            >
              {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Phone / WhatsApp / Telegram
              </dt>
              <dd className="mt-1 text-sm font-medium text-ink">{profile.phone}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Skype
              </dt>
              <dd className="mt-1 text-sm font-medium text-ink">{profile.skype}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Address
              </dt>
              <dd className="mt-1 text-sm font-medium text-ink">
                {profile.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="block">{profile.location}</span>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-mist transition-colors hover:bg-accent"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-deep"
            >
              Telegram
            </a>
            <a
              href={profile.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-deep"
            >
              WhatsApp
            </a>
            <a
              href={profile.links.cv}
              download
              className="rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-deep"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
