"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileStack, Layers, Percent } from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Scroll-reveal entrance for major sections :contentReference[oaicite:3]{index=3}
 * Trigger once per page load.
 */
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Gradient shimmer headline :contentReference[oaicite:4]{index=4}
 */
function ShimmerText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block",
        "bg-[linear-gradient(110deg,#0f172a,35%,#3b82f6,50%,#0f172a,65%)] bg-[length:200%_100%]",
        "text-transparent bg-clip-text",
        "animate-[shimmer_3.6s_linear_infinite]",
        className,
      )}
    >
      {children}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex justify-center items-center mt-4 md:mt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-blue-50 px-3 py-2 text-xs font-medium text-slate-700">
                <span className="inline-block h-2 w-2 rounded-full bg-secondary" />
                Innovative Solutions for a Digital Future
              </div>
            </Reveal>

            <Reveal delay={0.05} className="mt-5">
              <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
                <span className="block">Technology by</span>
                Strategy.
                <span className="mt-1 block text-slate-300">Innovation by</span>
                <span className="block text-slate-300">Design.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="mt-4">
              <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
                We build scalable digital products and technology solutions
                tailored to your business needs, from strategy, design, to
                development.
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white",
                  "shadow-[0_6px_20px_#39b549] hover:shadow-[0_20px_45px_rgba(37,99,235,0.45)] transition-all duration-300 hover:bg-primary/80 group",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <span>Start Your Project</span>
                <motion.span
                  className="grid h-6 w-6 place-items-center rounded-full bg-white/15 group-hover:bg-white/25 transition-colors"
                  animate={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    animate={{ x: 0 }}
                    whileHover={{ x: 2 }}
                  >
                    <path
                      d="M5 12h12M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.span>
              </motion.a>

              <a
                href="#services"
                className="inline-flex items-center rounded-full px-4 py-3 shadow-md text-sm font-semibold text-slate-800 hover:text-slate-900 hover:shadow-lg transition-all duration-300"
              >
                Explore Our Services
              </a>
            </Reveal>

            <Reveal delay={0.2} className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["user1.jpg", "user2.jpg", "user3.jpg"].map((t) => (
                  <div
                    key={t}
                    className="relative overflow-hidden grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-700"
                  >
                    <img
                      src={`/${t}`}
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Trusted by startups and growing enterprises
              </p>
            </Reveal>
          </div>

          {/* Right (Hero image + floating cards) */}
          <Reveal delay={0.08} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <div className="h-100 w-full">
                <img
                  src="/building.jpg"
                  alt="Modern building"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
              className="absolute -left-4 -top-4 md:-left-6 md:-top-6"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/80 px-4 py-3 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.10)]">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-white">
                  <Layers />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-slate-900">
                    UI/UX Systems
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Consistent & scalable
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
              className="absolute -right-5 -bottom-8"
            >
              <div className="flex flex-col gap-3 justify-center items-center rounded-2xl border border-white/30 bg-white/80 px-4 py-3 text-center backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.10)]">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-secondary backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.10)]">
                  <Percent className="text-white" />
                </div>
                <p className="text-[11px] font-semibold text-slate-800">
                  Product
                  <br />
                  Strategy
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
