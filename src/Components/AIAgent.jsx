// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import imgmain from '../assets/imgmain.png'

// const AIAgent = () => {
//   const features = [
//     {
//       id: "1. INTELLIGENT KEYWORD RESEARCH",
//       description: "Our AI agent analyzes vast amounts of data to identify high-impact keywords tailored to your app's niche, automatically updating strategies to align with market trends and user behavior."
//     },
//     {
//       id: "2. AUTOMATED COMPETITOR ANALYSIS",
//       description: "Gain real-time insights into your competitors' performance. The AI agent tracks shifts in rankings, keywords, and strategies, giving you a competitive edge without the manual effort."
//     },
//     {
//       id: "3. DESIGN TESTING WITH AI PRECISION",
//       description: "The AI agent will optimize your creative assets by running automated A/B tests, determining which visuals and messaging resonate most with your audience."
//     }
//   ];

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden">
//       {/* Background Pattern - Replace src with your actual geometric pattern */}
//       <div className="absolute inset-0">
//         <img 
//           src={imgmain} 
//           alt="Background Pattern" 
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row items-start gap-12">
//           {/* Left Section with Title and Hand */}
//           <div className="w-full lg:w-1/2">
//             <h1 className="text-[#FF6B00] text-5xl lg:text-6xl font-serif mb-8 leading-tight">
//               ASOWin's AI Agent:<br />
//               Revolutionizing App<br />
//               Store Optimization
//             </h1>
            
//             {/* Robot Hand Image */}
//             <div className="relative w-full h-[400px]">
//               <img
//                 src="/api/placeholder/600/600"
//                 alt="AI Robot Hand"
//                 className="object-contain h-full"
//               />
//             </div>
//           </div>

//           {/* Right Section with Description and Cards */}
//           <div className="w-full lg:w-1/2 space-y-8">
//             <div className="max-w-lg">
//               <p className="text-gray-800 text-lg mb-4">
//                 At ASOWin, innovation is at the heart of what we do. To stay ahead in the dynamic world of App Store Optimization (ASO), we're building our very own AI Agent.
//               </p>
//               <button className="bg-[#004258] text-white px-8 py-3 rounded-md hover:bg-opacity-90">
//                 LEARN MORE
//               </button>
//             </div>

//             {/* Feature Cards */}
//             <div className="space-y-6">
//               {features.map((feature, index) => (
//                 <div 
//                   key={index} 
//                   className={`bg-white p-6 rounded-lg border ${
//                     index === 0 ? 'border-[#FF6B00]' : 'border-gray-200'
//                   }`}
//                 >
//                   <div className="mb-4">
//                     {/* Cube Icon Placeholder - Replace with your actual icon */}
//                     <div className={`w-8 h-8 ${
//                       index === 0 ? 'text-[#FF6B00]' : 'text-gray-400'
//                     }`}>
//                       <div className="w-full h-full bg-current" />
//                     </div>
//                   </div>
//                   <h3 className="text-lg font-bold mb-3">{feature.id}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Arrows */}
//             <div className="flex justify-end space-x-4">
//               <button className="p-2 rounded-full bg-[#004258] text-white">
//                 <ChevronLeft size={24} />
//               </button>
//               <button className="p-2 rounded-full bg-[#004258] text-white">
//                 <ChevronRight size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIAgent;



// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import imgmain from '../assets/imgmain.png';

// const AIAgent = () => {
//   const features = [
//     {
//       id: "1. INTELLIGENT KEYWORD RESEARCH",
//       description: "Our AI agent analyzes vast amounts of data to identify high-impact keywords tailored to your app's niche, automatically updating strategies to align with market trends and user behavior."
//     },
//     {
//       id: "2. AUTOMATED COMPETITOR ANALYSIS",
//       description: "Gain real-time insights into your competitors' performance. The AI agent tracks shifts in rankings, keywords, and strategies, giving you a competitive edge without the manual effort."
//     },
//     {
//       id: "3. DESIGN TESTING WITH AI PRECISION",
//       description: "The AI agent will optimize your creative assets by running automated A/B tests, determining which visuals and messaging resonate most with your audience."
//     }
//   ];

