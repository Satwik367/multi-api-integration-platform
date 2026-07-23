import {
    FaChartLine,
    FaCheckCircle,
    FaTimesCircle,
    FaProjectDiagram
} from "react-icons/fa";

import StatCard from "./StatCard";

function StatsGrid({ analytics }) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard

                title="Total API Calls"

                value={analytics.totalCalls}

                subtitle="All API requests"

                icon={<FaChartLine />}

                color="bg-indigo-600"

                delay={0}

            />

            <StatCard

                title="Successful Calls"

                value={analytics.successfulCalls}

                subtitle="Completed successfully"

                icon={<FaCheckCircle />}

                color="bg-green-600"

                delay={0.1}

            />

            <StatCard

                title="Failed Calls"

                value={analytics.failedCalls}

                subtitle="Needs attention"

                icon={<FaTimesCircle />}

                color="bg-red-600"

                delay={0.2}

            />

            <StatCard

                title="Workflows"

                value={analytics.workflows}

                subtitle="Saved workflows"

                icon={<FaProjectDiagram />}

                color="bg-blue-600"

                delay={0.3}

            />

        </div>

    );

}

export default StatsGrid;