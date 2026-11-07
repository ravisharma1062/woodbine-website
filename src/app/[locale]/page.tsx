import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BookOpen, ShieldCheck, HeartHandshake, Smile, ArrowRight, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import SectionHeading from "@/components/SectionHeading";
import NoticeCard from "@/components/NoticeCard";
import SampleTile from "@/components/SampleTile";
import VideoCard from "@/components/VideoCard";
import { getAlbums, getNotices, getVideos } from "@/lib/content";
import { site } from "@/content/site";

const why = [
  { key: "learn", Icon: BookOpen },
  { key: "safe", Icon: ShieldCheck },
  { key: "teachers", Icon: HeartHandshake },
  { key: "values", Icon: Smile },
] as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  setRequestLocale(l);
  const t = await getTranslations("home");
  const c = await getTranslations("common");
  const locale = l as "en" | "hi";
  const [notices, albums, videos] = await Promise.all([getNotices(), getAlbums(), getVideos()]);

  const stats = [
    { n: site.stats.students, label: t("stats.students") },
    { n: site.stats.teachers, label: t("stats.teachers") },
    { n: site.stats.years, label: t("stats.years") },
    { n: site.stats.activities, label: t("stats.activities") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="leaf-pattern relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold-400/20" aria-hidden />
        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/5" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="fade-up inline-block rounded-full bg-gold-400 px-4 py-1.5 text-sm font-semibold text-brand-900">
              {t("badge")}
            </span>
            <h1 className="fade-up-2 mt-5 text-4xl font-bold leading-tight sm:text-6xl">{t("heroTitle")}</h1>
            <p className="fade-up-3 mt-5 max-w-xl text-lg text-brand-100">{t("heroText")}</p>
            <div className="fade-up-3 mt-8 flex flex-wrap gap-3">
              <Link href="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 font-semibold text-brand-900 shadow-lg transition hover:bg-gold-500">
                {t("ctaAdmission")} <ArrowRight size={18} aria-hidden />
              </Link>
              <Link href="/about" className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                {t("ctaAbout")}
              </Link>
            </div>
          </div>

          <div className="fade-up-3 grid grid-cols-2 gap-3">
            {albums.slice(0, 4).map((a, i) => (
              <SampleTile key={a.id} hue={a.hue} className={`rounded-2xl shadow-xl ${i % 2 ? "mt-6 aspect-[4/5]" : "aspect-square"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto -mt-10 max-w-5xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-stone-100 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-heading text-3xl font-bold text-brand-700 sm:text-4xl">{s.n}</span>
                <span className="text-sm text-stone-600">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Why Woodbine */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <SectionHeading title={t("whyTitle")} sub={t("whySub")} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(({ key, Icon }) => (
            <div key={key} className="rounded-2xl border border-stone-200 bg-cream p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
                <Icon size={24} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-brand-900">{t(`why.${key}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{t(`why.${key}.text`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notices */}
      {notices.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
          <SectionHeading title={t("noticesTitle")} href="/notices" linkLabel={c("viewAll")} />
          <div className="grid gap-4 lg:grid-cols-3">
            {notices.slice(0, 3).map((n, i) => (
              <NoticeCard key={n.id} notice={n} isNew={i < 2} />
            ))}
          </div>
        </section>
      )}

      {/* Gallery */}
      {albums.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
          <SectionHeading title={t("galleryTitle")} sub={t("gallerySub")} href="/gallery" linkLabel={c("viewAll")} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {albums.slice(0, 6).map((a) => (
              <Link key={a.id} href="/gallery" className="group relative overflow-hidden rounded-2xl">
                {a.images[0] ? (
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Image src={a.images[0]} alt={a.title[locale]} fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover transition duration-300 group-hover:scale-105" />
                  </div>
                ) : (
                  <SampleTile hue={a.hue} className="aspect-[4/3] transition duration-300 group-hover:scale-105" />
                )}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 font-heading text-lg font-semibold text-white">
                  {a.title[locale]}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Videos */}
      {videos.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
          <SectionHeading title={t("videosTitle")} href="/videos" linkLabel={c("viewAll")} />
          <div className="grid gap-5 md:grid-cols-3">
            {videos.slice(0, 3).map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="leaf-pattern relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-600 p-8 text-white sm:p-14">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold-400/25" aria-hidden />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{t("ctaTitle")}</h2>
            <p className="mt-3 text-brand-100">{t("ctaText")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-800 hover:bg-brand-50">
                <Phone size={18} aria-hidden /> {c("call")}
              </a>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">
                {c("readMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
