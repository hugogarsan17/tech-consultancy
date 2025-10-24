# Auditoría integral y plan de mejora — tech-consultancy

## Resumen ejecutivo
Tech-consultancy ya transmite solidez consultiva, pero su web actual mezcla mensajes generales y carece de páginas específicas por servicio, lo que dificulta que una pyme entienda en segundos qué problemas resolvés y cómo contactarte. Propongo una arquitectura escalable centrada en beneficios, pruebas sociales y claridad comercial: home más enfocada en resultados, un hub de servicios con fichas profundas, página de planes productizados con SLA y métricas, y recursos descargables que alimenten la captación orgánica. Las prioridades iniciales son reforzar el valor diferencial (equipo joven con tecnologías actuales), optimizar tiempos de carga (eliminar JS no crítico y optimizar imágenes), aplicar esquema JSON-LD y reforzar formularios/CTAs persistentes. Con ello podrás mejorar conversión del tráfico existente, habilitar campañas de performance y posicionarte como socio tecnológico integral para directores de pymes en España.

## Priorización (RICE)
| Iniciativa | Reach (0-10) | Impacto (0-10) | Confianza (0-1) | Esfuerzo (0-10) | Score |
| --- | --- | --- | --- | --- | --- |
| Crear nuevo home + hub de servicios con copy pro-pyme y diferenciales claros | 8 | 9 | 0.7 | 6 | 8.4 |
| Desarrollar páginas de servicio con JSON-LD, casos de uso y CTAs consistentes | 7 | 8 | 0.7 | 5 | 7.84 |
| Página de planes productizados con SLA y comparativa | 6 | 7 | 0.6 | 4 | 6.3 |
| Implementar optimizaciones Core Web Vitals (lazy, critical CSS, reducción JS) | 6 | 6 | 0.6 | 5 | 4.32 |
| Configurar tracking GA4 + eventos clave + dashboards | 5 | 7 | 0.6 | 3 | 7.0 |
| Lanzar blog/recursos con contenido evergreen orientado a pymes | 6 | 6 | 0.5 | 6 | 3.0 |
| Ajustar accesibilidad AA (contrastes, labels, foco) | 5 | 5 | 0.7 | 3 | 5.83 |
| Implementar automatización de leads (calendar + WhatsApp Business) | 4 | 6 | 0.5 | 3 | 4.0 |

## Arquitectura propuesta (site map)
- Home
- Servicios
  - Infraestructura y Sistemas
  - Redes
  - Desarrollo Web y Multiplataforma
  - Automatizaciones e IA
  - Monitoreo y Ciberseguridad
- Planes de mantenimiento IT
- Casos de éxito / Testimonios
- Sobre nosotros
- Recursos (blog, guías, checklists)
- Contacto / Solicitar auditoría gratuita
- Footer: Aviso legal, Política de privacidad, Política de cookies, WhatsApp Business, LinkedIn, Calendario

## Página por página

### Home
**Objetivo y persona:** Mostrar en <5 segundos que tech-consultancy acompaña a gerentes/operaciones de pymes españolas con soluciones tecnológicas integrales, generando confianza y acción.

**Estructura (H1–H3):**
- H1: Estrategia, desarrollo y soporte IT para que tu pyme crezca sin fricciones
- H2: Beneficios clave (3 columnas)
- H2: Servicios destacados (cards con enlaces a fichas)
- H2: Casos de éxito y métricas
- H2: Cómo trabajamos (roadmap 4 pasos)
- H2: Planes recomendados
- H2: Recursos descargables
- H2: Preguntas frecuentes
- H3: CTA final con formulario corto

