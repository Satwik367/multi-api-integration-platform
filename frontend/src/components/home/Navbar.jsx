import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

import Button from "../ui/Button";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-8 py-4 backdrop-blur-xl shadow-2xl">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600">
            <FaCode className="text-xl text-white" />
          </div>

          <div>
            <h1 className="text-xl font-black text-white">
              APIFlow AI
            </h1>

            <p className="text-xs text-slate-400">
              Multi API Platform
            </p>
          </div>
        </Link>

        {/* Center Navigation */}

        <div className="hidden items-center gap-10 text-slate-300 md:flex">

          <a
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#how"
            className="transition hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#apis"
            className="transition hover:text-white"
          >
            APIs
          </a>

        </div>

        {/* Right Buttons */}

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-slate-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link to="/register">
            <Button
              className="!w-auto px-7"
            >
              Get Started
            </Button>
          </Link>

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;