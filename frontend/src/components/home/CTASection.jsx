import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket, FaArrowRight } from "react-icons/fa";

import Button from "../ui/Button";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-5xl px-8">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-14 text-center backdrop-blur-xl"
        >

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/20">

            <FaRocket className="text-4xl text-indigo-400" />

          </div>

          <h2 className="mt-8 text-5xl font-black text-white">

            Ready to Build Powerful API Workflows?

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

            Connect multiple APIs, automate repetitive tasks,
            integrate AI into your workflows and monitor
            everything from one beautiful dashboard.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link to="/register">

              <Button className="!w-auto px-8">

                Start Building

              </Button>

            </Link>

            <Link to="/login">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-800 px-8 py-3 font-medium text-white transition hover:border-indigo-500"
              >

                Login

                <FaArrowRight />

              </motion.button>

            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default CTASection;