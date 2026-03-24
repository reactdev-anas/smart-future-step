import React, { useEffect, useState } from "react";
import app from "./images/appdevelopment.jpg";
import web from "./images/webdevelopment.jpg";
import digital from "./images/digital.jpg";
import animation from "./images/animation.jpg";
import training from "./images/training.jpg";
import { useNavigate } from "react-router";
import { TextRoll } from "./textroll/TextRoll";

const HeroSection = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const navigate = useNavigate();

  const explore = [
    { id: 1, title: "WEB DEVELOPMENT" },
    { id: 2, title: "APPLICATION DEVELOPMENT" },
    { id: 3, title: "DIGITAL MARKETING" },
  ];

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % explore.length);
    }, 2500); // Slower transition feels more professional
    return () => clearInterval(timerId);
  }, [explore.length]);

  const courses = [
    { id: 1, title: "App Development", img: app, route: "/app-development" },
    { id: 2, title: "Web Development", img: web, route: "/web-development" },
    {
      id: 3,
      title: "Digital Marketing",
      img: digital,
      route: "/digital-marketing",
    },
    { id: 4, title: "Animation", img: animation },
    { id: 5, title: "IT Training", img: training },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 flex flex-col">
      {/* Background Abstract SVG - Positioned to stay out of the way on mobile */}
      <div className="absolute top-[-10%] right-[-10%] opacity-20 md:opacity-100 pointer-events-none">
        <svg
          width="600"
          height="600"
          viewBox="0 0 700 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-100 md:w-175"
        >
          <path
            d="M21.1318 379.718C88.4903 353.303 159.777 355.446 151.887 392.925C143.962 430.567 -34.6157 580.164 46.8866 567.265C128.389 554.365 244.381 482.634 241.037 549.435C237.572 618.675 92.3722 835.14 170.377 785.189C245.66 736.982 544.942 497.545 532.264 654.434C521.698 785.189 561.981 836.699 678.868 861.793"
            stroke="url(#paint0_linear)"
            strokeWidth="31.6981"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="3.5106"
              y1="496.449"
              x2="709.366"
              y2="786.058"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.08" stopColor="#07D078" />
              <stop offset="0.34" stopColor="#24C2F2" />
              <stop offset="0.68" stopColor="#FF0BA6" />
              <stop offset="0.91" stopColor="#FF7700" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="grow flex flex-col items-center justify-center px-6 py-20 z-10 text-center">
        {/* Animated Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-blue-700 uppercase transition-all duration-500">
            {explore[currIndex].title}
          </p>
        </div>

        {/* Hero Headline */}
        <h1 className="max-w-4xl  text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
          We Transform Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
            Business
          </span>
          <br className="hidden md:block" />
          <span className="text-2xl md:text-5xl block mt-4 font-bold text-slate-700">
            Android & iOS Development
          </span>
        </h1>

       

        <p className="mt-8 max-w-2xl text-lg text-slate-600 leading-relaxed">
          Unlock your digital potential with cutting-edge solutions tailored for
          the modern market. From concept to deployment, we build the future.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 cursor-pointer bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95">
            Explore More
          </button>
          <button className="px-6 py-3 cursor-pointer bg-white text-slate-900 font-bold rounded border border-slate-200 hover:bg-slate-50 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </div>

      {/* Infinite scrolling course section */}
      <div className="w-full h-72 md:h-96 relative overflow-hidden bg-slate-900 shadow-2xl">
        <div
          className="absolute flex h-full animate-scroll"
          style={{ width: `${courses.length * 2 * 320}px` }}
        >
          {courses.concat(courses).map((course, idx) => (
            <div
              onClick={() => {
                console.log(course.route);
                navigate(course.route);
              }}
              key={idx}
              className="group h-full relative w-64 md:w-80 shrink-0 overflow-hidden border-r border-white/10"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-xl md:text-2xl tracking-wide group-hover:translate-x-2 transition-transform">
                  {course.title}
                </p>
                <div className="w-8 h-1 bg-[#a0f5ce] mt-2 transition-all duration-300 group-hover:w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />
    </div>
  );
};

export default HeroSection;
