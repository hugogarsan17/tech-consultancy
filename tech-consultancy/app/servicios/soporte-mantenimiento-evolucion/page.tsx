import { MarketingPageTemplate } from "@/components/MarketingPageTemplate";

const hero = {
  eyebrow: "Servicios",
  title: "Soporte, mantenimiento y evolución tecnológica",
  description:
    "Nos convertimos en tu equipo extendido para sostener, mejorar y escalar las soluciones tecnológicas críticas de tu negocio.",
  bullets: [
    "Service desk multicanal con niveles de servicio claros",
    "Gestión de incidencias, problemas y cambios basada en ITIL",
    "Roadmaps evolutivos alineados al plan estratégico",
  ],
  cta: { label: "Coordinar un onboarding", href: "/contacto" },
};

const sections = [
  {
    eyebrow: "Qué cubrimos",
    title: "Operación continua y evolución planificada",
    description:
      "Aseguramos que tus plataformas sigan funcionando sin interrupciones mientras avanzamos con mejoras que impulsen nuevos resultados.",
    cards: [
      {
        title: "Mesa de ayuda y soporte nivelado",
        description:
          "Atención 24/7 con tiempos de respuesta definidos y especialistas asignados por criticidad y tecnología.",
      },
      {
        title: "Gestión preventiva",
        description:
          "Monitoreo de salud, parches de seguridad, pruebas de regresión y automatización de tareas repetitivas.",
      },
      {
        title: "Mejoras continuas",
        description:
          "Backlog evolutivo, optimización de performance y nuevas funcionalidades priorizadas junto al negocio.",
      },
      {
        title: "Planificación tecnológica",
        description:
          "Evaluaciones periódicas, presupuestos y roadmap para mantener la plataforma vigente y competitiva.",
      },
    ],
  },
  {
    eyebrow: "Cómo trabajamos",
    title: "Un equipo integrado a tu operación",
    description:
      "Creamos un modelo de gobernanza compartido para garantizar transparencia, aprendizaje continuo y mejora constante.",
    bullets: [
      "Onboarding acelerado con transferencia de conocimiento y documentación",
      "KPIs operativos y tableros ejecutivos disponibles en tiempo real",
      "Revisiones trimestrales para ajustar prioridades y presupuesto",
      "Capacitaciones y guías para habilitar a tus equipos internos",
    ],
  },
  {
    eyebrow: "Impacto",
    title: "Resultados sostenidos en organizaciones de alto ritmo",
    description:
      "Acompañamos a empresas que necesitan foco en el negocio mientras delegan la operación tecnológica en un socio confiable.",
    body: (
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Retail",
            description:
              "Soporte de plataforma e-commerce con disponibilidad 99.8%, despliegues continuos y mejoras trimestrales de conversión.",
          },
          {
            title: "Salud",
            description:
              "Operación de sistemas clínicos y de facturación con controles de cumplimiento y nuevas integraciones de telemedicina.",
          },
          {
            title: "Servicios empresariales",
            description:
              "Mesa de ayuda para 600 usuarios, automatización de onboarding y migración planificada a nuevas herramientas colaborativas.",
          },
          {
            title: "Manufactura",
            description:
              "Mantenimiento de aplicaciones de planta con monitoreo IoT, analítica predictiva y mejora continua de calidad.",
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
  title: "Dale continuidad y evolución a tus plataformas clave",
  description:
    "Agenda una sesión con nuestro equipo para definir el modelo de soporte y mejoras que mejor se adapte a tus objetivos.",
  actions: [
    { label: "Agendar conversación", href: "/contacto" },
    { label: "Ver todos los servicios", href: "/servicios" },
  ],
};

export default function SoporteMantenimientoEvolucionPage() {
  return <MarketingPageTemplate hero={hero} sections={sections} finalCta={finalCta} />;
}
