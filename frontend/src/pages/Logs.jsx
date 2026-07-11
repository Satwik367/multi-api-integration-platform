import { useEffect, useState } from "react";
import { getLogs } from "../services/logService";

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getLogs();
    setLogs(data.logs);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Activity Logs
      </h1>
      {logs.map((log) => (
        <div
          key={log._id}
          className="bg-white shadow rounded p-6 mb-4"
        >
          <h2 className="font-bold">
            {log.api}
          </h2>
          <p>
            {log.status}
          </p>
          <p>
            {new Date(log.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Logs;