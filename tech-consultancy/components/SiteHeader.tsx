import Link from "next/link";

const navigation = [
  { label: "Home", href: "/#inicio" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Consultoría Tech
          </span>
          <p className="mt-1 text-xl font-bold text-white md:text-2xl">Soluciones digitales para pymes ambiciosas</p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-200">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-emerald-300">
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="rounded-full border border-emerald-400/60 px-5 py-2 text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
          >
            Hablemos hoy
          </Link>
        </nav>
      </div>
    </header>
  );
}
