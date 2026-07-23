import { cn } from "../../lib/cn";

function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-6 transition-all duration-300 hover:border-indigo-500/30",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;