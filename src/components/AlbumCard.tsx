import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { Album } from "@/content/gallery";
import SampleTile from "./SampleTile";

export default function AlbumCard({ album }: { album: Album }) {
  const locale = useLocale() as "en" | "hi";
  const t = useTranslations("gallery");
  const hasPhotos = album.images.length > 0;
  const count = hasPhotos ? album.images.length : album.count;

  return (
    <section>
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-brand-800">{album.title[locale]}</h2>
        <span className="text-sm text-stone-500">{count} {t("photos")}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {hasPhotos
          ? album.images.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-100">
                <Image src={src} alt={`${album.title[locale]} ${i + 1}`} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-300 hover:scale-105" />
              </div>
            ))
          : Array.from({ length: 4 }).map((_, i) => (
              <SampleTile key={i} hue={(album.hue + i * 12) % 360} className="aspect-[4/3] rounded-xl" />
            ))}
      </div>
    </section>
  );
}
