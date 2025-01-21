

// import React, { useState } from "react";
// import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
// import img1 from "../assets/casestudy.png";

// const CaseStudy = () => {
//   const [activeCase, setActiveCase] = useState("01");

//   const caseStudies = ["01", "02", "03", "04"];

//   const handleNext = () => {
//     const currentIndex = caseStudies.indexOf(activeCase);
//     if (currentIndex < caseStudies.length - 1) {
//       setActiveCase(caseStudies[currentIndex + 1]);
//     }
//   };

//   const handlePrev = () => {
//     const currentIndex = caseStudies.indexOf(activeCase);
//     if (currentIndex > 0) {
//       setActiveCase(caseStudies[currentIndex - 1]);
//     }
//   };

//   return (
//     <div className="w-full">
//       {/* Case Study Navigation */}
//       <div className="pl-[80px] sm:pl-[80px] lg:pl-[80px] border-b">
//         <nav className="flex space-x-12 overflow-x-auto">
//           {caseStudies.map((study) => (
//             <button
//               key={study}
//               onClick={() => setActiveCase(study)}
//               className={`whitespace-nowrap text-[16px] font-medium  pb-4 ${
//                 activeCase === study
//                   ? "border-b-2 border-[#014458] text-[#014458]"
//                   : "text-[#014458] hover:text-[#014458]/80"
//               }`}
//             >
//               CASE STUDY {study}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row mt-16">
//         {/* Left Section */}
//         <div className="w-full px-6 sm:px-[80px] lg:w-[480px] lg:pl-[80px] lg:pr-8">
//           <div className="flex items-start gap-4 mb-16">
//             <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mt-4">
//               <Phone className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-[56px] leading-none font-semibold">LSM Apps</h2>
//               <p className="text-[16px] mt-5 text-black/80">
//                 Easy phone for play store USA
//               </p>
//               <button className="bg-[#FF6B00] text-white px-8 py-3 mt-5 rounded-full text-sm font-medium hover:bg-[#FF6B00]/90 transition-colors">
//                 READ THE CASE STUDY
//               </button>
//             </div>
//           </div>

//           <div className="mb-16">
//             <div className="grid grid-cols-2 gap-8 mb-12">
//               <div>
//                 <h3 className="text-[43px] leading-none font-medium font-serif mb-2">
//                   Top #2
//                 </h3>
//                 <p className="text-[14px] text-black/60">Rank</p>
//               </div>
//               <div>
//                 <h3 className="text-[43px] leading-none font-medium font-serif mb-2">
//                   +12,000
//                 </h3>
//                 <p className="text-[14px] text-black/60">Daily Downloads</p>
//               </div>
//             </div>

//             <p className="text-[16px] text-black/80">
//               Boosting Keyword Rankings and Downloads for Easy Phone
//             </p>
//           </div>

