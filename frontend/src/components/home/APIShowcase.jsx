import { motion } from "framer-motion";
import {
  FaCloudSun,
  FaRobot,
  FaNewspaper,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

function APIShowcase() {
  const steps = [
    {
      icon: <FaCloudSun />,
      title: "Weather API",
      status: "Fetching weather...",
      color: "text-yellow-400",
      delay: 0,
    },
    {
      icon: <FaRobot />,
      title: "Gemini AI",
      status: "Analyzing response...",
      color: "text-purple-400",
      delay: 0.5,
    },
    {
      icon: <FaNewspaper />,
      title: "News API",
      status: "Finding related news...",
      color: "text-red-400",
      delay: 1,
    },
    {
      icon: <FaChartLine />,
      title: "Dashboard",
      status: "Generating analytics...",
      color: "text-green-400",
      delay: 1.5,
    },
  ];

  return (
    <section
      id="apis"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300">
            Live Demo
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Workflow Execution Preview
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Watch how APIFlow AI chains multiple APIs together into
            one intelligent workflow.
          </p>

        </div>

        <div className="mx-auto max-w-3xl">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="flex flex-col items-center"
            >

              <motion.div
                initial={{
                  opacity: 0.3,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(99,102,241,0)",
                    "0 0 30px rgba(99,102,241,0.35)",
                    "0 0 0 rgba(99,102,241,0)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 2,
                  delay: step.delay,
                }}
                className="w-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-5">

                    <div className={`text-4xl ${step.color}`}>
                      {step.icon}
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="text-slate-400">
                        {step.status}
                      </p>

                    </div>

                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: step.delay,
                    }}
                    className="flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-green-400"
                  >

                    <FaCheckCircle />

                    Success

                  </motion.div>

                </div>

              </motion.div>

              {index !== steps.length - 1 && (

                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                  className="my-5 h-14 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
                />

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default APIShowcase;