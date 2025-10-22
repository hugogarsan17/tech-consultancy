import type { Metadata } from "next";

import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contacto | Consultoría tecnológica para pymes",
  description:
    "Programa una sesión estratégica, escríbenos directamente o accede a nuestros canales ejecutivos para iniciar tu proyecto de transformación digital.",
};

const contactOptions = [
  {
    badge: "Diagnóstico ejecutivo",
    title: "Agenda una sesión estratégica",
    description:
      "Revisamos tus objetivos, tecnologías actuales y prioridades de inversión para definir el roadmap ideal.",
    ctaLabel: "Agendar 45 minutos",
    href: "https://cal.com/consultoriapymes/diagnostico",
  },
  {
    badge: "Respuesta en <12h",
    title: "Escríbenos por correo",
    description:
      "Comparte contexto, sistemas involucrados y KPIs deseados. Nuestro equipo asignará un consultor senior.",
    ctaLabel: "contacto@consultoriapymes.tech",
    href: "mailto:contacto@consultoriapymes.tech",
  },
  {
    badge: "Soporte continuo",
    title: "Canal directo por WhatsApp Business",
    description:
      "Para dudas rápidas sobre propuestas en curso o coordinación de workshops ejecutivos.",
    ctaLabel: "+54 9 11 5555 8900",
    href: "https://wa.me/5491155558900",
  },
];

const teamContacts = [
  {
    name: "Ana Torres",
    role: "Directora de Consultoría",
    email: "ana.torres@consultoriapymes.tech",
    phone: "+54 9 11 4000 2100",
    focus: "Transformación operativa y roadmap tecnológico",
  },
  {
    name: "Luis Fernández",
    role: "Head of Delivery",
    email: "luis.fernandez@consultoriapymes.tech",
    phone: "+34 698 123 880",
    focus: "Implementación de soluciones y gestión de cambio",
  },
];

