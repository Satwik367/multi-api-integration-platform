import { motion } from "framer-motion";
import {
  BrainCircuit,
  CloudSun,
  Workflow,
  GitBranch,
  ShieldCheck,
  Zap,
  Globe,
  BarChart3,
} from "lucide-react";

import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description:
      "Build integrations with a drag-and-drop interface and connect services in minutes.",
  },
  {
    icon: BrainCircuit,
    title: "AI Powered",
    description:
      "Use Gemini AI to summarize, classify, transform and automate your workflows.",
  },
  {
    icon: CloudSun,
    title: "Multiple APIs",
    description:
      "Connect Weather, News, Currency, GitHub and many more APIs from one dashboard.",
  },
  {
    icon: GitBranch,
    title: "Reusable Pipelines",
    description:
      "Save workflows and execute them anytime with a single click.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT-based authentication keeps your workflows and API keys protected.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "Optimized backend execution with real-time responses.",
  },
  {
    icon: Globe,
    title: "Scalable Platform",
    description:
      "Designed to support additional APIs and AI providers with ease.",
  },
  {
    icon: BarChart3,
    title: "Execution Insights",
    description:
      "Track workflow history and monitor execution performance.",
  },
];

export default function Features() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          badge="Platform Features"
          title="Everything you need to automate APIs with AI"
          description="Build, execute and manage intelligent workflows through a modern visual platform."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-5 inline-flex rounded-2xl bg-indigo-500/15 p-4">
                  <Icon
                    className="text-indigo-400"
                    size={24}
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}