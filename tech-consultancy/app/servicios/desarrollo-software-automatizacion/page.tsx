import { MarketingPageTemplate } from "@/components/MarketingPageTemplate";

const hero = {
  eyebrow: "Servicios",
  title: "Desarrollo de software y automatización",
  description:
    "Construimos soluciones digitales a medida que conectan tus sistemas, eliminan tareas manuales y ofrecen experiencias impecables para clientes y equipos internos.",
  bullets: [
    "Equipos senior de producto, arquitectura y automatización",
    "Implementación iterativa con métricas de negocio compartidas",
    "Gobernanza técnica y transferencia de conocimiento",
  ],
  cta: { label: "Agenda un diagnóstico", href: "/contacto" },
};

const sections = [
  {
    eyebrow: "Qué resolvemos",
    title: "Productos y automatizaciones listos para crecer",
    description:
      "Acompañamos la evolución digital de tu pyme diseñando plataformas robustas, integraciones confiables y flujos automatizados que escalan con tu operación.",
    cards: [
      {
        title: "Aplicaciones a medida",
        description:
          "Portales web, backoffice operativos y apps móviles enfocadas en la experiencia de usuarios internos y externos.",
      },
      {
        title: "Integraciones críticas",
        description:
          "Conectamos ERP, CRM, sistemas heredados y servicios cloud para lograr procesos sin fricciones ni reprocesos.",
      },
      {
        title: "Automatización inteligente",
        description:
          "Bots, RPA y orquestación de procesos que reducen tiempos operativos y aumentan la trazabilidad.",
      },
      {
        title: "Analítica y tableros",
        description:
          "Dashboards a medida con datos confiables y alertas en tiempo real para anticipar decisiones.",
      },
    ],
  },
  {
    eyebrow: "Cómo trabajamos",
    title: "Metodología centrada en resultados",
    description:
      "Diseñamos un roadmap claro que combina quick wins con cimientos técnicos sostenibles para tu negocio.",
    bullets: [
      "Workshops de descubrimiento para mapear procesos, usuarios y oportunidades",
      "Arquitecturas modulares con buenas prácticas de seguridad, calidad y performance",
      "Ciclos de entrega quincenales con demos, documentación y capacitación",
      "Monitoreo de métricas clave y soporte evolutivo post-lanzamiento",
    ],
  },
  {
    eyebrow: "Casos frecuentes",
    title: "Impacto comprobado en industrias diversas",
    description:
      "Los equipos de producto y operaciones confían en nosotros para acelerar iniciativas estratégicas sin perder el control del negocio.",
    body: (
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Retail B2B",
            description:
              "Plataforma de pedidos integrada a logística y facturación, con automatización de aprobaciones y catálogo inteligente.",
          },
          {
            title: "Salud",
            description:
              "Sistema de turnos omnicanal con notificaciones automáticas y sincronización de historia clínica electrónica.",
          },
          {
            title: "Servicios profesionales",
            description:
              "Suite de workflow para equipos comerciales con scoring de leads y generación automática de propuestas.",
          },
          {
            title: "Manufactura",
            description:
              "Aplicaciones de planta que conectan IoT y MES para reducir tiempos muertos y mejorar la trazabilidad productiva.",
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
  title: "¿Listo para lanzar tu próximo producto digital?",
  description:
    "En siete días obtendrás un diagnóstico con backlog priorizado, estimación de inversión y plan de gobernanza para llevarlo a producción.",
  actions: [
    { label: "Coordinar reunión", href: "/contacto" },
    { label: "Ver otros servicios", href: "/servicios" },
  ],
};

export default function DesarrolloSoftwareAutomatizacionPage() {
  return <MarketingPageTemplate hero={hero} sections={sections} finalCta={finalCta} />;
}
