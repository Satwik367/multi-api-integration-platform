import { motion } from "framer-motion";

function Button({
  children,
  type = "button",
  onClick,
  loading = false,
  disabled = false,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-indigo-500/40",

    secondary:
      "bg-slate-800 border border-slate-700 text-white hover:bg-slate-700",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",

    success:
      "bg-green-600 hover:bg-green-700 text-white",
  };

  return (
    <motion.button
      whileHover={{
        scale: loading || disabled ? 1 : 1.02,
      }}
      whileTap={{
        scale: loading || disabled ? 1 : 0.98,
      }}
      transition={{
        duration: 0.15,
      }}
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`
        relative
        w-full
        overflow-hidden
        rounded-xl
        py-3.5
        font-semibold
        transition-all
        duration-300
        disabled:cursor-not-allowed
        disabled:opacity-60
        shadow-lg
        ${variants[variant]}
        ${className}
      `}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-3">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <span>Please wait...</span>
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
}

export default Button;