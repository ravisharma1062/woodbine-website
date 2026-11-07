"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Category, Notice } from "@/content/notices";
import NoticeCard from "./NoticeCard";

const cats: Category[] = ["general", "exam", "holiday", "event", "fees"];

export default function NoticeBoard({ items }: { items: Notice[] }) {
  const t = useTranslations("notices");
  const [active, setActive] = useState<Category | "all">("all");
  const shown = active === "all" ? items : items.filter((n) => n.category === active);

  const chip = (on: boolean) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      on ? "bg-brand-700 text-white" : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-brand-50"
    }`;

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button className={chip(active === "all")} onClick={() => setActive("all")}>{t("all")}</button>
        {cats.map((c) => (
          <button key={c} className={chip(active === c)} onClick={() => setActive(c)}>{t(`categories.${c}`)}</button>
        ))}
      </div>
      {shown.length === 0 ? (
        <p className="text-stone-500">{t("empty")}</p>
      ) : (
        <div className="grid gap-4">
          {shown.map((n) => (
            <NoticeCard key={n.id} notice={n} isNew={items.indexOf(n) < 2} />
          ))}
        </div>
      )}
    </div>
  );
}
