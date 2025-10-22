import Link from "next/link";

import { SiteHeader } from "@/components/SiteHeader";

const services = [
  {
    title: "Sistemas a medida",
    description:
      "Modernizamos y automatizamos tus plataformas clave para que puedan crecer junto con tu empresa.",
    items: [
      "Diagnóstico integral de sistemas heredados",
      "Migraciones y refactorizaciones progresivas",
      "Dashboards operativos en tiempo real",
    ],
  },
  {
    title: "Desarrollo y automatización",
    description:
      "Creamos herramientas web y flujos automatizados que reducen tareas manuales y errores humanos.",
    items: [
      "Aplicaciones web y móviles",
      "Integración con ERP, CRM y servicios en la nube",
      "Bots y procesos automáticos con monitoreo",
    ],
  },
  {
    title: "DevOps y despliegues",
    description:
      "Diseñamos pipelines confiables para que cada entrega llegue a producción de forma segura y repetible.",
    items: [
      "Infraestructura como código",
      "Observabilidad 24/7",
      "Soporte y mantenimiento evolutivo",
    ],
  },
];

const differentiators = [
  {
    title: "Visión 360°",
    description:
      "Unimos estrategia, tecnología y procesos para obtener resultados tangibles desde el primer mes.",
  },
  {
    title: "Equipo senior",
    description:
      "Consultores con más de 10 años acompañando pymes en industria, retail, salud y servicios profesionales.",
  },
  {
    title: "Velocidad y cercanía",
    description:
      "Sprints quincenales, seguimiento ejecutivo y documentación clara para tu equipo interno.",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Descubrimiento",
    description:
      "Analizamos tus procesos críticos, detectamos cuellos de botella y alineamos objetivos con la dirección.",
  },
  {
    step: "02",
    title: "Plan de acción",
    description:
      "Priorizamos iniciativas de alto impacto y definimos responsables, tiempos y métricas de éxito.",
  },
  {
    step: "03",
    title: "Implementación",
    description:
      "Desarrollamos soluciones, automatizamos y desplegamos con pruebas continuas y comunicación constante.",
  },
  {
    step: "04",
    title: "Acompañamiento",
    description:
      "Entrenamos a tu equipo, monitoreamos resultados y ajustamos para garantizar la adopción y el ROI.",
  },
];

const testimonials = [
  {
    name: "Carolina Méndez",
    role: "Directora Operativa · Grupo Lumen",
    quote:
      "En tres meses automatizamos el control de stock y logramos reducir en un 35% los tiempos de reposición.",
  },
  {
    name: "Martín Rivas",
    role: "CEO · Clínica Sanar",
    quote:
      "Transformaron nuestra plataforma de turnos y hoy integramos historia clínica y facturación sin fricciones.",
  },
];

const stats = [
  { label: "Proyectos entregados", value: "120+" },
  { label: "Promedio de adopción de nuevos sistemas", value: "95%" },
  { label: "Disponibilidad SLA", value: "99.8%" },
];

const contactChannels = [
  {
    label: "Agenda una reunión",
    description: "Coordinamos un diagnóstico express de 45 minutos sin costo.",
    actionLabel: "Abrir calendario",
    href: "https://cal.com/consultoriapymes/diagnostico",
  },
  {
    label: "Escríbenos",
    description: "Cuéntanos tus desafíos y te respondemos en menos de 24 horas hábiles.",
    actionLabel: "contacto@consultoriapymes.tech",
    href: "mailto:contacto@consultoriapymes.tech",
  },
  {
    label: "Descarga nuestro dossier",
    description:
      "Obtén un resumen de capacidades, casos de éxito y referencias comprobables para tu directorio.",
    actionLabel: "Ver dossier",
    href: "https://consultoriapymes.tech/dossier.pdf",
  },
];

const faqs = [
  {
    question: "¿Trabajan con contratos a medida o paquetes cerrados?",
    answer:
      "Definimos un plan personalizado según tus objetivos y presupuesto. Podemos trabajar por proyecto, horas mensuales o squads dedicados.",
  },
  {
    question: "¿Qué tan rápido podemos ver resultados?",
    answer:
      "El diagnóstico inicial se entrega en la primera semana y los primeros entregables funcionales se planifican para las semanas 3 y 4, con KPIs claros desde el día uno.",
  },
  {
    question: "¿Cómo aseguran la transferencia de conocimiento?",
    answer:
      "Documentamos cada solución, realizamos workshops de adopción y dejamos embajadores internos para sostener los cambios tras el cierre del proyecto.",
  },
];

