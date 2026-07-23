import { motion } from "framer-motion";

import {
    FaCloudSun,
    FaGithub,
    FaNewspaper,
    FaExchangeAlt,
    FaRobot,
    FaProjectDiagram,
    FaCheckCircle,
    FaTimesCircle
} from "react-icons/fa";

const iconMap = {
    Weather: <FaCloudSun />,
    GitHub: <FaGithub />,
    News: <FaNewspaper />,
    Currency: <FaExchangeAlt />,
    Gemini: <FaRobot />,
    Workflow: <FaProjectDiagram />
};

function ActivityTimeline({ activities }) {

    return (

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8">

            <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold text-white">

                    Recent Activity

                </h2>

                <span className="text-slate-400">

                    {activities.length} Logs

                </span>

            </div>

            {

                activities.length === 0 ?

                (

                    <p className="text-slate-400">

                        No activity yet.

                    </p>

                )

                :

                (

                    <div className="space-y-4">

                        {

                            activities.map((log, index) => (

                                <motion.div

                                    key={log._id}

                                    initial={{ opacity: 0, x: -20 }}

                                    animate={{ opacity: 1, x: 0 }}

                                    transition={{ delay: index * 0.08 }}

                                    whileHover={{ x: 5 }}

                                    className="flex justify-between items-center rounded-2xl border border-white/10 bg-white/5 p-5"

                                >

                                    <div className="flex items-center gap-5">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white">

                                            {iconMap[log.api] || <FaProjectDiagram />}

                                        </div>

                                        <div>

                                            <h3 className="font-semibold text-white">

                                                {log.api}

                                            </h3>

                                            <p className="text-sm text-slate-400">

                                                {new Date(log.createdAt).toLocaleString()}

                                            </p>

                                        </div>

                                    </div>

                                    {

                                        log.status === "SUCCESS"

                                        ?

                                        <FaCheckCircle className="text-2xl text-green-500"/>

                                        :

                                        <FaTimesCircle className="text-2xl text-red-500"/>

                                    }

                                </motion.div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default ActivityTimeline;