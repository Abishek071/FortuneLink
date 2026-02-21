// components/OurTeam.tsx
import React from "react";

const OurTeam = () => {
  const team = [
    {
      name: "Anupa Poudel",
      role: "Founder & CEO",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1429552/408609_531392.jpeg",
    },
    {
      name: "Tanuja Tamang",
      role: "Country Manager",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1429552/485962_499102.jpeg",
    },
    {
      name: "Radhika Karki",
      role: "Global IT Sales & Marketing Officer",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1429552/530688_252277.png",
    },
    {
      name: "Laxmi Shrestha",
      role: "Global IT Sales & Marketing Officer",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1429552/206375_663368.jpeg",
    },
    {
      name: "Shyam Thapa",
      role: "Global IT Sales & Marketing Officer",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1429552/536436_447154.jpeg",
    },
    {
      name: "Aman Silwal",
      role: "Global IT Sales & Marketing Officer",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1429552/944866_587088.jpeg",
    },
    {
      name: "Subash Poudel",
      role: "Global IT Sales & Marketing Officer",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1429552/881201_465568.jpeg",
    },
    {
      name: "Nisan Adhikari",
      role: "Global IT Sales & Marketing Officer",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1429552/903589_783745.jpeg",
    },
    {
      name: "Tamang Saurav",
      role: "Global IT Sales & Marketing Officer",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1429552/305036_497347.jpeg",
    },
    {
      name: "Bikesh K C",
      role: "Global IT Sales & Marketing Officer",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1429552/328897_27047.jpeg",
    },
    {
      name: "Bikash Pahadi",
      role: "Global IT Sales & Marketing Officer",
    },
    {
      name: "Chiva Dongol",
      role: "Global IT Sales & Marketing Officer",
      image:
        "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1429552/120704_240597.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full mb-4">
            <span className="text-xl">👨‍💻</span>
            <span className="text-sm font-bold text-secondary uppercase tracking-widest">
              Leadership & Staff
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Team</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Our specialized team provides exclusive services to{" "}
            <span className="text-slate-900 font-semibold">Hi Mac group</span>{" "}
            executives, engineers, and branch managers.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 text-center"
            >
              {/* Profile Image Container */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                <img
                  src={member.image || "/placeholder.png"}
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Text Info */}
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-secondary mb-3">
                {member.role}
              </p>

              {/* Decorative line */}
              <div className="w-8 h-1 bg-slate-100 mx-auto rounded-full group-hover:w-16 group-hover:bg-blue-200 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
