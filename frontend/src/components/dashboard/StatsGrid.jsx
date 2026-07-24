import {
    FaChartLine,
    FaCheckCircle,
    FaTimesCircle,
    FaProjectDiagram
} from "react-icons/fa";

import StatCard from "./StatCard";

function StatsGrid({ analytics }) {

    return (

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="Total API Calls"
                value={analytics.totalCalls}
                subtitle="All API requests"
                icon={<FaChartLine />}
                tone="indigo"
                delay={0}
            />

            <StatCard
                title="Successful Calls"
                value={analytics.successfulCalls}
                subtitle="Completed successfully"
                icon={<FaCheckCircle />}
                tone="mint"
                delay={0.05}
            />

            <StatCard
                title="Failed Calls"
                value={analytics.failedCalls}
                subtitle="Needs attention"
                icon={<FaTimesCircle />}
                tone="coral"
                delay={0.1}
            />

            <StatCard
                title="Workflows"
                value={analytics.workflows}
                subtitle="Saved workflows"
                icon={<FaProjectDiagram />}
                tone="indigo"
                delay={0.15}
            />

        </div>

    );

}

export default StatsGrid;