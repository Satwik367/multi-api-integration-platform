import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CloudSun,
  BrainCircuit,
  Github,
  Newspaper,
  BarChart3,
} from "lucide-react";

import Button from "../ui/Button";

const workflow = [
  {
    icon: CloudSun,
    title: "Weather API",
    color: "text-yellow-400",
  },
  {
    icon: BrainCircuit,
    title: "Gemini AI",
    color: "text-violet-400",
  },
  {
    icon: Github,
    title: "GitHub",
    color: "text-white",
  },
  {
    icon: Newspaper,
    title: "News API",
    color: "text-blue-400",
  },
  {
    icon: BarChart3,
    title: "Dashboard",
    color: "text-green-400",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-6 lg:flex-row lg:px-10">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            🚀 AI-Powered Workflow Automation
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
            Build
            <span className="text-indigo-500"> AI Workflows </span>
            Without Glue Code.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Connect multiple APIs, automate repetitive tasks,
            and integrate AI into your applications with
            a beautiful workflow builder.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button className="gap-2">
              Start Building
              <ArrowRight size={18} />
            </Button>

            <Button
              variant="secondary"
              className="gap-2"
            >
              <Play size={18} />
              Live Demo
            </Button>

          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">

            <span>⚡ Fast API Integrations</span>

            <span>🤖 AI Powered</span>

            <span>🔒 Secure Authentication</span>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-1 justify-center"
        >

          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur-xl">

            <div className="mb-8 flex items-center justify-between">

              <h3 className="text-xl font-semibold text-white">
                Workflow
              </h3>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                Ready
              </span>

            </div>

            <div className="space-y-5">

              {workflow.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title}>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.15,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-4"
                    >

                      <div className="rounded-xl bg-zinc-800 p-3">

                        <Icon
                          size={22}
                          className={step.color}
                        />

                      </div>

                      <div>

                        <p className="font-medium text-white">
                          {step.title}
                        </p>

                        <p className="text-sm text-slate-400">
                          Connected
                        </p>

                      </div>

                    </motion.div>

                    {index !== workflow.length - 1 && (
                      <div className="ml-7 h-8 border-l border-dashed border-indigo-500/40" />
                    )}

                  </div>
                );
              })}

            </div>

            <Button className="mt-8 w-full">
              Execute Workflow
            </Button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;