import { Images } from "lucide-react";

// Coloured tile shown until real photos are added.
export default function SampleTile({ hue, className = "" }: { hue: number; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ background: `linear-gradient(135deg, hsl(${hue} 70% 88%), hsl(${hue} 55% 68%))` }}
      aria-hidden
    >
      <Images size={36} className="text-white/80" />
    </div>
  );
}
