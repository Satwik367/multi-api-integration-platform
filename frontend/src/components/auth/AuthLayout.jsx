import { motion } from "framer-motion";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen">
        {/* Left Section */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex w-1/2 flex-col justify-center px-20"
        >
          <h1 className="text-6xl font-black leading-tight">
            Build.
            <br />
            <span className="text-indigo-400">Integrate.</span>
            <br />
            Automate.
          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-9">
            APIFlow AI lets developers connect multiple APIs,
            build intelligent workflows and automate tasks
            from one beautiful dashboard.
          </p>

          <div className="mt-16 space-y-6">
            <Feature
              title="Multiple API Integrations"
              desc="Weather, GitHub, News, Currency & Gemini AI."
            />

            <Feature
              title="Workflow Automation"
              desc="Create reusable API pipelines."
            />

            <Feature
              title="Secure Authentication"
              desc="JWT protected backend with MongoDB."
            />
          </div>
        </motion.div>

        {/* Right Section */}

        <div className="flex flex-1 items-center justify-center px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md rounded-3xl border border-white/10
                       bg-slate-900/60 backdrop-blur-xl
                       p-10 shadow-2xl"
          >
            <div className="mb-10">

              <h2 className="text-4xl font-bold">

                {title}

              </h2>

              <p className="mt-3 text-slate-400">

                {subtitle}

              </p>

            </div>

            {children}

          </motion.div>

        </div>

      </div>

    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="mt-2 h-3 w-3 rounded-full bg-indigo-500" />

      <div>
        <h3 className="font-semibold text-lg">

          {title}

        </h3>

        <p className="text-slate-400">

          {desc}

        </p>
      </div>
    </div>
  );
}

export default AuthLayout;