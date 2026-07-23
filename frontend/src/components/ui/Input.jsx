import { cn } from "../../lib/cn";

function Input({
  className,
  ...props
}) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500",
        className
      )}
      {...props}
    />
  );
}

export default Input;