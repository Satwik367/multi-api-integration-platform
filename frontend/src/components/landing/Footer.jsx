import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  Globe,
  Code2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
                <Globe className="h-6 w-6 text-white" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  API Integrator
                </h2>
                <p className="text-sm text-slate-400">
                  One Platform. Infinite APIs.
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-400">
              A modern workflow platform that lets you connect multiple APIs,
              automate tasks, visualize results, and build powerful integrations
              without switching between services.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Platform
            </h3>

            <div className="space-y-3">
              {[
                "Dashboard",
                "Workflow Builder",
                "API Marketplace",
                "Executions",
                "Analytics",
              ].map((item) => (
                <button
                  key={item}
                  className="block text-left text-slate-400 transition hover:text-cyan-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <div className="space-y-3">
              {[
                "Documentation",
                "Getting Started",
                "API Reference",
                "Support",
                "Privacy Policy",
              ].map((item) => (
                <button
                  key={item}
                  className="block text-left text-slate-400 transition hover:text-cyan-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:satwik@gmail.com"
                className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
              >
                <Mail size={18} />
                satwik@gmail.com
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
              >
                <Github size={18} />
                GitHub
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
              >
                <Linkedin size={18} />
                LinkedIn
              </motion.a>
            </div>

            <div className="mt-6 flex gap-3">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Icon size={18} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="flex items-center gap-2 text-sm text-slate-400">
            © {currentYear} API Integration Platform
            <Heart size={15} className="fill-red-500 text-red-500" />
            Built with React, Tailwind CSS & Node.js
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              <Code2 size={16} />
              Full Stack Integration Platform
            </div>

            <motion.button
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 p-3 text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;