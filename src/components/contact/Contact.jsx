import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import contact from "../images/contact.png";
import axios from "axios";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5001/api/contact", form);
      alert(res.data.message);
      setForm({ name: "", email: "", phone: "", website: "", message: "" });
    } catch (err) {
      alert("Error submitting form");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* TOP SECTION: items-stretch ensures left and right side have same height */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left Side - Image and Heading aligned to Form height */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div className="flex flex-col items-start">
              <h3 className="text-[#00a86b] font-semibold text-xl mb-2 tracking-wider">
                CONTACT US
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black leading-tight">
                Let us help your business <br /> to move forward.
              </h2>
            </div>

            {/* Image is now aligned to the bottom of the flex container (matching form bottom) */}
            <div className="mt-8 lg:mt-0">
              <img
                src={contact}
                alt="Contact Illustration"
                className="w-full max-w-md h-auto rounded-2xl object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>

          {/* Right Side - Form (Kept exactly as you had it) */}
          <div className="lg:w-1/2 w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={form.phone}
                  required
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
                />
                <input
                  type="text"
                  placeholder="Your Website"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={6}
                value={form.message}
                name="message"
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none text-black"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#a0f5ce] cursor-pointer text-black font-bold py-4 rounded-lg hover:bg-black hover:text-white transition duration-300 shadow-md"
              >
                {loading ? "Sending..." : "Submit Now"}
              </button>
            </form>
          </div>
        </div>

        {/* Info Cards Section - NO CHANGES MADE HERE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <ContactCard 
            icon={<GoLocation className="text-3xl" />} 
            title="Our Office" 
            detail="Indore, India" 
            bgColor="bg-blue-50 text-blue-600"
          />
          <ContactCard 
            icon={<AiOutlineMail className="text-3xl" />} 
            title="Email" 
            detail="info@smartfuturestep.in" 
            bgColor="bg-emerald-50 text-emerald-600"
          />
          <ContactCard 
            icon={<AiOutlinePhone className="text-3xl" />} 
            title="Call Us" 
            detail="(+91) 93037 15744" 
            bgColor="bg-amber-50 text-amber-600"
          />
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, detail, bgColor }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center border border-gray-50 group">
    <div className={`${bgColor} p-5 rounded-2xl mb-6 transition-transform duration-500 group-hover:rotate-[360deg]`}>
      {icon}
    </div>
    <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 font-medium">{detail}</p>
  </div>
);

export default ContactUs;
