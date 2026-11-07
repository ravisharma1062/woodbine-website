import { useLocale, useTranslations } from "next-intl";
import { Bell, Download } from "lucide-react";
import type { Notice } from "@/content/notices";

export default function NoticeCard({ notice, isNew = false }: { notice: Notice; isNew?: boolean }) {
  const locale = useLocale() as "en" | "hi";
  const t = useTranslations("common");
  const cat = useTranslations("notices.categories");
  const date = new Date(notice.date).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", {
    day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
  });

  return (
    <article className="group flex gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
        <Bell size={22} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-gold-400/20 px-2.5 py-0.5 font-semibold text-amber-800">{cat(notice.category)}</span>
          <time dateTime={notice.date} className="text-stone-500">{date}</time>
          {isNew && <span className="rounded-full bg-red-100 px-2 py-0.5 font-semibold text-red-700">{t("new")}</span>}
        </div>
        <h3 className="mt-2 font-heading text-lg font-semibold text-brand-900">{notice.title[locale]}</h3>
        <p className="mt-1 text-sm leading-relaxed text-stone-600">{notice.text[locale]}</p>
        {notice.pdf && (
          <a href={notice.pdf} download className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900">
            <Download size={15} aria-hidden /> {t("download")}
          </a>
        )}
      </div>
    </article>
  );
}
