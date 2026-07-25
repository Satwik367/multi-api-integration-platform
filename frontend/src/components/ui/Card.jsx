import { cn } from "../../lib/cn";

function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8 transition-colors duration-300 hover:border-[var(--color-signal-indigo)]/30",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;