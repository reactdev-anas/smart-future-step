import React, { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import creativity from "../images/creativity.png";
import responsive from "../images/responsive.jpg";
import dynamic from "../images/dynamic.jpg";
import customized from "../images/customized.jpg";

const sections = [
  {
    title: "Creativity",
    text: "Smart Future Step has proven past experience, in terms of creativity and quality. It provides unique web designs and themes for their clients as per their requirements and budget to make every website stand out from the crowd. Our experienced web development team works wholeheartedly to meet your business needs.",
    img: creativity,
  },
  {
    title: "Responsive",
    text: "Our responsive designs adapt seamlessly across devices. Whether it’s a laptop, tablet, or smartphone, Smart Future Step ensures your website looks perfect everywhere. We focus on usability and accessibility to provide an intuitive browsing experience.",
    img: responsive,
  },
  {
    title: "Dynamic",
    text: "Modern websites are optimized for all devices and feature intuitive designs. With dynamic content, voice search capabilities, and smart interactions, we create sites that are both engaging and functional for every user.",
    img: dynamic,
  },
  {
    title: "Customized",
    text: "For market development, we craft solid customized websites with maximum options that are easy to manage. Our affordable web design team spends the time it takes to make your site productive, beautiful, and unique to your brand.",
    img: customized,
  },
];

const AppDevelopment = () => {
  const scrollRef = useRef(null);

  const scrollDown = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden">

      {/* HERO */}
      <section className="h-[85vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          APP DEVELOPMENT
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-xl sm:max-w-2xl">
          Why are we the best App Development Company in Indore?
        </p>

        <div
          onClick={scrollDown}
          className="text-3xl sm:text-4xl animate-bounce cursor-pointer text-green-500 hover:text-green-600 transition"
        >
          <FaArrowDown />
        </div>
      </section>

      {/* SECTIONS */}
      <div ref={scrollRef}>
        {sections.map((sec, index) => {
          const isLeft = index % 2 === 0;
          return (
            <section
              key={index}
              className="relative w-full h-125 sm:h-137.5 md:h-150 my-12 md:my-20 overflow-hidden group"
            >
              {/* Background Image */}
              <img
                src={sec.img}
                alt={sec.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/40 to-black/20 group-hover:from-black/50 group-hover:to-black/30 transition duration-700"></div>

              {/* Floating Card */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 ${
                  isLeft ? "left-4 sm:left-8 md:left-12" : "right-4 sm:right-8 md:right-12"
                } bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl max-w-xs sm:max-w-md md:max-w-lg transform group-hover:-translate-y-2 transition duration-500`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
                  {sec.title}
                </h2>

                <p className="text-sm sm:text-base md:text-gray-700 leading-6 sm:leading-7 md:leading-7">
                  {sec.text}
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default AppDevelopment;