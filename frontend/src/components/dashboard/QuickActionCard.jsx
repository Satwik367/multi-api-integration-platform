import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function QuickActionCard({
    title,
    description,
    icon,
    color,
    to,
    delay = 0
}) {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 20
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: 0.4,
                delay
            }}

            whileHover={{
                y: -8,
                scale: 1.02
            }}

        >

            <Link

                to={to}

                className="group relative flex h-full flex-col overflow-hidden rounded-2xl
                           border border-[var(--color-hairline)]
                           bg-[var(--color-surface)]
                           p-6
                           transition-colors
                           duration-300
                           hover:border-[var(--color-signal-indigo)]/40"

            >

                <div

                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-lg ${color}`}

                >

                    {icon}

                </div>

                <h3 className="font-display mt-6 text-xl font-semibold text-[var(--color-ink)]">

                    {title}

                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-ink-muted)]">

                    {description}

                </p>

                <div className="mt-auto pt-8">

                    <span

                        className="inline-flex items-center gap-2
                                   text-[var(--color-signal-indigo)]
                                   transition-all
                                   duration-300
                                   group-hover:gap-4"

                    >

                        Open

                        <FaArrowRight />

                    </span>

                </div>

                <div

                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 ${color}`}

                />

            </Link>

        </motion.div>

    );

}

export default QuickActionCard;