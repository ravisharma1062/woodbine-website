"use client";

import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const next = locale === "en" ? "hi" : "en";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: next })}
      className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      aria-label="Change language"
    >
      <Languages size={16} aria-hidden />
      {t("language")}
    </button>
  );
}