const projects = [
  {
    title: "Retail · Plataforma de e-commerce B2B",
    description:
      "Rediseñamos la arquitectura, conectamos con ERP y automatizamos el catálogo, aumentando un 45% las ventas repetidas.",
  },
  {
    title: "Manufactura · Monitoreo IoT",
    description:
      "Implementamos dashboards de planta y alertas predictivas, reduciendo en 30% el tiempo de inactividad.",
  },
  {
    title: "Salud · Automatización de turnos",
    description:
      "Integramos sistemas de agenda, facturación y pacientes para lograr trazabilidad completa del servicio.",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:px-12 lg:px-16">
        <section id="inicio" className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-300">
              Consultoría tecnológica para pymes ambiciosas
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Estrategia, desarrollo y operaciones para escalar tu negocio con tecnología.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Diseñamos y ejecutamos soluciones informáticas que eliminan cuellos de botella, conectan tus sistemas y generan
              crecimiento sostenido. Trabajamos con directivos de pymes para transformar la operación sin frenar el negocio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#servicios"
                className="flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Ver servicios
              </a>
              <Link
                href="/quienes-somos"
                className="flex items-center justify-center rounded-full border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
              >
                Conoce al equipo
              </Link>
              <a
                href="#contacto"
                className="flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:text-emerald-100"
              >
                Solicitar diagnóstico
              </a>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center shadow-[0_20px_40px_-40px_rgba(45,212,191,0.4)]"
                >
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-10 shadow-[0_40px_120px_-60px_rgba(16,185,129,0.6)]">
            <div className="absolute inset-x-12 -top-20 h-40 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-10 -right-6 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden />
            <h2 className="text-2xl font-semibold text-white">Tu socio tecnológico integral</h2>
            <p className="text-sm text-slate-300">
              Nos involucramos de punta a punta en tu transformación digital: diagnóstico estratégico, entrega iterativa y
              soporte evolutivo para que cada inversión se traduzca en impacto real.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                <span>Workshops ejecutivos para alinear visión, KPIs y roadmap.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                <span>Squads senior que se integran con tu operación sin burocracia.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                <span>Indicadores en tiempo real y tableros para dirección y operación.</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="servicios" className="space-y-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Servicios</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Soluciones integrales para cada etapa</h2>
            </div>
            <p className="max-w-2xl text-base text-slate-300">
              Combinamos estrategia, ingeniería y operaciones para entregar soluciones que se adapten a tu contexto y se
              mantengan en el tiempo.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
                <h3 className="text-xl font-semibold text-white group-hover:text-emerald-200">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300">{service.description}</p>
                <ul className="space-y-2 text-sm text-slate-200/90">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="quienes-somos"
          className="grid gap-12 rounded-3xl border border-white/10 bg-slate-900/40 p-10 lg:grid-cols-[0.9fr,1.1fr]"
        >
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Quiénes somos</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Consultores que crecen junto a tu pyme</h2>
            <p className="text-base text-slate-300">
              Somos un equipo senior de estrategas, diseñadores y especialistas en operaciones digitales que habla el idioma
              de negocio. Nos enfocamos en resultados medibles, colaboración transparente y transferencia de conocimiento a tu
              equipo interno.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {differentiators.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Metodología</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Implementación con foco en resultados</h2>
            </div>
            <p className="max-w-2xl text-base text-slate-300">
              A través de un roadmap claro y transparente nos aseguramos de entregar avances frecuentes y medibles.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmap.map((step) => (
              <article key={step.step} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">{step.step}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proyectos" className="space-y-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Proyectos</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Casos que demuestran nuestro impacto</h2>
            </div>
            <p className="max-w-2xl text-base text-slate-300">
              Cada iniciativa se acompaña de indicadores y aprendizajes que documentamos para escalar a otras áreas del
              negocio.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-8">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Diagnóstico ejecutivo</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Un plan en 90 días con ROI medible</h2>
            <p className="text-base text-slate-200">
              Identificamos oportunidades de automatización, priorizamos iniciativas de alto impacto y definimos un tablero de
              control para dirección. Todo en menos de tres semanas y con una hoja de ruta accionable de 90 días.
            </p>
            <ul className="space-y-3 text-sm text-slate-100">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                <span>Benchmark tecnológico frente a empresas de tu sector.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                <span>Mapa de procesos críticos con riesgos y oportunidades priorizadas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                <span>Roadmap con métricas, responsables y estimación de inversión.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">¿Qué incluye?</h3>
              <p className="text-sm text-slate-300">
                Sesiones remotas o presenciales, entrevistas con áreas clave y entrega ejecutiva con backlog priorizado. Ideal
                para decidir próximas inversiones tecnológicas con certeza.
              </p>
            </div>
            <a
              href="https://cal.com/consultoriapymes/diagnostico"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              target="_blank"
              rel="noreferrer"
            >
              Reservar diagnóstico sin costo
            </a>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/50 p-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Testimonios</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Historias de impacto</h2>
            <p className="text-base text-slate-300">
              Nuestros clientes confían en nosotros para resolver desafíos complejos y construir capacidades que perduren.
            </p>
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <blockquote className="text-sm text-slate-200">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {testimonial.name} · {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="space-y-10 rounded-3xl border border-white/10 bg-slate-900/40 p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Preguntas frecuentes</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Lo que los directores de pymes quieren saber</h2>
            <p className="text-base text-slate-300">
              Transparencia y claridad desde el primer contacto. Estas son algunas de las preguntas que respondemos en nuestras
              reuniones iniciales.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contacto" className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:px-12 lg:px-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold text-white">Comencemos tu próxima evolución tecnológica</h2>
            <p className="text-sm text-slate-300">
              Escríbenos con los retos de tu pyme y en 24 horas estaremos coordinando los próximos pasos para trabajar juntos.
            </p>
          </div>
          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            {contactChannels.map((channel) => (
              <div key={channel.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold text-white">{channel.label}</h3>
                <p className="mt-2 text-sm text-slate-300">{channel.description}</p>
                <a
                  href={channel.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {channel.actionLabel}
                  <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
            <p>© {currentYear} Consultoría Tech · Soluciones informáticas para pymes.</p>
            <p className="text-slate-600">Hecho con enfoque humano y obsesión por la calidad.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
