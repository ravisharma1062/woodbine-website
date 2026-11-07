import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/content/videos";

export default function VideosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("videos");
  return (
    <>
      <PageHero title={t("title")} text={t("intro")} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {videos.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </section>
    </>
  );
}
