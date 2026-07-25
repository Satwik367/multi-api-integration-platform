import { motion } from "framer-motion";

function WorkflowNode({ icon: Icon, title, subtitle = "Connected", color = "text-[var(--color-signal-indigo)]", className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center gap-3 rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] px-4 py-3 shadow-lg shadow-black/20 ${className}`}
    >
      <div className="rounded-xl bg-[var(--color-surface-raised)] p-3">
        <Icon size={22} className={color} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-[var(--color-ink)]">{title}</h4>
        <p className="text-xs text-[var(--color-ink-muted)]">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default WorkflowNode;