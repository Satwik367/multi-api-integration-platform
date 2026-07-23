import { motion } from "framer-motion";

function WorkflowNode({ icon: Icon, title, subtitle = "Connected", color = "text-indigo-400", className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 backdrop-blur-xl shadow-lg shadow-black/20 ${className}`}
    >
      <div className="rounded-xl bg-zinc-800 p-3">
        <Icon size={22} className={color} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <p className="text-xs text-slate-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default WorkflowNode;