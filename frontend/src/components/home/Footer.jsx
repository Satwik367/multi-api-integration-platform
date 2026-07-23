import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-8 py-12 md:flex-row">

        <div>

          <h2 className="text-3xl font-black text-white">

            APIFlow AI

          </h2>

          <p className="mt-3 max-w-md text-slate-400">

            A modern Multi API Integration Platform that
            combines Weather, GitHub, News, Currency,
            Gemini AI and Workflow Automation into one
            seamless experience.

          </p>

        </div>

        <div className="flex gap-6 text-2xl">

          <a
            href="#"
            className="text-slate-400 transition hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="text-slate-400 transition hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="text-slate-400 transition hover:text-indigo-400"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="border-t border-white/10 py-6">

        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 text-slate-500">

          <FaCode />

          <span>

            © {new Date().getFullYear()} APIFlow AI · Built with React, Node.js & Tailwind CSS

          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;