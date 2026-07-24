import { motion } from "framer-motion";

import FlowLine from "../ui/FlowLine";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-ink)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[var(--color-signal-indigo)]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[var(--color-signal-mint)]/10 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen">
        {/* Left Section */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex w-1/2 flex-col justify-center px-20"
        >
          <h1 className="font-display text-5xl font-semibold leading-tight text-[var(--color-ink)]">
            Build.
            <br />
            <span className="text-[var(--color-signal-indigo)]">Integrate.</span>
            <br />
            Automate.
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-[var(--color-ink-muted)]">
            APIFlow AI lets developers connect multiple APIs,
            build intelligent workflows and automate tasks
            from one dashboard.
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
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-hairline)]
                       bg-[var(--color-surface)]
                       p-10"
          >
            <FlowLine orientation="horizontal" tone="indigo" className="absolute inset-x-0 top-0" />

            <div className="mb-10">

              <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">

                {title}

              </h2>

              <p className="mt-2.5 text-sm text-[var(--color-ink-muted)]">

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
      <div className="mt-2 h-2 w-2 rounded-full bg-[var(--color-signal-indigo)]" />

      <div>
        <h3 className="font-medium text-[var(--color-ink)]">

          {title}

        </h3>

        <p className="mt-1 text-sm text-[var(--color-ink-muted)]">

          {desc}

        </p>
      </div>
    </div>
  );
}

export default AuthLayout;