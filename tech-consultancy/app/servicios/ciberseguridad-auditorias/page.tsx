import { MarketingPageTemplate } from "@/components/MarketingPageTemplate";

const hero = {
  eyebrow: "Servicios",
  title: "Ciberseguridad y auditorías",
  description:
    "Blindamos tus operaciones con estrategias de seguridad integral, cumplimiento normativo y respuesta rápida ante incidentes.",
  bullets: [
    "Especialistas certificados en seguridad ofensiva y defensiva",
    "Cobertura de marcos ISO 27001, NIST, GDPR y regulaciones locales",
    "Planes de concientización y respuesta que involucran a toda la organización",
  ],
  cta: { label: "Solicitar assessment", href: "/contacto" },
};

const sections = [
  {
    eyebrow: "Servicios clave",
    title: "Protección preventiva, detección y respuesta",
    description:
      "Implementamos una estrategia de seguridad 360° que reduce el riesgo operativo, protege la reputación y facilita auditorías exitosas.",
    cards: [
      {
        title: "Evaluaciones y auditorías",
        description:
          "Revisamos políticas, procesos y controles técnicos para detectar brechas, priorizar acciones y cumplir con normativas.",
      },
      {
        title: "Pruebas de penetración y Red Team",
        description:
          "Simulamos ataques reales para identificar vulnerabilidades críticas antes de que lo hagan actores maliciosos.",
      },
      {
        title: "Monitoreo y SOC virtual",
        description:
          "Implementamos SIEM, playbooks de respuesta y servicios gestionados para vigilar tus activos 24/7.",
      },
      {
        title: "Gestión de identidades y accesos",
        description:
          "Diseñamos modelos Zero Trust, MFA y flujos de provisión que garantizan el acceso correcto en el momento adecuado.",
      },
    ],
  },
  {
    eyebrow: "Metodología",
    title: "Seguridad alineada al negocio",
    description:
      "Trabajamos con dirección, compliance y equipos técnicos para integrar la seguridad en toda la operación.",
    bullets: [
      "Matrices de riesgo y planes de remediación priorizados",
      "Comités ejecutivos y reportes en lenguaje de negocio",
      "Guías y capacitaciones adaptadas a cada rol",
      "Simulacros y pruebas periódicas de respuesta a incidentes",
    ],
  },
  {
    eyebrow: "Casos reales",
    title: "Confianza para sectores regulados y de alto riesgo",
    description:
      "Hemos acompañado a organizaciones que deben cumplir normas estrictas y resguardar datos sensibles.",
    body: (
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Salud",
            description:
              "Programa integral de ciberseguridad con doble factor, resguardo de historias clínicas y simulaciones de phishing trimestrales.",
          },
          {
            title: "Fintech",
            description:
              "Red Team anual, hardening de infraestructura cloud y cumplimiento PCI-DSS para operaciones internacionales.",
          },
          {
            title: "Retail",
            description:
              "Monitoreo centralizado de sucursales, segmentación de redes y respuesta ante incidentes coordinada con proveedores.",
          },
          {
            title: "Sector público",
            description:
              "Assessment normativo, plan director de seguridad y fortalecimiento de la gestión de identidades.",
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
  title: "Eleva el nivel de seguridad de tu organización",
  description:
    "Solicita un assessment inicial y recibe un roadmap priorizado con quick wins, inversiones estimadas y KPIs de madurez.",
  actions: [
    { label: "Hablar con el equipo", href: "/contacto" },
    { label: "Explorar más servicios", href: "/servicios" },
  ],
};

export default function CiberseguridadAuditoriasPage() {
  return <MarketingPageTemplate hero={hero} sections={sections} finalCta={finalCta} />;
}
