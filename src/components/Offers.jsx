import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import digital from "./images/digitalmarketing.png";
import software from "./images/software.png";
import itservice from "./images/itservice.png";
import testing from "./images/testing.png";
import app from "./images/app.png";
import appDevelopment from "./images/webdevelopment.jpg";

const services = [
  { id: 1, title: "Digital Transformation", image: digital },
  { id: 2, title: "Application Services", image: app },
  { id: 3, title: "Software Development", image: software },
  { id: 4, title: "IT Support", image: itservice },
  { id: 5, title: "Managing IT Services", image: appDevelopment },
  { id: 6, title: "Testing & QA", image: testing },
];

export default function CoverflowCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const visibleCount = 3;
  const maxIndex = Math.ceil(services.length / visibleCount) - 1;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getVisibleServices = () =>
    services.slice(
      currentIndex * visibleCount,
      currentIndex * visibleCount + visibleCount
    );

  // ✅ Auto Slide
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8 items-start">
      
      {/* Left Side Content */}
      <div className="flex-1 max-w-md my-auto">
        <h2 className="text-blue-600 text-lg font-bold uppercase tracking-wide">
          What We Offer
        </h2>
        <p className="text-3xl font-bold mt-1 text-gray-900 leading-snug">
          Best solutions for your business.
        </p>
        <p className="mt-2 text-gray-700 text-md leading-relaxed">
          Smart Future Step is a fast-growing IT Company providing holistic IT
          solutions including software, website, and application development.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="flex-1 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden rounded">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex gap-4"
              initial={{
                x: direction === 1 ? 300 : -300,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: direction === 1 ? -300 : 300,
                opacity: 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {getVisibleServices().map((service) => (
                <div key={service.id} className="relative w-72 rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 lg:h-96 object-cover rounded-xl"
                  />
                  <div className="absolute w-64 flex px-4 py-4 items-center justify-between bottom-4 left-1/2 -translate-x-1/2 rounded bg-white shadow-lg">
                    <h3 className=" font-medium">
                      {service.title} 
                    </h3>
                    <div className="text-xl">→</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center ml-25 sm:justify-center sm:items-center lg:justify-center lg:items-center mt-6 gap-3">
          
          {/* Prev */}
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full flex items-center justify-center 
            bg-white shadow-lg hover:shadow-2xl 
            hover:scale-105 transition-all duration-200"
          >
            {"<"}
          </button>

          {/* Dots */}
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}

          {/* Next */}
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full flex items-center justify-center 
            bg-white shadow-lg hover:shadow-2xl 
            hover:scale-105 transition-all duration-200"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
