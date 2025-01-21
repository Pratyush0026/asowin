import React from "react";
import Navbar from "./Navbar";
import img1 from "../assets/Union1.png";

const ServicesHero = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 md:py-20 lg:py-12">
          {/* Left side - Logo */}
          <div className="w-full lg:w-[50%] px-4 sm:px-6 lg:px-12 mb-12 lg:mb-0">
            <div className="w-full max-w-[800px] mx-auto lg:mx-0">
              <img
                src={img1}
                alt="Services Logo"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-[50%] px-4 sm:px-6 lg:px-12 relative">
            {/* Decorative Stars */}
            <div className="absolute w-6 h-6 -top-10 -right-1 text-pink-500 text-3xl">★</div>
            <div className="absolute w-6 h-6 -top-12 -left-16 text-yellow-400 text-3xl">★</div>
            <div className="absolute w-6 h-6 bottom-0 -right-2 text-blue-500 text-3xl">★</div>
            <div className="absolute w-6 h-6 -bottom-16 left-1/2 text-blue-400 text-3xl">★</div>

            {/* Content */}
            <div className="relative text-center lg:text-left">
              {/* Heading */}
              <h1 className="text-6xl md:text-7xl lg:text-[127px] font-bold mb-6 leading-tight">
                Services
                <br />
                <span className="block">We Offer</span>
              </h1>
              
              {/* Paragraph */}
              <p className="text-gray-700 text-lg md:text-xl lg:text-[20px] mb-8 max-w-[30rem] mx-auto lg:mx-0">
                We've handled ASO for some of the largest brands globally. We know ASO inside out.
              </p>
              
              {/* Button */}
              <button className="bg-[#FF8712] w-[232px] h-[57px] text-white px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-full hover:bg-[#e66e00] transition-colors">
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
