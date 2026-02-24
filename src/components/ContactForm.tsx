"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

type FormState = {
  name: string;
  email: string;
  category: string;
  message: string;
};

const categories = ["Engineering", "Software", "Consulting", "Other"];

export default function ContactFormSection() {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    category: "Engineering",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return state.name.trim().length > 1 && state.email.trim().includes("@");
  }, [state]);

  const onChange =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setState((s) => ({ ...s, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      setSubmitting(true);

      const fd = new FormData();
      fd.append("name", state.name);
      fd.append("email", state.email);
      fd.append("category", state.category);
      fd.append("message", state.message);

      const res = await fetch("https://fortunelink-solutions.com/send.php", {
        method: "POST",
        body: fd,
      });
      toast.success("Message sent successfully.");
      setState({ name: "", email: "", category: "Engineering", message: "" });
    } catch (err) {
      toast.error("Failed to submit.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contactus">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Contact Form
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Fields marked with an{" "}
              <span className="text-red-600 font-semibold">*</span> are
              required. Tell us what you need and our team will get back to you.
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              {/* top accent */}
              <div className="h-1.5 w-full bg-linear-to-r from-primary via-primary/50 to-primary/70" />

              <form onSubmit={onSubmit} className="p-6 sm:p-8">
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <Field
                    label="Name"
                    required
                    value={state.name}
                    onChange={onChange("name")}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  <Field
                    label="Email"
                    required
                    value={state.email}
                    onChange={onChange("email")}
                    placeholder="you@company.com"
                    type="email"
                    autoComplete="email"
                  />

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-neutral-900">
                      Inquiry Category <span className="text-red-600">*</span>
                    </label>
                    <div className="mt-2 relative">
                      <select
                        value={state.category}
                        onChange={onChange("category")}
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3
                                   text-sm sm:text-base text-neutral-900
                                   outline-none transition
                                   focus:border-neutral-300 focus:ring-4 focus:ring-blue-600/15"
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-neutral-900">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={state.message}
                      onChange={onChange("message")}
                      placeholder="Tell us about your project or question..."
                      rows={7}
                      className="mt-2 w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3
                                 text-sm sm:text-base text-neutral-900
                                 outline-none transition
                                 focus:border-neutral-300 focus:ring-4 focus:ring-blue-600/15"
                    />
                    <p className="mt-2 text-xs text-neutral-500">
                      Please include your preferred contact method and expected
                      timeline.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-xs text-neutral-500">
                    By submitting, you agree to be contacted about your inquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={!canSubmit || submitting}
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3
                               text-sm sm:text-base font-semibold text-white
                               bg-neutral-900 hover:bg-neutral-800
                               disabled:opacity-50 disabled:cursor-not-allowed
                               transition"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-neutral-900">
        {label} {required ? <span className="text-red-600">*</span> : null}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3
                   text-sm sm:text-base text-neutral-900
                   outline-none transition
                   focus:border-neutral-300 focus:ring-4 focus:ring-blue-600/15"
      />
    </div>
  );
}
