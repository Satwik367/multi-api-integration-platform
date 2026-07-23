import Badge from "./Badge";

function SectionHeading({
  badge,
  title,
  description,
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      {badge && (
        <Badge>
          {badge}
        </Badge>
      )}

      <h2 className="mt-6 text-5xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default SectionHeading;