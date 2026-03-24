import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaFacebookF, FaWhatsapp, FaBars, FaChevronDown } from "react-icons/fa";
import { IoMdMail, IoLogoInstagram, IoMdClose } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import logo from "../images/logo.png";

const NavBar = () => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuOpen(false);
    setServiceOpen(false);
  };

  return (
    <div className="relative">
      {/* Top Info Bar */}
      {!isScrolled && (
        <div className="bg-black h-11 w-screen hidden md:block">
          <div className="h-full max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center text-[#bbbec0]">
              <p className="flex items-center cursor-pointer hover:text-[#a0f5ce]">
                <FaPhoneAlt className="mr-2" /> +91 93037 15744
              </p>
              <p className="ml-4 flex items-center cursor-pointer hover:text-[#a0f5ce]">
                <IoMdMail className="mr-2 text-lg" /> info@smartfuturestep.in
              </p>
            </div>

            <div className="flex items-center gap-3 text-white">
              <FaFacebookF className="cursor-pointer hover:text-[#3f51b5]" />
              <IoLogoInstagram className="cursor-pointer hover:text-[#3f51b5]" />
              <RiLinkedinFill className="cursor-pointer hover:text-[#3f51b5]" />
              <FaWhatsapp className="cursor-pointer hover:text-[#3f51b5]" />
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div
        className={`w-screen z-50 transition-all duration-300 ${
          isScrolled ? "fixed top-0 shadow-lg bg-white" : "relative py-1 bg-white"
        }`}
      >
        <div className="h-16 w-full py-3 px-6 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} className="w-8 h-8 mr-2 cursor-pointer" alt="logo" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
              Smart Future Step
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-gray-800">
            <Link onClick={scrollTop} to="/" className="font-semibold hover:text-[#00a86b] transition">Home</Link>
            <Link onClick={scrollTop} to="/about" className="font-semibold hover:text-[#00a86b] transition">About Us</Link>
            <Link onClick={scrollTop} to="/portfolio" className="font-semibold hover:text-[#00a86b] transition">Portfolio</Link>
            <Link onClick={scrollTop} to="/career" className="font-semibold hover:text-[#00a86b] transition">Career</Link>
            <Link onClick={scrollTop} to="/contact" className="font-semibold hover:text-[#00a86b] transition">Contact</Link>

            {/* Desktop Services Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 font-semibold cursor-pointer py-2 hover:text-[#00a86b] transition">
                Services <FaChevronDown className="text-xs mt-0.5" />
              </div>
              <div className="absolute left-0 top-full mt-1 w-52 bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden">
                <Link to="/web-development" onClick={scrollTop} className="block px-5 py-3 font-medium hover:bg-[#a0f5ce] transition">Web Development</Link>
                <Link to="/app-development" onClick={scrollTop} className="block px-5 py-3 font-medium hover:bg-[#a0f5ce] transition">App Development</Link>
                <Link to="/digital-marketing" onClick={scrollTop} className="block px-5 py-3 font-medium hover:bg-[#a0f5ce] transition">Digital Marketing</Link>
              </div>
            </div>

            <button onClick={()=> navigate('/training')} className="rounded py-2 cursor-pointer px-6 shadow-md bg-[#a0f5ce] text-black font-bold hover:bg-black hover:text-white transition-all duration-300">
              Training Program
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden p-2 text-2xl cursor-pointer transition-colors duration-200 text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose className="text-[#00a86b]" /> : <FaBars />}
          </div>
        </div>

        {/* --- PROFESSIONAL MOBILE MENU --- */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-150 opacity-100 border-t border-gray-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            <Link onClick={scrollTop} to="/" className="text-lg font-bold text-gray-800 px-4 py-2 rounded-lg active:bg-gray-100">Home</Link>
            <Link onClick={scrollTop} to="/about" className="text-lg font-bold text-gray-800 px-4 py-2 rounded-lg active:bg-gray-100">About Us</Link>
            <Link onClick={scrollTop} to="/portfolio" className="text-lg font-bold text-gray-800 px-4 py-2 rounded-lg active:bg-gray-100">Portfolio</Link>
            <Link onClick={scrollTop} to="/career" className="text-lg font-bold text-gray-800 px-4 py-2 rounded-lg active:bg-gray-100">Career</Link>
            <Link onClick={scrollTop} to="/contact" className="text-lg font-bold text-gray-800 px-4 py-2 rounded-lg active:bg-gray-100">Contact</Link>

            {/* Mobile Services Accordion */}
            <div className="w-full">
              <div
                onClick={() => setServiceOpen(!serviceOpen)}
                className={`flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${serviceOpen ? 'bg-gray-50 text-[#00a86b]' : 'text-gray-800'}`}
              >
                <span className="text-lg font-bold">Services</span>
                <FaChevronDown className={`text-sm transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`} />
              </div>

              <div className={`overflow-hidden transition-all duration-300 px-4 ${serviceOpen ? "max-h-48 mt-2" : "max-h-0"}`}>
                <div className="flex flex-col space-y-3 border-l-2 border-[#a0f5ce] ml-2 pl-4 py-2">
                  <Link to="/web-development" onClick={scrollTop} className="text-gray-600 font-medium active:text-black">Web Development</Link>
                  <Link to="/app-development" onClick={scrollTop} className="text-gray-600 font-medium active:text-black">App Development</Link>
                  <Link to="/digital-marketing" onClick={scrollTop} className="text-gray-600 font-medium active:text-black">Digital Marketing</Link>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <Link 
                to="/training" 
                onClick={scrollTop}
                className="block text-center rounded-xl py-4 bg-[#a0f5ce] text-black font-bold shadow-lg shadow-[#a0f5ce]/30 active:scale-95 transition-transform"
              >
                Training Program
              </Link>
            </div>
            
            {/* Socials at bottom of mobile menu */}
            <div className="flex justify-center gap-6 pt-4 text-gray-400">
                <FaFacebookF className="hover:text-blue-600" />
                <IoLogoInstagram className="hover:text-pink-600" />
                <RiLinkedinFill className="hover:text-blue-700" />
                <FaWhatsapp className="hover:text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
