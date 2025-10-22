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
  { label: "Ahorro promedio de horas", value: "28%" },
  { label: "Disponibilidad SLA", value: "99.8%" },
];

const contactChannels = [
  {
    label: "Agenda una reunión",
    description: "Coordinamos un diagnóstico express de 45 minutos sin costo.",
    action: "Calendario",
  },
  {
    label: "Escríbenos",
    description: "Cuéntanos tus desafíos y te respondemos en menos de 24 horas hábiles.",
    action: "contacto@consultoriapymes.tech",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-12 lg:px-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Consultoría Tech
            </span>
            <p className="mt-1 text-xl font-bold text-white md:text-2xl">Soluciones digitales para pymes ambiciosas</p>
          </div>
          <a
            href="#contacto"
            className="hidden rounded-full border border-emerald-400/60 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100 md:inline-flex"
          >
            Hablemos hoy
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:px-12 lg:px-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-300">
              Impulsamos tu crecimiento tecnológico
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Diseñamos sistemas, automatizaciones y despliegues listos para escalar.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Acompañamos a pequeñas y medianas empresas a evolucionar su tecnología con una visión end-to-end: desde la
              estrategia hasta el soporte continuo. Nuestro enfoque pragmático acelera la entrega de valor y elimina la fricción
              operativa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#servicios"
                className="flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Ver servicios
              </a>
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
            <h2 className="text-2xl font-semibold text-white">Casos recientes</h2>
            <div className="space-y-6">
              <article className="relative rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">Retail · Plataforma de e-commerce B2B</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Rediseñamos la arquitectura, conectamos con ERP y automatizamos el catálogo, aumentando un 45% las ventas
                  repetidas.
                </p>
              </article>
              <article className="relative rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">Manufactura · Monitoreo IoT</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Implementamos dashboards de planta y alertas predictivas, reduciendo en 30% el tiempo de inactividad.
                </p>
              </article>
              <article className="relative rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">Salud · Automatización de turnos</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Integramos sistemas de agenda, facturación y pacientes para lograr trazabilidad completa del servicio.
                </p>
              </article>
            </div>
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

        <section className="grid gap-12 rounded-3xl border border-white/10 bg-slate-900/40 p-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Por qué elegirnos</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Alineamos tecnología con objetivos de negocio</h2>
            <p className="text-base text-slate-300">
              No somos solo implementadores. Somos socios estratégicos que acompañan tus decisiones tecnológicas, detectan
              riesgos y construyen capacidades internas para que tu empresa sea más ágil y competitiva.
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
                <p className="mt-4 text-sm font-semibold text-emerald-200">{channel.action}</p>
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
