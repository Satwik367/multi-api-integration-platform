import { motion } from "framer-motion";

import {
    FaBolt,
    FaArrowRight
} from "react-icons/fa";

import FlowLine from "../ui/FlowLine";

function HeroSection({ analytics }) {

    const hour = new Date().getHours();

    let greeting = "Good evening";

    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 17) {
        greeting = "Good afternoon";
    }

    const successRate = analytics.totalCalls === 0
        ? "0%"
        : `${Math.round(analytics.successfulCalls * 100 / analytics.totalCalls)}%`;

    return (

        <motion.div

            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

            className="relative overflow-hidden rounded-2xl border border-[var(--color-hairline)]
                       bg-[var(--color-surface)] p-10"

        >

            <FlowLine orientation="horizontal" tone="indigo" className="absolute inset-x-0 top-0" />

            <div className="relative z-10">

                <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
                    {greeting}
                </h1>

                <h2 className="mt-2 text-lg text-[var(--color-ink-muted)]">
                    Welcome back to APIFlow AI
                </h2>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--color-ink-muted)]">
                    Your workspace for integrating Weather, GitHub, News, Currency and
                    Gemini AI &mdash; and orchestrating them into automated workflows
                    from a single dashboard.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                    <div className="rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] px-6 py-4">
                        <p className="text-xs text-[var(--color-ink-muted)]">
                            Total API Calls
                        </p>
                        <h3 className="font-data mt-1.5 text-3xl font-medium tabular-data text-[var(--color-ink)]">
                            {analytics.totalCalls}
                        </h3>
                    </div>

                    <div className="rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] px-6 py-4">
                        <p className="text-xs text-[var(--color-ink-muted)]">
                            Success Rate
                        </p>
                        <h3 className="font-data mt-1.5 text-3xl font-medium tabular-data text-[var(--color-signal-mint)]">
                            {successRate}
                        </h3>
                    </div>

                </div>

                <button
                    className="mt-8 flex items-center gap-2.5 rounded-xl
                               bg-[var(--color-signal-indigo)]
                               px-6 py-3.5 text-sm font-semibold text-white
                               transition-transform duration-200 hover:-translate-y-0.5"
                >
                    <FaBolt size={13} />
                    Start exploring
                    <FaArrowRight size={13} />
                </button>

            </div>

        </motion.div>

    );

}

export default HeroSection;