import { useLocale, useTranslations } from "next-intl";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";
import { site } from "@/content/site";

const links = ["about", "notices", "gallery", "videos", "admissions", "contact"] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const brand = useTranslations("brand");
  const locale = useLocale() as "en" | "hi";

  return (
    <footer className="mt-24 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">{t("about")}</p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">{t("links")}</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l}>
                <Link href={`/${l}`} className="hover:text-white">{nav(l)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">{t("contact")}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" aria-hidden />{site.address[locale]}</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-gold-400" aria-hidden />{site.phone}</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-gold-400" aria-hidden />{site.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-brand-200">
        © {new Date().getFullYear()} {brand("name")}. {t("rights")}
      </div>
    </footer>
  );
}
