// import React from 'react';
// import { Linkedin } from 'lucide-react';
// import footer from '../assets/footer.png';
// import ASOWin from "../assets/ASOWin.png";

// const Footer = () => {
//   return (
//     <footer className="w-full">
//       <div
//         style={{
//           backgroundImage: `url(${footer})`,
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           height: '500px'
//         }}
//         className="w-full relative"
//       >
//         <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
//           {/* Top section */}
//           <div className="flex flex-col md:flex-row justify-between items-center md:items-start pt-8 sm:pt-12 md:pt-16">
//             {/* Logo */}
//             <div className="mb-6 sm:mb-8 md:mb-0 mt-12 sm:mt-16 md:mt-24">
//               <img
//                 src={ASOWin}
//                 alt="ASOWin Logo"
//                 className="w-[180px] h-[55px] sm:w-[220px] sm:h-[67px] md:w-[250px] md:h-[55px]"
//               />
//             </div>

//             {/* Navigation */}
//             <nav className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-6 sm:mt-16 md:mt-28">
//               <a href="/services" className="text-white hover:text-[#FFB842] text-sm font-normal whitespace-nowrap">
//                 SERVICES
//               </a>
//               <a href="/our-book" className="text-white hover:text-[#FFB842] text-sm font-normal whitespace-nowrap">
//                 OUR BOOK
//               </a>
//               <a href="/blog" className="text-white hover:text-[#FFB842] text-sm font-normal whitespace-nowrap">
//                 BLOG
//               </a>
//               <a href="/about" className="text-white hover:text-[#FFB842] text-sm font-normal whitespace-nowrap">
//                 ABOUT
//               </a>
//               <a href="/contact" className="text-white hover:text-[#FFB842] text-sm font-normal whitespace-nowrap">
//                 CONTACT US
//               </a>
//             </nav>
//           </div>

//           {/* Bottom section */}
//           <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-16">
//             <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
//               {/* Copyright */}
//               <p className="text-white/80 text-xs order-3 sm:order-1">
//                 © '24 ASOWin Inc. All Rights Reserved.
//               </p>

//               {/* Center links */}
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 order-1 sm:order-2 text-center sm:text-left">
//                 <a href="/privacy" className="text-white/80 hover:text-white text-xs whitespace-nowrap">
//                   Privacy Policy
//                 </a>
//                 <a href="/terms" className="text-white/80 hover:text-white text-xs whitespace-nowrap">
//                   Terms Of Service
//                 </a>
//                 <a href="/disclaimer" className="text-white/80 hover:text-white text-xs whitespace-nowrap">
//                   Disclaimer
//                 </a>
//                 <a href="/cookies" className="text-white/80 hover:text-white text-xs whitespace-nowrap">
//                   Cookies
//                 </a>
//               </div>

//               {/* Contact and LinkedIn */}
//               <div className="flex items-center gap-4 order-2 sm:order-3">
//                 <a
//                   href="mailto:support@asowin.com"
//                   className="text-white/80 hover:text-white text-xs flex items-center gap-2 whitespace-nowrap"
//                 >
//                   <span className="text-[#FFB842]">✉</span>
//                   support@asowin.com
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white/80 hover:text-white"
//                 >
//                   <Linkedin className="w-4 h-4" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Linkedin } from "lucide-react";
import footer from "../assets/footer.png";
import ASOWin from "../assets/ASOWin.png";

const Footer = () => {
  return (
    <footer className="w-full">
      <div
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
        className="w-full relative"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start pt-8 sm:pt-12 md:pt-16">
            {/* Logo */}
            <div className="mb-6 sm:mb-8 md:mb-0 mt-12 sm:mt-16 md:mt-24">
              <img
                src={ASOWin}
                alt="ASOWin Logo"
                className="w-[150px] h-auto sm:w-[180px] md:w-[200px]"
              />
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-6 sm:mt-16 md:mt-28 text-center md:text-left">
              <a
                href="/services"
                className="text-white hover:text-[#FFB842] text-sm font-semibold whitespace-nowrap"
              >
                SERVICES
              </a>
              <a
                href="/our-book"
                className="text-white hover:text-[#FFB842] text-sm font-semibold  whitespace-nowrap"
              >
                OUR BOOK
              </a>
              <a
                href="/blog"
                className="text-white hover:text-[#FFB842] text-sm font-semibold  whitespace-nowrap"
              >
                BLOG
              </a>
              <a
                href="/about"
                className="text-white hover:text-[#FFB842] text-sm font-semibold  whitespace-nowrap"
              >
                ABOUT
              </a>
              <a
                href="/contact"
                className="text-white hover:text-[#FFB842] text-sm font-semibold  whitespace-nowrap"
              >
                CONTACT US
              </a>
            </nav>
          </div>

          {/* Bottom section */}
          <div className="absolute bottom-4  sm:bottom-6 md:bottom-8 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 ">
              <p className="text-white/80 text-xs order-3 sm:order-1 text-center sm:text-left ">
                © '25 ASOWin Inc. All Rights Reserved.
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 md:gap-6 order-1 sm:order-2">
                <a
                  href="/privacy"
                  className="text-white/80 hover:text-white text-xs whitespace-nowrap"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-white/80 hover:text-white text-xs whitespace-nowrap"
                >
                  Terms Of Service
                </a>
                <a
                  href="/disclaimer"
                  className="text-white/80 hover:text-white text-xs whitespace-nowrap"
                >
                  Disclaimer
                </a>
                <a
                  href="/cookies"
                  className="text-white/80 hover:text-white text-xs whitespace-nowrap"
                >
                  Cookies
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 order-2 sm:order-3">
                <a
                  href="mailto:support@asowin.com"
                  className="text-white/80 hover:text-white text-xs flex items-center gap-2 whitespace-nowrap text-center sm:text-left"
                >
                  <span className="text-[#FFB842]">✉</span>
                  support@asowin.com
                </a>

                <a
                  href="https://www.linkedin.com/company/asowin/"
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security feature when opening in new tab
                  className="text-white/80 hover:text-white text-xs flex items-center gap-2 whitespace-nowrap text-center sm:text-left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    color="white"
                  >
                    <path
                      color="white"
                      d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.203 24 24 23.226 24 22.271V1.729C24 .774 23.203 0 22.225 0zm-14.47 20.451h-3.96v-11.74h3.96v11.74zM6.474 7.336c-1.26 0-2.283-1.046-2.283-2.336 0-1.291 1.023-2.336 2.283-2.336 1.26 0 2.283 1.045 2.283 2.336s-1.023 2.336-2.283 2.336zM20.451 20.451h-3.96v-5.66c0-1.348-.027-3.088-1.884-3.088-1.886 0-2.175 1.476-2.175 2.994v5.754h-3.96v-11.74h3.803v1.604h.053c.528-1 1.818-2.057 3.741-2.057 4.005 0 4.748 2.637 4.748 6.066v6.128z"
                    ></path>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
