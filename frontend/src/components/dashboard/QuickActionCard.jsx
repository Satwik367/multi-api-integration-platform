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

                className="group relative flex h-full flex-col overflow-hidden rounded-3xl
                           border border-white/10
                           bg-slate-900/60
                           p-6
                           backdrop-blur-xl
                           transition-all
                           duration-300
                           hover:border-indigo-500/40
                           hover:shadow-2xl
                           hover:shadow-indigo-500/20"

            >

                <div

                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-lg ${color}`}

                >

                    {icon}

                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">

                    {title}

                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">

                    {description}

                </p>

                <div className="mt-auto pt-8">

                    <span

                        className="inline-flex items-center gap-2
                                   text-indigo-400
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