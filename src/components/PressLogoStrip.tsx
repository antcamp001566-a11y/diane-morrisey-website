import { pressLogos } from "@/data/press";

export default function PressLogoStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
      {pressLogos.map((logo) => (
        <span
          key={logo}
          className="font-display text-lg font-semibold tracking-tight text-ink-light/70 sm:text-xl"
        >
          {logo}
        </span>
      ))}
    </div>
  );
}
