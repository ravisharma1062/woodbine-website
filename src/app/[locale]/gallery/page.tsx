import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import AlbumCard from "@/components/AlbumCard";
import { albums } from "@/content/gallery";

export default function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("gallery");
  const c = useTranslations("common");
  return (
    <>
      <PageHero title={t("title")} text={t("intro")} />
      <div className="mx-auto max-w-6xl space-y-14 px-4 pt-12 sm:px-6">
        {albums.every((a) => a.images.length === 0) && (
          <p className="rounded-xl bg-gold-400/15 px-4 py-3 text-sm text-amber-900">{c("sample")}</p>
        )}
        {albums.map((a) => (
          <AlbumCard key={a.id} album={a} />
        ))}
      </div>
    </>
  );
}
