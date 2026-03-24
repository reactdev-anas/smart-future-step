import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";
import Loader from "../Loader"; // apka custom loader component

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 loading state

  const getJobData = async () => {
    try {
      setTimeout( async()=>{
       const response = await axios.get("http://localhost:5001/api/jobs");
      setJobs(response.data.alljobs);
      setLoading(false)
      },1500)
      
    } catch (error) {
      console.log(`Error while fetching the data`, error);
    } 
  };

  const career = [
    { id: 1, title: "Friendly Environment", content: "Join the race to make the world a better place", bg: "#ffd6c0" },
    { id: 2, title: "Planning", content: "Plan your work for today and every day, then work your plan", bg: "#a0f5ce" },
    { id: 3, title: "Execute", content: "Ideas are worth nothing unless executed.", bg: "#f1bff4" },
    { id: 4, title: "Deliver", content: "We deliver our ideas to make your life better", bg: "#a4e2fb" },
  ];

  useEffect(() => {
    getJobData();
  }, []);

  // 🔹 Loader while fetching jobs
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-10 md:py-14 lg:py-16 bg-linear-to-r from-gray-100 to-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-12">WHY CAREER WITH US</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {career.map((car) => (
            <div
              key={car.id}
              style={{ backgroundColor: car.bg }}
              className="p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-4">{car.title}</h3>
              <p className="text-gray-700">{car.content}</p>
              <div className="ml-auto bg-black rounded-full w-7 h-7 flex items-center justify-center text-white">
                <p>{car.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Openings */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Job Openings</h2>

          {/* Slider Container */}
          <div className="relative">
            <div className="flex gap-8 w-max animate-jobslide">
              {[...jobs, ...jobs].map((job, index) => (
                <div
                  key={index}
                  className="min-w-[320px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Top Section */}
                  <div className="flex justify-between p-6">
                    <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                      <p className="text-white text-2xl">{job.title?.[0]}</p>
                    </div>
                    <CiBookmark className="text-gray-800 text-2xl cursor-pointer" />
                  </div>

                  {/* Title & Position */}
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 mb-1">{job.company}</p>
                    <h3 className="text-xl font-semibold mb-3">{job.title}</h3>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">{job.jobType}</span>
                      <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">{job.workMode}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 pb-4">
                    <hr className="mb-3" />
                    <div className="flex justify-end">
                      <button className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-800 transition">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keyframes for slider */}
          <style>
            {`
              @keyframes jobslide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-jobslide {
                animation: jobslide 35s linear infinite;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Career;