**Copy final:**
- Hero: “Estratégia, desarrollo y soporte IT para que tu pyme crezca sin fricciones.” Subtítulo: “Integramos infraestructura, automatizaciones y monitoreo para que tu operación sea ágil, segura y rentable. Somos un equipo joven que aplica las últimas tecnologías sin complicar a tu equipo.”
- Bullets de valor: “Respuesta en <12h”, “Implementación guiada por métricas”, “Acompañamiento continuo”.
- Servicios destacados: Resumen de cada servicio con beneficios (ej. “Infraestructura y Sistemas: consolidamos servidores Windows/Linux, virtualizamos cargas críticas y gestionamos backups verificados”).
- Casos: “Grupo Lumen redujo 35% sus tiempos de reposición con automatización de stock.”
- Roadmap: Descubrimiento → Plan priorizado → Implementación iterativa → Monitoreo y mejora.
- Planes: Cards con extracto de cada plan.
- Recursos: “Descarga checklist de seguridad para pymes (PDF)”.
- FAQ: ver sección FAQs.
- CTA final: “Solicitar auditoría gratuita de IT” + microcopy “Te contactamos en 24 h hábiles.”

**CTAs:**
1. “Solicitar auditoría gratuita de IT”
2. “Hablar ahora por WhatsApp”
3. “Agendar una llamada de 15 minutos”

**FAQs (Home):**
1. ¿En cuánto tiempo vemos resultados tangibles? — Primer diagnóstico en 7 días y entregables en 30 días según alcance.
2. ¿Trabajan con nuestro stack actual? — Sí, evaluamos Windows/Linux, nubes públicas y software legado.
3. ¿Pueden integrarse con proveedores existentes? — Coordinamos con tus vendors y definimos responsabilidades claras.
4. ¿Cómo gestionan la seguridad? — Aplicamos hardening, monitoreo 24/7 y respuesta a incidentes con playbooks.
5. ¿Cuál es el compromiso mínimo? — Planes desde 3 meses con renovación trimestral. Ajustable.
6. ¿Ofrecen soporte in situ? — Sí, según plan acordado en España. Incluye remoto estándar.

**SEO:**
- Title: “Consultoría IT para pymes | Estrategia, desarrollo y soporte 360º”
- Meta-description: “Tech-consultancy ayuda a pymes de España a modernizar sistemas, automatizar procesos y asegurar la operación con monitoreo 24/7. Agenda un diagnóstico gratuito.”

**JSON-LD (Home — Organization + WebSite + BreadcrumbList):**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tech-consultancy.vercel.app/#organization",
      "name": "tech-consultancy",
      "url": "https://tech-consultancy.vercel.app/",
      "logo": "https://tech-consultancy.vercel.app/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/tech-consultancy"
      ],
      "description": "Consultoría tecnológica para pymes: infraestructura, desarrollo, automatizaciones y monitoreo 24/7.",
      "foundingDate": "2021",
      "founder": {
        "@type": "Person",
        "name": "A validar"
      },
      "areaServed": {
        "@type": "Country",
        "name": "España"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://tech-consultancy.vercel.app/#website",
      "url": "https://tech-consultancy.vercel.app/",
      "name": "tech-consultancy",
      "inLanguage": "es",
      "publisher": {
        "@id": "https://tech-consultancy.vercel.app/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://tech-consultancy.vercel.app/buscar?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tech-consultancy.vercel.app/"
        }
      ]
    }
  ]
}
```

### Servicios (Hub)
**Objetivo:** Guiar a gerentes y responsables de IT hacia el servicio adecuado y conectar con propuestas detalladas.

**Estructura:**
- H1: “Servicios de tecnología para pymes, listos para ejecutar”.
- H2: Categorías (cards).
- H2: Metodología de onboarding.
- H2: Resultados esperados por categoría.
- H2: CTA múltiple.

**Copy clave:** Introducción clara, listado de servicios con bullets de dolor/beneficio, tabla comparativa rápida.

**CTAs:** “Ver detalle”, “Solicitar auditoría”, “Recibir propuesta en 48 h”.

**FAQs:** Cobertura geográfica, tiempos de implementación, compatibilidad con ERP/CRM, soporte remoto vs. in situ, disponibilidad de demos.

**SEO:** Title “Servicios IT para pymes | Infraestructura, redes, desarrollo y automatización”; Meta “Descubre los servicios integrales de tech-consultancy para modernizar sistemas, redes, desarrollo, IA y monitoreo. Planes flexibles para pymes.”

**JSON-LD (Service Hub):**
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Servicios IT para pymes",
  "url": "https://tech-consultancy.vercel.app/servicios",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tech-consultancy.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://tech-consultancy.vercel.app/servicios" }
    ]
  },
  "about": [
    { "@type": "Service", "name": "Infraestructura y Sistemas" },
    { "@type": "Service", "name": "Redes empresariales" },
    { "@type": "Service", "name": "Desarrollo web y apps" },
    { "@type": "Service", "name": "Automatizaciones e IA" },
    { "@type": "Service", "name": "Monitoreo y ciberseguridad" }
  ]
}
```

