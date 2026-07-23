import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";

import HeroSection from "../components/dashboard/HeroSection";
import StatsGrid from "../components/dashboard/StatsGrid";
import QuickActions from "../components/dashboard/QuickActions";
import AnalyticsCard from "../components/dashboard/AnalyticsCard";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";

import { motion } from "framer-motion";

function Dashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboard();
      setAnalytics(data.analytics);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="h-16 w-16 rounded-full border-4 border-indigo-500 border-t-transparent"
        />
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-3xl bg-red-500/10 border border-red-500/20 p-10">
          <h2 className="text-2xl font-bold text-red-400">
            Unable to load dashboard
          </h2>
          <p className="mt-2 text-slate-400">
            Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      {/* Hero */}
      <HeroSection analytics={analytics} />

      {/* Statistics */}
      <StatsGrid analytics={analytics} />

      {/* Analytics + Quick Actions */}
      <div className="grid gap-8 xl:grid-cols-2">
        <AnalyticsCard analytics={analytics} />
        <QuickActions />
      </div>

      <ActivityTimeline activities={analytics.recentActivity} />
    </motion.div>
  );
}

export default Dashboard;