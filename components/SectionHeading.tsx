type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? "text-gold" : "text-gold-dark"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/75" : "text-navy/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
