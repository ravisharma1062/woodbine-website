// Loads notices, albums and videos from Sanity (the admin screen).
// If Sanity is not set up yet, or the request fails, the sample content in
// src/content/*.ts is shown instead, so the website never breaks.
import { notices as sampleNotices, type Category, type Notice } from "@/content/notices";
import { albums as sampleAlbums, type Album } from "@/content/gallery";
import { videos as sampleVideos, type Video } from "@/content/videos";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const API_VERSION = "2025-01-01";
const REVALIDATE_SECONDS = 60; // how often the site checks for new content

type Localized = { en?: string | null; hi?: string | null } | null;

// If the admin leaves Hindi (or English) empty, show the other language.
const loc = (v: Localized) => ({ en: v?.en || v?.hi || "", hi: v?.hi || v?.en || "" });

async function query<T>(groq: string): Promise<T | null> {
  if (!projectId) return null;
  try {
    const url = `https://${projectId}.apicdn.sanity.io/v${API_VERSION}/data/query/${dataset}?query=${encodeURIComponent(groq)}`;
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) throw new Error(`Sanity responded ${res.status}`);
    const json = (await res.json()) as { result: T };
    return json.result;
  } catch (err) {
    console.error("Could not load content from Sanity, showing sample content.", err);
    return null;
  }
}

const CATEGORIES: Category[] = ["general", "exam", "holiday", "event", "fees"];

export async function getNotices(): Promise<Notice[]> {
  type Row = { id: string; date: string; category?: string; title: Localized; text: Localized; pdf?: string | null };
  const rows = await query<Row[]>(
    `*[_type == "notice" && defined(date)] | order(date desc){ "id": _id, date, category, title, text, "pdf": pdf.asset->url }`,
  );
  if (!rows) return sampleNotices;
  return rows.map((r) => ({
    id: r.id,
    date: r.date,
    category: CATEGORIES.includes(r.category as Category) ? (r.category as Category) : "general",
    title: loc(r.title),
    text: loc(r.text),
    pdf: r.pdf || undefined,
  }));
}

export async function getAlbums(): Promise<Album[]> {
  type Row = { id: string; title: Localized; images?: (string | null)[] | null };
  const rows = await query<Row[]>(
    `*[_type == "album"] | order(date desc, _createdAt desc){ "id": _id, title, "images": images[].asset->url }`,
  );
  if (!rows) return sampleAlbums;
  return rows
    .map((r, i) => {
      const images = (r.images ?? []).filter((u): u is string => !!u).map((u) => `${u}?w=1200&auto=format`);
      return { id: r.id, hue: (i * 47 + 150) % 360, title: loc(r.title), images, count: images.length };
    })
    .filter((a) => a.images.length > 0); // an album with no photos is not shown
}

// Accepts a full YouTube link (watch, youtu.be, shorts, embed) or a bare video ID.
export function youtubeIdFrom(input?: string | null): string {
  const s = (input ?? "").trim();
  if (!s) return "";
  if (/^[\w-]{11}$/.test(s)) return s;
  try {
    const u = new URL(s);
    if (u.hostname.endsWith("youtu.be")) return u.pathname.slice(1).split("/")[0] ?? "";
    const v = u.searchParams.get("v");
    if (v) return v;
    const m = u.pathname.match(/\/(?:embed|shorts|live)\/([\w-]{11})/);
    return m?.[1] ?? "";
  } catch {
    return "";
  }
}

export async function getVideos(): Promise<Video[]> {
  type Row = { id: string; title: Localized; youtubeUrl?: string | null };
  const rows = await query<Row[]>(
    `*[_type == "video"] | order(date desc, _createdAt desc){ "id": _id, title, youtubeUrl }`,
  );
  if (!rows) return sampleVideos;
  return rows.map((r) => ({ id: r.id, title: loc(r.title), youtubeId: youtubeIdFrom(r.youtubeUrl) }));
}
