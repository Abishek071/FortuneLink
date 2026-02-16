import React from "react";

const SoleClients = () => {
  const clients = [
    {
      name: "TAI Mac Engineering Corporation",
      location: "Japan",
      flag: "JP",
      description: "Parent Organization & Technical Lead",
      details: "Driving global engineering standards from the heart of Japan.",
    },
    {
      name: "Hi Mac USA Inc.",
      location: "Texas, USA",
      flag: "US",
      description: "U.S. Subsidiary & Primary Operations",
      details:
        "A U.S. branch owned by the Japanese parent company, investing in the American economy.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Sole Clients
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            We do not serve the general public or other businesses.
            <span className="text-primary font-semibold">
              {" "}
              Fortune Link Solutions Pvt. Ltd.
            </span>{" "}
            is 100% dedicated to two exclusive entities:
          </p>
        </div>

        {/* Client Bento Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
                    {client.location}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-4">
                    {client.name}
                  </h3>
                </div>
                <div className="text-3xl opacity-20 group-hover:opacity-100 transition-opacity">
                  {client.flag === "JP" ? "🇯🇵" : "🇺🇸"}
                </div>
              </div>

              <p className="text-slate-700 font-medium mb-2">
                {client.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {client.details}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-900 text-slate-300">
          <p className="text-sm md:text-base leading-relaxed">
            Our team works under the{" "}
            <span className="text-white font-semibold">
              technical direction of both organizations
            </span>{" "}
            and contributes directly to their U.S. and Japan-based operations,
            ensuring seamless global integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoleClients;
