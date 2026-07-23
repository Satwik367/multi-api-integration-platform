import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Workflow } from "lucide-react";

import Button from "../ui/Button";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Pricing", href: "#cta" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pt-5">

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-[95%] max-w-[1440px] rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/70 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >

        <div className="flex h-18 items-center justify-between px-8">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600">

              <Workflow size={22} className="text-white" />

            </div>

            <div>

              <h2 className="text-lg font-bold text-white">

                APIFlow AI

              </h2>

              <p className="text-xs text-slate-400">

                AI Workflow Platform

              </p>

            </div>

          </Link>

          {/* Desktop */}

          <div className="hidden items-center gap-10 lg:flex">

            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.name}
              </a>

            ))}

          </div>

          {/* Actions */}

          <div className="hidden items-center gap-4 lg:flex">

            <Link to="/login">

              <button className="text-slate-300 hover:text-white">

                Login

              </button>

            </Link>

            <Link to="/register">

              <Button>

                Get Started

              </Button>

            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-t border-white/10 bg-zinc-950 lg:hidden"
          >

            <div className="flex flex-col p-6">

              {navLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  className="py-3 text-slate-300"
                >
                  {item.name}
                </a>

              ))}

              <Link
                to="/login"
                className="mt-4"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="mt-4"
              >
                <Button className="w-full">

                  Get Started

                </Button>

              </Link>

            </div>

          </motion.div>

        )}

      </motion.nav>

    </header>
  );
}

export default Navbar;