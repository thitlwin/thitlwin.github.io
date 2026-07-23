import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-line bg-ink py-8 text-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold">
          {profile.name} · {profile.title}
        </p>
        <p className="text-sm text-mist/60">© {year} All rights reserved.</p>
      </div>
    </footer>
  );
}
