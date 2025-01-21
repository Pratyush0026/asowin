import React from "react";
import img1 from "../assets/blogbg3.png";
import Navbar from "./Navbar";

const Blog1L = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Navbar />
      
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 pb-8">
        {/* Main Heading */}
        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-40 text-center w-full max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-[2.8rem] lg:text-7xl font-serif text-white leading-normal sm:leading-relaxed md:leading-tight lg:leading-snug">
          How Easy Phone Reached Top #3 for
            <br className="hidden md:block" />
            Phone Keyword in the US
          </h1>
        </div>

        {/* Client Name */}
        <div className="mt-auto pb-8 sm:pb-12 md:pb-16 lg:pb-20">
          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl transition-all duration-300">
            <span className="opacity-80">Client: </span>
            <span className="font-normal">LSM Apps</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Blog1L;