// StatCard.jsx
import { motion } from "framer-motion";

import FlowLine from "../ui/FlowLine";

const toneMap = {
    indigo: { text: "text-[var(--color-signal-indigo)]", bg: "bg-[var(--color-signal-indigo-soft)]" },
    mint: { text: "text-[var(--color-signal-mint)]", bg: "bg-[var(--color-signal-mint-soft)]" },
    coral: { text: "text-[var(--color-signal-coral)]", bg: "bg-[var(--color-signal-coral-soft)]" },
};

function StatCard({
    title,
    value,
    icon,
    tone = "indigo",
    subtitle,
    delay = 0
}) {

    const colors = toneMap[tone] || toneMap.indigo;

    return (

        <motion.div

            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
            whileHover={{ y: -3 }}

            className="relative overflow-hidden rounded-2xl border border-[var(--color-hairline)]
                       bg-[var(--color-surface)] p-6 transition-transform"

        >

            <FlowLine orientation="horizontal" tone={tone} className="absolute inset-x-0 top-0" />

            <div className="flex items-start justify-between">

                <div>
                    <p className="text-sm text-[var(--color-ink-muted)]">
                        {title}
                    </p>

                    <h2 className="font-data mt-3 text-4xl font-medium tabular-data text-[var(--color-ink)]">
                        {value}
                    </h2>

                    {subtitle && (
                        <p className="mt-2 text-xs text-[var(--color-ink-faint)]">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${colors.bg} ${colors.text}`}>
                    {icon}
                </div>

            </div>

        </motion.div>

    );

}

export default StatCard;