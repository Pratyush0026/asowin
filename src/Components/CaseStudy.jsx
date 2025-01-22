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
//     <div className="w-full mb-5">
//       {/* Case Study Navigation */}
//       <div className="pl-4 sm:pl-[80px] mt-10">
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


// import React, { useState } from "react";
// import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
// import img1 from "../assets/casestudy.png";
// import img2 from "../assets/casestudy2.png";
// import img3 from "../assets/casestudy3.png";




// // Case study data
// const caseStudyData = {
//   "01": {
//     icon: Phone,
//     title: "LSM Apps",
//     subtitle: "Easy phone for play store USA",
//     rank: "Top #2",
//     downloads: "+12,000",
//     description: "Boosting Keyword Rankings and Downloads for Easy Phone",
//     image:img1
//   },
//   "02": {
//     icon: Phone,  // You can import different icons for each case
//     title: "Smart Connect",
//     subtitle: "Innovative messaging platform",
//     rank: "Top #5",
//     downloads: "+8,000",
//     description: "Revolutionizing User Communication with Smart Connect",
//     image: img2
//   },
//   "03": {
//     icon: Phone,  // You can import different icons for each case
//     title: "TaskMaster Pro",
//     subtitle: "Professional task management",
//     rank: "Top #3",
//     downloads: "+10,000",
//     description: "Enhancing Productivity with TaskMaster Pro",
//     image: img3
//   }
// };

// const CaseStudy = () => {
//   const [activeCase, setActiveCase] = useState("01");
//   const caseStudies = ["01", "02", "03"];

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

//   const activeData = caseStudyData[activeCase];
//   const IconComponent = activeData.icon;

//   return (
//     <div className="w-full mb-5">
//       {/* Case Study Navigation */}
//       <div className="pl-4 sm:pl-[80px] mt-10">
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
//               <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-3xl sm:text-[56px] leading-none font-semibold">
//                 {activeData.title}
//               </h2>
//               <p className="text-sm sm:text-[16px] mt-3 sm:mt-5 text-black/80">
//                 {activeData.subtitle}
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
//                   {activeData.rank}
//                 </h3>
//                 <p className="text-xs sm:text-[14px] text-black/60">Rank</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl sm:text-[43px] leading-none font-medium font-serif mb-2">
//                   {activeData.downloads}
//                 </h3>
//                 <p className="text-xs sm:text-[14px] text-black/60">Daily Downloads</p>
//               </div>
//             </div>

//             <p className="text-sm sm:text-[16px] text-black/80">
//               {activeData.description}
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
//         <div className="w-full lg:w-[calc(100%-580px)] mt-8 lg:mt-0">
//           <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[558px]">
//             <img
//               src={activeData.image}
//               alt={`${activeData.title} interface showcase`}
//               className="w-full h-full object-cover object-center"
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
// import img2 from "../assets/casestudy2.png";
// import img3 from "../assets/casestudy3.png";

// // Case study data remains the same
// const caseStudyData = {
//   "01": {
//     icon: Phone,
//     title: "LSM Apps",
//     subtitle: "Easy phone for play store USA",
//     rank: "Top #2",
//     downloads: "+12,000",
//     description: "Boosting Keyword Rankings and Downloads for Easy Phone",
//     image: img1
//   },
//   "02": {
//     icon: Phone,
//     title: "Pepperfry",
//     subtitle: "Innovative messaging platform",
//     rank: "#1",
//     downloads: "Keywords",
//     description: "Ranked highest for category keyword 10x increase in total rate",
//     image: img2
//   },
//   "03": {
//     icon: Phone,
//     title: "TaskMaster Pro",
//     subtitle: "Professional task management",
//     rank: "Top #3",
//     downloads: "+10,000",
//     description: "Enhancing Productivity with TaskMaster Pro",
//     image: img3
//   }
// };

// const CaseStudy = () => {
//   const [activeCase, setActiveCase] = useState("01");
//   const caseStudies = ["01", "02", "03"];

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

