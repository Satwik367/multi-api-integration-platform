import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 text-white",

  secondary:
    "border border-white/10 bg-zinc-900 hover:bg-zinc-800 text-white",

  success:
    "bg-green-600 hover:bg-green-500 text-white",

  danger:
    "bg-red-600 hover:bg-red-500 text-white",
};

function Button({
  children,
  className,
  variant = "primary",
  ...props
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;