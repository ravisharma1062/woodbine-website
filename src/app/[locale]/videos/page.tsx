import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import VideoCard from "@/components/VideoCard";
import { getVideos } from "@/lib/content";

export default async function VideosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("videos");
  const videos = await getVideos();
  return (
    <>
      <PageHero title={t("title")} text={t("intro")} />
      {videos.length === 0 ? (
        <p className="mx-auto max-w-6xl px-4 pt-12 text-stone-500 sm:px-6">{t("empty")}</p>
      ) : (
        <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </section>
      )}
    </>
  );
}
