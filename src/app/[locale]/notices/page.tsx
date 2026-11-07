import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import NoticeBoard from "@/components/NoticeBoard";
import { getNotices } from "@/lib/content";

export default async function NoticesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("notices");
  const notices = await getNotices();
  return (
    <>
      <PageHero title={t("title")} text={t("intro")} />
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
        <NoticeBoard items={notices} />
      </section>
    </>
  );
}