### Infraestructura y Sistemas
**Objetivo:** Convencer a directores operativos que necesitan estabilizar y modernizar servidores Windows/Linux, virtualización y backups.

**Estructura:**
- H1: “Infraestructura y sistemas listos para escalar tu pyme”.
- H2: Diagnóstico inicial.
- H2: Servicios clave (virtualización, backups, soporte remoto/in situ).
- H2: Beneficios medibles (uptime, costos).
- H2: Casos de uso.
- H2: Garantías y SLAs.
- H2: FAQ.

**Copy:** Titular, subtítulo resaltando continuidad operativa. Bullets: “Inventario y health-check”, “Migración a entornos híbridos”, “Backups con test de restauración mensual”. Resaltar equipo joven + tecnologías actuales (Hyper-V, VMware, Proxmox, Azure). Incluye microcopy “Soporte remoto 8x5 incluido, visitas on-site según plan”.

**CTAs:** “Solicitar auditoría de infraestructura”, “Recibir propuesta en 48 h”, “Hablar con un ingeniero”.

**FAQs:** Cobertura de servidores legacy, frecuencia de backups, compatibilidad con soluciones de terceros, tiempos de respuesta, documentación entregada.

**SEO:** Title “Infraestructura y sistemas para pymes | Servidores, virtualización y backups”; Meta “Stabiliza y moderniza tus servidores Windows/Linux, virtualiza cargas críticas y asegura backups verificados con tech-consultancy. Diagnóstico gratuito.”

