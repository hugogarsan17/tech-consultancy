export type ServiceOverview = {
  slug: string;
  name: string;
  summary: string;
  highlights: string[];
};

export const services: ServiceOverview[] = [
  {
    slug: "desarrollo-software-automatizacion",
    name: "Desarrollo de software y automatización",
    summary:
      "Diseñamos y construimos aplicaciones a medida que conectan procesos clave, eliminan tareas manuales y aceleran la toma de decisiones.",
    highlights: [
      "Productos digitales escalables con enfoque en experiencia de usuario",
      "Integraciones con ERP, CRM y sistemas legados",
      "Automatización de flujos críticos con monitoreo end-to-end",
    ],
  },
  {
    slug: "redes-infraestructura-cloud",
    name: "Redes, infraestructura y cloud",
    summary:
      "Modernizamos y administramos entornos híbridos para garantizar disponibilidad, seguridad y elasticidad ante el crecimiento.",
    highlights: [
      "Arquitecturas on-premise, híbridas y 100% cloud",
      "Observabilidad y respuesta ante incidentes 24/7",
      "Optimización de costos y desempeño en la nube",
    ],
  },
  {
    slug: "ciberseguridad-auditorias",
    name: "Ciberseguridad y auditorías",
    summary:
      "Protegemos tus activos digitales con estrategias de seguridad preventiva, controles normativos y respuestas ágiles ante amenazas.",
    highlights: [
      "Evaluaciones de madurez y cumplimiento normativo",
      "Pruebas de penetración y monitoreo continuo",
      "Planes de respuesta y concientización para todo el equipo",
    ],
  },
  {
    slug: "soporte-mantenimiento-evolucion",
    name: "Soporte, mantenimiento y evolución tecnológica",
    summary:
      "Acompañamos la operación diaria con equipos expertos que aseguran continuidad, mejoras continuas y planificación evolutiva.",
    highlights: [
      "Mesa de ayuda multicanal con niveles de servicio claros",
      "Gestión de incidencias, problemas y cambios",
      "Roadmaps de actualización y capacitación permanente",
    ],
  },
];

export const serviceBasePath = "/servicios" as const;

export function getServiceHref(slug: string) {
  return `${serviceBasePath}/${slug}`;
}
