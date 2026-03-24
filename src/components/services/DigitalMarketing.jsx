import React, { useRef } from "react";
import dynamic from "../images/dynamic.jpg";
import { FaArrowDown } from "react-icons/fa";

const DigitalMarketing = () => {
  const scrollRef = useRef(null);

  const scrollDown = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="h-[85vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          DIGITAL MARKETING
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-xl sm:max-w-2xl">
          Why are we the best Digital Marketing Company in Indore?
        </p>

        <div
          onClick={scrollDown}
          className="text-3xl sm:text-4xl animate-bounce cursor-pointer text-green-500 hover:text-green-600 transition"
        >
          <FaArrowDown />
        </div>
      </section>

      {/* SECTION */}
      <div ref={scrollRef}>
        <section className="relative w-full h-125 sm:h-137.5 md:h-150 my-12 md:my-20 overflow-hidden group">
          {/* Background Image */}
          <img
            src={dynamic}
            alt="Digital Marketing"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/40 to-black/20 group-hover:from-black/50 group-hover:to-black/30 transition duration-700"></div>

          {/* Floating Card */}
          <div className="absolute top-1/2 left-4 sm:left-8 md:left-12 -translate-y-1/2 bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl max-w-xs sm:max-w-md md:max-w-lg transform group-hover:-translate-y-2 transition duration-500">
            <p className="text-sm sm:text-base md:text-base text-gray-700 leading-6 sm:leading-7 md:leading-7">
              Smart Future Step Private Limited is a Social Media Marketing Company in Indore, known for its premium services across the region. We provide all prominent services including Digital Marketing, Web Development, and much more. Our team helps your brand gain traffic and engagement through Facebook, Instagram, Twitter, LinkedIn, and other major platforms. We dedicate our time to your growth and business success.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalMarketing;
