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

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l3.1 6.6 7.3 1.1-5.2 5.2 1.2 7.3L12 18.9 5.6 22.2l1.2-7.3L1.6 9.7l7.3-1.1L12 2Z"
            fill="currentColor"
            className="text-amber-400"
          />
        </svg>
      ))}
    </div>
  );
}

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

function Card({ t, index }: { t: Testimonial; index: number }) {
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
        "group relative rounded-3xl border border-slate-200 bg-white p-6",
        "shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition will-change-transform hover:-translate-y-1.5 hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] duration-500 ",
      )}
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.16),transparent_55%)]" />

      <div className="relative">
        <Stars />
        <p className="mt-4 text-sm leading-6 text-slate-600">“{t.quote}”</p>

        <div className="mt-5 flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={`/${t.image}`}
              alt={t.name}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-slate-900">{t.name}</p>
            <p className="text-xs text-slate-500">{t.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const data: Testimonial[] = [
    {
      quote:
        "Fortunelink Solutions helped us translate complex requirements into a scalable digital solution. Their structured approach made the process smooth and efficient.",
      name: "Alex R.",
      role: "Product Manager",
      image: "user1.jpg",
    },
    {
      quote:
        "Working with Fortunelink Solutions felt like partnering with an in-house team. Their technical expertise and attention to detail were exceptional.",
      name: "Michael T.",
      role: "Head of Engineering",
      image: "user2.jpg",
    },
    {
      quote:
        "The team understood our business goals and delivered a product that was both reliable and easy to scale. Communication was clear throughout the project.",
      name: "Sarah L.",
      role: "Startup Founder",
      image: "user3.jpg",
    },
  ];

  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            What Our Clients Say
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
          {data.map((t, i) => (
            <Card key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
