"use client";

import React from "react";
import { motion } from "framer-motion";
import { PenTool, FileText, Code } from "lucide-react";

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

type Feature = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "grid h-12 w-12 place-items-center rounded-2xl",
        "border border-white/20 bg-white/70 backdrop-blur-xl",
        "shadow-[0_12px_35px_rgba(0,0,0,0.10)]",
      )}
    >
      {children}
    </div>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: 0.08 + index * 0.06,
      }}
      className={cn(
        "group relative rounded-3xl p-6 text-center",
        "transition will-change-transform",
        "hover:-translate-y-1.5 hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] duration-500",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300",
          "group-hover:opacity-100",
          "bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_55%)]",
        )}
      />
      <div className="relative">
        <div className="mx-auto mb-4 w-fit">
          <IconTile>
            <Icon className="h-5 w-5 text-slate-900" strokeWidth={1.8} />
          </IconTile>
        </div>
        <h3 className="text-base font-extrabold text-slate-900">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{feature.desc}</p>
      </div>
    </motion.div>
  );
}

export default function WhyChoose() {
  const features: Feature[] = [
    {
      title: "Product Strategy",
      desc: "Turning ideas into scalable digital products aligned with your business goals.",
      icon: FileText,
    },
    {
      title: "UI/UX & Design Systems",
      desc: "Designing consistent, user-focused interfaces across platforms.",
      icon: PenTool,
    },
    {
      title: "Dev-Ready Delivery",
      desc: "Solid engineering and smooth handoff from concept to production.",
      icon: Code,
    },
  ];

  return (
    <section id="why" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Why Companies Choose FortuneLink Solutions?
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-600 md:text-base">
            We deliver technology solutions designed to scale with your business
            goals.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