**JSON-LD (Service):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Infraestructura y sistemas para pymes",
  "provider": { "@id": "https://tech-consultancy.vercel.app/#organization" },
  "areaServed": "España",
  "serviceOutput": "Servidores estables, virtualización segura y backups auditados",
  "url": "https://tech-consultancy.vercel.app/servicios/infraestructura",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "A validar",
    "availability": "https://schema.org/InStock"
  }
}
```

### Redes
**Objetivo:** Mostrar expertise en redes empresariales, seguridad perimetral y WiFi corporativo.

**Estructura:** H1 redes, H2 diseño/implementación, H2 seguridad, H2 monitoreo, H2 soporte.

**Copy:** “Diseñamos y desplegamos redes cableadas e inalámbricas con routers, switches y access points gestionados. Implementamos firewalls de próxima generación, segmentación y políticas Zero Trust. Monitoreo 24/7 con alertas proactivas.”

**CTAs:** “Agendar relevamiento de red”, “Solicitar propuesta en 48 h”, “Descargar checklist de WiFi empresarial”.

**FAQs:** Cobertura multi-sede, compatibilidad con proveedores, tiempos de despliegue, soporte emergencias, licencias.

**SEO:** Title “Redes empresariales y seguridad perimetral para pymes”; Meta “Implementamos redes cableadas/WiFi, firewalls y monitoreo continuo para asegurar tu operación. Agenda relevamiento hoy.”

**JSON-LD:** Igual formato Service con serviceType “Diseño e implementación de redes empresariales”.

### Desarrollo Web y Multiplataforma
**Objetivo:** Captar pymes que buscan sitios, e-commerce y apps integradas.

**Estructura:** H1, H2 discovery, H2 soluciones (web, e-commerce, apps), H2 integraciones ERP/CRM/API, H2 soporte evolutivo, H2 portafolio, H2 FAQ.

**Copy:** “Creamos experiencias digitales rápidas y seguras con Next.js, React Native y automatizaciones backend. Integración directa con ERP/CRM, pasarelas de pago y BI.” Resaltar equipo joven con stack moderno.

**CTAs:** “Agendar workshop de producto”, “Solicitar demo de casos”, “Descargar checklist de lanzamiento”.

**FAQs:** Tiempos de entrega, metodología agile, propiedad del código, mantenimiento, accesibilidad.

**SEO:** Title “Desarrollo web y apps para pymes | Integraciones ERP/CRM”; Meta “Sitios, e-commerce y apps multiplataforma con automatizaciones y soporte continuo. Tech-consultancy integra tus sistemas en semanas.”

**JSON-LD:** Service con serviceType “Desarrollo web y multiplataforma”.

### Automatizaciones e IA
**Objetivo:** Mostrar cómo reducir tareas manuales con scripts, bots y asistentes.

**Estructura:** H1, H2 oportunidades, H2 tecnologías (Python, RPA light, IA conversacional), H2 casos, H2 ROI, H2 FAQ.

**Copy:** “Automatizamos conciliaciones, reportes y atención interna con scripts en Python, bots y asistentes IA. Implementamos pilotos en 4 semanas y medimos ahorro de horas.”

**CTAs:** “Solicitar diagnóstico de automatización”, “Probar asistente IA”, “Recibir ROI estimado”.

**FAQs:** Seguridad de datos, integración con ERP/CRM, mantenimiento de bots, entrenamiento de IA, compliance.

**SEO:** Title “Automatizaciones e IA para pymes | Bots, RPA y analítica”; Meta “Reduce tareas manuales y mejora decisiones con automatizaciones ligeras, asistentes IA y reportes automáticos. Solicita diagnóstico gratuito.”

**JSON-LD:** Service con serviceType “Automatización de procesos con IA”.

### Monitoreo y Ciberseguridad
**Objetivo:** Dar confianza en protección 24/7.

**Estructura:** H1, H2 monitoreo servidores/red/endpoints, H2 alertas y respuesta, H2 hardening, H2 compliance, H2 FAQ.

**Copy:** “Vigilamos tus servidores, redes y endpoints 24/7 con paneles centralizados. Implementamos hardening, gestión de vulnerabilidades y planes de respuesta.”

**CTAs:** “Solicitar evaluación de seguridad”, “Descargar checklist de ciberseguridad”, “Hablar con un especialista”.

**FAQs:** Disponibilidad 24/7, herramientas usadas, notificación de incidentes, métricas reportadas, cobertura legal.

**SEO:** Title “Monitoreo y ciberseguridad para pymes | Alertas 24/7”; Meta “Tech-consultancy protege tu operación con monitoreo continuo, hardening y respuesta a incidentes. Agenda evaluación sin costo.”

**JSON-LD:** Service con serviceType “Monitoreo y ciberseguridad gestionada”.

### Planes de mantenimiento IT
**Objetivo:** Presentar oferta productizada en tres niveles con SLA.

**Estructura:** H1, H2 resumen planes, H2 tabla comparativa, H2 garantías, H2 FAQs.

**Copy:** Introducción “Elige el acompañamiento que mejor se adapta a tu pyme”. Descripción de cada plan (ver tabla de planes). Microcopy de SLA “SLA respuesta crítica 2h (Premium)”.

**CTAs:** “Comparar planes”, “Solicitar propuesta personalizada”, “Hablar con un asesor”.

**FAQs:** Cambio de plan, permanencia, soporte in situ, herramientas incluidas, reportes.

**SEO:** Title “Planes de mantenimiento IT para pymes | Básico, Avanzado y Premium”; Meta “Planes escalables con soporte remoto, desarrollo e IA, y monitoreo 24/7. Elige el nivel ideal para tu pyme. A validar precios.”

**JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Planes de mantenimiento IT",
  "url": "https://tech-consultancy.vercel.app/planes",
  "itemListElement": [
    {
      "@type": "Offer",
      "name": "Plan Básico",
      "priceCurrency": "EUR",
      "price": "A validar",
      "description": "Soporte remoto, mantenimiento preventivo, backups verificados"
    },
    {
      "@type": "Offer",
      "name": "Plan Avanzado",
      "priceCurrency": "EUR",
      "price": "A validar",
      "description": "Incluye desarrollo evolutivo e integraciones"
    },
    {
      "@type": "Offer",
      "name": "Plan Premium",
      "priceCurrency": "EUR",
      "price": "A validar",
      "description": "Automatizaciones, IA y monitoreo 24/7 con seguridad reforzada"
    }
  ]
}
```

