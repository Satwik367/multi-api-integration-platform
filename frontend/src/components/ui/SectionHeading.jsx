import Badge from "./Badge";

function SectionHeading({
  badge,
  title,
  description,
}) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      {badge && (
        <Badge>
          {badge}
        </Badge>
      )}

      <h2 className="font-display mt-6 text-5xl font-bold text-[var(--color-ink)]">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-[var(--color-ink-muted)]">
        {description}
      </p>

    </div>
  );
}

export default SectionHeading;