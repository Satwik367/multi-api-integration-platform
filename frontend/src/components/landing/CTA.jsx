import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-signal-indigo)]/15 blur-[180px]" />

      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-10">

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
          }}
          className="relative overflow-hidden rounded-[36px] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-8 py-16 lg:px-20"
        >

          <div className="relative text-center">

            <Badge className="mb-6">
              Ready to Get Started?
            </Badge>

            <h2 className="font-display mx-auto max-w-4xl text-4xl font-bold text-[var(--color-ink)] md:text-6xl">
              Build AI workflows
              <span className="text-[var(--color-signal-indigo)]">
                {" "}
                visually
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-ink-muted)]">
              Connect multiple APIs, integrate Gemini AI, automate repetitive
              tasks and build scalable workflows—all from a modern visual
              interface.
            </p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group"
              >
                Get Started Free

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>

              <Button
                variant="secondary"
                size="lg"
              >
                <FaGithub size={18} className="mr-2" />
                View on GitHub
              </Button>

              <Button
                variant="ghost"
                size="lg"
              >
                <PlayCircle size={18} className="mr-2" />
                Live Demo
              </Button>

            </motion.div>

            {/* Trust Indicators */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
              }}
              className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--color-ink-muted)]"
            >
              {[
                "No Credit Card Required",
                "Deploy in Minutes",
                "Secure Authentication",
                "AI Powered",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <Sparkles size={14} className="text-[var(--color-signal-mint)]" />
                  {item}
                </div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
