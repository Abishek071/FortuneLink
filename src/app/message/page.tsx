// components/LeadershipSection.tsx
import React from "react";

const LeadershipSection = () => {
  return (
    <section className="py-24 bg-slate-50 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Block 1: Founder's Message */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-stretch mb-16">
          <div className="md:w-5/12 min-h-[450px] relative">
            <img
              src="/founder.webp"
              alt="Anupa Poudel"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="md:w-7/12 p-8 md:p-15 flex flex-col justify-center">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">
              Executive Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Founder’s Message
            </h2>
            <p className="text-lg font-semibold text-slate-700 mb-8">
              Anupa Poudel{" "}
              <span className="text-slate-400 font-light">— Founder & CEO</span>
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                At{" "}
                <strong className="text-slate-900">
                  Fortune Link Solutions
                </strong>
                , we believe in long-term, exclusive partnerships. Our company
                exists solely to serve{" "}
                <strong className="text-slate-900">
                  TAI Mac Engineering Corporation
                </strong>{" "}
                and its U.S. branch,{" "}
                <strong className="text-slate-900">Hi Mac USA Inc.</strong>
              </p>
              <p>
                Everything we do from mobile apps to civil design assistance is
                designed to elevate the impact of Hi Mac’s work in the U.S. and
                globally.
              </p>
              <div className="mt-6 p-4 bg-secondary/10 border-l-4 border-secondary rounded-r-xl">
                <p className="italic text-secondary font-medium">
                  "We are proud to stand behind a Japanese-owned company that
                  invests in the American economy."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Country Manager's Message */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col md:flex-row-reverse items-stretch">
          <div className="md:w-5/12 min-h-[450px] relative bg-slate-100">
            <img
              src="/manager.webp"
              alt="Tanuja Tamang"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <div className="md:w-7/12 p-8 md:p-15 flex flex-col justify-center">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">
              Regional Management
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Message from Country Manager
            </h2>
            <p className="text-lg font-semibold text-slate-700 mb-8">
              Tanuja Tamang{" "}
              <span className="text-slate-400 font-light">
                — Country Manager
              </span>
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                The TAI Group has implemented a strategic workforce model that
                directly supports job creation and innovation within the U.S. IT
                sector. One of the major challenges faced by U.S. tech companies
                is the{" "}
                <strong className="text-slate-900">
                  shortage of junior-level IT engineers
                </strong>
                .
              </p>
              <p>
                By integrating{" "}
                <strong className="text-slate-900">
                  skilled, remote junior-level engineers from Nepal
                </strong>
                , we enable U.S.-based teams to operate with full scalability.
                This model is a deliberate tool to{" "}
                <strong className="text-slate-900">
                  create more American jobs
                </strong>
                , particularly for senior professionals.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {[
                  "Hire & retain more U.S. senior engineers",
                  "Launch more high-impact projects domestically",
                  "Deliver better cost-performance globally",
                  "Foster upward mobility within U.S. teams",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-700 font-medium"
                  >
                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-secondary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
