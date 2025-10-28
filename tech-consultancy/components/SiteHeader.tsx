"use client";

import Link from "next/link";
import { useState } from "react";

import { getServiceHref, serviceBasePath, services } from "@/lib/services";

const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Consultoría Tech
          </span>
          <button
            type="button"
            onClick={handleToggleMenu}
            className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 md:hidden"
            aria-controls="site-navigation"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
        <nav
          id="site-navigation"
          className={`${isMenuOpen ? "mt-6 flex" : "hidden"} flex-col gap-4 text-sm font-semibold text-slate-200 md:mt-6 md:flex md:flex-row md:flex-wrap md:items-center md:justify-between`}
        >
          <div className="md:hidden">
            <Link
              href={serviceBasePath}
              onClick={handleCloseMenu}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 px-4 py-2 text-emerald-200 transition hover:border-emerald-400/60 hover:text-emerald-100"
            >
              Servicios
            </Link>
            <ul className="mt-3 space-y-2 text-xs font-normal text-slate-300">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={getServiceHref(service.slug)}
                    onClick={handleCloseMenu}
                    className="block rounded-lg border border-transparent px-3 py-2 transition hover:border-emerald-500/40 hover:text-emerald-100"
                  >
                    <span className="block text-sm font-semibold text-slate-200">{service.name}</span>
                    <span className="mt-1 block text-xs text-slate-400">{service.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden md:block md:grow md:basis-0 md:text-center">
            <div className="group relative inline-block text-left">
              <Link
                href={serviceBasePath}
                className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 transition hover:border-emerald-400/60 hover:text-emerald-200"
              >
                Servicios
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <div className="invisible absolute left-1/2 z-20 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/95 p-3 opacity-0 shadow-xl transition focus-within:visible focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="space-y-1 text-sm">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={getServiceHref(service.slug)}
                        className="block rounded-xl px-4 py-2 text-slate-200 transition hover:bg-emerald-500/10 hover:text-emerald-100 focus:bg-emerald-500/10 focus:text-emerald-100"
                      >
                        <span className="block text-sm font-semibold">{service.name}</span>
                        <span className="mt-1 block text-xs font-normal text-slate-400">
                          {service.summary}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-end md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleCloseMenu}
                className="transition hover:text-emerald-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={handleCloseMenu}
              className="rounded-full border border-emerald-400/60 px-5 py-2 text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
            >
              Hablemos hoy
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
