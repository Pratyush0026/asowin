import React from "react";
import img1 from "../assets/getstart.png";
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate

const GetStarted = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="w-full bg-[#F6F1EC] mb-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Image Container */}
          <div className="w-full lg:w-[57%] p-4 md:p-6 lg:p-8">
            {/* Placeholder for the grouped image */}
            <div
              className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>

          {/* Right side - Text Content */}
          <div className="w-full lg:w-[43%] px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
              Get Started With Us
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8">
              Our diversified global team is ready to take your App to the next
              level. Customer satisfaction is at the heart of everything we do.
              Contact us and we’d love to get started.
            </p>
            <button
              className="bg-[#FF8712] w-[172px] h-[37px] text-white px-8 py-1 rounded-full hover:bg-[#e66e00] transition-colors"
              onClick={() => navigate('/contact')} // Correct usage of navigate function
            >
              LET'S TALK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
