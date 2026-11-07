import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Logo({ light = false }: { light?: boolean }) {
  const t = useTranslations("brand");
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="" width={44} height={44} className="h-11 w-11" />
      <span className="leading-tight">
        <span className={`block font-heading text-base font-bold sm:text-lg ${light ? "text-white" : "text-brand-800"}`}>
          {t("name")}
        </span>
        <span className={`block text-xs ${light ? "text-brand-200" : "text-stone-500"}`}>{t("tagline")}</span>
      </span>
    </Link>
  );
}
