// import React from "react";
// import img1 from "../assets/blogbg1.png";
// import Navbar from "./Navbar";

// const HeroSection = () => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <Navbar />
      
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${img1})`,
//         }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content Container */}
//       <div className="relative h-full flex flex-col justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 pb-8">
//         {/* Main Heading */}
//         <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-40 text-center w-full max-w-7xl mx-auto px-4 sm:px-6">
//           <h1 className="text-2xl sm:text-3xl md:text-[2.8rem] lg:text-7xl font-serif text-white leading-normal sm:leading-relaxed md:leading-tight lg:leading-snug">
//             How ASOWin Manages Reputation
//             <br className="hidden md:block" />
//             And ASO Rankings For Pepperfry
//           </h1>
//         </div>

//         {/* Client Name */}
//         <div className="mt-auto pb-8 sm:pb-12 md:pb-16 lg:pb-20">
//           <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl transition-all duration-300">
//             <span className="opacity-80">Client: </span>
//             <span className="font-normal">Pepperfry</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import img1 from "../assets/blogbg1.png";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    // <div className="relative h-screen w-full overflow-hidden">
    //   <Navbar />
      
    //   {/* Background Image */}
    //   <div
    //     className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
    //     style={{
    //       backgroundImage: `url(${img1})`,
    //     }}
    //   />

    //   {/* Overlay */}
    //   <div className="absolute inset-0 bg-black/40" />

    //   {/* Content Container */}
    //   <div className="relative h-full flex flex-col justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 pb-8">
    //     {/* Main Heading Container */}
    //     <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center w-full max-w-7xl mx-auto px-4 sm:px-6">
    //       <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
    //         {/* First Line */}
    //         <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight">
    //           How ASOWin Manages Reputation
    //         </h1>
    //         {/* Second Line */}
    //         <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight">
    //           And ASO Rankings For Pepperfry
    //         </h1>
    //       </div>
    //     </div>

    //     {/* Client Name */}
    //     <div className="mt-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
    //       <div className="flex items-center gap-2 text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl transition-all duration-300">
    //         <span className="opacity-80">Client:</span>
    //         <span className="font-normal">Pepperfry</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="relative h-[450px] md:h-screen w-full overflow-hidden">
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
    {/* Main Heading Container */}
    <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
        {/* First Line */}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight">
          How ASOWin Manages Reputation
        </h1>
        {/* Second Line */}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight">
          And ASO Rankings For Pepperfry
        </h1>
      </div>
    </div>

    {/* Client Name */}
    <div className="mt-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
      <div className="flex items-center gap-2 text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl transition-all duration-300">
        <span className="opacity-80">Client:</span>
        <span className="font-normal">Pepperfry</span>
      </div>
    </div>
  </div>
</div>
  );
};

export default HeroSection;