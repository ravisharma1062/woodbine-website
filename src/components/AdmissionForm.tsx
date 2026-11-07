"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import WhatsAppIcon from "./WhatsAppIcon";
import { site } from "@/content/site";

const classes = ["Nursery", "LKG", "UKG", "1", "2", "3", "4", "5"];

export default function AdmissionForm() {
  const t = useTranslations("admissions.form");
  const [f, setF] = useState({ parent: "", child: "", cls: classes[0], phone: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Admission enquiry\nParent: ${f.parent}\nChild: ${f.child}\nClass: ${f.cls}\nPhone: ${f.phone}\n${f.message}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const input =
    "mt-1 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-200";

  return (
    <form onSubmit={submit} className="space-y-4 rounded-3xl border border-stone-200 bg-cream p-6">
      <label className="block text-sm font-medium">{t("parent")}
        <input required className={input} value={f.parent} onChange={set("parent")} />
      </label>
      <label className="block text-sm font-medium">{t("child")}
        <input required className={input} value={f.child} onChange={set("child")} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">{t("class")}
          <select className={input} value={f.cls} onChange={set("cls")}>
            {classes.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="block text-sm font-medium">{t("phone")}
          <input required type="tel" inputMode="tel" className={input} value={f.phone} onChange={set("phone")} />
        </label>
      </div>
      <label className="block text-sm font-medium">{t("message")}
        <textarea rows={3} className={input} value={f.message} onChange={set("message")} />
      </label>
      <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow hover:brightness-95">
        <WhatsAppIcon size={20} /> {t("send")}
      </button>
    </form>
  );
}
