"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MarketingPageTemplate } from "@/components/MarketingPageTemplate";
import { Star, Github, ExternalLink, Clock, Code } from "lucide-react";
import ReactMarkdown from "react-markdown";

/**
 * 🔧 Config (en .env.local):
 *  NEXT_PUBLIC_GITHUB_OWNER=tu-usuario-o-org
 *  NEXT_PUBLIC_GITHUB_OWNER_TYPE=org   # o "user"
 *  # ⚠️ Si usas NEXT_PUBLIC_GITHUB_TOKEN quedará expuesto en el cliente.
 *  # Para repos privados, haz las llamadas desde el servidor /api.
 */
const OWNER = (process.env.NEXT_PUBLIC_GITHUB_OWNER as string) || "vercel";
const OWNER_TYPE =
  (process.env.NEXT_PUBLIC_GITHUB_OWNER_TYPE as "org" | "user") || "org";

const FILTERS = {
  excludeArchived: true,
  minStars: 0,
  onlyWithHomepage: false,
};

// ---------- GitHub utils ----------
const githubHeaders = (): Headers => {
  const h = new Headers({
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  });
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  if (token) h.set("Authorization", `Bearer ${token}`);
  return h;
};

type RepoData = {
  name: string;
  owner: { login: string };
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  description: string | null;
  homepage: string | null;
  default_branch: string;
  archived: boolean;
};

type MinimalProject = {
  owner: string;
  repo: string;
  coverImage?: string;
  demoUrl?: string;
  tags?: string[];
};

async function fetchReposList(
  owner: string,
  type: "org" | "user"
): Promise<RepoData[]> {
  const base =
    type === "org"
      ? `https://api.github.com/orgs/${owner}`
      : `https://api.github.com/users/${owner}`;
  const url = `${base}/repos?per_page=100&sort=updated`;
  try {
    const res = await fetch(url, {
      headers: githubHeaders(),
      cache: "no-store",
    });
    if (!res.ok) return [];
    return (await res.json()) as RepoData[];
  } catch {
    return [];
  }
}

async function fetchRepo(owner: string, repo: string) {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: githubHeaders(),
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as RepoData;
  } catch {
    return null;
  }
}

async function fetchReadme(owner: string, repo: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: githubHeaders(),
        cache: "no-store",
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data?.content) return null;
    const markdown =
      typeof window !== "undefined"
        ? atob(data.content)
        : Buffer.from(data.content, "base64").toString("utf-8");
    return markdown;
  } catch {
    return null;
  }
}

function firstImageFromMarkdown(md: string | null): string | null {
  if (!md) return null;
  const match = md.match(/!\[[^\]]*\]\(([^\)\s]+)(?:\s+"[^"]*")?\)/);
  return match?.[1] ?? null;
}

function prettyDate(iso: string | undefined): string {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(d);
  } catch {
    return iso ?? "";
  }
}

