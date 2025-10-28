import Link from "next/link";

import { getServiceHref, serviceBasePath, services } from "@/lib/services";

const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Consultoría Tech
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-200">
          <div className="relative group">
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
            <div className="invisible absolute left-0 top-full z-20 mt-3 w-72 rounded-2xl border border-white/10 bg-slate-900/95 p-3 opacity-0 shadow-xl transition focus-within:visible focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
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
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-emerald-300">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="rounded-full border border-emerald-400/60 px-5 py-2 text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
          >
            Hablemos hoy
          </Link>
        </nav>
      </div>
    </header>
  );
}
