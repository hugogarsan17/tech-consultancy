import Link from "next/link";

import { SiteHeader } from "@/components/SiteHeader";
import { getServiceHref, services } from "@/lib/services";

const engagementSteps = [
  {
    title: "Diagnóstico y estrategia",
    description:
      "Analizamos tus metas de negocio y evaluamos el estado actual para priorizar iniciativas de alto impacto.",
  },
  {
    title: "Implementación iterativa",
    description:
      "Diseñamos roadmaps con entregables frecuentes que combinan valor rápido y bases sólidas para escalar.",
  },
  {
    title: "Medición y acompañamiento",
    description:
      "Establecemos indicadores, compartimos reportes ejecutivos y ajustamos el plan según resultados reales.",
  },
];

const differentiators = [
  {
    title: "Equipo senior multidisciplinario",
    description:
      "Consultores, ingenieros y especialistas en operaciones que hablan el lenguaje de dirección y de tecnología.",
  },
  {
    title: "Flexibilidad en la forma de trabajo",
    description:
      "Proyectos llave en mano, células dedicadas o soporte continuo según el ritmo y la madurez de tu organización.",
  },
  {
    title: "Gobernanza y transferencia",
    description:
      "Documentamos procesos, entrenamos a tus equipos y dejamos capacidades instaladas para sostener los cambios.",
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 md:px-12 lg:px-16">
        <section className="grid gap-12 rounded-3xl border border-white/10 bg-slate-900/40 p-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Servicios
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Capacidades end-to-end para acelerar la transformación digital de tu pyme
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              Acompañamos a organizaciones que necesitan evolucionar rápido sin perder el control. Diseñamos soluciones a medida
              y las sostenemos en el tiempo con equipos cercanos y métricas compartidas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Agenda una reunión
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:text-emerald-100"
              >
                Ver casos de éxito
              </Link>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/80 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Cómo te acompañamos
            </p>
            <ul className="space-y-4 text-sm text-slate-200">
              {engagementSteps.map((step) => (
                <li key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-slate-300">{step.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Portafolio</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Explora nuestros servicios especializados
              </h2>
            </div>
            <p className="max-w-2xl text-base text-slate-300">
              Selecciona el servicio que mejor se adapta a tus prioridades actuales y conoce en detalle el alcance, entregables
              y resultados que podemos construir juntos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.slug} className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/50 p-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  <p className="text-sm text-slate-300">{service.summary}</p>
                </div>
                <ul className="flex flex-1 list-none flex-col gap-2 text-sm text-slate-200">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={getServiceHref(service.slug)}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/60 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
                >
                  Ver detalle del servicio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 5.22a.75.75 0 0 1 1.06 0l5.47 5.47V7a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h3.69L5.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-slate-900/40 p-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Lo que nos diferencia</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Socios tecnológicos comprometidos con tus resultados</h2>
            <p className="text-base text-slate-300">
              No vendemos horas sueltas: co-diseñamos soluciones con dirección y líderes operativos para asegurar adopción y
              retorno de la inversión desde el primer trimestre.
            </p>
          </div>
          <div className="grid gap-4">
            {differentiators.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-900 p-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Hablemos sobre tus próximos pasos tecnológicos</h2>
          <p className="text-base text-slate-200">
            Agenda un encuentro con nuestro equipo y en siete días tendrás un roadmap accionable con quick wins y el plan de
            inversión sugerido.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Reservar diagnóstico sin costo
            </Link>
            <Link
              href="mailto:contacto@consultoriapymes.tech"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:text-emerald-100"
            >
              Escribir al equipo
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
