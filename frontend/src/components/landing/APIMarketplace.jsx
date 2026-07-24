import { motion } from "framer-motion";
import {
  CloudSun,
  Newspaper,
  BrainCircuit,
  Github,
  DollarSign,
  Shield,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

const apis = [
  {
    name: "Weather API",
    description:
      "Retrieve live weather conditions, forecasts, humidity, wind speed and temperature.",
    icon: CloudSun,
    color: "from-sky-500 to-cyan-400",
    category: "Weather",
    status: "Connected",
  },
  {
    name: "News API",
    description:
      "Access real-time global headlines, trending news and category-wise articles.",
    icon: Newspaper,
    color: "from-emerald-500 to-green-400",
    category: "News",
    status: "Connected",
  },
  {
    name: "Gemini AI",
    description:
      "Summarize, classify, generate and transform data using Google's Gemini AI.",
    icon: BrainCircuit,
    color: "from-violet-500 to-indigo-500",
    category: "AI",
    status: "Active",
  },
  {
    name: "GitHub API",
    description:
      "Analyze repositories, commits, contributors and project statistics.",
    icon: Github,
    color: "from-slate-700 to-slate-500",
    category: "Development",
    status: "Connected",
  },
  {
    name: "Currency API",
    description:
      "Fetch real-time exchange rates and convert currencies instantly.",
    icon: DollarSign,
    color: "from-yellow-500 to-orange-400",
    category: "Finance",
    status: "Connected",
  },
  {
    name: "Authentication",
    description:
      "JWT secured authentication with protected workflow execution.",
    icon: Shield,
    color: "from-pink-500 to-rose-500",
    category: "Security",
    status: "Protected",
  },
];

function APICard({ api, index }) {
  const Icon = api.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
    >
      <Card className="group relative h-full overflow-hidden border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-br
            ${api.color}
            opacity-0
            blur-3xl
            transition-all
            duration-500
            group-hover:opacity-15
          `}
        />

        <div className="relative">
          <div className="flex items-start justify-between">
            <div
              className={`
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                ${api.color}
              `}
            >
              <Icon className="text-white" size={30} />
            </div>

            <ArrowUpRight
              className="text-slate-500 transition group-hover:text-indigo-400"
              size={22}
            />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-white">{api.name}</h3>

          <p className="mt-4 leading-7 text-slate-400">{api.description}</p>

          <div className="mt-6 flex items-center justify-between">
            <Badge>{api.category}</Badge>

            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={18} />

              <span className="text-sm">{api.status}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function APIMarketplace() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          badge="API Marketplace"
          title="Everything you need in one platform"
          description="Integrate multiple APIs and AI models without switching between different services."
        />

        <div className="mt-20">
          {/* Marketplace Stats */}
          <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "20+",
                label: "Available APIs",
              },
              {
                value: "99.9%",
                label: "Uptime",
              },
              {
                value: "<500ms",
                label: "Avg Response",
              },
              {
                value: "24/7",
                label: "Monitoring",
              },
            ].map((item) => (
              <Card
                key={item.label}
                className="border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold text-white">{item.value}</h3>

                <p className="mt-2 text-slate-400">{item.label}</p>
              </Card>
            ))}
          </div>

          {/* Featured Gemini AI */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative mb-14 overflow-hidden rounded-[32px] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10 p-10 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,.18),transparent_50%)]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <Badge className="mb-5">Featured Integration</Badge>

                <h2 className="text-4xl font-bold text-white">Gemini AI</h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Build intelligent workflows by combining Gemini AI with
                  Weather, News, GitHub and Currency APIs. Generate summaries,
                  insights and automated responses in seconds.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Summarization",
                    "Classification",
                    "Translation",
                    "Content Generation",
                  ].map((feature) => (
                    <Badge key={feature} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
                className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-[0_0_80px_rgba(99,102,241,.4)]"
              >
                <Sparkles className="text-white" size={72} />
              </motion.div>
            </div>
          </motion.div>

          {/* API Grid */}
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {apis.map((api, index) => (
              <APICard key={api.name} api={api} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-violet-500/10" />

            {/* Floating Badges */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute right-10 top-8 hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 lg:block"
            >
              ✓ APIs Online
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute left-10 bottom-8 hidden rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-300 lg:block"
            >
              AI Ready
            </motion.div>

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <Badge className="mb-5">Expand Anytime</Badge>

                <h2 className="text-4xl font-bold text-white">
                  Add new APIs with minimal effort
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Our modular architecture makes it easy to integrate additional
                  APIs and AI providers. Scale your workflows without changing
                  the overall platform structure.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg">
                  Explore APIs
                  <ArrowUpRight className="ml-2" size={18} />
                </Button>

                <Button variant="secondary" size="lg">
                  Documentation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
