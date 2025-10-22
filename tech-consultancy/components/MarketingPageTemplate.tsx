import type { ReactNode } from "react";
import Link from "next/link";

import { SiteHeader } from "@/components/SiteHeader";

type HeroConfig = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  cta?: { label: string; href: string };
};

type SectionConfig = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  cards?: { title: string; description: string }[];
  body?: ReactNode;
};

type FinalCta = {
  title: string;
  description: string;
  actions: { label: string; href: string }[];
};

export type MarketingPageTemplateProps = {
  hero: HeroConfig;
  sections: SectionConfig[];
  finalCta?: FinalCta;
};

export function MarketingPageTemplate({ hero, sections, finalCta }: MarketingPageTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10 lg:px-12">
        <section className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/50 p-10">
          {hero.eyebrow ? (
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">{hero.eyebrow}</span>
          ) : null}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{hero.title}</h1>
            <p className="text-lg leading-8 text-slate-300">{hero.description}</p>
            {hero.bullets ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {hero.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {hero.cta ? (
              <Link
                href={hero.cta.href}
                className="inline-flex w-fit items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                {hero.cta.label}
              </Link>
            ) : null}
          </div>
        </section>

        {sections.map((section) => (
          <section
            key={section.title}
            id={section.id}
            className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/40 p-10"
          >
            <div className="space-y-4">
              {section.eyebrow ? (
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                  {section.eyebrow}
                </span>
              ) : null}
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{section.title}</h2>
              <p className="text-base text-slate-300">{section.description}</p>
            </div>
            {section.bullets ? (
              <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {section.cards ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {section.cards.map((card) => (
                  <article key={card.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm text-slate-300">{card.description}</p>
                  </article>
                ))}
              </div>
            ) : null}
            {section.body}
          </section>
        ))}

        {finalCta ? (
          <section className="space-y-4 rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-900 p-10 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{finalCta.title}</h2>
            <p className="text-base text-slate-200">{finalCta.description}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              {finalCta.actions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="inline-flex items-center justify-center rounded-full border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
