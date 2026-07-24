import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-[var(--color-signal-indigo)] hover:bg-[var(--color-signal-indigo)]/90 text-white",

  secondary:
    "border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] hover:bg-[var(--color-surface)] text-[var(--color-ink)]",

  success:
    "bg-[var(--color-signal-mint)] hover:bg-[var(--color-signal-mint)]/90 text-[#06251c]",

  danger:
    "bg-[var(--color-signal-coral)] hover:bg-[var(--color-signal-coral)]/90 text-white",
};

function Button({
  children,
  className,
  variant = "primary",
  loading = false,
  disabled = false,
  ...props
}) {
  return (
    <motion.button
      whileHover={loading || disabled ? {} : { scale: 1.03 }}
      whileTap={loading || disabled ? {} : { scale: 0.98 }}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className
      )}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
      {children}
    </motion.button>
  );
}

export default Button;