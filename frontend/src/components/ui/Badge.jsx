import { cn } from "../../lib/cn";

function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;