// ---------- ProjectCard sin Card/Button/Badge ----------
function ProjectCard({ owner, repo, coverImage, demoUrl, tags }: MinimalProject) {
  const [repoData, setRepoData] = useState<RepoData | null>(null);
  const [readme, setReadme] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const [r, md] = await Promise.all([
        fetchRepo(owner, repo),
        fetchReadme(owner, repo),
      ]);
      if (!mounted) return;
      setRepoData(r);
      setReadme(md);
    })();
    return () => {
      mounted = false;
    };
  }, [owner, repo]);

  const autoCover = useMemo(() => firstImageFromMarkdown(readme), [readme]);
  const cover = coverImage || autoCover || "/placeholder.svg";
  const repoUrl = repoData?.html_url ?? `https://github.com/${owner}/${repo}`;
  const demo = demoUrl || repoData?.homepage || undefined;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-md transition hover:shadow-lg">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cover} alt={`${repo} cover`} className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-black/0" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {owner}/{repo}
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              {repoData?.description ?? ""}
            </p>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="inline-flex items-center gap-1 text-sm">
              <Star className="h-4 w-4" />
              {repoData?.stargazers_count ?? "–"}
            </span>
            {repoData?.language && (
              <span className="inline-flex items-center gap-1 text-sm">
                <Code className="h-4 w-4" />
                {repoData.language}
              </span>
            )}
          </div>
        </div>

        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 inline-flex items-center gap-1 text-xs text-slate-400">
          <Clock className="h-3.5 w-3.5" /> Última actualización:{" "}
          {prettyDate(repoData?.updated_at)}
        </div>

        {readme && (
          <div className="prose prose-invert mt-5 max-w-none">
            <div className={!expanded ? "line-clamp-6" : undefined}>
              <ReactMarkdown>{readme}</ReactMarkdown>
            </div>
            <button
              type="button"
              className="mt-2 inline-flex items-center p-0 text-sm text-emerald-300 hover:text-emerald-200"
              onClick={() => setExpanded((e) => !e)}
            >
              {expanded ? "Ver menos" : "Ver más del README"}
            </button>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={repoUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex h-9 items-center justify-center rounded-md bg-emerald-600 px-3 text-sm font-medium text-white transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          >
            <Github className="mr-2 h-4 w-4" /> Ver repositorio
          </Link>

          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener"
              className="inline-flex h-9 items-center justify-center rounded-md bg-slate-800 px-3 text-sm font-medium text-slate-100 transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Demo / Sitio
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------- Grid (auto-carga desde GitHub) ----------
function ProjectsGrid() {
  const [items, setItems] = useState<MinimalProject[] | null>(null);

  useEffect(() => {
    (async () => {
      const repos = await fetchReposList(OWNER, OWNER_TYPE);
      const filtered = repos
        .filter((r) => (FILTERS.excludeArchived ? !r.archived : true))
        .filter((r) => (FILTERS.minStars ? r.stargazers_count >= FILTERS.minStars : true))
        .filter((r) => (FILTERS.onlyWithHomepage ? !!r.homepage : true));

      const mapped: MinimalProject[] = filtered.map((r) => ({
        owner: r.owner.login,
        repo: r.name,
        demoUrl: r.homepage || undefined,
      }));
      setItems(mapped);
    })();
  }, []);

  if (!items) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 animate-pulse rounded-2xl bg-slate-800/50" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <p className="text-slate-300">
        No se encontraron repos en {OWNER} ({OWNER_TYPE}).
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <ProjectCard key={`${p.owner}/${p.repo}`} {...p} />
      ))}
    </div>
  );
}

// ---------- Página ----------
const hero = {
  eyebrow: "Proyectos",
  title: "Casos reales y repos públicos que respaldan nuestro trabajo",
  description:
    "Seleccionamos iniciativas representativas: desde aceleración de producto y automatización operativa hasta plataformas de datos. Cada tarjeta se alimenta del repositorio y README para máxima transparencia.",
  bullets: [
    "Repos alineados a resultados de negocio, no solo código",
    "README y métricas de GitHub en vivo (⭐, lenguaje, última actualización)",
    "Imágenes automáticas desde README o portada personalizada",
    "Enlaces directos a demo y documentación",
  ],
  cta: { label: "Agenda un demo", href: "/#contacto" },
};

const sections = [
  {
    eyebrow: "Portafolio",
    title: "Muestras de proyectos",
    description:
      "Explora un vistazo técnico y funcional. Si quieres ver casos privados, podemos agendar una revisión bajo NDA.",
    body: <ProjectsGrid />,
  },
  {
    eyebrow: "Cómo integramos GitHub",
    title: "Del repo a una historia clara",
    description:
      "Extraemos el README para contexto, detectamos la primera imagen como portada y mostramos métricas clave. Puedes fijar una imagen manual si lo prefieres.",
    bullets: [
      "Se conecta automáticamente a una organización o usuario",
      "Personaliza filtros (archivados, estrellas mínimas, homepage)",
      "Mejora el rate limit con NEXT_PUBLIC_GITHUB_TOKEN",
      "Se adapta a tu branding con Tailwind",
    ],
  },
];

const finalCta = {
  title: "¿Quieres ver un caso similar al tuyo?",
  description:
    "Preparamos una demo con métricas y arquitectura comparables a tu contexto.",
  actions: [
    { label: "Solicitar demo", href: "/contacto" },
    { label: "Hablar con un especialista", href: "/#contacto" },
  ],
};

export default function ProyectosPage() {
  return (
    <MarketingPageTemplate
      hero={hero}
      sections={sections}
      finalCta={finalCta}
    />
  );
}
