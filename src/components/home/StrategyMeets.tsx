"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function StrategyMeets() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="md:w-1/2">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Where Strategy Meets
                <span className="block text-slate-300">Technology.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:w-1/2 md:flex md:justify-end">
            <Reveal delay={0.05}>
              <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
                We partner with growing teams to design and build scalable
                digital solutions, combining strategic thinking, thoughtful
                design, and robust engineering.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 h-125 flex flex-col md:flex-row gap-6 md:mt-12">
          <Reveal className="flex-1">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={cn(
                "group relative h-full overflow-hidden rounded-3xl",
                "border border-slate-200 bg-slate-100",
                "shadow-[0_24px_70px_rgba(0,0,0,0.10)]",
              )}
            >
              <div className="w-full h-full relative">
                <Image
                  src="/work.jpg"
                  alt="Team working"
                  fill
                  sizes="100%"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.55),transparent_55%)]" />
            </motion.div>
          </Reveal>

          <div className="flex-2 flex flex-col gap-6">
            <Reveal delay={0.05} className="h-20 md:flex-1">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                  "h-full group relative overflow-hidden rounded-3xl",
                  "border border-slate-200 bg-slate-100",
                  "shadow-[0_24px_70px_rgba(0,0,0,0.10)]",
                )}
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/building.jpg"
                    alt="Modern building"
                    fill
                    sizes="100%"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.55),transparent_60%)]" />
              </motion.div>
            </Reveal>

            <Reveal delay={0.1} className="flex-1">
              <div
                className={cn(
                  "h-full relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 md:p-8",
                  "shadow-[0_24px_70px_rgba(0,0,0,0.08)]",
                )}
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/10 blur-2xl" />

                <p className="text-sm leading-6 text-slate-600 md:text-base">
                  Founded in{" "}
                  <span className="font-semibold text-slate-900">2018</span>,
                  Fortunelink Solutions partners with growing companies to build
                  scalable digital solutions. We combine strategic thinking,
                  thoughtful design, and robust engineering to solve real
                  business challenges.
                </p>

                <motion.a
                  href="#contact"
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white",
                    "shadow-[0_6px_30px_#39b549] hover:bg-secondary/80 transition",
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Start a Project
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h12M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
