import { motion } from "framer-motion";

import {
  FaUserPlus,
  FaPuzzlePiece,
  FaPlay,
  FaChartLine,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Create Account",
      desc: "Register and securely access your dashboard.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Choose APIs",
      desc: "Select Weather, GitHub, News, Currency or Gemini AI.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaPlay />,
      title: "Run Workflow",
      desc: "Execute multiple APIs in a single intelligent pipeline.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaChartLine />,
      title: "Analyze Results",
      desc: "Monitor executions and view analytics instantly.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section
      id="how"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300">
            Workflow
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            How APIFlow AI Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Build powerful API workflows in just a few simple
            steps.
          </p>

        </div>

        <div className="relative grid gap-10 lg:grid-cols-4">

          {steps.map((step, index) => (

            <motion.div
              key={step.title}
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
                delay: index * 0.2,
              }}
              className="relative"
            >

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-indigo-500/30 transition">

                <div
                  className={`mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${step.color} text-3xl text-white`}
                >
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">

                  {step.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-400">

                  {step.desc}

                </p>

              </div>

              {index < steps.length - 1 && (

                <div className="absolute right-[-35px] top-1/2 hidden lg:block">

                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                    }}
                    className="text-3xl text-indigo-400"
                  >
                    →
                  </motion.div>

                </div>

              )}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;