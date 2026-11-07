import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function SectionHeading({
  title, sub, href, linkLabel,
}: { title: string; sub?: string; href?: string; linkLabel?: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-3xl font-bold text-brand-800 sm:text-4xl">{title}</h2>
        <div className="mt-3 h-1 w-14 rounded-full bg-gold-400" aria-hidden />
        {sub && <p className="mt-3 max-w-xl text-stone-600">{sub}</p>}
      </div>
      {href && linkLabel && (
        <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900">
          {linkLabel} <ArrowRight size={16} aria-hidden />
        </Link>
      )}
    </div>
  );
}
