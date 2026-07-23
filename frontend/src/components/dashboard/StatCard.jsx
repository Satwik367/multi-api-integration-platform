import { motion } from "framer-motion";

function StatCard({
    title,
    value,
    icon,
    color,
    subtitle,
    delay = 0
}) {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 25
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: 0.45,
                delay
            }}

            whileHover={{
                y: -6,
                scale: 1.02
            }}

            className="relative overflow-hidden rounded-3xl border border-white/10
                       bg-slate-900/60 backdrop-blur-xl
                       p-6 shadow-xl transition-all"

        >

            {/* Background Glow */}

            <div

                className={`absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl opacity-20 ${color}`}

            />

            {/* Icon */}

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-slate-400">

                        {title}

                    </p>

                    <h2 className="mt-4 text-5xl font-extrabold text-white">

                        {value}

                    </h2>

                    {

                        subtitle && (

                            <p className="mt-2 text-sm text-slate-500">

                                {subtitle}

                            </p>

                        )

                    }

                </div>

                <div

                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-lg ${color}`}

                >

                    {icon}

                </div>

            </div>

        </motion.div>

    );

}

export default StatCard;