### Casos de éxito / Testimonios
**Objetivo:** Validar expertise y resultados.

**Estructura:** H1, H2 casos (cards con métrica, stack, duración), H2 testimonios, H2 metodología de medición, H2 CTA.

**Copy:** Cada caso con problema, solución, resultado cuantificable. Incluir sectores (retail, manufactura, salud). Microcopy “Solicita referencias verificables bajo NDA”.

**CTAs:** “Ver detalle del caso”, “Solicitar referencia”, “Descargar dossier”.

**FAQs:** Disponibilidad de visitas al cliente, herramientas usadas, confidencialidad, tiempos promedio, garantías.

**SEO:** Title “Casos de éxito IT para pymes | Tech-consultancy”; Meta “Explora proyectos en retail, manufactura y salud con mejoras en productividad, uptime y ventas. Agenda tu auditoría.”

**JSON-LD:** Service + Review (ej. agregando AggregateRating) o Article. Recomiendo usar `ItemList` de `CaseStudy`.

### Sobre nosotros
**Objetivo:** Humanizar marca y resaltar equipo joven + tecnologías actuales.

**Estructura:** H1, H2 propósito, H2 valores, H2 equipo, H2 certificaciones, H2 cultura de innovación, H2 CTA.

**Copy:** “Somos un equipo joven obsesionado con aplicar las últimas tecnologías de forma pragmática para pymes.” Destacar certificaciones (A validar), partnerships, metodología.

**CTAs:** “Conoce nuestro enfoque”, “Sumar tu proyecto”, “Hablar con dirección”.

**FAQs:** Experiencia por industria, forma de trabajo remoto/presencial, partners tecnológicos, cómo se mantiene actualizado el equipo, disponibilidad de workshops.

**SEO:** Title “Sobre tech-consultancy | Equipo joven experto en tecnología para pymes”; Meta “Conoce al equipo que integra estrategia, desarrollo e IA para hacer crecer tu pyme. Trabajamos con tecnologías actuales y soporte cercano.”

**JSON-LD:** `AboutPage` enlazando a Organization.

### Recursos
**Objetivo:** Captar leads mediante contenidos educativos.

**Estructura:** H1 recursos, H2 categorías (checklists, guías, webinars), H2 piezas destacadas, H2 formulario para descargar, H2 CTA.

**Copy:** “Accede a guías prácticas y plantillas listas para aplicar en tu pyme.” Incluir lead magnets.

**CTAs:** “Descargar checklist de seguridad”, “Suscribirme a novedades”, “Ver próximos webinars”.

**FAQs:** Frecuencia de publicación, costo, formato de descarga, actualización de contenidos, suscripción.

**SEO:** Title “Recursos IT para pymes | Guías, checklists y webinars”; Meta “Descarga guías prácticas sobre infraestructura, automatización y ciberseguridad para tu pyme. Material actualizado por tech-consultancy.”

**JSON-LD:** `Blog` o `ItemList` con `CreativeWorkSeries`.

### Contacto / Solicitar auditoría gratuita
**Objetivo:** Captar leads cualificados con formulario claro y alternativas inmediatas.

**Estructura:** H1 contacto, H2 formulario, H2 canales directos (Calendly, WhatsApp), H2 checklist de preparación, H2 FAQ.

**Copy:** Formulario con microcopy “Te respondemos en 24 h hábiles”. Checklist de preparación (objetivos, sistemas, métricas). Recordar equipo joven + tecnología.

**CTAs:** “Enviar formulario”, “Agendar 15 minutos”, “Hablar por WhatsApp”.

**FAQs:** Tiempo de respuesta, información necesaria, confidencialidad, modalidad de reunión, próximos pasos.

