// components/CompanyDetails.tsx
import React from "react";

const CompanyDetails = () => {
  const serviceCategories = [
    {
      title: "Software & Application",
      icon: "💻",
      items: [
        "Mobile App Development (iOS & Android)",
        "Custom CRM / ERP Systems",
        "SaaS & Learning Portals",
        "Progressive Web Apps (PWAs)",
      ],
    },
    {
      title: "AI & Automation",
      icon: "🤖",
      items: [
        "AI Chatbots & Virtual Assistants",
        "Business Process Automation (BPA)",
        "Predictive Analytics & Data Insights",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      items: [
        "AWS / GCP / Azure Infrastructure",
        "CI/CD Pipeline Implementation",
        "Server Monitoring & Scaling",
      ],
    },
    {
      title: "UI/UX & Branding",
      icon: "🎨",
      items: [
        "Web & Mobile UI/UX Design",
        "Prototyping & Wireframes",
        "Brand Identity & Logo Creation",
      ],
    },
    {
      title: "Engineering & Civil Support",
      icon: "🏗️",
      items: [
        "CAD Drafting & 3D Modeling",
        "Road, Bridge, and Housing Design",
        "Permitting Support (Texas Compliance)",
      ],
    },
    {
      title: "International Support",
      icon: "🌐",
      items: [
        "Engineer Dispatch to Japan",
        "Cross-border Project Management",
        "Technical Reviews & Reporting",
        "Skill Transfer & Internal Training",
      ],
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* 1. Services Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-slate-200"></div>
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="text-2xl">🛠️</span> Services Provided to TAI Group
          </h2>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-slate-600 text-sm flex items-start gap-2"
                  >
                    <span className="text-secondary">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Commitment & Strategy Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Commitment Card */}
            <div className="bg-secondary rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 font-bold">
                US
              </div>
              <h2 className="text-2xl font-bold mb-6">
                Our Commitment to the United States
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Fortune Link Solutions Pvt. Ltd. is proud to serve{" "}
                <span className="text-white font-bold">Hi Mac USA Inc.</span>,
                the official U.S. branch of TAI Mac Engineering Corporation
                (Japan).
              </p>
              <ul className="space-y-4">
                {[
                  "Empowering U.S.-based projects and innovation",
                  "Supporting remote/hybrid functions for the American workforce",
                  "Reinvesting technical capacity into U.S. sectors",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 bg-blue-300 rounded-full flex-shrink-0"></span>
                    {text}
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-8 border-t border-blue-500/50 italic text-blue-100 text-sm">
                "Hi Mac USA Inc. is a bridge between Japan and America — and we
                proudly help build it stronger."
              </p>
            </div>

            {/* Why This Matters Card */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 font-bold text-blue-400">
                ?
              </div>
              <h2 className="text-2xl font-bold mb-6">
                Why This Structure Matters
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    t: "Strengthen Operations",
                    d: "Managed by Japanese leadership in the U.S.",
                  },
                  {
                    t: "Reduced Cost",
                    d: "Centralized services at a global efficiency scale.",
                  },
                  {
                    t: "L-1A Compliance",
                    d: "Satisfying all business requirements for cross-border flow.",
                  },
                  {
                    t: "Job Creation",
                    d: "Contributing to U.S. employment by scaling capacity.",
                  },
                ].map((item, i) => (
                  <li key={i} className="group">
                    <h4 className="text-blue-400 font-bold text-sm uppercase tracking-widest">
                      {item.t}
                    </h4>
                    <p className="text-slate-400 text-sm">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Internal Contact Footer */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6 text-slate-500">
            <span className="text-xl">📞</span>
            <span className="font-bold text-xs uppercase tracking-tighter">
              Contact (Internal Use Only)
            </span>
          </div>
          <p className="text-slate-600 text-sm mb-8">
            This company does not serve external clients. All inquiries are
            managed directly between:
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="font-bold text-slate-900 text-sm">
                Hi Mac USA Inc.
              </p>
              <p className="text-slate-500 text-xs">Austin, Texas</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">
                TAI Mac Engineering
              </p>
              <p className="text-slate-500 text-xs">Japan</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">
                Fortune Link Solutions
              </p>
              <p className="text-slate-500 text-xs">Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetails;
