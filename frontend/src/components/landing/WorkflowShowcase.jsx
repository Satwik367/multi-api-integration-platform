import { motion } from "framer-motion";
import {
  CloudSun,
  BrainCircuit,
  Newspaper,
  Github,
  Workflow,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Activity,
} from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

const nodes = [
  {
    id: "weather",
    title: "Weather API",
    subtitle: "Input",
    icon: CloudSun,
    color: "from-sky-500 to-cyan-400",
    position: {
      top: "8%",
      left: "8%",
    },
  },
  {
    id: "github",
    title: "GitHub API",
    subtitle: "Repository",
    icon: Github,
    color: "from-slate-700 to-slate-500",
    position: {
      top: "65%",
      left: "12%",
    },
  },
  {
    id: "ai",
    title: "Gemini AI",
    subtitle: "Process",
    icon: BrainCircuit,
    color: "from-violet-500 to-indigo-500",
    position: {
      top: "34%",
      left: "40%",
    },
  },
  {
    id: "news",
    title: "News API",
    subtitle: "Articles",
    icon: Newspaper,
    color: "from-emerald-500 to-green-400",
    position: {
      top: "12%",
      right: "10%",
    },
  },
  {
    id: "workflow",
    title: "Workflow",
    subtitle: "Output",
    icon: Workflow,
    color: "from-pink-500 to-rose-500",
    position: {
      bottom: "10%",
      right: "14%",
    },
  },
];

function WorkflowNode({ icon: Icon, title, subtitle, color, style }) {
  return (
    <motion.div
      style={style}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{
        duration: 0.5,
      }}
      className="absolute"
    >
      <div
        className="
          group
          relative
          w-60
          rounded-3xl
          border
          border-white/10
          bg-slate-900/80
          p-5
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <div
          className={`
            absolute
            inset-0
            rounded-3xl
            bg-gradient-to-r
            ${color}
            opacity-0
            blur-2xl
            transition
            duration-300
            group-hover:opacity-20
          `}
        />

        <div className="relative flex items-center gap-4">
          <div
            className={`
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              ${color}
            `}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>

          <div>
            <h4 className="font-semibold text-white">{title}</h4>

            <p className="text-sm text-slate-400">{subtitle}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <Badge variant="success">Connected</Badge>

          <CheckCircle2 className="text-emerald-400" size={20} />
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkflowShowcase() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          badge="Visual Workflow Builder"
          title="Build powerful AI workflows visually"
          description="Connect APIs, AI models and automation blocks with an intuitive drag-and-drop workflow builder."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Workflow Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-[700px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            {/* Grid Background */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Floating Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[100px]"
            />

            {/* Animated Connection Lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 900 700"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>

              {[
                "M170 130 C270 130 290 220 370 250",
                "M170 500 C260 470 310 360 370 320",
                "M530 270 C620 250 670 180 720 170",
                "M530 320 C650 370 680 470 720 520",
              ].map((path, index) => (
                <g key={index}>
                  <path
                    d={path}
                    stroke="url(#workflowGradient)"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.25"
                  />

                  <motion.path
                    d={path}
                    stroke="url(#workflowGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="10 14"
                    initial={{
                      strokeDashoffset: 0,
                    }}
                    animate={{
                      strokeDashoffset: -120,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "linear",
                    }}
                  />
                </g>
              ))}
            </svg>

            {/* Floating Particles */}
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-indigo-400/70"
                style={{
                  left: `${8 + Math.random() * 84}%`,
                  top: `${8 + Math.random() * 84}%`,
                }}
                animate={{
                  y: [-15, 15, -15],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + Math.random() * 3,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Workflow Nodes */}
            {nodes.map((node) => (
              <WorkflowNode
                key={node.id}
                icon={node.icon}
                title={node.title}
                subtitle={node.subtitle}
                color={node.color}
                style={node.position}
              />
            ))}

            {/* Center AI Pulse */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-500/20 backdrop-blur-xl"
            >
              <Sparkles className="text-indigo-300" size={34} />
            </motion.div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <Card className="border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <Badge className="mb-5">Live Execution</Badge>

              <h3 className="text-3xl font-bold text-white">AI Workflow Execution</h3>

              <p className="mt-4 leading-8 text-slate-400">
                Execute workflows that combine multiple APIs with Gemini AI.
                Every node communicates seamlessly to generate intelligent
                outputs in seconds.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Weather data collected",
                  "GitHub repository analyzed",
                  "Latest news fetched",
                  "Gemini AI generated summary",
                  "Final workflow completed",
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="text-emerald-400" size={22} />

                    <span className="text-slate-300">{step}</span>
                  </motion.div>
                ))}
              </div>

              <Button className="mt-8 w-full justify-center" size="lg">
                Execute Workflow
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  value: "20+",
                  label: "Supported APIs",
                },
                {
                  value: "99.9%",
                  label: "Success Rate",
                },
                {
                  value: "500ms",
                  label: "Avg Response",
                },
                {
                  value: "24/7",
                  label: "Availability",
                },
              ].map((item) => (
                <Card
                  key={item.label}
                  className="border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
                >
                  <h4 className="text-3xl font-bold text-white">{item.value}</h4>

                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </Card>
              ))}
            </div>

            {/* Activity Feed */}
            <Card className="border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3">
                <Activity className="text-indigo-400" />

                <h4 className="font-semibold text-white">Recent Activity</h4>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Weather → AI Summary",
                    status: "Completed",
                  },
                  {
                    name: "GitHub Analysis",
                    status: "Running",
                  },
                  {
                    name: "News Aggregation",
                    status: "Completed",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-slate-300">{item.name}</span>

                    <Badge variant={item.status === "Running" ? "warning" : "success"}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
