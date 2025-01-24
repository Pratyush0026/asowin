// import React from "react";
// import Navbar from "./Navbar";
// import img1 from "../assets/Union1.png";

// const ServicesHero = () => {
//   return (
//     <div className="w-full min-h-screen bg-white">
//       <Navbar />
//       <div className="max-w-[1440px] mx-auto">
//         <div className="flex flex-col lg:flex-row items-center justify-between py-16 md:py-20 lg:py-12">
//           {/* Left side - Logo */}
//           <div className="w-full lg:w-[50%] px-4 sm:px-6 lg:px-12 mb-12 lg:mb-0">
//             <div className="w-full max-w-[800px] mx-auto lg:mx-0">
//               <img
//                 src={img1}
//                 alt="Services Logo"
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>

//           {/* Right side - Content */}
//           <div className="w-full lg:w-[50%] px-4 sm:px-6 lg:px-12 relative">
//             {/* Decorative Stars */}
//             <div className="absolute w-6 h-6 -top-10 -right-1 text-pink-500 text-3xl">★</div>
//             <div className="absolute w-6 h-6 -top-12 -left-16 text-yellow-400 text-3xl">★</div>
//             <div className="absolute w-6 h-6 bottom-0 -right-2 text-blue-500 text-3xl">★</div>
//             <div className="absolute w-6 h-6 -bottom-16 left-1/2 text-blue-400 text-3xl">★</div>

//             {/* Content */}
//             <div className="relative text-center lg:text-left">
//               {/* Heading */}
//               <h1 className="text-6xl md:text-7xl lg:text-[127px] font-bold mb-6 leading-tight">
//                 Services
//                 <br />
//                 <span className="block">We Offer</span>
//               </h1>
              
//               {/* Paragraph */}
//               <p className="text-gray-700 text-lg md:text-xl lg:text-[20px] mb-8 max-w-[30rem] mx-auto lg:mx-0">
//                 We've handled ASO for some of the largest brands globally. We know ASO inside out.
//               </p>
              
//               {/* Button */}
//               <button className="bg-[#FF8712] w-[232px] h-[57px] text-white px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-full hover:bg-[#e66e00] transition-colors">
//                 LET'S TALK
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesHero;


import React from "react";
import Navbar from "./Navbar";
import img1 from "../assets/Union1.png";
import { useNavigate } from 'react-router-dom';


 


const ServicesHero = () => {
  const navigate = useNavigate(); 

  return (
    <div className="w-full  bg-white">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          {/* Left side - Logo */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="w-full max-w-[600px] mx-auto lg:mx-0">
              <img
                src={img1}
                alt="Services Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative Stars - Adjusted for better responsive positioning */}
            <div className="hidden lg:block absolute w-4 h-4 -top-8 right-4 text-pink-500 text-2xl">★</div>
            <div className="hidden lg:block absolute w-4 h-4 -top-10 -left-12 text-yellow-400 text-2xl">★</div>
            <div className="hidden lg:block absolute w-4 h-4 bottom-0 right-2 text-blue-500 text-2xl">★</div>
            <div className="hidden lg:block absolute w-4 h-4 -bottom-12 left-1/2 text-blue-400 text-2xl">★</div>

            {/* Content */}
            <div className="text-center lg:text-left px-4">
              {/* Heading - Improved responsive sizing */}
              <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] 2xl:text-[127px] font-bold leading-tight mb-4 md:mb-6">
                <span className="block">Services</span>
                <span className="block">We Offer</span>
              </h1>
              
              {/* Paragraph - Adjusted max-width and responsive text */}
              <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-[30rem] mx-auto lg:mx-0 mb-6 md:mb-8">
                We've handled ASO for some of the largest brands globally. We know ASO inside out.
              </p>
              
              {/* Button - Made responsive */}
              <button className="bg-[#FF8712] w-full sm:w-auto min-w-[200px] px-6 py-3 text-white text-base md:text-lg rounded-full hover:bg-[#e66e00] transition-colors"
                 onClick={() => navigate('/contact')}
              >
                LET'S TALK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;