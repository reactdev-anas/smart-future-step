import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Loader from "./Loader";

const Training = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (id) => {
    navigate(`/courseDetails/${id}`);
  };

  const getCourses = async () => {
    try {
      setTimeout(async () => {
        const response = await axios.get("https://admindashboard-kom7.onrender.com/api/courses");
        setCourses(response.data.allCourses);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.log("Error while fetching the data :", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  // Loader
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="py-7 sm:py-12 lg:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Training Courses
        </h2>

        <div className="grid max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="relative w-full lg:w-72 cursor-pointer h-96 rounded mx-auto overflow-hidden shadow-xl group"
            >
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute bottom-14 w-full p-5 text-center text-white transform translate-y-6 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-2xl font-bold mb-2">
                  {course.title}
                </h3>

                <p className="text-sm mb-3 leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                <button
                  onClick={() => handleSubmit(course._id)}
                  className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;