//   const activeData = caseStudyData[activeCase];
//   const IconComponent = activeData.icon;

//   return (
//     <div className="w-full mb-5">
//       {/* Case Study Navigation */}
//       <div className="pl-4 sm:pl-[80px] mt-10">
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
//               <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-3xl sm:text-[56px] leading-none font-semibold">
//                 {activeData.title}
//               </h2>
//               <p className="text-sm sm:text-[16px] mt-3 sm:mt-5 text-black/80">
//                 {activeData.subtitle}
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
//                   {activeData.rank}
//                 </h3>
//                 <p className="text-xs sm:text-[14px] text-black/60">Rank</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl sm:text-[43px] leading-none font-medium font-serif mb-2">
//                   {activeData.downloads}
//                 </h3>
//                 <p className="text-xs sm:text-[14px] text-black/60">Daily Downloads</p>
//               </div>
//             </div>

//             <p className="text-sm sm:text-[16px] text-black/80">
//               {activeData.description}
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

//         {/* Right Section - App Screenshots - Updated for better responsiveness */}
//         <div className="w-full lg:w-[calc(100%-480px)] mt-8 lg:-mt-20 px-4 sm:px-[80px] lg:px-8">
//           <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
//             <img
//               src={activeData.image}
//               alt={`${activeData.title} interface showcase`}
//               className="w-full h-full object-contain"
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
import img2 from "../assets/casestudy2.png";
import img3 from "../assets/casestudy3.png";

const caseStudyData = {
  "03": {
    icon: Phone,
    title: "LSM Apps",
    // subtitle: "Easy phone for play store USA",
    stats: [
      {
        value: "Top #2",
        label: "Rank"
      },
      {
        value: "+12,000",
        label: "Daily Downloads"
      }
    ],
    description: "Boosting Keyword Rankings and Downloads for Easy Phone",
    image: img1
  },
  "01": {
    icon: Phone,
    title: "Pepperfry",
    // subtitle: "Innovative messaging platform",
    stats: [
      {
        value: "#1",
        label: "Rankings"
      },
      {
        value: "Keywords",
        label: " Success"
      }
    ],
    description: "• Ranked highest for category keyword<br/><br/>• 10x increase in total rate",
    image: img2
  },
  "02": {
    icon: Phone,
    title: "Indiabulls Securities",
    // subtitle: "Professional task management",
    stats: [
      {
        value: "50+",
        label: "keywords"
      },
      {
        value: "Visibility",
        label: "Success Rate"
      }
    ],
    description: "• Managed month on month ASO for Indiabulls Securities<br/><br/>• Ranked for more than 25+ unranked keywords",
    image: img3
  }
};

const CaseStudy = () => {
  const [activeCase, setActiveCase] = useState("01");
  const caseStudies = ["01", "02", "03"];

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

  const activeData = caseStudyData[activeCase];
  const IconComponent = activeData.icon;

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
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-[56px] leading-none font-semibold">
                {activeData.title}
              </h2>
              <p className="text-sm sm:text-[16px] mt-3 sm:mt-5 text-black/80">
                {activeData.subtitle}
              </p>
              <button
  className="bg-[#FF6B00] text-white px-6 sm:px-8 py-2.5 sm:py-3 mt-4 sm:mt-5 rounded-full text-sm font-medium hover:bg-[#FF6B00]/90 transition-colors"
  onClick={() => window.location.href = `/casestudy${parseInt(activeCase, 10)}`}
>
  READ THE CASE STUDY
</button>


            </div>
          </div>

          <div className="mb-8 lg:mb-16">
            <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
              {activeData.stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-3xl sm:text-[43px] leading-none font-medium font-serif mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-[14px] text-black/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-[16px] text-black/80" 
   dangerouslySetInnerHTML={{ __html: activeData.description }}>
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
        <div className="w-full lg:w-[calc(100%-480px)] mt-8 lg:-mt-20 px-4 sm:px-[80px] lg:px-8">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
            <img
              src={activeData.image}
              alt={`${activeData.title} interface showcase`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;