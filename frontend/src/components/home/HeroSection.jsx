import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCloudSun,
  FaRobot,
  FaNewspaper,
  FaChartLine,
  FaGithub,
} from "react-icons/fa";

import Button from "../ui/Button";

function HeroSection() {
  const stats = [
    { number: "6+", label: "Integrated APIs" },
    { number: "AI", label: "Gemini Powered" },
    { number: "JWT", label: "Secure Auth" },
    { number: "24/7", label: "Automation" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-40 pb-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-52 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl animate-pulse" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-3xl animate-pulse" />

      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-300">

            🚀 Modern Multi API Integration Platform

          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white">

            Build.

            <br />

            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">

              Integrate.

            </span>

            <br />

            Automate.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

            Connect multiple APIs, automate workflows,
            monitor executions and leverage AI —
            all from one beautiful dashboard.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link to="/register">
              <Button className="!w-auto px-8">
                Get Started
              </Button>
            </Link>

            <Link to="/login">

              <button className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-3 font-medium text-white transition hover:border-indigo-500 hover:bg-slate-800">

                Login

              </button>

            </Link>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <h2 className="text-3xl font-black text-white">

                  {item.number}

                </h2>

                <p className="mt-2 text-sm text-slate-400">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          <div className="relative w-full max-w-md">

            {/* Workflow Card */}

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl">

              <h3 className="mb-8 text-center text-2xl font-bold text-white">

                Workflow Preview

              </h3>

              <WorkflowCard
                icon={<FaCloudSun />}
                title="Weather API"
                color="text-yellow-400"
              />

              <Arrow />

              <WorkflowCard
                icon={<FaRobot />}
                title="Gemini AI"
                color="text-purple-400"
              />

              <Arrow />

              <WorkflowCard
                icon={<FaNewspaper />}
                title="News API"
                color="text-red-400"
              />

              <Arrow />

              <WorkflowCard
                icon={<FaChartLine />}
                title="Dashboard Analytics"
                color="text-green-400"
              />

            </div>

            {/* Floating Cards */}

            <FloatingCard
              className="-left-12 top-8"
              icon={<FaGithub />}
              title="GitHub"
            />

            <FloatingCard
              className="-right-10 bottom-12"
              icon={<FaRobot />}
              title="AI Ready"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function WorkflowCard({ icon, title, color }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-800/70 p-5">

      <div className={`text-3xl ${color}`}>
        {icon}
      </div>

      <div>

        <h4 className="font-semibold text-white">

          {title}

        </h4>

        <p className="text-sm text-slate-400">

          Connected

        </p>

      </div>

    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-3">

      <FaArrowRight className="rotate-90 text-indigo-400" />

    </div>
  );
}

function FloatingCard({ icon, title, className }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className={`absolute rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-3">

        <div className="text-xl text-indigo-400">

          {icon}

        </div>

        <p className="font-medium text-white">

          {title}

        </p>

      </div>
    </motion.div>
  );
}

export default HeroSection;