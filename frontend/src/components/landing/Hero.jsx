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
      <div className="absolute inset-0 -z-20 bg-[var(--color-base)]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#6c6bff22,transparent_40%),radial-gradient(circle_at_bottom_right,#33e6b31a,transparent_40%)]" />

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

          <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-ink)] md:text-6xl lg:text-7xl">
            Build
            <span className="text-[var(--color-signal-indigo)]">
              {" "}intelligent API{" "}
            </span>
            workflows, visually
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-ink-muted)]">
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

          <div className="mt-5 flex items-center gap-4 text-sm text-[var(--color-ink-muted)]">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-[var(--color-base)] bg-[var(--color-signal-indigo)]"
                />
              ))}
            </div>

            <span>
              Trusted by <span className="font-data font-medium text-[var(--color-ink)]">2,000+</span>{" "}
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
                className="flex items-center gap-3 rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4"
              >
                <div className="rounded-xl bg-[var(--color-signal-indigo-soft)] p-3">
                  <Icon size={18} className="text-[var(--color-signal-indigo)]" />
                </div>

                <span className="font-medium text-[var(--color-ink)]">{title}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-[var(--color-ink-muted)]">
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
            className="absolute h-[430px] w-[430px] rounded-full border border-[var(--color-signal-mint)]/10"
          />

          <div className="relative h-[560px] w-[560px] lg:h-[600px] lg:w-[600px] rounded-[40px] border border-[var(--color-hairline)] bg-[var(--color-surface)]/60 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">
            <div className="absolute left-1/2 top-8 -translate-x-1/2">
              <WorkflowNode
                icon={CloudSun}
                title="Weather API"
                subtitle="Live Forecast"
                color="text-[var(--color-signal-indigo)]"
              />
            </div>

            <div className="absolute left-1/2 top-44 -translate-x-1/2">
              <WorkflowNode
                icon={BrainCircuit}
                title="Gemini AI"
                subtitle="Reasoning Engine"
                color="text-[var(--color-signal-indigo)]"
              />
            </div>

            <div className="absolute left-14 top-[340px]">
              <WorkflowNode
                icon={GitBranch}
                title="GitHub"
                subtitle="Repositories"
                color="text-[var(--color-ink)]"
              />
            </div>

            <div className="absolute right-14 top-[340px]">
              <WorkflowNode
                icon={Newspaper}
                title="News API"
                subtitle="Top Headlines"
                color="text-[var(--color-signal-mint)]"
              />
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <WorkflowNode
                icon={LayoutDashboard}
                title="Dashboard"
                subtitle="Final Output"
                color="text-[var(--color-signal-mint)]"
              />
            </div>

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 560">
              <defs>
                <linearGradient id="line1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6c6bff" />
                  <stop offset="100%" stopColor="#33e6b3" />
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
                  fill="#6c6bff"
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
              className="absolute right-8 top-8 rounded-xl border border-[var(--color-signal-mint)]/20 bg-[var(--color-signal-mint)]/10 px-4 py-2 font-data text-xs font-medium text-[var(--color-signal-mint)]"
            >
              AI EXECUTION RUNNING
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5
              }}
              className="absolute left-8 bottom-8 rounded-xl border border-[var(--color-signal-mint)]/20 bg-[var(--color-signal-mint)]/10 px-4 py-2 font-data text-xs font-medium text-[var(--color-signal-mint)]"
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
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-signal-indigo)] blur-[90px]"
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
            className="absolute -left-8 top-16 h-20 w-20 rounded-full bg-[var(--color-signal-mint)]/20 blur-3xl"
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
            className="absolute -right-10 bottom-20 h-24 w-24 rounded-full bg-[var(--color-signal-indigo)]/20 blur-3xl"
          />

          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear"
            }}
            className="absolute left-10 top-64 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)]"
          >
            <CloudSun className="text-[var(--color-signal-indigo)]" size={24} />
          </motion.div>

          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
            className="absolute right-8 top-56 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)]"
          >
            <BrainCircuit className="text-[var(--color-signal-indigo)]" size={24} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3
            }}
            className="absolute right-0 bottom-40 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)]"
          >
            <GitBranch className="text-[var(--color-ink)]" size={24} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
            className="absolute left-0 bottom-32 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)]"
          >
            <Newspaper className="text-[var(--color-signal-mint)]" size={24} />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-base)] via-[var(--color-base)]/70 to-transparent" />

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
        className="mx-auto mt-20 flex max-w-6xl flex-wrap items-center justify-center gap-10 px-6 text-[var(--color-ink-faint)]"
      >
        {[
          "OpenWeather",
          "Gemini",
          "GitHub",
          "NewsAPI",
          "Currency",
          "MongoDB"
        ].map((name) => (
          <motion.div
            key={name}
            whileHover={{
              scale: 1.08,
              color: "#f4f5f7"
            }}
            className="font-data text-lg font-semibold transition-colors"
          >
            {name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}