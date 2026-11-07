import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import NoticeBoard from "@/components/NoticeBoard";
import { notices } from "@/content/notices";

export default function NoticesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("notices");
  return (
    <>
      <PageHero title={t("title")} text={t("intro")} />
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
        <NoticeBoard items={notices} />
      </section>
    </>
  );
}
