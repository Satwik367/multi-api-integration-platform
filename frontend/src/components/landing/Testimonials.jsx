import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Engineer",
    company: "TechNova",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    review:
      "Building API workflows has never been this easy. The drag-and-drop interface combined with AI automation significantly improved our productivity.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Backend Developer",
    company: "CloudStack",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    review:
      "The Gemini AI integration is incredibly useful. We automated several repetitive tasks within a few hours.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Software Architect",
    company: "InnovateX",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    review:
      "A beautiful platform with excellent workflow visualization. It feels like using a premium enterprise SaaS product.",
    rating: 5,
  },
  {
    name: "Daniel Wilson",
    role: "Full Stack Developer",
    company: "DevFusion",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
    review:
      "Connecting Weather, GitHub and AI services together is surprisingly simple. Highly recommended.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.15,
      }}
    >
      <Card className="group relative h-full overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:from-indigo-500/10 group-hover:to-cyan-500/10" />

        <div className="relative">
          <Quote size={40} className="mb-6 text-indigo-400" />

          <div className="mb-5 flex">
            {Array.from({
              length: testimonial.rating,
            }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="leading-8 text-slate-300">"{testimonial.review}"</p>

          <div className="mt-8 flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-14 w-14 rounded-full border border-white/10 bg-white"
            />

            <div>
              <h4 className="font-semibold text-white">{testimonial.name}</h4>

              <p className="text-sm text-slate-400">{testimonial.role}</p>

              <p className="text-sm text-indigo-300">{testimonial.company}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[150px]" />

        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          badge="Testimonials"
          title="Loved by developers building AI workflows"
          description="See what developers are saying about the platform."
        />

        <div className="mt-20">
          {/* Featured Testimonial */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative mb-16 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10 p-10 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,.18),transparent_50%)]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  className="h-32 w-32 rounded-full border-4 border-indigo-500/30 bg-white shadow-2xl"
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {testimonials[0].name}
                </h3>

                <p className="text-slate-400">{testimonials[0].role}</p>

                <p className="text-indigo-300">{testimonials[0].company}</p>

                <div className="mt-4 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <div>
                <Quote className="mb-6 text-indigo-400" size={56} />

                <p className="text-xl leading-9 text-slate-300">
                  "{testimonials[0].review}"
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Fast", "Reliable", "AI Powered", "Developer Friendly"].map(
                    (tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.slice(1).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-12 flex justify-center gap-5">
            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-indigo-500/30"
            >
              <ChevronLeft className="text-white" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-indigo-500/30"
            >
              <ChevronRight className="text-white" />
            </motion.button>
          </div>

          {/* Community Stats */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                value: "5K+",
                label: "Developers",
              },
              {
                value: "20K+",
                label: "Workflows Created",
              },
              {
                value: "99.9%",
                label: "Customer Satisfaction",
              },
              {
                value: "24/7",
                label: "Platform Availability",
              },
            ].map((item) => (
              <Card
                key={item.label}
                className="border border-white/10 bg-white/5 p-7 text-center backdrop-blur-xl"
              >
                <h3 className="text-4xl font-bold text-white">{item.value}</h3>

                <p className="mt-3 text-slate-400">{item.label}</p>
              </Card>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="relative mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-cyan-500/10" />

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute right-12 top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-[90px]"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <Badge className="mb-5">Join the Community</Badge>

                <h2 className="text-4xl font-bold text-white">
                  Build smarter workflows with AI
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Thousands of developers trust our platform to integrate APIs,
                  automate repetitive tasks and create intelligent AI-powered
                  workflows—all without unnecessary complexity.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  className="
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-500
                    to-cyan-500
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:scale-105
                  "
                >
                  Get Started
                </button>

                <button
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-8
                    py-4
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition
                    hover:border-indigo-500/40
                  "
                >
                  View Documentation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
