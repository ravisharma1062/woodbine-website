import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AdmissionForm from "@/components/AdmissionForm";

export default function AdmissionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("admissions");
  const steps = t.raw("steps") as { title: string; text: string }[];
  const docs = t.raw("docs") as string[];

  return (
    <>
      <PageHero title={t("title")} text={t("intro")} />

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <SectionHeading title={t("stepsTitle")} />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-stone-200 bg-cream p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-heading text-lg font-bold text-brand-900">{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-brand-900">{s.title}</h3>
              <p className="mt-1 text-sm text-stone-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-16 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading title={t("docsTitle")} />
          <ul className="space-y-3">
            {docs.map((d) => (
              <li key={d} className="flex items-center gap-3 rounded-xl border border-stone-200 p-4">
                <FileText size={20} className="shrink-0 text-brand-600" aria-hidden /> {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading title={t("formTitle")} />
          <AdmissionForm />
        </div>
      </section>
    </>
  );
}