//   return (
//     <div className="relative w-full min-h-screen">
//       {/* Background Image containing both AI hand and patterns */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src={imgmain} 
//           alt="AI Hand with Background Pattern" 
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
//         <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
//           {/* Left Section with Title */}
//           <div className="lg:col-span-6">
//             <h1 className="text-[#FF6B00] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
//               ASOWin's AI Agent:<br />
//               Revolutionizing App<br />
//               Store Optimization
//             </h1>
//           </div>

//           {/* Right Section with Description and Cards */}
//           <div className="lg:col-span-6 space-y-8 lg:pl-8">
//             <div className="max-w-lg">
//               <p className="text-gray-800 text-lg mb-6">
//                 At ASOWin, innovation is at the heart of what we do. To stay ahead in the dynamic world of App Store Optimization (ASO), we're building our very own AI Agent.
//               </p>
//               <button className="bg-[#004258] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-opacity-90 transition-colors">
//                 LEARN MORE
//               </button>
//             </div>

//             {/* Feature Cards */}
//             <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4">
//               {features.map((feature, index) => (
//                 <div 
//                   key={index} 
//                   className={`flex-1 min-w-[280px] md:min-w-0 bg-white p-6 rounded-lg ${
//                     index === 0 ? 'border-2 border-[#FF6B00]' : 'border border-gray-200'
//                   } hover:shadow-lg transition-shadow`}
//                 >
//                   <div className="mb-4">
//                     <div className={`w-8 h-8 ${
//                       index === 0 ? 'text-[#FF6B00]' : 'text-gray-400'
//                     }`}>
//                       <div className="w-full h-full bg-current rounded" />
//                     </div>
//                   </div>
//                   <h3 className="text-base font-bold mb-3">{feature.id}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Arrows */}
//             <div className="flex justify-end space-x-3">
//               <button className="p-2 rounded-full bg-[#004258] text-white hover:bg-opacity-90 transition-colors">
//                 <ChevronLeft size={20} />
//               </button>
//               <button className="p-2 rounded-full bg-[#004258] text-white hover:bg-opacity-90 transition-colors">
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIAgent;


// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import imgmain from "../assets/imgmain.png";

// const AIAgent = () => {
//   const features = [
//     {
//       id: "1. INTELLIGENT KEYWORD RESEARCH",
//       description:
//         "Our AI agent analyzes vast amounts of data to identify high-impact keywords tailored to your app's niche, automatically updating strategies to align with market trends and user behavior.",
//     },
//     {
//       id: "2. AUTOMATED COMPETITOR ANALYSIS",
//       description:
//         "Gain real-time insights into your competitors' performance. The AI agent tracks shifts in rankings, keywords, and strategies, giving you a competitive edge without the manual effort.",
//     },
//     {
//       id: "3. DESIGN TESTING WITH AI PRECISION",
//       description:
//         "The AI agent will optimize your creative assets by running automated A/B tests, determining which visuals and messaging resonate most with your audience.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
//   };

//   return (
//     <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={imgmain}
//           alt="AI Hand with Background Pattern"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 flex flex-col lg:flex-row items-start gap-12">
//         {/* Left Section with Heading */}
//         <div className="lg:w-1/2">
//           <h1 className="text-[#FF6B00] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
//             ASOWin's AI Agent:<br />
//             Revolutionizing App<br />
//             Store Optimization
//           </h1>
//         </div>

//         {/* Right Section with Description, Button, and Cards */}
//         <div className="lg:w-1/2 space-y-8">
//           {/* Paragraph and Button */}
//           <div>
//             <p className="text-gray-800 text-lg mb-6">
//               At ASOWin, innovation is at the heart of what we do. To stay ahead
//               in the dynamic world of App Store Optimization (ASO), we're
//               building our very own AI Agent.
//             </p>
//             <button className="bg-[#004258] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-opacity-90 transition-colors">
//               LEARN MORE
//             </button>
//           </div>

