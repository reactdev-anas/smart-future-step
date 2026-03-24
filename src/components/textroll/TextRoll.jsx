// import { motion } from "framer-motion";
// import React from "react";

// const STAGGER = 0.035;

// export const TextRoll = ({ children, className = "", center = false }) => {
//   return (
//     <motion.span
//       initial="initial"
//       whileHover="hovered"
//       className={`relative block overflow-hidden ${className}`}
//       style={{ lineHeight: 0.75 }}
//     >
//       {/* Top Layer */}
//       <div>
//         {children.split("").map((l, i) => {
//           const delay = center
//             ? STAGGER * Math.abs(i - (children.length - 1) / 2)
//             : STAGGER * i;

//           return (
//             <motion.span
//               key={i}
//               className="inline-block"
//               variants={{
//                 initial: { y: 0 },
//                 hovered: { y: "-100%" },
//               }}
//               transition={{
//                 ease: "easeInOut",
//                 delay,
//               }}
//             >
//               {l}
//             </motion.span>
//           );
//         })}
//       </div>

//       {/* Bottom Layer */}
//       <div className="absolute inset-0">
//         {children.split("").map((l, i) => {
//           const delay = center
//             ? STAGGER * Math.abs(i - (children.length - 1) / 2)
//             : STAGGER * i;

//           return (
//             <motion.span
//               key={i}
//               className="inline-block"
//               variants={{
//                 initial: { y: "100%" },
//                 hovered: { y: 0 },
//               }}
//               transition={{
//                 ease: "easeInOut",
//                 delay,
//               }}
//             >
//               {l}
//             </motion.span>
//           );
//         })}
//       </div>
//     </motion.span>
//   );
// };

import { motion } from "framer-motion";

const STAGGER = 0.035;

export const TextRoll = ({ children, center = false, className = "" }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative inline-block whitespace-nowrap ${className}`}
    >
      {/* Top text */}
      <span className="inline-block">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{ delay, ease: "easeInOut" }}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </span>

      {/* Bottom text */}
      <span className="absolute inset-0 inline-block">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ delay, ease: "easeInOut" }}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </span>
    </motion.span>
  );
};