// import React from "react";
// import Navbar from "./Navbar";
// import img1 from '../assets/pattern.png'

// const HeroSection = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#FFEDE3] to-[#FFFFFF]">
//       <Navbar />

//       <section className="relative flex flex-col justify-center items-center text-center min-h-[calc(100vh-32px)] -mt-16 px-4 md:px-8 lg:px-12">
//         {/* Background Pattern Placeholder */}
//         <div
//           className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-50"
//           style={{
//             backgroundImage: img1,
//             zIndex: "0"
//           }}
//         />

//         <div className="relative z-10 max-w-4xl mt-32 mx-auto font-serif">
//           <h1 className="text-4xl  md:text-6xl lg:text-[135px] font-bold text-[#111111] mb-6 leading-tight">
//             App Store
//             <br />
//             Optimization
//           </h1>

//           <div className="text-center mb-12">
//             <p className="text-[#111111] text-base md:text-lg mb-1">
//               We've handled ASO for some of the largest brands globally.
//             </p>
//             <p className="text-[#111111] text-base md:text-lg">
//               We know ASO inside out.
//             </p>
//           </div>

//           <div className="flex flex-col mt-[100px] md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 max-w-xl mx-auto">
//             <input
//               type="email"
//               placeholder="Enter you work email"
//               className="w-full md:w-96 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
//             />
//             <button className="w-full md:w-auto bg-[#FF6B2C] text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors whitespace-nowrap">
//               LET'S TALK
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;

// import React from "react";
// import Navbar from "./Navbar";
// import img1 from "../assets/pattern.png";

// const HeroSection = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#FFEDE3] to-[#FFFFFF]">
//       <Navbar />

//       <section className="relative flex flex-col justify-center items-center text-center min-h-[calc(100vh-32px)] -mt-16 px-4 md:px-8 lg:px-12">
//         {/* Background Pattern Placeholder */}
//         <div
//           className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-50"
//           style={{
//             backgroundImage: `url(${img1})`,
//             zIndex: "0",
//           }}
//         />

//         <div className="relative z-10 max-w-4xl mt-32 mx-auto font-serif">
//           <h1 className="text-4xl  md:text-6xl lg:text-[135px] font-bold text-[#111111] mb-6 leading-tight ">
//             App Store
//             <br />
//             Optimization
//           </h1>
//           <br />

//           <div className="text-center mb-12">
//             <p className="text-[#111111]  text-base md:text-[21px] mb-1">
//               We handle ASO for some of the largest brands globally.
//             </p>
//             <br />

//             <p className="text-[#111111] text-base md:text-[21px]">
//               Top Charts | Featured | Assured | Customer Service | With all our
//               heart
//               <br />
//               Get your App to the top charts. That's an assurance.
//             </p>
//           </div>

//           <div className="flex mt-8 items-center justify-center px-4 mb-20">
//             <div className="flex flex-col md:flex-row w-full max-w-[540px] bg-white rounded-full shadow-lg p-3 gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your work email"
//                 className="w-full px-4 py-3 rounded-full focus:outline-none text-gray-700 bg-transparent text-sm md:text-base border border-gray-300"
//               />
//               <button className="w-full md:w-auto  bg-[#FF8712] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium hover:bg-orange-600 transition-colors whitespace-nowrap text-sm md:text-base">
//                 LET'S TALK
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;


import React, { useState } from "react";
import Navbar from "./Navbar";
import img1 from "../assets/pattern.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://form.appstorys.com/api/add-response/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status !== 201) {
        throw new Error("Failed to submit the form");
      }

      setStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon.",
      });

      setEmail(""); // Clear input field
    } catch (error) {
      setStatus({
        type: "error",
        message: "Submission failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFEDE3] to-[#FFFFFF]">
      <Navbar />

      <section className="relative flex flex-col justify-center items-center text-center min-h-[calc(100vh-32px)] -mt-16 px-4 md:px-8 lg:px-12">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-50"
          style={{
            backgroundImage: `url(${img1})`,
            zIndex: "0",
          }}
        />

        <div className="relative z-10 max-w-4xl mt-32 mx-auto font-serif">
          <h1 className="text-4xl md:text-6xl lg:text-[135px] font-bold text-[#111111] mb-6 leading-tight ">
            App Store
            <br />
            Optimization
          </h1>
          <br />

          <div className="text-center mb-12">
            <p className="text-[#111111] text-base md:text-[21px] mb-1">
              We handle ASO for some of the largest brands globally.
            </p>
            <br />

            <p className="text-[#111111] text-base md:text-[21px]">
              Top Charts | Featured | Assured | Customer Service | With all our
              heart
              <br />
              Get your App to the top charts. That's an assurance.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex mt-8 items-center justify-center px-4 mb-20">
            <div className="flex flex-col md:flex-row w-full max-w-[540px] bg-white rounded-full shadow-lg p-3 gap-2">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-full focus:outline-none text-gray-700 bg-transparent text-sm md:text-base border border-gray-300"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-[#FF8712] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium hover:bg-orange-600 transition-colors whitespace-nowrap text-sm md:text-base"
              >
                {loading ? "Submitting..." : "LET'S TALK"}
              </button>
            </div>
          </form>

          {/* Status Messages */}
          {/* {status.message && (
            <div
              className={`text-sm sm:-mt-72  lg:-mt-48 ${
                status.type === "success"
                  ? "text-green-700 bg-green-100 p-2 rounded"
                  : "text-red-700 bg-red-100 p-2 rounded"
              }`}
            >
              {status.message}
            </div>
          )} */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
