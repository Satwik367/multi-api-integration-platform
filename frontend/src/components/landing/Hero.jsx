import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CloudSun,
  BrainCircuit,
  Newspaper,
  LayoutDashboard,
  GitBranch,
  Play,
  Zap,
  ShieldCheck,
  Cpu,
  Workflow
} from "lucide-react";

import Button from "../ui/Button";
import Badge from "../ui/Badge";
import WorkflowNode from "./WorkflowNode";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#4338ca33,transparent_40%),radial-gradient(circle_at_bottom_right,#06b6d433,transparent_40%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row lg:px-10"
      >
        {/* LEFT */}
        <motion.div variants={item} className="flex-1">
          <Badge className="mb-8 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-300">
            <Sparkles size={14} />
            AI Powered Workflow Automation
          </Badge>

          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Build
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Intelligent API{" "}
            </span>
            Workflows Visually
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Connect APIs, AI models and cloud services with an intuitive
            workflow builder. Create, execute and monitor powerful
            automations without writing repetitive integration code.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="group">
              Start Building
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>

            <Button size="lg" variant="secondary" className="border border-white/10 bg-white/5 backdrop-blur">
              <Play size={17} />
              Live Demo
            </Button>
          </div>

          <div className="mt-5 flex items-center gap-4 text-sm text-slate-400">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-indigo-500 to-cyan-400"
                />
              ))}
            </div>

            <span>
              Trusted by <span className="font-semibold text-white">2,000+</span>{" "}
              developers worldwide
            </span>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-2 gap-5">
            {[
              { icon: Zap, title: "Lightning Fast" },
              { icon: ShieldCheck, title: "Secure APIs" },
              { icon: Cpu, title: "Gemini AI" },
              { icon: Workflow, title: "Visual Builder" }
            ].map(({ icon: Icon, title }) => (
              <motion.div
                key={title}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
              >
                <div className="rounded-xl bg-indigo-500/15 p-3">
                  <Icon size={18} className="text-indigo-400" />
                </div>

                <span className="font-medium text-white">{title}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span>✔ Unlimited Workflows</span>
            <span>✔ AI Assisted</span>
            <span>✔ Drag & Drop Builder</span>
            <span>✔ Real-Time Execution</span>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div variants={item} className="relative flex flex-1 items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear"
            }}
            className="absolute h-[520px] w-[520px] rounded-full border border-indigo-500/10"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear"
            }}
            className="absolute h-[430px] w-[430px] rounded-full border border-cyan-500/10"
          />

          <div className="relative h-[560px] w-[560px] lg:h-[600px] lg:w-[600px] rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">
            <div className="absolute left-1/2 top-8 -translate-x-1/2">
              <WorkflowNode
                icon={CloudSun}
                title="Weather API"
                subtitle="Live Forecast"
                color="text-yellow-400"
              />
            </div>

            <div className="absolute left-1/2 top-44 -translate-x-1/2">
              <WorkflowNode
                icon={BrainCircuit}
                title="Gemini AI"
                subtitle="Reasoning Engine"
                color="text-violet-400"
              />
            </div>

            <div className="absolute left-14 top-[340px]">
              <WorkflowNode
                icon={GitBranch}
                title="GitHub"
                subtitle="Repositories"
                color="text-white"
              />
            </div>

            <div className="absolute right-14 top-[340px]">
              <WorkflowNode
                icon={Newspaper}
                title="News API"
                subtitle="Top Headlines"
                color="text-cyan-400"
              />
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <WorkflowNode
                icon={LayoutDashboard}
                title="Dashboard"
                subtitle="Final Output"
                color="text-emerald-400"
              />
            </div>

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 560">
              <defs>
                <linearGradient id="line1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>

              <motion.path
                d="M280 90 L280 170"
                stroke="url(#line1)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />

              <motion.path
                d="M280 235 L145 340"
                stroke="url(#line1)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: .4,
                  duration: 1
                }}
              />

              <motion.path
                d="M280 235 L415 340"
                stroke="url(#line1)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: .6,
                  duration: 1
                }}
              />

              <motion.path
                d="M170 390 L280 485"
                stroke="url(#line1)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: 1,
                  duration: .8
                }}
              />

              <motion.path
                d="M390 390 L280 485"
                stroke="url(#line1)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: 1.2,
                  duration: .8
                }}
              />

              {[
                { x: 280, y: 170 },
                { x: 280, y: 235 },
                { x: 145, y: 340 },
                { x: 415, y: 340 },
                { x: 170, y: 390 },
                { x: 390, y: 390 }
              ].map((point, i) => (
                <motion.circle
                  key={i}
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill="#818cf8"
                  animate={{
                    scale: [1, 1.7, 1],
                    opacity: [1, .5, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: i * .2
                  }}
                />
              ))}
            </svg>

            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [.5, 1, .5]
              }}
              transition={{
                repeat: Infinity,
                duration: 4
              }}
              className="absolute right-8 top-8 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300"
            >
              AI EXECUTION RUNNING
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5
              }}
              className="absolute left-8 bottom-8 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300"
            >
              5 APIs Connected
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [.2, .45, .2]
              }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500 blur-[90px]"
            />
          </div>

          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 6
            }}
            className="absolute -left-8 top-16 h-20 w-20 rounded-full bg-cyan-400/20 blur-3xl"
          />

          <motion.div
            animate={{
              y: [0, 12, 0],
              x: [0, -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 7
            }}
            className="absolute -right-10 bottom-20 h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl"
          />

          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear"
            }}
            className="absolute left-10 top-64 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <CloudSun className="text-yellow-400" size={24} />
          </motion.div>

          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
            className="absolute right-8 top-56 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <BrainCircuit className="text-violet-400" size={24} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3
            }}
            className="absolute right-0 bottom-40 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <GitBranch className="text-white" size={24} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
            className="absolute left-0 bottom-32 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <Newspaper className="text-cyan-400" size={24} />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ delay: 1.2 }}
        className="mx-auto mt-20 flex max-w-6xl flex-wrap items-center justify-center gap-10 px-6 text-slate-500"
      >
        {[
          "OpenWeather",
          "Gemini",
          "GitHub",
          "NewsAPI",
          "Currency",
          "MongoDB",
          "Stripe",
          "Slack"
        ].map((name) => (
          <motion.div
            key={name}
            whileHover={{
              scale: 1.08,
              color: "#ffffff"
            }}
            className="text-lg font-semibold transition-colors"
          >
            {name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
