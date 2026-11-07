import { useTranslations } from "next-intl";
import WhatsAppIcon from "./WhatsAppIcon";
import { site } from "@/content/site";

export default function FloatingWhatsApp() {
  const t = useTranslations("common");
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp")}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
