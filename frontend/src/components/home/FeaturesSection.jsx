import { motion } from "framer-motion";

import {
  FaCloudSun,
  FaGithub,
  FaRobot,
  FaExchangeAlt,
  FaNewspaper,
  FaProjectDiagram,
} from "react-icons/fa";

function FeaturesSection() {
  const features = [
    {
      icon: <FaCloudSun className="text-4xl text-yellow-400" />,
      title: "Weather API",
      desc: "Access live weather information from anywhere in the world.",
    },
    {
      icon: <FaGithub className="text-4xl text-white" />,
      title: "GitHub API",
      desc: "Search GitHub users, repositories and organizations instantly.",
    },
    {
      icon: <FaNewspaper className="text-4xl text-red-400" />,
      title: "News API",
      desc: "Fetch breaking headlines from trusted news providers.",
    },
    {
      icon: <FaExchangeAlt className="text-4xl text-green-400" />,
      title: "Currency Exchange",
      desc: "Convert currencies using real-time exchange rates.",
    },
    {
      icon: <FaRobot className="text-4xl text-purple-400" />,
      title: "Gemini AI",
      desc: "Generate AI-powered responses directly inside workflows.",
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-indigo-400" />,
      title: "Workflow Builder",
      desc: "Chain multiple APIs together and automate repetitive tasks.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300">
            Platform Features
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Everything You Need
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A single platform that combines multiple APIs,
            workflow automation and AI to simplify your
            development experience.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 group-hover:scale-110 transition-transform duration-300">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold text-white">

                {feature.title}

              </h3>

              <p className="mt-5 leading-7 text-slate-400">

                {feature.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;