// import React, { useState } from "react";
// import ASOWin from "../assets/ASOWin.png";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-4 z-50  mx-4 md:mx-8 lg:mx-10 2xl:mx-20 font">
//       <nav className="relative bg-white  shadow-lg rounded-2xl container mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-8 2xl:px-12">
//         {/* Logo */}
//         <div className="flex items-center">
//           <span className="text-2xl font-bold">
//             <img
//               height={"38px"}
//               width={"118px"}
//               className="w-[100px] md:w-[118px] 2xl:w-[140px] h-auto"
//               src={ASOWin}
//               alt=""
//             />
//           </span>
//         </div>

//         {/* Desktop Menu Container */}
//         <div className="hidden md:flex flex-1 items-center justify-between md:pl-8 lg:pl-12 2xl:pl-16">
//           {/* Menu Items */}
//           <div className="flex items-center md:space-x-6 lg:space-x-8 2xl:space-x-12">
//             <div className="relative group">
//               <button className="flex items-center  text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]">
//                 SERVICES
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>
//             <a href="#" className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]">OUR BOOK</a>
//             <div className="relative group">
//               <button className="flex items-center text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]">
//                 PRICING
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>

//             <div className="relative group">
//               <button className="flex items-center text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]">
//                 BLOGS
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>
//             <div className="relative group">
//               <button className="flex items-center text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]">
//                 ABOUT
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>

//             <a href="#" className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]">CONTACT</a>
//           </div>

//           {/* CTA Button */}
//           <button className="bg-[#306777] text-white px-4 md:px-6 py-2.5 rounded-[3px] text-sm lg:text-[14px] 2xl:text-[14px] font-medium hover:bg-teal-700 transition-colors md:ml-6 lg:ml-8 2xl:ml-12 whitespace-nowrap w-auto md:w-[160px] lg:w-[197px] h-[41px]">
//             LET'S GET STARTED
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-800 focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-xl md:hidden">
//             <div className="flex flex-col py-4">
//               <button className="px-6 py-2 text-left text-[#111111] hover:text-black flex items-center justify-between">
//                 PRICING
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               <a href="#" className="px-6 py-2 text-[#111111] hover:text-black">OUR BOOK</a>
//               <button className="px-6 py-2 text-left text-[#111111] hover:text-black flex items-center justify-between">
//                 BLOG
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               <button className="px-6 py-2 text-left text-[#111111] hover:text-black flex items-center justify-between">
//                 ABOUT
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               <a href="#" className="px-6 py-2 text-[#111111] hover:text-black">CONTACT</a>
//               <div className="px-6 pt-4">
//                 <button className="w-[197px] h-[41px] bg-[#306777] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors">
//                   LETS GET STARTED
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import ASOWin from "../assets/ASOWin.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-4 md:mx-8 lg:mx-10 2xl:mx-20 font">
      <nav className="relative bg-white shadow-lg rounded-2xl container mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-8 2xl:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <img
              height={"38px"}
              width={"118px"}
              className="w-[100px] md:w-[118px] 2xl:w-[140px] h-auto"
              src={ASOWin}
              alt="Logo"
            />
          </span>
        </div>

        {/* Desktop Menu Container */}
        <div className="hidden md:flex flex-1 items-center justify-between md:pl-8 lg:pl-12 2xl:pl-16">
          {/* Menu Items */}
          <div className="flex items-center md:space-x-6 lg:space-x-8 2xl:space-x-12">
            <a
              href="/"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              HOME
            </a>
            <a
              href="/services"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              SERVICES
            </a>
            <a
              href="https://asowin.com/ASOWinBook.pdf"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              OUR BOOK
            </a>
            {/* <a
              href="/pricing"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              PRICING
            </a> */}

            {/* BLOGS Dropdown */}
            {/* <div className="relative group">
              <button
                className="flex items-center text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
                onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
              >
                BLOGS
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isBlogDropdownOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-md w-40">
                  <a
                    href="/blog1"
                    className="block px-4 py-2 text-sm text-[#111111] hover:bg-gray-100"
                  >
                    Pepperfry
                  </a>
                  <a
                    href="/blog2"
                    className="block px-4 py-2 text-sm text-[#111111] hover:bg-gray-100"
                  >
                    Indiabulls Securities
                  </a>
                  <a
                    href="/blog3"
                    className="block px-4 py-2 text-sm text-[#111111] hover:bg-gray-100"
                  >
                    LSM Apps
                  </a>
                </div>
              )}
            </div> */}

            <a
              href="https://asowin.com/blog/"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              BLOG
            </a>

            <a
              href="/about"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              ABOUT
            </a>
            <a
              href="/contact"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              CONTACT
            </a>
          </div>

          {/* CTA Button */}
          <button className="bg-[#306777] text-white px-4 md:px-6 py-2.5 rounded-[3px] text-sm lg:text-[14px] 2xl:text-[14px] font-medium hover:bg-teal-700 transition-colors md:ml-6 lg:ml-8 2xl:ml-12 whitespace-nowrap w-auto md:w-[160px] lg:w-[197px] h-[41px]">
            LET'S GET STARTED
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-xl md:hidden">
            <div className="flex flex-col py-4">
              <a
                href="/services"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                SERVICES
              </a>
              <a
                href="https://asowin.com/ASOWinBook.pdf"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                OUR BOOK
              </a>
              {/* <a
                href="/pricing"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                PRICING
              </a> */}
              {/* <button
                href="https://asowin.com/blog/"
                className="px-6 py-2 text-left text-[#111111] hover:text-black flex items-center justify-between"
                onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
              >
                BLOG
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isBlogDropdownOpen && (
                <div className="pl-6">
                  <a
                    href="/blog1"
                    className="block py-1 text-[#111111] hover:text-black"
                  >
                    Pepperfry
                  </a>
                  <a
                    href="/blog2"
                    className="block py-1 text-[#111111] hover:text-black"
                  >
                    Indiabulls Securities
                  </a>
                  <a
                    href="/blog3"
                    className="block py-1 text-[#111111] hover:text-black"
                  >
                    LSM Apps
                  </a>
                </div>
              )} */}
              <a
                href="https://asowin.com/blog/"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                BLOG
              </a>
              <a
                href="/about"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                ABOUT
              </a>
              <a
                href="/contact"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                CONTACT
              </a>
              <div className="px-6 pt-4">
                <button className="w-[197px] h-[41px] bg-[#306777] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors">
                  LET'S GET STARTED
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