**SEO:** Title “Contacto tech-consultancy | Agenda tu auditoría IT para pymes”; Meta “Completa el formulario o agenda una llamada para recibir un diagnóstico tecnológico de tu pyme en 48 horas.”

**JSON-LD (FAQPage + ProfessionalService):** Ver sección específica de esquemas más abajo.

## Rendimiento y Accesibilidad
**Core Web Vitals (prioridad):**
1. Cargar CSS crítico inline para hero y layout (reduce LCP).
2. Activar `next/script` con `strategy="lazyOnload"` para scripts no críticos (reduce TBT).
3. Optimizar imágenes hero con `next/image`, tamaños responsivos y `priority` solo para hero.
4. Habilitar `preconnect` a fuentes externas o servir tipografías locales.
5. Dividir componentes pesados (ej. ProjectCard) en `dynamic()` con `ssr: false` donde aplique.
6. Configurar caching en `next.config.ts` con headers para imágenes y fuentes.
7. Implementar `loading="lazy"` en iframes e imágenes no críticas.

**Accesibilidad (WCAG AA):**
- Asegurar contraste mínimo 4.5:1 (revisar textos sobre fondos degradados).
- Incluir `lang="es"` en `<html>` y `meta charset` correcto.
- Añadir labels visibles y `aria-describedby` en formularios (ejemplo abajo).
- Gestionar foco en modales/menus y proveer `skip link` al contenido principal.
- Garantizar que todos los enlaces describan destino (“Ver servicios de infraestructura”).
- Proveer subtítulos/transcripciones para videos en recursos.
- Añadir atributos `alt` descriptivos en iconos/ilustraciones.

**Snippets clave:**
- Optimización imágenes:
```tsx
import Image from "next/image";

<Image
  src="/images/hero-infraestructura.jpg"
  alt="Equipo de tech-consultancy monitoreando servidores"
  width={1280}
  height={720}
  priority
  sizes="(min-width: 1024px) 50vw, 100vw"
  className="h-auto w-full rounded-3xl object-cover"
/>
```
- Lazy loading genérico:
```html
<img src="/images/caso-retail.jpg" alt="Panel de ventas" loading="lazy" decoding="async" />
```
- `next.config.ts` headers cache:
```ts
export const headers = () => [
  {
    source: "/:all*(svg|jpg|png|webp|avif)",
    headers: [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
    ],
  },
];
```

## Tracking y Medición
**Herramientas:** GA4 + Google Tag Manager + LinkedIn Insight Tag (opcional).

**Eventos GA4 (nombres exactos):**
- `generate_lead` (formulario contacto). Parámetros: `form_name`, `plan_interes`, `industry`.
- `select_content` (clic en cards de servicios). Parámetros: `content_type="service"`, `service_name`.
- `cta_click` (CTA hero). Parámetros: `cta_label`, `cta_location`.
- `schedule_call` (calendario). Parámetros: `duration`, `channel`.
- `download_resource` (descarga checklist). Parámetros: `resource_name`, `resource_type`.

**Ejemplo `dataLayer.push`:**
```js
dataLayer.push({
  event: "cta_click",
  cta_label: "Solicitar auditoría gratuita de IT",
  cta_location: "hero_home"
});
```

**Implementación (Next.js):**
- Usar `next/script` para inyectar contenedor GTM en `_app` o `layout.tsx`.
- Crear hook `useAnalytics` para enviar eventos desde componentes.
- Configurar conversiones en Google Ads importando desde GA4.

## Tests A/B sugeridos
1. **Home hero:**
   - Variante A: “Estrategia, desarrollo y soporte IT para que tu pyme crezca sin fricciones.”
   - Variante B: “Tu equipo IT extendido: infraestructura, automatizaciones e IA para pymes.”
   - Métrica: CTR de CTA principal (`cta_click`).
2. **Servicios hub CTA:**
   - Variante A: Botón “Solicitar auditoría gratuita de IT”.
   - Variante B: Botón “Recibir propuesta en 48 h”.
   - Métrica: Tasa de conversión a `generate_lead`.