//           {/* Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-white p-6 rounded-lg border-2 border-[#FF6B00] hover:shadow-lg transition-shadow">
//               <h3 className="text-base font-bold mb-3">
//                 {features[currentIndex].id}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {features[currentIndex].description}
//               </p>
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <div className="flex justify-start space-x-3">
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-opacity-90 transition-colors"
//               onClick={handlePrev}
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-opacity-90 transition-colors"
//               onClick={handleNext}
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIAgent;

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import imgmain from "../assets/imgmain.png";

// const AIAgent = () => {
//   const features = [
//     {
//       id: "1. INTELLIGENT KEYWORD RESEARCH",
//       description:
//         "Our AI agent analyzes vast amounts of data to identify high-impact keywords tailored to your app's niche, automatically updating strategies to align with market trends and user behavior.",
//     },
//     {
//       id: "2. AUTOMATED COMPETITOR ANALYSIS",
//       description:
//         "Gain real-time insights into your competitors' performance. The AI agent tracks shifts in rankings, keywords, and strategies, giving you a competitive edge without the manual effort.",
//     },
//     {
//       id: "3. DESIGN TESTING WITH AI PRECISION",
//       description:
//         "The AI agent will optimize your creative assets by running automated A/B tests, determining which visuals and messaging resonate most with your audience.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
//   };

//   return (
//     <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={imgmain}
//           alt="AI Hand with Background Pattern"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col lg:flex-row items-start gap-16">
//         {/* Left Section with Heading */}
//         <div className="lg:w-1/2 text-center lg:text-left ]">
//           <h1 className="text-[#FF6B00] text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
//             ASOWin's AI Agent:<br />
//             Revolutionizing App<br />
//             Store Optimization
//           </h1>
//         </div>

//         {/* Right Section with Description, Button, and Cards */}
//         <div className="lg:w-1/2 space-y-10 flex flex-col gap-28">
//           {/* Paragraph and Button */}
//           <div>
//             <p className="text-gray-800 text-lg mb-6 leading-relaxed">
//               At ASOWin, innovation is at the heart of what we do. To stay ahead
//               in the dynamic world of App Store Optimization (ASO), we're
//               building our very own AI Agent.
//             </p>
//             <button className="bg-[#004258] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-opacity-90 transition-colors">
//               LEARN MORE
//             </button>
//           </div>

//           {/* Cards */}
//           <div className="relative bg-white p-6 rounded-lg border-2 border-[#FF6B00] shadow-md transition-shadow">
//             <h3 className="text-lg font-bold mb-4">
//               {features[currentIndex].id}
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               {features[currentIndex].description}
//             </p>
//           </div>

//           {/* Navigation Arrows */}
//           <div className="flex justify-start space-x-4">
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-opacity-90 transition-colors"
//               onClick={handlePrev}
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-opacity-90 transition-colors"
//               onClick={handleNext}
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIAgent;


// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import imgmain from "../assets/imgmain.png";

// const AIAgent = () => {
//   const features = [
//     {
//       id: "1. INTELLIGENT KEYWORD RESEARCH",
//       description:
//         "Our AI agent analyzes vast amounts of data to identify high-impact keywords tailored to your app's niche, automatically updating strategies to align with market trends and user behavior.",
//     },
//     {
//       id: "2. AUTOMATED COMPETITOR ANALYSIS",
//       description:
//         "Gain real-time insights into your competitors' performance. The AI agent tracks shifts in rankings, keywords, and strategies, giving you a competitive edge without the manual effort.",
//     },
//     {
//       id: "3. DESIGN TESTING WITH AI PRECISION",
//       description:
//         "The AI agent will optimize your creative assets by running automated A/B tests, determining which visuals and messaging resonate most with your audience.",
//     },
//     {
//       id: "4. USER ENGAGEMENT OPTIMIZATION",
//       description:
//         "Leverage AI insights to enhance user engagement and retention through personalized recommendations and dynamic content adjustments.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
//   };

//   return (
//     <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={imgmain}
//           alt="AI Hand with Background Pattern"
//           className="w-full h-full object-cover md:object-center"
//         />
//       </div>

