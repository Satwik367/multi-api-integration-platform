import { useEffect, useState } from "react";
import {
    FaCheckCircle,
    FaTimesCircle,
    FaDatabase
} from "react-icons/fa";

import { getLogs } from "../services/logService";

function Logs() {

    const [logs, setLogs] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadLogs();

    }, []);

    const loadLogs = async () => {

        try {

            const data = await getLogs();

            setLogs(data.logs);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div>

                <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">

                    Loading activity logs...

                </h2>

            </div>

        );

    }

    return (

        <div className="space-y-10">

            <div>

                <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)]">

                    API Activity Logs

                </h1>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                    Every API request made through the platform is recorded here.

                </p>

            </div>

            {

                logs.length === 0

                ?

                (

                    <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-10 text-center">

                        <FaDatabase

                            className="text-5xl text-[var(--color-signal-indigo)] mx-auto mb-6"

                        />

                        <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">

                            No logs found

                        </h2>

                        <p className="mt-3 text-sm text-[var(--color-ink-muted)]">

                            Execute an API to generate activity logs.

                        </p>

                    </div>

                )

                :

                (

                    <div className="space-y-5">

                        {

                            logs.map((log)=>(

                                <div

                                    key={log._id}

                                    className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 transition-colors hover:border-[var(--color-signal-indigo)]/30"

                                >

                                    <div className="flex justify-between items-center">

                                        <div>

                                            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">

                                                {log.api}

                                            </h2>

                                            <p className="font-data mt-1.5 text-xs text-[var(--color-ink-muted)]">

                                                {

                                                    new Date(

                                                        log.createdAt

                                                    ).toLocaleString()

                                                }

                                            </p>

                                        </div>

                                        <div>

                                            {

                                                log.status==="SUCCESS"

                                                ?

                                                (

                                                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-signal-mint)]">

                                                        <FaCheckCircle />

                                                        Success

                                                    </div>

                                                )

                                                :

                                                (

                                                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-signal-coral)]">

                                                        <FaTimesCircle />

                                                        Failed

                                                    </div>

                                                )

                                            }

                                        </div>

                                    </div>

                                    {

                                        log.request &&

                                        <div className="mt-6">

                                            <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--color-ink-muted)]">

                                                Request

                                            </h3>

                                            <pre className="font-data rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-4 overflow-x-auto whitespace-pre-wrap text-xs text-[var(--color-ink-muted)]">
{JSON.stringify(log.request,null,2)}
                                            </pre>

                                        </div>

                                    }

                                    {

                                        log.response &&

                                        <div className="mt-6">

                                            <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--color-ink-muted)]">

                                                Response

                                            </h3>

                                            <pre className="font-data rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-4 overflow-x-auto whitespace-pre-wrap text-xs text-[var(--color-ink-muted)]">
{JSON.stringify(log.response,null,2)}
                                            </pre>

                                        </div>

                                    }

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default Logs;