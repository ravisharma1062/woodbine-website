"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Phone } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { site } from "@/content/site";

const items = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/notices", key: "notices" },
  { href: "/gallery", key: "gallery" },
  { href: "/videos", key: "videos" },
  { href: "/admissions", key: "admissions" },
  { href: "/contact", key: "contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-white/90 backdrop-blur">
      <div className="hidden bg-brand-800 text-xs text-brand-100 sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5">
          <span>{site.email}</span>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone size={12} aria-hidden /> {site.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {items.map((i) => (
            <Link
              key={i.key}
              href={i.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                isActive(i.href) ? "bg-brand-100 text-brand-800" : "text-stone-600 hover:bg-stone-100 hover:text-brand-800"
              }`}
            >
              {t(i.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={t("menu")}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-stone-200 bg-white px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile">
          {items.map((i) => (
            <Link
              key={i.key}
              href={i.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3 text-base font-medium ${
                isActive(i.href) ? "bg-brand-100 text-brand-800" : "text-stone-700"
              }`}
            >
              {t(i.key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