//           <div className="flex space-x-4">
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-[#004258]/90 transition-colors"
//               onClick={handlePrev}
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-[#004258]/90 transition-colors"
//               onClick={handleNext}
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>

//         {/* Right Section - App Screenshots */}
//         <div className="w-full lg:w-[calc(100%-480px)] mt-8 lg:mt-0">
//           <div className="relative h-[558px] w-full">
//             <img
//               src={img1}
//               alt="App interface showcase"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudy;




// import React, { useState } from "react";
// import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
// import img1 from "../assets/casestudy.png";

// const CaseStudy = () => {
//   const [activeCase, setActiveCase] = useState("01");
//   const caseStudies = ["01", "02", "03", "04"];

//   const handleNext = () => {
//     const currentIndex = caseStudies.indexOf(activeCase);
//     if (currentIndex < caseStudies.length - 1) {
//       setActiveCase(caseStudies[currentIndex + 1]);
//     }
//   };

//   const handlePrev = () => {
//     const currentIndex = caseStudies.indexOf(activeCase);
//     if (currentIndex > 0) {
//       setActiveCase(caseStudies[currentIndex - 1]);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen">
//       {/* Case Study Navigation */}
//       <div className="pl-4 sm:pl-[80px] border-b">
//         <nav className="flex space-x-6 sm:space-x-12 overflow-x-auto scrollbar-hide">
//           {caseStudies.map((study) => (
//             <button
//               key={study}
//               onClick={() => setActiveCase(study)}
//               className={`whitespace-nowrap text-sm sm:text-[16px] font-medium pb-4 ${
//                 activeCase === study
//                   ? "border-b-2 border-[#014458] text-[#014458]"
//                   : "text-[#014458] hover:text-[#014458]/80"
//               }`}
//             >
//               CASE STUDY {study}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row mt-8 lg:mt-16">
//         {/* Left Section */}
//         <div className="w-full px-4 sm:px-[80px] lg:w-[480px] lg:pl-[80px] lg:pr-8">
//           <div className="flex items-start gap-4 mb-8 lg:mb-16">
//             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl flex items-center justify-center mt-4">
//               <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-3xl sm:text-[56px] leading-none font-semibold">LSM Apps</h2>
//               <p className="text-sm sm:text-[16px] mt-3 sm:mt-5 text-black/80">
//                 Easy phone for play store USA
//               </p>
//               <button className="bg-[#FF6B00] text-white px-6 sm:px-8 py-2.5 sm:py-3 mt-4 sm:mt-5 rounded-full text-sm font-medium hover:bg-[#FF6B00]/90 transition-colors">
//                 READ THE CASE STUDY
//               </button>
//             </div>
//           </div>

//           <div className="mb-8 lg:mb-16">
//             <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
//               <div>
//                 <h3 className="text-3xl sm:text-[43px] leading-none font-medium font-serif mb-2">
//                   Top #2
//                 </h3>
//                 <p className="text-xs sm:text-[14px] text-black/60">Rank</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl sm:text-[43px] leading-none font-medium font-serif mb-2">
//                   +12,000
//                 </h3>
//                 <p className="text-xs sm:text-[14px] text-black/60">Daily Downloads</p>
//               </div>
//             </div>

//             <p className="text-sm sm:text-[16px] text-black/80">
//               Boosting Keyword Rankings and Downloads for Easy Phone
//             </p>
//           </div>

//           <div className="flex space-x-4">
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-[#004258]/90 transition-colors"
//               onClick={handlePrev}
//             >
//               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-[#004258]/90 transition-colors"
//               onClick={handleNext}
//             >
//               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Right Section - App Screenshots */}
//         <div className="w-full lg:w-[calc(100%-480px)] mt-8 lg:mt-0">
//           <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[558px]">
//             <img
//               src={img1}
//               alt="App interface showcase"
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudy;


import React, { useState } from "react";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/casestudy.png";

const CaseStudy = () => {
  const [activeCase, setActiveCase] = useState("01");
  const caseStudies = ["01", "02", "03", "04"];

  const handleNext = () => {
    const currentIndex = caseStudies.indexOf(activeCase);
    if (currentIndex < caseStudies.length - 1) {
      setActiveCase(caseStudies[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = caseStudies.indexOf(activeCase);
    if (currentIndex > 0) {
      setActiveCase(caseStudies[currentIndex - 1]);
    }
  };

  return (
    <div className="w-full mb-5">
      {/* Case Study Navigation */}
      <div className="pl-4 sm:pl-[80px] mt-10">
        <nav className="flex space-x-6 sm:space-x-12 overflow-x-auto scrollbar-hide">
          {caseStudies.map((study) => (
            <button
              key={study}
              onClick={() => setActiveCase(study)}
              className={`whitespace-nowrap text-sm sm:text-[16px] font-medium pb-4 ${
                activeCase === study
                  ? "border-b-2 border-[#014458] text-[#014458]"
                  : "text-[#014458] hover:text-[#014458]/80"
              }`}
            >
              CASE STUDY {study}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row mt-8 lg:mt-16">
        {/* Left Section */}
        <div className="w-full px-4 sm:px-[80px] lg:w-[480px] lg:pl-[80px] lg:pr-8">
          <div className="flex items-start gap-4 mb-8 lg:mb-16">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl flex items-center justify-center mt-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-[56px] leading-none font-semibold">LSM Apps</h2>
              <p className="text-sm sm:text-[16px] mt-3 sm:mt-5 text-black/80">
                Easy phone for play store USA
              </p>
              <button className="bg-[#FF6B00] text-white px-6 sm:px-8 py-2.5 sm:py-3 mt-4 sm:mt-5 rounded-full text-sm font-medium hover:bg-[#FF6B00]/90 transition-colors">
                READ THE CASE STUDY
              </button>
            </div>
          </div>

          <div className="mb-8 lg:mb-16">
            <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
              <div>
                <h3 className="text-3xl sm:text-[43px] leading-none font-medium font-serif mb-2">
                  Top #2
                </h3>
                <p className="text-xs sm:text-[14px] text-black/60">Rank</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-[43px] leading-none font-medium font-serif mb-2">
                  +12,000
                </h3>
                <p className="text-xs sm:text-[14px] text-black/60">Daily Downloads</p>
              </div>
            </div>

            <p className="text-sm sm:text-[16px] text-black/80">
              Boosting Keyword Rankings and Downloads for Easy Phone
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              className="p-2 rounded-full bg-[#004258] text-white hover:bg-[#004258]/90 transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              className="p-2 rounded-full bg-[#004258] text-white hover:bg-[#004258]/90 transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Right Section - App Screenshots */}
        <div className="w-full lg:w-[calc(100%-480px)] mt-8 lg:mt-0">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[558px]">
            <img
              src={img1}
              alt="App interface showcase"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;