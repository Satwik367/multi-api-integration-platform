import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Heart,
  ArrowUp,
  Workflow,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const platformLinks = [
  { name: "Dashboard", to: "/dashboard" },
  { name: "Workflow Builder", to: "/workflows" },
  { name: "API Marketplace", to: "/marketplace" },
  { name: "Activity Logs", to: "/logs" },
];

const resourceLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#workflow" },
  { name: "Sign In", to: "/login" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-hairline)] bg-[var(--color-base)]">
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-60 w-60 rounded-full bg-[var(--color-signal-indigo)]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-signal-indigo)]">
                <Workflow className="h-6 w-6 text-white" />
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">
                  APIFlow AI
                </h2>
                <p className="text-sm text-[var(--color-ink-muted)]">
                  AI Workflow Platform
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-[var(--color-ink-muted)]">
              A modern workflow platform that lets you connect multiple APIs,
              automate tasks, visualize results, and build powerful integrations
              without switching between services.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--color-ink)]">
              Platform
            </h3>

            <div className="space-y-3">
              {platformLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block text-[var(--color-ink-muted)] transition hover:text-[var(--color-signal-indigo)]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--color-ink)]">
              Resources
            </h3>

            <div className="space-y-3">
              {resourceLinks.map((item) =>
                item.to ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="block text-[var(--color-ink-muted)] transition hover:text-[var(--color-signal-indigo)]"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-[var(--color-ink-muted)] transition hover:text-[var(--color-signal-indigo)]"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--color-ink)]">
              Connect
            </h3>

            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:satwik@gmail.com"
                className="flex items-center gap-3 text-[var(--color-ink-muted)] transition hover:text-[var(--color-signal-indigo)]"
              >
                <Mail size={18} />
                satwik@gmail.com
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="flex items-center gap-3 text-[var(--color-ink-muted)] transition hover:text-[var(--color-signal-indigo)]"
              >
                <FaGithub size={18} />
                GitHub
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="flex items-center gap-3 text-[var(--color-ink-muted)] transition hover:text-[var(--color-signal-indigo)]"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </motion.a>
            </div>

            <div className="mt-6 flex gap-3">
              {[FaGithub, FaLinkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href={index === 2 ? "mailto:satwik@gmail.com" : "#"}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-3 text-[var(--color-ink-muted)] transition hover:border-[var(--color-signal-indigo)]/40 hover:text-[var(--color-signal-indigo)]"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-[var(--color-hairline)]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)]">
            © {currentYear} APIFlow AI
            <Heart size={15} className="fill-[var(--color-signal-coral)] text-[var(--color-signal-coral)]" />
            Built with React, Tailwind CSS &amp; Node.js
          </p>

          <motion.button
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] p-3 text-[var(--color-ink-muted)] transition hover:bg-[var(--color-signal-indigo)] hover:text-white"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
