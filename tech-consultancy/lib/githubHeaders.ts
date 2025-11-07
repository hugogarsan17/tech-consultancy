// app/lib/githubHeaders.ts (or near your call site)
export function githubHeaders(): Headers {
  const h = new Headers({
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  });

  const token = process.env.GITHUB_TOKEN;
  if (token) h.set("Authorization", `Bearer ${token}`);

  return h;
}
