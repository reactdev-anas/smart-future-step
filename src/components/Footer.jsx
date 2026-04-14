import React from "react";
import { FaPhoneAlt, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { IoMdMail, IoLogoInstagram } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  const listItems = [
    {
      id: 1,
      title: "Web Development",
    },
    {
      id: 2,
      title: "Digital Marketing",
    },
    {
      id: 3,
      title: "App Development",
    },
    {
      id: 4,
      title: "Training Programs",
    },
  ];

  const handleNavigate = (id) => {
    let path = "/";

    if (id === 1) {
      path = "/web-development";
    } else if (id === 2) {
      path = "/digital-marketing";
    } else if (id === 3) {
      path = "/app-development";
    } else {
      path = "/training";
    }

    navigate(path);

    // ✅ scroll to top after navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative bg-linear-to-br from-[#0f172a] via-[#0b1120] to-black text-gray-300 pt-16 pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Glass Container */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h2 className="text-3xl font-bold text-blue-400 mb-4 tracking-wide">
                Smart Future Step
              </h2>
              <p className="text-sm leading-relaxed mb-6 text-gray-400">
                Empowering businesses with innovative digital solutions designed
                for growth, scalability, and long-term success.
              </p>

              <div className="flex gap-4 mt-6">
                {[FaFacebookF, IoLogoInstagram, RiLinkedinFill, FaWhatsapp].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 flex items-center justify-center 
                      rounded-full bg-white/10 hover:bg-blue-600 
                      transition duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                      <Icon className="text-sm" />
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-6">
                Services
              </h3>
              <ul className="space-y-3 text-sm">
                {listItems.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => handleNavigate(item.id)}
                    className="relative cursor-pointer hover:text-blue-400 transition"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-6">
                Contact
              </h3>

              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex gap-3 items-start">
                  <FaLocationDot className="text-blue-400 mt-1" />
                  Vijay Nagar, Indore
                </li>

                <li className="flex gap-3 items-start">
                  <IoMdMail className="text-blue-400 mt-1" />
                  info@smartfuturestep.in
                </li>

                <li className="flex gap-3 items-start">
                  <FaPhoneAlt className="text-blue-400 mt-1" />
                  +91 98765 43210
                </li>

                <li className="flex gap-3 items-start">
                  <FaClock className="text-blue-400 mt-1" />
                  10AM – 7PM
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-6">
                Newsletter
              </h3>

              <p className="text-sm text-gray-400 mb-6">
                Stay updated with our latest innovations and offers.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch  sm:items-center bg-white/10 rounded-2xl sm:rounded-full p-2 lg:p-1 sm:gap-2 lg:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-4 py-2 text-sm outline-none flex-1 text-white"
                />
                <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm transition">
                  Join
                </button>
              </div>
              
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
            © 2025 Smart Future Step. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

