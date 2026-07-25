import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
    FaBolt,
    FaArrowRight
} from "react-icons/fa";

import FlowLine from "../ui/FlowLine";

function HeroSection() {

    const navigate = useNavigate();

    const hour = new Date().getHours();

    let greeting = "Good evening";

    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 17) {
        greeting = "Good afternoon";
    }

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

                <button
                    onClick={() => navigate("/marketplace")}
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