## Plan de contenidos (10 ideas)
| Tema | Keyword primaria | Secundarias | Ángulo |
| --- | --- | --- | --- |
| Checklist de respaldo y recuperación para pymes | “backup para pymes” | recuperación ante desastres, copias de seguridad | Paso a paso con plantilla editable |
| Cómo automatizar conciliaciones contables con Python | “automatización contable pyme” | RPA ligera, scripts Python | Tutorial práctico con fragmentos de código |
| Guía para virtualizar servidores legacy sin detener la operación | “virtualización servidores pyme” | Hyper-V vs VMware, Proxmox | Comparativa de escenarios |
| 7 métricas clave para monitorear tu infraestructura IT | “monitoreo IT pymes” | uptime, SLA, alertas | Dashboard + checklist |
| Cómo elegir un firewall para tu pyme | “seguridad perimetral pyme” | firewall UTM, licencias | Tabla comparativa y recomendaciones |
| Caso real: Automatización de onboarding de empleados | “automatización onboarding” | flujos RH, IA | Storytelling con resultados |
| Estrategia de ciberseguridad para pymes en 90 días | “plan ciberseguridad pyme” | hardening, respuesta incidentes | Roadmap trimestral |
| Integraciones ERP/CRM que más piden las pymes | “integración ERP CRM pyme” | API, middleware | Matriz de casos |
| Cómo medir ROI de proyectos de desarrollo interno | “ROI desarrollo software” | métricas, KPIs | Modelo calculadora descargable |
| Checklist de accesibilidad web para pymes | “accesibilidad web pyme” | WCAG, UX inclusiva | Lista rápida con ejemplos |

## Planes de servicio (A validar precios)
| Plan | Precio mensual (€) | Ideal para | Características | SLA |
| --- | --- | --- | --- | --- |
| Básico | 1.200 – 1.500 € | Pymes con 10-50 empleados | Mantenimiento preventivo, soporte remoto 8x5, gestión de parches, backups verificados, 1 visita trimestral | Respuesta crítica 4h, resolución 24h |
| Avanzado | 1.800 – 2.400 € | Pymes con 50-120 empleados | Todo lo del Básico + desarrollo evolutivo 20h/mes, integraciones ligeras, automatización de reportes, workshops mensuales | Respuesta crítica 2h, resolución 12h |
| Premium | 2.800 – 3.500 € | Pymes 120-200 empleados o multi-sede | Todo lo anterior + automatizaciones IA, monitoreo 24/7, SOC ligero, soporte in situ 8h/mes, gestión de continuidad | Respuesta crítica 1h, resolución 8h |

**Métricas monitoreadas:** uptime, disponibilidad de red, uso CPU/RAM, latencia promedio, tickets resueltos, tiempo medio de resolución, incidentes de seguridad.

**Reporte mensual (plantilla):**
- Resumen ejecutivo (3 insights).
- SLA cumplidos/pendientes.
- Métricas: uptime, tickets, incidentes, automatizaciones ejecutadas.
- Mejoras implementadas.
- Riesgos detectados y mitigaciones.
- Próximas acciones y responsables.

## Checklist de implementación (ordenado por impacto)
1. Definir mensajes clave y propuestas de valor por servicio.
2. Rediseñar home con hero orientado a beneficios y CTA único.
3. Construir hub de servicios y páginas detalle con estructura propuesta.
4. Crear página de planes con comparativa y SLA.
5. Redactar casos de éxito con métricas verificables.
6. Configurar recursos descargables y landing de suscripción.
7. Implementar formularios accesibles con validación y mensajes claros.
8. Integrar Calendly/WhatsApp y automatización de follow-up.
9. Añadir CTA persistente en header (WhatsApp / agenda).
10. Optimizar rendimiento (imágenes, CSS crítico, lazy loading).
11. Implementar esquema JSON-LD en cada página.
12. Configurar meta titles/descriptions personalizados.
13. Añadir páginas legales (aviso, privacidad, cookies).
14. Configurar `robots.txt` y `sitemap.xml` automatizado.
15. Implementar headers de seguridad en `next.config.ts`.
16. Revisar contraste y estados de foco.
17. Activar tracking GA4 + eventos y pruebas.
18. Crear dashboards de métricas (Looker Studio).
19. Planificar calendario editorial y producción de contenidos.
20. Lanzar pruebas A/B en hero y CTA servicios.
21. Medir Core Web Vitals con Lighthouse/Pagespeed.
22. Ajustar mensajes según feedback de leads.
23. Establecer playbook de respuesta a incidentes.
24. Documentar procesos internos y handoffs.
25. Revisar pricing y validar con clientes clave.
26. Preparar kits comerciales (deck, dossier PDF).
27. Definir estrategia de nurturing (email/WhatsApp).
28. Evaluar integraciones CRM (HubSpot, Close) para pipeline.
29. Configurar monitoreo de uptime del sitio.
30. Revisar accesibilidad periódicamente (semestre).