const preparationChecklist = [
  {
    title: "Objetivos prioritarios",
    description:
      "Clarifica qué resultados debe lograr la tecnología en tu pyme durante los próximos 6-12 meses.",
  },
  {
    title: "Sistemas actuales",
    description:
      "Lista las herramientas vigentes y los procesos manuales que hoy generan cuellos de botella.",
  },
  {
    title: "Indicadores críticos",
    description:
      "Comparte métricas de operación (tiempos, costos, NPS interno) para establecer una línea base.",
  },
];

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:px-12 lg:px-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-300">
              Estamos listos para acompañar tu siguiente hito digital
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Conversemos sobre los desafíos tecnológicos de tu pyme
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Nuestro equipo senior te ayuda a diagnosticar, priorizar e implementar soluciones informáticas que aceleran tu operación. Elige el canal que mejor se adapte a tu agenda y recibe una propuesta clara en menos de cinco días hábiles.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <dt className="text-sm font-semibold text-emerald-300">Tiempo de respuesta</dt>
                <dd className="mt-2 text-2xl font-bold text-white">Menos de 12 horas hábiles</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <dt className="text-sm font-semibold text-emerald-300">Cobertura horaria</dt>
                <dd className="mt-2 text-2xl font-bold text-white">08:00-19:00 GMT-3 / 09:00-18:00 GMT+1</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-900/40 p-10 shadow-lg shadow-emerald-500/10">
            <h2 className="text-2xl font-semibold text-white">¿Qué ocurre después del contacto?</h2>
            <ol className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-200">
                  1
                </span>
                <span>
                  Un consultor senior revisa tu contexto, agenda la sesión y envía una guía de preparación para la reunión.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-200">
                  2
                </span>
                <span>
                  Durante el diagnóstico definimos objetivos, riesgos y quick wins priorizados según impacto y esfuerzo.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-200">
                  3
                </span>
                <span>
                  Recibes un informe ejecutivo con plan de trabajo, inversión estimada y alternativas de colaboración.
                </span>
              </li>
            </ol>
            <p className="mt-6 text-sm text-slate-400">
              Si ya trabajas con nosotros, accede al portal de clientes desde el enlace enviado por tu Project Lead para dar seguimiento a entregables y acuerdos de servicio.
            </p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3" aria-label="Canales de contacto">
          {contactOptions.map((option) => {
            const isExternal = option.href.startsWith("http");

            return (
              <div
                key={option.title}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-emerald-500/10"
              >
                <div>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                    {option.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{option.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{option.description}</p>
                </div>
                <a
                  href={option.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-emerald-400/60 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
                >
                  {option.ctaLabel}
                </a>
              </div>
            );
          })}
        </section>

        <section id="diagnostico" className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg shadow-emerald-500/10">
            <h2 className="text-3xl font-semibold text-white">Comparte tu contexto</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Completa el formulario para que podamos preparar un diagnóstico pertinente antes de nuestra primera reunión.
            </p>
            <form
              action="https://formsubmit.co/contacto@consultoriapymes.tech"
              method="POST"
              className="mt-8 grid gap-6"
            >
              <input type="hidden" name="_subject" value="Nuevo contacto desde consultoriapymes.tech" />
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-200" htmlFor="fullName">
                  Nombre y apellido
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Ej. Laura Gómez"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-200" htmlFor="email">
                    Correo corporativo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Ej. nombre@tuempresa.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-200" htmlFor="phone">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Incluye código de país"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-200" htmlFor="company">
                  Empresa y tamaño del equipo
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder="Ej. Inversiones Atlas · 120 colaboradores"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-200" htmlFor="challenges">
                  Principales desafíos
                </label>
                <textarea
                  id="challenges"
                  name="challenges"
                  required
                  rows={4}
                  placeholder="Describe brevemente procesos críticos, herramientas actuales y objetivos de mejora."
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-200" htmlFor="timeline">
                    Horizonte deseado
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-emerald-400/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="Menos de 3 meses">Menos de 3 meses</option>
                    <option value="3 a 6 meses">3 a 6 meses</option>
                    <option value="6 a 12 meses">6 a 12 meses</option>
                    <option value="Más de 12 meses">Más de 12 meses</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-200" htmlFor="budget">
                    Presupuesto estimado (USD)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-emerald-400/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="Hasta 10k">Hasta 10k</option>
                    <option value="10k - 25k">10k - 25k</option>
                    <option value="25k - 50k">25k - 50k</option>
                    <option value="Más de 50k">Más de 50k</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Enviar información
              </button>
              <p className="text-xs text-slate-500">
                Al enviar este formulario aceptas nuestra política de privacidad y autorizas el contacto por los canales proporcionados.
              </p>
            </form>
          </div>
          <aside className="flex flex-col gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-emerald-500/10">
              <h3 className="text-xl font-semibold text-white">Equipo de primer contacto</h3>
              <ul className="mt-5 space-y-5 text-sm leading-6 text-slate-300">
                {teamContacts.map((contact) => {
                  const sanitizedPhone = contact.phone.replace(/[^\d+]/g, "");

                  return (
                    <li key={contact.email} className="rounded-2xl border border-white/5 bg-slate-900/60 p-5">
                      <p className="text-base font-semibold text-white">{contact.name}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">{contact.role}</p>
                      <p className="mt-3 text-sm text-slate-300">{contact.focus}</p>
                      <div className="mt-4 grid gap-2 text-sm">
                        <a className="text-emerald-200 transition hover:text-emerald-100" href={`mailto:${contact.email}`}>
                          {contact.email}
                        </a>
                        <a className="text-emerald-200 transition hover:text-emerald-100" href={`tel:${sanitizedPhone}`}>
                          {contact.phone}
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-900 p-8 text-sm leading-6 text-slate-300">
              <h3 className="text-xl font-semibold text-white">Prepárate para aprovechar la sesión</h3>
              <p className="mt-3">
                Trae información clave y asegúrate de que los decisores estén disponibles para una conversación estratégica.
              </p>
              <ul className="mt-5 space-y-4">
                {preparationChecklist.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-200">
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
          <div>
            <p className="text-base font-semibold text-white">Consultoría Tech para PYMES</p>
            <p className="mt-1">Buenos Aires · Madrid · Clientes en Latinoamérica y Europa</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-emerald-200" href="mailto:contacto@consultoriapymes.tech">
              contacto@consultoriapymes.tech
            </a>
            <a className="transition hover:text-emerald-200" href="tel:+5491155558900">
              +54 9 11 5555 8900
            </a>
            <a
              className="transition hover:text-emerald-200"
              href="https://www.linkedin.com/company/consultoriapymes"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
