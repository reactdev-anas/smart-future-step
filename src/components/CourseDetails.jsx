import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loader from "./Loader";
import { Clock, BarChart, BookOpen, CheckCircle, Globe, PlayCircle, Heart } from "lucide-react"; // Install lucide-react

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://admindashboard-kom7.onrender.com/api/courses/${id}`);
      setCourse(response.data.singleCourse);
    } catch (error) {
      console.log("Error while fetching the data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  const getEmbedUrl = (url) => {
    if (!url) return "";
    return url.replace("youtu.be/", "www.youtube.com/embed/");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* HEADER HERO AREA */}
      <div className="bg-slate-900 pt-24 pb-40 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {/* Breadcrumb style badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Popular Course</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {course.title}
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>{course.duration} Weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-purple-400" />
                <span>Beginner Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-400" />
                <span>English / Hindi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: Course Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video/Preview Section */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 p-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src={getEmbedUrl(course.videoUrl)}
                  title={course.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">What you'll learn</h3>
                <ul className="space-y-3">
                  {['Industry Standards', 'Real-world Projects', 'Modern Tooling'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                  <PlayCircle className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Requirements</h3>
                <p className="text-slate-600 leading-relaxed">
                  Basic computer knowledge and a passion for technology. No prior coding experience required.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Enrollment Card */}
          <div className="lg:relative">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300 border border-slate-100 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  
                  <div className="space-y-4">
                    <button className="w-full py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all active:scale-95 shadow-lg shadow-blue-200">
                      Enroll Now
                    </button>
                    <button className="w-full py-3 cursor-pointer bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                      <Heart className="w-5 h-5" />
                      Add to Wishlist
                    </button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                    <p className="font-bold text-slate-900">This course includes:</p>
                    <div className="grid grid-cols-1 gap-3 text-sm text-slate-600 font-medium">
                      <div className="flex items-center gap-3 italic">✔ Lifetime Access</div>
                      <div className="flex items-center gap-3 italic">✔ Certificate of Completion</div>
                      <div className="flex items-center gap-3 italic">✔ Expert Support</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
                <h4 className="font-bold text-xl mb-2">Corporate Training?</h4>
                <p className="text-indigo-100 text-sm mb-6">Get this course for your team with a custom dashboard.</p>
                <button className="text-sm font-bold bg-white/10 hover:bg-white/20 py-2 px-4 rounded-lg transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;