import Image from "next/image";

// ---------------------------------------------------------------------------
// SITE IMAGE
// Renders a real image when `src` is provided; otherwise falls back to a
// warm, on-brand placeholder card labeled with what should go there, so
// it's obvious what to shoot/upload and where it goes — never disguised as
// a real photo. Once you have real photography, pass a `src`
// (e.g. "/images/home/hero-diane.jpg") and it's used automatically, no
// other changes needed. See CONTENT-GUIDE.md for exact dimensions/naming
// per placement.
// ---------------------------------------------------------------------------

type SiteImageProps = {
  src?: string;
  alt: string;
  fallbackLabel?: string;
  variant?: "tomato" | "olive" | "cream";
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

// Kept to a single warm-to-dark duotone per variant rather than a
// multi-hue blend — reads as an intentional brand placeholder, not a
// decorative gradient.
const gradients: Record<string, string> = {
  tomato: "from-tomato to-ink",
  olive: "from-olive to-ink",
  cream: "from-cream-dark to-olive-dark",
};

const DEFAULT_SIZES = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

export default function SiteImage({
  src,
  alt,
  fallbackLabel,
  variant = "tomato",
  className = "",
  fill = false,
  width,
  height,
  priority = false,
  sizes,
}: SiteImageProps) {
  if (src) {
    return fill ? (
      <Image
        src={src}
        alt={alt}
        className={className}
        fill
        priority={priority}
        sizes={sizes ?? DEFAULT_SIZES}
      />
    ) : (
      <Image
        src={src}
        alt={alt}
        className={className}
        width={width ?? 800}
        height={height ?? 600}
        priority={priority}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradients[variant]} ${
        fill ? "absolute inset-0" : "relative"
      } ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8 text-white/80"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5V6a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 6v12a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18v-1.5Zm0 0 5.25-5.25a1.5 1.5 0 0 1 2.12 0L14.25 15M14 14l1.65-1.65a1.5 1.5 0 0 1 2.12 0L21 15.5"
          />
          <circle cx="8.25" cy="8.25" r="1.25" />
        </svg>
        <p className="text-xs font-semibold uppercase tracking-wide text-white/90">
          Photo placeholder
        </p>
        {fallbackLabel && (
          <p className="font-body text-sm text-white">{fallbackLabel}</p>
        )}
      </div>
    </div>
  );
}
