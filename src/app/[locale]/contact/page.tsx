import { use } from "react";
import { useLocale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site } from "@/content/site";

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = use(params);
  setRequestLocale(l);
  const t = useTranslations("contact");
  const c = useTranslations("common");
  const locale = useLocale() as "en" | "hi";
  const q = encodeURIComponent(site.mapQuery);

  const rows = [
    { Icon: MapPin, label: c("address"), value: site.address[locale] },
    { Icon: Phone, label: c("phone"), value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { Icon: Mail, label: c("email"), value: site.email, href: `mailto:${site.email}` },
    { Icon: Clock, label: c("hours"), value: site.hours[locale] },
  ];

  return (
    <>
      <PageHero title={t("title")} text={t("intro")} />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 lg:grid-cols-2">
        <div>
          <ul className="space-y-4">
            {rows.map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4 rounded-2xl border border-stone-200 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-stone-500">{label}</p>
                  {href ? (
                    <a href={href} className="font-semibold text-brand-800 hover:underline">{value}</a>
                  ) : (
                    <p className="font-semibold text-brand-900">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow hover:brightness-95"
          >
            <WhatsAppIcon size={20} /> {c("whatsapp")}
          </a>
        </div>

        <div>
          <SectionHeading title={t("mapTitle")} />
          <div className="overflow-hidden rounded-3xl border border-stone-200">
            <iframe
              title="Map"
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
          >
            {t("openMap")} <ExternalLink size={15} aria-hidden />
          </a>
        </div>
      </section>
    </>
  );
}
