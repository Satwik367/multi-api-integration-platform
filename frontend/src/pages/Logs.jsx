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

            <div className="p-8">

                <h2 className="text-2xl font-bold">

                    Loading Activity Logs...

                </h2>

            </div>

        );

    }

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold">

                    API Activity Logs

                </h1>

                <p className="text-gray-500 mt-2">

                    Every API request made through the platform is recorded here.

                </p>

            </div>

            {

                logs.length === 0

                ?

                (

                    <div className="bg-white rounded-xl shadow-lg p-10 text-center">

                        <FaDatabase

                            className="text-6xl text-blue-600 mx-auto mb-6"

                        />

                        <h2 className="text-2xl font-bold">

                            No Logs Found

                        </h2>

                        <p className="text-gray-500 mt-3">

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

                                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"

                                >

                                    <div className="flex justify-between items-center">

                                        <div>

                                            <h2 className="text-2xl font-bold">

                                                {log.api}

                                            </h2>

                                            <p className="text-gray-500 mt-2">

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

                                                    <div className="flex items-center gap-2 text-green-600 font-bold">

                                                        <FaCheckCircle />

                                                        SUCCESS

                                                    </div>

                                                )

                                                :

                                                (

                                                    <div className="flex items-center gap-2 text-red-600 font-bold">

                                                        <FaTimesCircle />

                                                        FAILED

                                                    </div>

                                                )

                                            }

                                        </div>

                                    </div>

                                    {

                                        log.request &&

                                        <div className="mt-6">

                                            <h3 className="font-bold mb-2">

                                                Request

                                            </h3>

                                            <pre className="bg-slate-100 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap">

{JSON.stringify(log.request,null,2)}

                                            </pre>

                                        </div>

                                    }

                                    {

                                        log.response &&

                                        <div className="mt-6">

                                            <h3 className="font-bold mb-2">

                                                Response

                                            </h3>

                                            <pre className="bg-slate-100 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap">

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