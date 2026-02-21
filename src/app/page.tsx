// app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Hero from "../components/home/Hero";
import WhyChoose from "@/components/home/Whychoose";
import StrategyMeets from "@/components/home/StrategyMeets";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  const services = [
    "End-to-End Software Development",
    "Artificial Intelligence & Data Solutions",
    "Engineering Talent Dispatch & Coordination",
    "Cross-Border Project & Consulting Support",
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <main>
        <Hero />
        <WhyChoose />
        <StrategyMeets />
        <Testimonials />
        {/* <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900 min-h-[calc(100vh-80px)] flex justify-center items-center">
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Welcome to Fortune Link <br />
              <span className="text-primary">Solutions Pvt. Ltd.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Empowering{" "}
              <span className="text-white font-semibold">TAI Group</span> from
              Japan to the USA through specialized IT and engineering
              excellence.
            </p>
          </div>
        </section> */}

        {/* Content Section */}
        {/* <section className="max-w-5xl mx-auto px-6 my-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100">
            <div className="grid lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-7">
                <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
                  Who We Are
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Established exclusively to support the global expansion and
                  operational efficiency of
                  <span className="font-bold text-slate-800">
                    {" "}
                    TAI Mac Engineering Corporation (Japan)
                  </span>{" "}
                  and its U.S. subsidiary,
                  <span className="font-bold text-slate-800">
                    {" "}
                    Hi Mac USA Inc.
                  </span>
                  , based in Texas.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Led by visionary founder{" "}
                  <span className="font-semibold text-slate-800">
                    Anupa Poudel
                  </span>
                  , our mission is to serve as a seamless offshore
                  partner—bridging innovation and engineering excellence from
                  Nepal to Japan and the United States.
                </p>

                
                <div className="border-l-4 border-secondary pl-6 py-2 bg-slate-50 rounded-r-xl">
                  <p className="italic text-slate-700 font-medium">
                    "From Nepal to Japan to Texas — we help Hi Mac grow
                    globally, and we contribute to the U.S. economy with pride."
                  </p>
                </div>
              </div>

              
              <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Our Specializations</h3>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs">
                        ✓
                      </span>
                      <span className="text-slate-300 text-sm md:text-base leading-snug">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
