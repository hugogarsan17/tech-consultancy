import { MarketingPageTemplate } from "@/components/MarketingPageTemplate";

const hero = {
  eyebrow: "Servicios",
  title: "Redes, infraestructura y cloud",
  description:
    "Diseñamos, migramos y operamos infraestructuras híbridas que entregan disponibilidad, seguridad y escalabilidad sin sorpresas en los costos.",
  bullets: [
    "Arquitectos cloud certificados y especialistas en redes",
    "Soporte 24/7 con monitoreo proactivo y automatización",
    "Planes de continuidad operativa y recuperación ante desastres",
  ],
  cta: { label: "Solicitar evaluación", href: "/contacto" },
};

const sections = [
  {
    eyebrow: "Capacidades",
    title: "Infraestructura lista para acompañar el crecimiento",
    description:
      "Aseguramos que tu plataforma tecnológica responda al ritmo del negocio con soluciones resilientes, observables y optimizadas.",
    cards: [
      {
        title: "Arquitectura y migraciones",
        description:
          "Diseñamos entornos cloud, on-premise u operamos modelos híbridos garantizando continuidad en la transición.",
      },
      {
        title: "Redes seguras y de alto desempeño",
        description:
          "Implementamos topologías, SD-WAN y políticas de seguridad que sostienen operaciones distribuidas y remotas.",
      },
      {
        title: "Observabilidad unificada",
        description:
          "Dashboards, alertas inteligentes y respuesta automatizada ante incidentes críticos.",
      },
      {
        title: "Optimización continua",
        description:
          "Revisamos consumo, costos y reservas para ajustar la inversión a la demanda real del negocio.",
      },
    ],
  },
  {
    eyebrow: "Formas de trabajo",
    title: "Gestión operativa que se integra con tu equipo",
    description:
      "Colaboramos con tus áreas internas o partners para mantener la infraestructura bajo control y alineada a los objetivos corporativos.",
    bullets: [
      "Evaluaciones de madurez y mapas de ruta de infraestructura",
      "Documentación y runbooks listos para auditorías",
      "Service desk con acuerdos de nivel de servicio medibles",
      "Capacitación para equipos internos y transferencia técnica",
    ],
  },
  {
    eyebrow: "Casos aplicados",
    title: "Resultados tangibles para operaciones críticas",
    description:
      "Implementamos entornos resilientes que sostienen operaciones 24/7 en múltiples industrias.",
    body: (
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Finanzas",
            description:
              "Migración a arquitectura multi-región con failover automático y reducción del tiempo de recuperación a menos de 5 minutos.",
          },
          {
            title: "Logística",
            description:
              "Rediseño de redes SD-WAN para 40 sucursales con monitoreo centralizado y ahorro del 28% en enlaces.",
          },
          {
            title: "Manufactura",
            description:
              "Infraestructura híbrida con edge computing y telemetría en planta para garantizar producción continua.",
          },
          {
            title: "Educación",
            description:
              "Plataforma cloud escalable para clases virtuales con balanceo de carga y protección ante picos de demanda.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    ),
  },
];

const finalCta = {
  title: "Moderniza tu infraestructura con un plan a medida",
  description:
    "Recibe un assessment técnico y financiero con quick wins priorizados y un roadmap para asegurar disponibilidad y eficiencia.",
  actions: [
    { label: "Hablar con un especialista", href: "/contacto" },
    { label: "Descubrir más servicios", href: "/servicios" },
  ],
};

export default function RedesInfraestructuraCloudPage() {
  return <MarketingPageTemplate hero={hero} sections={sections} finalCta={finalCta} />;
}
