import ContactFormSection from "@/components/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <ContactFormSection />
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Contact Information
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Operational headquarters for specialized technical coordination
            between Japan, Nepal, and the United States.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-1 gap-10">
              {/* Communication Links */}
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                      Landline
                    </p>
                    <a
                      href="tel:+97715926894"
                      className="text-xl font-semibold text-slate-900 hover:text-secondary transition-colors"
                    >
                      +977 1 5926894
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                      Email Address
                    </p>
                    <a
                      href="mailto:info@fortunelink-solutions.com"
                      className="text-xl font-semibold text-slate-900 hover:text-secondary transition-colors"
                    >
                      info@fortunelink-solutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                      HQ Address
                    </p>
                    <p className="text-xl font-semibold text-slate-900 leading-snug">
                      Nagarjun Municipality, Ward No. 4, <br /> Kathmandu, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Internal Coordination Disclaimer */}
          <div className="bg-slate-900 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-2xl">🔒</div>
              <div>
                <h4 className="text-white font-bold mb-2">
                  Internal Coordination Notice
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Fortune Link Solutions Pvt. Ltd. exclusively serves{" "}
                  <span className="text-secondary font-medium">
                    TAI Mac Engineering Corporation (Japan)
                  </span>{" "}
                  and{" "}
                  <span className="text-secondary font-medium">
                    HI Mac USA Inc. (Texas, USA)
                  </span>
                  . We do not handle inquiries from external businesses or the
                  general public. All project communications must be routed
                  through official TAI Group channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
