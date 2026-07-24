import { motion } from "framer-motion";

/**
 * FlowLine — the app's signature motif: a thin connector with a single
 * traveling dot, standing in for "data moving between APIs." Reused across
 * the hero diagram, sidebar active-state, and stat card headers so the same
 * visual idea (a pipeline carrying a signal) shows up everywhere the product
 * actually does that job.
 *
 * orientation: "horizontal" | "vertical"
 * tone: "indigo" | "mint" | "coral"
 */
function FlowLine({ orientation = "horizontal", tone = "indigo", className = "" }) {
  const toneColor = {
    indigo: "#6c6bff",
    mint: "#33e6b3",
    coral: "#ff6b57",
  }[tone];

  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={`relative overflow-hidden ${
        isHorizontal ? "h-px w-full" : "h-full w-px"
      } ${className}`}
      style={{ background: "var(--color-hairline)" }}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          background: toneColor,
          boxShadow: `0 0 6px ${toneColor}`,
          width: isHorizontal ? 6 : 3,
          height: isHorizontal ? 3 : 6,
          top: isHorizontal ? -1 : 0,
          left: isHorizontal ? 0 : -1,
        }}
        animate={
          isHorizontal
            ? { x: ["-5%", "105%"] }
            : { y: ["-5%", "105%"] }
        }
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default FlowLine;