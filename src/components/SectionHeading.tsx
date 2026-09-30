type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  // Defaults to h2 (a section heading within a page). Pass "h1" when this
  // is the page's single main heading (About, Press, Recipes, Contact all
  // use SectionHeading as their only title, so they need this).
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-2 font-body text-sm font-bold uppercase tracking-widest text-tomato">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-bold text-ink sm:text-4xl">{title}</Heading>
      {description && (
        <p className="mt-3 font-body text-lg text-ink-light">{description}</p>
      )}
    </div>
  );
}
