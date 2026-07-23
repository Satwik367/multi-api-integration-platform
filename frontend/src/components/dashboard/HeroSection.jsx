import { motion } from "framer-motion";

import {
    FaBolt,
    FaArrowRight
} from "react-icons/fa";

function HeroSection({ analytics }) {

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) {

        greeting = "Good Morning";

    }

    else if (hour < 17) {

        greeting = "Good Afternoon";

    }

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 30
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: 0.6
            }}

            className="relative overflow-hidden rounded-3xl
                       border border-white/10
                       bg-gradient-to-br
                       from-indigo-600/20
                       via-slate-900/80
                       to-cyan-600/20
                       backdrop-blur-xl
                       p-10"

        >

            {/* Glow */}

            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-600 opacity-20 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500 opacity-20 blur-3xl" />

            <div className="relative z-10">

                <motion.h1

                    initial={{
                        opacity: 0,
                        x: -20
                    }}

                    animate={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        delay: 0.2
                    }}

                    className="text-5xl font-black text-white"

                >

                    👋 {greeting}

                </motion.h1>

                <motion.h2

                    initial={{
                        opacity: 0
                    }}

                    animate={{
                        opacity: 1
                    }}

                    transition={{
                        delay: 0.35
                    }}

                    className="mt-3 text-3xl font-bold text-indigo-300"

                >

                    Welcome back to APIFlow AI

                </motion.h2>

                <motion.p

                    initial={{
                        opacity: 0
                    }}

                    animate={{
                        opacity: 1
                    }}

                    transition={{
                        delay: 0.45
                    }}

                    className="mt-6 max-w-3xl text-lg leading-8 text-slate-300"

                >

                    Your intelligent workspace for integrating

                    Weather, GitHub, News, Currency,

                    Gemini AI and automated workflows

                    from a single unified dashboard.

                </motion.p>

                <div className="mt-10 flex flex-wrap gap-6">

                    <div className="rounded-2xl bg-white/5 border border-white/10 px-6 py-5">

                        <p className="text-sm text-slate-400">

                            Total API Calls

                        </p>

                        <h3 className="mt-2 text-4xl font-bold">

                            {analytics.totalCalls}

                        </h3>

                    </div>

                    <div className="rounded-2xl bg-white/5 border border-white/10 px-6 py-5">

                        <p className="text-sm text-slate-400">

                            Success Rate

                        </p>

                        <h3 className="mt-2 text-4xl font-bold text-green-400">

                            {

                                analytics.totalCalls === 0

                                ?

                                "0%"

                                :

                                `${Math.round(

                                    analytics.successfulCalls * 100 /

                                    analytics.totalCalls

                                )}%`

                            }

                        </h3>

                    </div>

                </div>

                <button

                    className="mt-10 flex items-center gap-3
                               rounded-2xl
                               bg-gradient-to-r
                               from-indigo-600
                               to-purple-600
                               px-8
                               py-4
                               font-semibold
                               text-white
                               shadow-xl
                               transition
                               duration-300
                               hover:scale-105"

                >

                    <FaBolt />

                    Start Exploring

                    <FaArrowRight />

                </button>

            </div>

        </motion.div>

    );

}

export default HeroSection;