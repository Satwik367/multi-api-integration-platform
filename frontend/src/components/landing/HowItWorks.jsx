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
    tone: "indigo",
  },
  {
    icon: PlugZap,
    title: "Connect APIs",
    description:
      "Choose from Weather, News, GitHub, Currency and other integrations.",
    tone: "indigo",
  },
  {
    icon: BrainCircuit,
    title: "Build AI Workflow",
    description:
      "Drag and connect APIs with Gemini AI to create intelligent automations.",
    tone: "indigo",
  },
  {
    icon: Rocket,
    title: "Execute & Analyze",
    description:
      "Run workflows instantly and receive structured AI-powered results.",
    tone: "mint",
  },
];

const toneClasses = {
  indigo: "bg-[var(--color-signal-indigo)]",
  mint: "bg-[var(--color-signal-mint)]",
};

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
      <Card className="group relative overflow-hidden">
        <div
          className={`absolute inset-0 ${toneClasses[step.tone]} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-10`}
        />

        <div className="relative flex items-start gap-5">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${toneClasses[step.tone]}`}
          >
            <Icon className="text-white" size={30} />
          </div>

          <div>
            <Badge className="mb-3">Step {index + 1}</Badge>

            <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">{step.title}</h3>

            <p className="mt-4 leading-7 text-[var(--color-ink-muted)]">{step.description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="workflow" className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-[var(--color-signal-indigo)]/10 blur-[140px]" />

        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-[var(--color-signal-mint)]/10 blur-[160px]" />
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
            <div className="relative h-full w-px bg-[var(--color-hairline)]">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 w-px bg-gradient-to-b from-[var(--color-signal-indigo)] to-[var(--color-signal-mint)]"
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
                    <div className="absolute inset-0 rounded-full bg-[var(--color-signal-indigo)] blur-xl opacity-40" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[var(--color-signal-indigo)]/30 bg-[var(--color-surface-raised)] shadow-[0_0_40px_rgba(108,107,255,.35)]">
                      <span className="font-data text-2xl font-bold text-[var(--color-ink)]">
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
                      <ArrowDown size={34} className="text-[var(--color-signal-indigo)]" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
