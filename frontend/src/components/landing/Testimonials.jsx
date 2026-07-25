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
      <Card className="group relative h-full overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-signal-indigo)]/0 opacity-0 transition duration-500 group-hover:opacity-10 group-hover:bg-[var(--color-signal-indigo)]" />

        <div className="relative">
          <Quote size={40} className="mb-6 text-[var(--color-signal-indigo)]" />

          <div className="mb-5 flex">
            {Array.from({
              length: testimonial.rating,
            }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-[var(--color-signal-mint)] text-[var(--color-signal-mint)]"
              />
            ))}
          </div>

          <p className="leading-8 text-[var(--color-ink-muted)]">"{testimonial.review}"</p>

          <div className="mt-8 flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-14 w-14 rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface-raised)]"
            />

            <div>
              <h4 className="font-semibold text-[var(--color-ink)]">{testimonial.name}</h4>

              <p className="text-sm text-[var(--color-ink-muted)]">{testimonial.role}</p>

              <p className="text-sm text-[var(--color-signal-indigo)]">{testimonial.company}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-[var(--color-signal-indigo)]/10 blur-[150px]" />

        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-[var(--color-signal-mint)]/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
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
          >
            <Card className="relative overflow-hidden">
              <div className="relative grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="h-32 w-32 rounded-full border-4 border-[var(--color-signal-indigo)]/30 bg-[var(--color-surface-raised)] shadow-2xl"
                  />

                  <h3 className="font-display mt-6 text-2xl font-bold text-[var(--color-ink)]">
                    {testimonials[0].name}
                  </h3>

                  <p className="text-[var(--color-ink-muted)]">{testimonials[0].role}</p>

                  <p className="text-[var(--color-signal-indigo)]">{testimonials[0].company}</p>

                  <div className="mt-4 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-[var(--color-signal-mint)] text-[var(--color-signal-mint)]"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <Quote className="mb-6 text-[var(--color-signal-indigo)]" size={56} />

                  <p className="text-xl leading-9 text-[var(--color-ink-muted)]">
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
            </Card>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] transition hover:border-[var(--color-signal-indigo)]/30"
            >
              <ChevronLeft className="text-[var(--color-ink)]" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] transition hover:border-[var(--color-signal-indigo)]/30"
            >
              <ChevronRight className="text-[var(--color-ink)]" />
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
            className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
                className="p-7 text-center"
              >
                <h3 className="font-data text-4xl font-medium text-[var(--color-ink)]">{item.value}</h3>

                <p className="mt-3 text-[var(--color-ink-muted)]">{item.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
