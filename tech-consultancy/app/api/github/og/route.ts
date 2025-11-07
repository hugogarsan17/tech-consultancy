import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const owner = searchParams.get("owner");
  const repo = searchParams.get("repo");
  const token = process.env.GITHUB_TOKEN; // ⚠️ token sólo en servidor

  if (!owner || !repo || !token) {
    return NextResponse.json({ error: "Missing params or token" }, { status: 400 });
  }

  const query = `
    query($owner:String!, $repo:String!) {
      repository(owner:$owner, name:$repo) {
        openGraphImageUrl
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { owner, repo } }),
    cache: "no-store",
  });

  const json = await res.json();
  const url = json?.data?.repository?.openGraphImageUrl ?? null;

  return NextResponse.json({ url });
}
