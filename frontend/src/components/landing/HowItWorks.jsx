import { motion } from "framer-motion";
import { LogIn, PlugZap, BrainCircuit, Rocket, ArrowDown } from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    icon: LogIn,
    title: "Sign In",
    description:
      "Create an account and securely authenticate using JWT-based login.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: PlugZap,
    title: "Connect APIs",
    description:
      "Choose from Weather, News, GitHub, Currency and other integrations.",
    color: "from-cyan-500 to-sky-500",
  },
  {
    icon: BrainCircuit,
    title: "Build AI Workflow",
    description:
      "Drag and connect APIs with Gemini AI to create intelligent automations.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Execute & Analyze",
    description:
      "Run workflows instantly and receive structured AI-powered results.",
    color: "from-emerald-500 to-teal-500",
  },
];

function StepCard({ step, index }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="relative"
    >
      <Card className="group relative overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-br
            ${step.color}
            opacity-0
            blur-3xl
            transition-all
            duration-500
            group-hover:opacity-15
          `}
        />

        <div className="relative flex items-start gap-5">
          <div
            className={`
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              ${step.color}
            `}
          >
            <Icon className="text-white" size={30} />
          </div>

          <div>
            <Badge className="mb-3">Step {index + 1}</Badge>

            <h3 className="text-2xl font-semibold text-white">{step.title}</h3>

            <p className="mt-4 leading-7 text-slate-400">{step.description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-[140px]" />

        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          badge="How It Works"
          title="Build powerful workflows in four simple steps"
          description="From authentication to AI-powered execution, create automations in minutes."
        />

        <div className="relative mt-24">
          {/* Animated Timeline */}
          <div className="absolute left-1/2 hidden h-full -translate-x-1/2 lg:block">
            <div className="relative h-full w-px bg-white/10">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 w-px bg-gradient-to-b from-indigo-500 via-cyan-500 to-emerald-500"
              />
            </div>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Step Card */}
                <StepCard step={step} index={index} />

                {/* Timeline Indicator */}
                <div className="relative hidden lg:flex lg:justify-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="relative z-10"
                  >
                    <div className="absolute inset-0 rounded-full bg-indigo-500 blur-xl opacity-40" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-indigo-400/30 bg-slate-900 shadow-[0_0_40px_rgba(99,102,241,.35)]">
                      <span className="text-2xl font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile Arrow */}
                {index !== steps.length - 1 && (
                  <div className="flex justify-center lg:hidden">
                    <motion.div
                      animate={{
                        y: [0, 8, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                    >
                      <ArrowDown size={34} className="text-indigo-400" />
                    </motion.div>
                  </div>
                )}
              </div>
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
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="relative mt-28 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-violet-500/10" />

            {/* Floating Glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute right-10 top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-[80px]"
            />

            <div className="relative">
              <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
                <div>
                  <Badge className="mb-5">Ready to Build?</Badge>

                  <h2 className="text-4xl font-bold text-white">
                    Start building AI-powered workflows today
                  </h2>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                    Create intelligent automations by combining multiple APIs,
                    AI models and reusable workflow pipelines—all from a
                    beautiful visual interface.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  {[
                    {
                      value: "4",
                      label: "Simple Steps",
                    },
                    {
                      value: "20+",
                      label: "API Integrations",
                    },
                    {
                      value: "∞",
                      label: "Workflow Ideas",
                    },
                    {
                      value: "AI",
                      label: "Powered",
                    },
                  ].map((item) => (
                    <Card
                      key={item.label}
                      className="border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
                    >
                      <h3 className="text-3xl font-bold text-white">
                        {item.value}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {item.label}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
