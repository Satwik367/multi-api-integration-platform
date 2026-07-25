import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-[var(--color-signal-indigo-soft)] border-[var(--color-signal-indigo)]/20 text-[var(--color-signal-indigo)]",

  secondary:
    "bg-[var(--color-surface-raised)] border-[var(--color-hairline)] text-[var(--color-ink-muted)]",

  success:
    "bg-[var(--color-signal-mint-soft)] border-[var(--color-signal-mint)]/20 text-[var(--color-signal-mint)]",

  danger:
    "bg-[var(--color-signal-coral-soft)] border-[var(--color-signal-coral)]/20 text-[var(--color-signal-coral)]",
};

function Badge({ children, className, variant = "primary" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;