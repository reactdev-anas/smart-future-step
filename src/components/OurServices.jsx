import React from "react";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      content:
        "We provide complete web solutions tailored to your business growth.",
       bg: "#ffd6c0",
    },
    {
      id: 2,
      title: "Digital Marketing",
      content: "Strategic marketing solutions to boost your brand visibility.",
      bg: "#a0f5ce",
    },
    {
      id: 3,
      title: "Application Development",
      content: "High-performance mobile and web applications for modern needs.",
       bg: "#f1bff4",
    },
    {
      id: 4,
      title: "Training Services",
      content: "Professional training programs to enhance technical skills.",
      bg: "#a4e2fb",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center font-bold text-5xl mb-20">Our Services</h2>

         <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-linear-to-r from-blue-200 via-blue-500 to-blue-200"></div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {services.map((service, index) => (
              <div
                key={service.id}
                style={{background:service.bg}}
                className="group cursor-pointer relative rounded-3xl p-8 
                shadow-md hover:shadow-2xl 
                transition-all duration-500 
                hover:-translate-y-4 border border-gray-100"
              >
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 
                w-12 h-12 rounded-full bg-black text-white 
                flex items-center justify-center font-semibold text-lg shadow-lg">
                  {`0${service.id}`}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                  {service.title}
                </h3>

                {/* Content */}
                <p className="text-gray-600 text-sm text-center  leading-relaxed">
                  {service.content}
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

export default OurServices;
