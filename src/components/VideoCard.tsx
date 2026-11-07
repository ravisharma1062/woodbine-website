import { useLocale, useTranslations } from "next-intl";
import { Play } from "lucide-react";
import type { Video } from "@/content/videos";

export default function VideoCard({ video }: { video: Video }) {
  const locale = useLocale() as "en" | "hi";
  const t = useTranslations("videos");
  const title = video.title[locale];

  return (
    <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div className="relative aspect-video bg-brand-900">
        {video.youtubeId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="leaf-pattern absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-800 to-brand-600 text-white">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40">
              <Play size={26} className="translate-x-0.5" fill="currentColor" aria-hidden />
            </span>
            <span className="text-sm text-brand-100">{t("soon")}</span>
          </div>
        )}
      </div>
      <h3 className="p-4 font-heading text-lg font-semibold text-brand-900">{title}</h3>
    </article>
  );
}
