import React from "react";
import discover from "./images/discover.png";
import execute from "./images/execute.png";
import planning from "./images/planning.png";
import deliver from "./images/deliver.png";

const Working = () => {
  const workProcess = [
    {
      id: 1,
      title: "Discover",
      content:
        "We analyze your business needs, market trends, and opportunities to craft a tailored approach.",
      image: discover,
       bg: "#ffd6c0",
    },
    {
      id: 2,
      title: "Planning",
      content:
        "We build a clear project strategy and roadmap to ensure seamless progress and success.",
      image: planning,
       bg: "#a0f5ce",
    },
    {
      id: 3,
      title: "Execute",
      content:
        "Our skilled team executes the plan efficiently, using modern technologies and best practices.",
      image: execute,
      bg: "#f1bff4",
    },
    {
      id: 4,
      title: "Deliver",
      content:
        "We deliver exceptional quality results and ensure client satisfaction beyond expectations.",
      image: deliver,
      bg: "#a4e2fb",
    },
  ];

  return (
    <section className="w-full py-24 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center font-bold text-4xl md:text-5xl text-gray-900 mb-20">
          OUR WORKING PROCESS
        </h2>

        {/* Timeline Line */}
        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-linear-to-r from-blue-200 via-blue-500 to-blue-200"></div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {workProcess.map((step, index) => (
              <div
                key={step.id}
                style={{background:step.bg}}
                className="group relative cursor-pointer rounded-3xl p-8 
                shadow-md hover:shadow-2xl 
                transition-all duration-500 
                hover:-translate-y-4 border border-gray-100"
              >
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 
                w-12 h-12 rounded-full bg-black text-white 
                flex items-center justify-center font-semibold text-lg shadow-lg">
                  {`0${step.id}`}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                  {step.title}
                </h3>

                {/* Content */}
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {step.content}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 h-0.75 w-0 bg-blue-700 mx-auto 
                transition-all duration-500 group-hover:w-16"></div>

                {/* Soft Glow */}
                <div className="absolute inset-0 rounded-3xl 
                bg-blue-50 opacity-0 group-hover:opacity-40 
                transition duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Working;