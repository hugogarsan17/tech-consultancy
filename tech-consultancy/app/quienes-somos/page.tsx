import { MarketingPageTemplate } from "@/components/MarketingPageTemplate";

const hero = {
  eyebrow: "Quiénes somos",
  title: "Un equipo senior que acelera la evolución tecnológica de tu pyme",
  description:
    "Somos estrategas, ingenieros y especialistas operativos que combinan visión de negocio con ejecución técnica para entregar resultados medibles en semanas, no en meses.",
  bullets: [
    "Más de 120 proyectos lanzados en industrias como retail, salud y manufactura",
    "Acompañamiento integral: descubrimiento, implementación y soporte continuo",
    "Células multidisciplinarias que se integran con tus equipos internos",
    "Gobernanza y documentación para que tu organización mantenga el control",
  ],
  cta: {
    label: "Agenda una reunión",
    href: "/#contacto",
  },
};

const sections = [
  {
    eyebrow: "Nuestra identidad",
    title: "Aliados estratégicos con foco en impacto",
    description:
      "Nacimos como un colectivo de especialistas que veía cómo las pymes quedaban atrás por falta de equipos tecnológicos accesibles. Hoy nos integramos como un socio cercano que comparte objetivos y riesgos.",
    cards: [
      {
        title: "Mentalidad pragmática",
        description: "Priorizamos entregables tangibles y medimos cada iniciativa con métricas de negocio claras.",
      },
      {
        title: "Transparencia total",
        description: "Documentamos decisiones, presupuestos y resultados para que siempre sepas qué estamos haciendo y por qué.",
      },
      {
        title: "Aprendizaje continuo",
        description: "Invertimos en investigación y capacitación constante para acercar las mejores prácticas a tu empresa.",
      },
      {
        title: "Compromiso humano",
        description: "Construimos relaciones de largo plazo basadas en confianza, escucha activa y colaboración honesta.",
      },
    ],
  },
  {
    eyebrow: "Cómo trabajamos",
    title: "Equipos que se adaptan a tu contexto",
    description:
      "Diseñamos células a medida con perfiles técnicos y funcionales que se integran con tus procesos y herramientas para acelerar la ejecución sin perder control.",
    bullets: [
      "Squads de producto, data, automatización y operaciones",
      "Liderazgo técnico con visión de negocio y métricas compartidas",
      "Rituales de trabajo que combinan agilidad y gobernanza corporativa",
      "Transferencia de conocimiento y mentoring para tus equipos internos",
    ],
  },
  {
    eyebrow: "Equipo núcleo",
    title: "Personas detrás de la consultoría",
    description:
      "Nuestro core team coordina especialistas de confianza y partners para escalar según tus necesidades sin perder calidad.",
    body: (
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            name: "Lucía Fernández",
            role: "Lead de Transformación",
            bio: "Diseña hojas de ruta digitales alineadas con objetivos de dirección y líderes operativos.",
          },
          {
            name: "Diego Morales",
            role: "Principal Engineer",
            bio: "Define arquitecturas escalables y asegura prácticas DevOps maduras desde el día uno.",
          },
          {
            name: "Carla Domínguez",
            role: "Service Designer",
            bio: "Mapea experiencias de usuarios y procesos para garantizar adopción y satisfacción.",
          },
          {
            name: "Ignacio Pérez",
            role: "Delivery Manager",
            bio: "Coordina la ejecución con métricas claras, reportes ejecutivos y soporte evolutivo.",
          },
        ].map((member) => (
          <article key={member.name} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
            <p className="text-sm font-medium text-emerald-200">{member.role}</p>
            <p className="mt-3 text-sm text-slate-300">{member.bio}</p>
          </article>
        ))}
      </div>
    ),
  },
];

const finalCta = {
  title: "¿Listo para impulsar la transformación de tu pyme?",
  description: "Co-creemos una hoja de ruta tecnológica alineada con tus objetivos comerciales y operativos.",
  actions: [
    { label: "Reservar diagnóstico", href: "/contacto" },
    { label: "Ver proyectos", href: "/#proyectos" },
  ],
};

export default function QuienesSomosPage() {
  return <MarketingPageTemplate hero={hero} sections={sections} finalCta={finalCta} />;
}