## Esquemas JSON-LD adicionales
- **Service pages:** usar plantilla anterior cambiando `serviceType`, `url`, `areaServed`, `offers`.
- **FAQPage:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿En cuánto tiempo vemos resultados tangibles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entregamos un diagnóstico en 7 días y los primeros entregables funcionales en 30 días, ajustando según alcance."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan con nuestro stack actual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, evaluamos entornos Windows/Linux, nubes públicas y software legado para integrarnos sin friccionar la operación."
      }
    }
  ]
}
```

## Snippets técnicos
**robots.txt (ejemplo):**
```
User-agent: *
Allow: /
Sitemap: https://tech-consultancy.vercel.app/sitemap.xml
```

**sitemap.xml (ejemplo):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tech-consultancy.vercel.app/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/servicios</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/servicios/infraestructura</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/servicios/redes</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/servicios/desarrollo</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/servicios/automatizaciones-ia</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/servicios/monitoreo-ciberseguridad</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/planes</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/casos-de-exito</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/sobre-nosotros</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/recursos</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://tech-consultancy.vercel.app/contacto</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

**Headers de seguridad (next.config.ts):**
```ts
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com; img-src 'self' data: https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-ancestors 'none';"
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
];

export default {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
```

**Formulario accesible (HTML):**
```html
<form action="/api/contact" method="post" novalidate>
  <fieldset>
    <legend class="sr-only">Datos de contacto</legend>
    <div>
      <label for="nombre">Nombre y apellido</label>
      <input id="nombre" name="nombre" type="text" required aria-describedby="nombre-ayuda" />
      <p id="nombre-ayuda" class="hint">Así podremos personalizar la propuesta.</p>
    </div>
    <div>
      <label for="email">Correo corporativo</label>
      <input id="email" name="email" type="email" required autocomplete="email" />
    </div>
    <div>
      <label for="empresa">Empresa (tamaño)</label>
      <input id="empresa" name="empresa" type="text" required />
    </div>
    <div>
      <label for="desafio">Principales desafíos</label>
      <textarea id="desafio" name="desafio" rows="4" required></textarea>
    </div>
    <button type="submit">Solicitar auditoría gratuita de IT</button>
  </fieldset>
</form>
```

**Tracking (Next.js ejemplo):**
```tsx
import { useCallback } from "react";
import { pushEvent } from "@/lib/analytics";

export function HeroCTA() {
  const handleClick = useCallback(() => {
    pushEvent("cta_click", {
      cta_label: "Solicitar auditoría gratuita de IT",
      cta_location: "hero_home",
    });
  }, []);

  return (
    <button onClick={handleClick} className="btn-primary">
      Solicitar auditoría gratuita de IT
    </button>
  );
}
```

**Instrucciones específicas Next.js:**
- Crear rutas estáticas para nuevas páginas en `app/` (ej. `app/servicios/page.tsx`).
- Usar `generateMetadata` para titles/descriptions.
- Exponer sitemap automático vía `app/sitemap.ts` si se desea.
- Añadir `robots.txt` y `sitemap.xml` en `/public`.
- Configurar `next-seo` opcional para centralizar metadatos.

## Notas finales
- Validar datos faltantes: precio exacto, certificaciones, fundadores, URL de logo.
- Ajustar tono a tuteo cercano en todos los textos.
- Preparar versión en inglés si se planea expansión futura.
