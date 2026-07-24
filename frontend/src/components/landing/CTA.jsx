import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Github,
  PlayCircle,
} from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-[180px]" />

        <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

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
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/5
            px-8
            py-16
            backdrop-blur-xl
            lg:px-20
          "
        >

          {/* Animated Gradient */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-gradient-to-br
              from-indigo-500/20
              via-cyan-500/20
              to-violet-500/20
              blur-3xl
            "
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="
              absolute
              -left-24
              -bottom-24
              h-72
              w-72
              rounded-full
              bg-gradient-to-br
              from-pink-500/15
              via-purple-500/20
              to-cyan-500/15
              blur-3xl
            "
          />

          <div className="relative text-center">

            <Badge className="mb-6">
              Ready to Get Started?
            </Badge>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold text-white md:text-6xl">
              Build AI workflows
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                visually
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Connect multiple APIs, integrate Gemini AI, automate repetitive
              tasks and build scalable workflows—all from a modern visual
              interface.
            </p>            <motion.div
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
                className="group px-8 py-6 text-base"
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
                className="px-8 py-6 text-base"
              >
                <Github size={18} className="mr-2" />
                View on GitHub
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="px-8 py-6 text-base"
              >
                <PlayCircle size={18} className="mr-2" />
                Live Demo
              </Button>

            </motion.div>

            {/* Statistics */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
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
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  value: "20+",
                  label: "API Integrations",
                },
                {
                  value: "100+",
                  label: "Workflow Templates",
                },
                {
                  value: "99.9%",
                  label: "Uptime",
                },
                {
                  value: "24/7",
                  label: "AI Assistance",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
                    backdrop-blur-xl
                  "
                >
                  <h3 className="text-4xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Floating Feature Pills */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-14 flex flex-wrap items-center justify-center gap-4"
            >
              {[
                "Gemini AI",
                "GitHub",
                "Weather API",
                "News API",
                "Currency API",
                "Workflow Builder",
                "Authentication",
                "Analytics",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-2
                    text-sm
                    text-slate-300
                    backdrop-blur-xl
                  "
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>            {/* Trust Indicators */}
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
                delay: 0.65,
              }}
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400"
            >
              {[
                "✨ No Credit Card Required",
                "⚡ Deploy in Minutes",
                "🔒 Secure Authentication",
                "🤖 AI Powered",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  {item}
                </div>
              ))}
            </motion.div>

            {/* Decorative Sparkles */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute left-10 top-10 hidden lg:block"
            >
              <Sparkles
                size={32}
                className="text-cyan-400"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute bottom-10 right-10 hidden lg:block"
            >
              <Sparkles
                size={30}
                className="text-indigo-400"
              />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                -z-10
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-gradient-to-r
                from-indigo-500/20
                via-cyan-500/20
                to-violet-500/20
                blur-[140px]
              "
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}