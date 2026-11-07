import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Target, Eye, CheckCircle2, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export default function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("about");

  return (
    <>
      <PageHero title={t("title")} text={t("intro")} />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-16 sm:px-6 md:grid-cols-2">
        {[
          { Icon: Target, title: t("missionTitle"), text: t("mission") },
          { Icon: Eye, title: t("visionTitle"), text: t("vision") },
        ].map(({ Icon, title, text }) => (
          <div key={title} className="rounded-3xl border border-stone-200 bg-cream p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white"><Icon size={24} aria-hidden /></span>
            <h2 className="mt-4 text-2xl font-bold text-brand-800">{title}</h2>
            <p className="mt-2 text-stone-700">{text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="relative rounded-3xl bg-brand-800 p-8 text-white sm:p-12">
          <Quote size={40} className="text-gold-400" aria-hidden />
          <h2 className="mt-3 text-2xl font-bold">{t("principalTitle")}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-100">{t("principalText")}</p>
          <p className="mt-5 font-semibold text-gold-400">{t("principalName")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading title={t("valuesTitle")} />
        <ul className="flex flex-wrap gap-3">
          {(t.raw("values") as string[]).map((v) => (
            <li key={v} className="rounded-full bg-brand-100 px-5 py-2.5 font-semibold text-brand-800">{v}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading title={t("facilitiesTitle")} />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(t.raw("facilities") as string[]).map((f) => (
            <li key={f} className="flex items-center gap-3 rounded-2xl border border-stone-200 p-4">
              <CheckCircle2 size={22} className="shrink-0 text-brand-600" aria-hidden />
              {f}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
