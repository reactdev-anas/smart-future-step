import React from "react";
import creativity from "../images/creativity.png";
import choose from "../images/chooseus.png";

const features = [
  {
    id: 1,
    title: "Expert Peoples",
    description: "We have experts in designing and development.",
    bg: "#ffd6c0",
  },
  {
    id: 2,
    title: "Big Experience",
    description: "We have years of experience in web development.",
    bg: "#a0f5ce",
  },
  {
    id: 3,
    title: "Committed to Quality",
    description: "We deliver quality products according to your needs.",
    bg: "#f1bff4",
  },
];

const AboutUs = () => {
  const chips = [
    {
      id: 1,
      title: "Business Planning",
    },
    {
      id: 2,
      title: "Financial Advices",
    },
    {
      id: 3,
      title: "Investement Strategy",
    },
    {
      id: 4,
      title: "Business Security",
    },
  ];
  return (
    <section className="bg-gray-50 py-5 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-[40vh] md:min-h-[50vh]">
        <img
          src={creativity}
          className="w-full h-96 object-cover rounded-lg"
          alt="Creativity"
        />
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl w-full sm:text-2xl  sm:w-1/2 md:w-1/2 lg:w-1/2 md:text-3xl lg:text-4xl text-center text-white font-bold px-2 sm:px-3 md:px-4 lg:px-4">
          We help to implement your ideas into reality.
        </h2>
        <div className="absolute bottom-24 sm:bottom-16 md:bottom-20 lg:bottom-20 xl:bottom-20 left-1/2 -translate-x-1/2">
          <button className="px-5 py-3 bg-[#a0f5ce] text-black rounded font-semibold cursor-pointer  transition duration-300 hover:bg-[#a4e2fb]">
            Contact Us
          </button>
        </div>
      </div>

     

      {/* Description */}
      <p className="mx-auto text-center text-xl mt-7 leading-8 font-bold max-w-5xl px-4">
        We believe that communication is the key and our team of experts always
        follows this principle. We carry out constant communication between team
        members and clients, ensuring transparency. This also enables us to get
        greater insights as well as trust from all our clients. All of our
        projects are delivered at the stated times and our services come within
        a rather affordable range.
      </p>

      {/* Features Section */}
      <div className="my-20">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 max-w-5xl mx-auto px-4">
          {features.map((car) => (
            <div
              key={car.id}
              style={{ backgroundColor: car.bg }}
              className={`p-8 rounded-2xl shadow-xl hover:shadow-2xl 
                         transform hover:-translate-y-3 hover:scale-105 
                         transition-all duration-300 cursor-pointer `}
            >
              <h3 className="text-xl font-bold mb-4">{car.title}</h3>
              <p className="text-gray-700">{car.description}</p>
              <div className="ml-auto bg-black rounded-full w-7 h-7 flex items-center justify-center text-white">
                <p>{car.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}

      <div className="relative w-full min-h-[60vh] mt-20 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <img
          src={choose}
          className="w-full h-full object-cover absolute inset-0"
          alt="Why Choose Us"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 "></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
            {chips.map((chip, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center gap-4 
          bg-white/10 backdrop-blur-md 
          border border-white/20 
          rounded-xl px-6 py-4 
          text-white 
          hover:bg-white/20 
          hover:scale-105 
          transition-all duration-300 shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-[#59d09b] flex items-center justify-center shadow-md">
                  <span className="text-lg font-bold text-white">✓</span>
                </div>

                <p className="text-lg md:text-xl font-semibold">{chip.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Paragraph under Why Choose Us */}
      <p className="mx-auto text-center text-xl my-7 leading-8 font-bold max-w-5xl px-4">
        Our development process is seamless and follows a systematic approach.
        We begin with signing a Non-Disclosure Agreement (NDA) with the client.
        After that, documentation is done, and responsibilities are shared among
        team members to ensure a smooth project progression. Proper scheduling
        and frequent reporting keep everyone, including clients, within the
        loop. Our agile approach ensures continuous feedback, making us capable
        of handling complex projects with efficiency.
      </p>
    </section>
  );
};

export default AboutUs;