//       <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col lg:flex-row items-start gap-16">
//         {/* Left Section with Heading */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-[#FF6B00]  text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
//             ASOWin's AI Agent:<br />
//             Revolutionizing App<br />
//             Store Optimization
//           </h1>
//         </div>

//         {/* Right Section with Description, Button, and Cards */}
//         <div className="lg:w-1/2 space-y-10 flex flex-col gap-y-16">
//           {/* Paragraph and Button */}
//           <div>
//             <p className="text-gray-800 text-lg mb-6 leading-relaxed">
//               At ASOWin, innovation is at the heart of what we do. To stay ahead
//               in the dynamic world of App Store Optimization (ASO), we're
//               building our very own AI Agent.
//             </p>
//             <button className="bg-[#004258] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-opacity-90 transition-colors">
//               LEARN MORE
//             </button>
//           </div>

//           {/* Cards */}
//           <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[features[currentIndex], features[(currentIndex + 1) % features.length]].map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg border-2 border-[#FF6B00] shadow-md transition-shadow"
//               >
//                 <h3 className="text-lg font-bold mb-4">{feature.id}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <div className="flex justify-end space-x-4 ">
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-opacity-90 transition-colors"
//               onClick={handlePrev}
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-opacity-90 transition-colors"
//               onClick={handleNext}
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIAgent;

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgmain from "../assets/imgmain.png";

const AIAgent = () => {
  const features = [
    {
      id: "1. INTELLIGENT KEYWORD RESEARCH",
      description:
        "Our AI agent analyzes vast amounts of data to identify high-impact keywords tailored to your app's niche, automatically updating strategies to align with market trends and user behavior.",
    },
    {
      id: "2. AUTOMATED COMPETITOR ANALYSIS",
      description:
        "Gain real-time insights into your competitors' performance. The AI agent tracks shifts in rankings, keywords, and strategies, giving you a competitive edge without the manual effort.",
    },
    {
      id: "3. DESIGN TESTING WITH AI PRECISION",
      description:
        "The AI agent will optimize your creative assets by running automated A/B tests, determining which visuals and messaging resonate most with your audience.",
    },
    {
      id: "4. USER ENGAGEMENT OPTIMIZATION",
      description:
        "Leverage AI insights to enhance user engagement and retention through personalized recommendations and dynamic content adjustments.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  const CubeIcon = () => (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/>
    </svg>
  );

  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgmain}
          alt="AI Hand with Background Pattern"
          className="w-full h-full object-cover md:object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col lg:flex-row items-start gap-16">
        {/* Left Section with Heading */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[#FF6B00] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            ASOWin's AI Agent:<br />
            Revolutionizing App<br />
            Store Optimization
          </h1>
        </div>

        {/* Right Section with Description, Button, and Cards */}
        <div className="lg:w-1/2 space-y-10 flex flex-col gap-y-16">
          {/* Paragraph and Button */}
          <div>
            <p className="text-gray-800 text-lg mb-6 leading-relaxed">
              At ASOWin, innovation is at the heart of what we do. To stay ahead
              in the dynamic world of App Store Optimization (ASO), we're
              building our very own AI Agent.
            </p>
            {/* <button className="bg-[#004258] text-white px-6 py-2.5  rounded-[23px] text-[12px] font-medium hover:bg-opacity-90 transition-colors">
              LEARN MORE
            </button> */}
          </div>

          {/* Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            {[features[currentIndex], features[(currentIndex + 1) % features.length]].map((feature, index) => (
              <div
                key={index}
                className="group bg-[#F5F7F9] rounded-lg p-8 border-2 border-transparent hover:border-[#FF6B00] hover:bg-white transition-all duration-300"
              >
                <div className="mb-8 text-gray-400 group-hover:text-[#FF6B00] transition-colors">
                  <CubeIcon />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">{feature.id}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end space-x-4">
            <button
              className="p-2 rounded-full bg-[#004258] text-white hover:bg-opacity-90 transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="p-2 rounded-full bg-[#004258] text-white hover:bg-opacity-90 transition-colors"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgent;