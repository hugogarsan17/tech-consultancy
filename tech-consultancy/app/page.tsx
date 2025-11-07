import Link from "next/link";

import { SiteHeader } from "@/components/SiteHeader";

const services = [
  {
    title: "MVPs y pruebas de concepto",
    description:
      "Validamos rápido tus hipótesis con productos mínimos viables y prototipos navegables.",
    items: [
      "Prototipos en 1–2 semanas",
      "MVP web/mobile con alcance acotado",
      "Iteraciones guiadas por feedback",
    ],
  },
  {
    title: "Automatización ligera",
    description:
      "Eliminamos tareas manuales usando no-code/low-code e integraciones simples.",
    items: [
      "Zaps/Flows y micro-scripts",
      "Integración con CRM/Sheets/Email",
      "Dashboards básicos de operación",
    ],
  },
  {
    title: "Infra y despliegue sin fricción",
    description:
      "Deja tu stack listo para crecer sin sobre-ingeniería ni costos innecesarios.",
    items: [
      "Pipelines simples CI/CD",
      "Infra como plantilla (IaC light)",
      "Monitoreo básico y soporte inicial",
    ],
  },
];

const differentiators = [
  {
    title: "Founder-led",
    description:
      "Trabajo directo con los fundadores. Decisiones ágiles, menos burocracia y foco en resultados.",
  },
  {
    title: "Enfoque lean",
    description:
      "Entregas pequeñas y frecuentes. Construimos sólo lo necesario para aprender y avanzar.",
  },
  {
    title: "Accesible y transparente",
    description:
      "Precios claros y por etapas. Comienza con un sprint pequeño y escala cuando tenga sentido.",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Llamada de encaje (30’)",
    description:
      "Revisamos objetivos, contexto y definimos el éxito del primer experimento.",
  },
  {
    step: "02",
    title: "Sprint de descubrimiento (1–2 semanas)",
    description:
      "Mapeamos usuarios, flujos críticos y priorizamos un MVP/PoC alcanzable.",
  },
  {
    step: "03",
    title: "Construcción del MVP (2–6 semanas)",
    description:
      "Desarrollamos la solución mínima, integramos lo esencial y medimos uso real.",
  },
  {
    step: "04",
    title: "Aprendizaje y mejora",
    description:
      "Recogemos feedback, iteramos y planeamos el siguiente hito según tracción.",
  },
];

const testimonials = [
  {
    name: "Programa Early Adopters",
    role: "Primeros clientes",
    quote:
      "Nos ayudaron a lanzar un prototipo funcional en semanas; ahora iteramos con datos reales.",
  },
  {
    name: "Fundadora de e-commerce nicho",
    role: "Piloto",
    quote:
      "Automatizamos reportes y soporte. Ahorramos horas semanales y entendemos mejor la demanda.",
  },
];

const contactChannels = [
  {
    label: "Reserva una llamada",
    description:
      "Agenda una intro de 30 minutos. Te respondemos en menos de 1 día hábil.",
    actionLabel: "Calendario",
    href: "/contacto", // o tu enlace de Calendly
  },
  {
    label: "Únete al programa beta",
    description:
      "Accede a tarifas de lanzamiento y prioridad en roadmap a cambio de feedback periódico.",
    actionLabel: "Quiero ser early adopter",
    href: "/beta",
  },
];

const faqs = [
  {
    question: "¿Cómo trabajan si están empezando?",
    answer:
      "En etapas cortas y enfocadas. Iniciamos con un sprint de descubrimiento y un MVP acotado para validar rápido.",
  },
  {
    question: "¿Qué modelos de colaboración ofrecen?",
    answer:
      "Por proyecto (MVP/PoC), bloques mensuales o una ‘mini-squad’ dedicada a tiempo parcial.",
  },
  {
    question: "¿Cuándo vemos resultados?",
    answer:
      "El plan de acción llega en la primera semana. El primer entregable funcional suele estar entre semanas 3 y 4.",
  },
  {
    question: "¿Quién se queda con la propiedad intelectual?",
    answer:
      "Tu empresa. Entregamos código, documentación y acceso a repositorios/infra desde el día uno.",
  },
];

const projects = [
  {
    title: "SaaS · MVP de onboarding",
    description:
      "Prototipo clicable y flujo básico de registro/pagos para validar disposición a pagar.",
  },
  {
    title: "Operaciones · Automatización ligera",
    description:
      "Integración CRM + Sheets + Email para reducir tareas manuales en seguimiento comercial.",
  },
  {
    title: "Analytics · Dashboard inicial",
    description:
      "Métricas clave (activación, retención, tickets) con fuentes simples y trazabilidad básica.",
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
              Startup de producto y servicios tech
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Construimos MVPs y automatizaciones ligeras para validar y crecer sin humo.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Somos un equipo pequeño y fundador-liderado. Diseñamos, construimos e iteramos contigo para
              aprender del usuario real y evitar sobre-ingeniería. Arranca pequeño, escala con evidencia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#servicios"
                className="flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Ver servicios
              </a>
              <Link
                href="/beta"
                className="flex items-center justify-center rounded-full border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
              >
                Programa beta
              </Link>
              <Link
                href="/contacto"
                className="flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:text-emerald-100"
              >
                Reserva una llamada
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-10 shadow-[0_40px_120px_-60px_rgba(16,185,129,0.6)]">
            <div className="absolute inset-x-12 -top-20 h-40 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-10 -right-6 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden />
            <h2 className="text-2xl font-semibold text-white">Empezamos simple, crecemos contigo</h2>
            <p className="text-sm text-slate-300">
              Nos enfocamos en validar rápido y aprender del mercado. Paquetes claros, documentación desde el día uno y
              entregas frecuentes.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                <span>Discovery express para definir el MVP realista.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                <span>Stack moderno y pragmático (sin sobre-costos).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                <span>Propiedad del código y traspaso de conocimiento.</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="servicios" className="space-y-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Servicios</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Lo esencial para empezar</h2>
            </div>
            <p className="max-w-2xl text-base text-slate-300">
              Diseñados para validar, aprender y crecer con riesgos controlados. Construimos sólo lo que agrega valor hoy.
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Un equipo pequeño, cerca del problema</h2>
            <p className="text-base text-slate-300">
              Somos desarrolladores y estrategas de producto en etapa temprana. Trabajamos codo a codo con fundadores y
              equipos chicos para lanzar rápido, medir y aprender. Sin promesas vacías: transparencia y foco.
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
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Construir, medir, aprender</h2>
            </div>
            <p className="max-w-2xl text-base text-slate-300">
              Roadmap claro, entregas cortas y métricas que importan. Cada hito desbloquea el siguiente.
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Pilotos</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Validaciones recientes</h2>
            </div>
            <p className="max-w-2xl text-base text-slate-300">
              Casos pequeños, impacto tangible. Priorizamos aprender rápido y reducir riesgo antes de escalar.
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

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/50 p-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Testimonios</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Primeras voces</h2>
            <p className="text-base text-slate-300">
              Estamos construyendo con nuestros primeros clientes. Esto es lo que destacan del proceso.
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Lo que solemos aclarar</h2>
            <p className="text-base text-slate-300">
              Respuestas breves y directas para tomar una decisión informada y empezar.
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

        <section id="contacto" className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/40 p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Contacto</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Hablemos de tu primer hito</h2>
            <p className="text-base text-slate-300">
              Cupos limitados para el programa beta. Si encaja, empezamos con un sprint de descubrimiento.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {contactChannels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-white/20"
              >
                <p className="text-sm font-semibold text-emerald-200">{c.label}</p>
                <p className="mt-1 text-sm text-slate-300">{c.description}</p>
                <p className="mt-3 text-sm font-medium text-white">{c.actionLabel}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
