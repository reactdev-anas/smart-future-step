// import React from "react";
// import magnus from "../images/magnus.png";
// import abroad from "../images/abroad.png";
// import joinus from "../images/joinus.png";
// import global from "../images/global.png";
// import vedant from "../images/vedant.png";
// import job from "../images/job.png";
// import iilmt from "../images/iilmt.png";
// import jarves from "../images/jarves.png";
// import hotel from "../images/hostel.png";

// const Portfolio = () => {
//   const portfolio = [
//     { id: 1, title: "Magnus", image: magnus },
//     { id: 2, title: "Home in Abroad", image: abroad },
//     { id: 3, title: "Joinus4Education", image: joinus },
//     { id: 4, title: "Shri Vedanta Academy", image: vedant },
//     { id: 5, title: "IILMT Education", image: iilmt },
//     { id: 6, title: "Joinjobs CV Maker", image: job },
//     { id: 7, title: "Jarves Edu Hub", image: jarves },
//     { id: 8, title: "Joinus4global Education", image: global },
//     { id: 9, title: "Satkar Hotels", image: hotel },
//   ];

//   return (
//     <div className="py-10 bg-gray-100">
//       <h3 className="text-3xl font-bold text-center mb-8">Portfolio</h3>

   
//       <div className="max-w-280  mx-4 sm:mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
//         {portfolio.map((port) => (
//           <div
//             key={port.id}
//             className="break-inside-avoid mb-4  rounded overflow-hidden shadow-lg "
//           >
//             <img
//               src={port.image}
//               alt={port.title}
//               className="w-full object-cover"
//               style={{ height: "auto" }} // natural height for Pinterest effect
//             />
//             {/* Optional title overlay */}
//             <div className="p-2">
//               <h4 className="text-sm font-semibold text-center">
//                 {port.title}
//               </h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


import React from "react";
import magnus from "../images/magnus.png";
import abroad from "../images/abroad.png";
import joinus from "../images/joinus.png";
import global from "../images/global.png";
import vedant from "../images/vedant.png";
import job from "../images/job.png";
import iilmt from "../images/iilmt.png";
import jarves from "../images/jarves.png";
import hotel from "../images/hostel.png";

const Portfolio = () => {
  const portfolio = [
    { id: 1, title: "Magnus", image: magnus },
    { id: 2, title: "Home in Abroad", image: abroad },
    { id: 3, title: "Joinus4Education", image: joinus },
    { id: 4, title: "Shri Vedanta Academy", image: vedant },
    { id: 5, title: "IILMT Education", image: iilmt },
    { id: 6, title: "Joinjobs CV Maker", image: job },
    { id: 7, title: "Jarves Edu Hub", image: jarves },
    { id: 8, title: "Joinus4global Education", image: global },
    { id: 9, title: "Satkar Hotels", image: hotel },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-8">Portfolio</h3>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-8">
          {portfolio.map((port) => (
            <div
              key={port.id}
              className="break-inside-avoid rounded overflow-hidden shadow-md bg-white"
            >
              <img
                src={port.image}
                alt={port.title}
                className="
                  w-full 
                  object-cover 
                  h-45 
                  sm:h-55
                  md:h-65
                  lg:h-auto
                "
              />

              <div className="p-3">
                <h4 className="text-sm sm:text-base font-semibold text-center">
                  {port.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
