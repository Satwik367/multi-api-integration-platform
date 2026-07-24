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

        <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8">

            <div className="flex items-center justify-between mb-8">

                <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">

                    Recent Activity

                </h2>

                <span className="font-data text-sm text-[var(--color-ink-muted)]">

                    {activities.length} logs

                </span>

            </div>

            {

                activities.length === 0 ?

                (

                    <p className="text-sm text-[var(--color-ink-muted)]">

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

                                    className="flex justify-between items-center rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-5"

                                >

                                    <div className="flex items-center gap-5">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-signal-indigo-soft)] text-lg text-[var(--color-signal-indigo)]">

                                            {iconMap[log.api] || <FaProjectDiagram />}

                                        </div>

                                        <div>

                                            <h3 className="font-medium text-[var(--color-ink)]">

                                                {log.api}

                                            </h3>

                                            <p className="font-data text-xs text-[var(--color-ink-muted)]">

                                                {new Date(log.createdAt).toLocaleString()}

                                            </p>

                                        </div>

                                    </div>

                                    {

                                        log.status === "SUCCESS"

                                        ?

                                        <FaCheckCircle className="text-xl text-[var(--color-signal-mint)]"/>

                                        :

                                        <FaTimesCircle className="text-xl text-[var(--color-signal-coral)]"/>

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