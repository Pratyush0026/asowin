import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Navbar from "./Navbar";
import img1 from "../assets/contactbg.png";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <>
      <Navbar />

      <div
        className="w-full min-h-screen relative mb-[100px]"
        id="form-section"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24  ">
            {/* Left Column */}
            <div className="flex flex-col mt-10">
              <h1 className="text-[52px] leading-tight font-normal text-black mb-4 ">
                Contact Us
              </h1>

              <p className="text-gray-600 text-lg mb-20">
                Contact ASOWin and our team will connect with you instantly
              </p>

              {/* Company Info */}
              {/* <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">
                  Company Address
                </p>
                <p className="text-base text-gray-600">
                  Tapasya Corp Heights, Sector 126,
                  <br />
                  Noida, India, 110018
                </p>
              </div>

//               <div>
//                 <p className="text-sm text-gray-600 font-medium mb-1">Email</p>
//                 <a
//                   href="mailto:support@asowin.com"
//                   className="text-base text-gray-600 underline"
//                 >
//                   support@asowin.com
//                 </a>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-600 font-medium mb-1">
//                   Phone Number
//                 </p>
//                 <p className="text-base text-gray-600">+91 675-876-0916</p>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-600 font-medium mb-4">
//                   Follow Us On
//                 </p>
//                 <div className="flex space-x-6">
//                   <a href="#" className="text-[#0A66C2] hover:opacity-80">
//                     <Facebook className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="text-[#0A66C2] hover:opacity-80">
//                     <Twitter className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="text-[#0A66C2] hover:opacity-80">
//                     <Linkedin className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="text-[#0A66C2] hover:opacity-80">
//                     <Instagram className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div> */}

              {/* Company Info */}
              <div className="space-y-8">
                {/* Addresses */}
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-4">
                    Company Addresses
                  </p>
                  <div className="space-y-4">
                    {/* Mumbai Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-gray-600">
                        <span className="font-bold">Mumbai:</span> Office #3,
                        Neelkanth, Next to Shreeji Heights, Sector 45A, Navi
                        Mumbai, Maharashtra, India - 400706
                      </p>
                    </div>
                    {/* Noida Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-gray-600">
                        <span className="font-bold">Noida:</span> Office #37,
                        Tapasya Corp Heights, Sector 126, Noida, Uttar Pradesh -
                        201301
                      </p>
                    </div>
                    {/* Delaware Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-gray-600">
                        <span className="font-bold">Delaware:</span> 16192
                        Coastal Hwy, Lewes, DE 19958, USA
                      </p>
                    </div>
                    {/* California Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-gray-600">
                        <span className="font-bold">California:</span> 140 Black
                        Mountain Cir, Fremont, California, USA - 94536
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email and Phone */}
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-1">
                    Contact Us
                  </p>
                  <div className="flex items-center justify-between space-x-8">
                    <a
                      href="mailto:support@asowin.com"
                      className="text-base text-gray-600 underline"
                    >
                      support@asowin.com
                    </a>
                    <div className="flex flex-col text-base text-gray-600 ">
                      <h3>Phone:</h3>
                      <p>+1 510-365-7173 (USA)</p>
                      <p>+91 9619963340 (India)</p>
                    </div>
                  </div>
                </div>

                {/* Follow Us */}
                {/* <div>
    <p className="text-sm text-gray-600 font-bold mb-4">Follow Us On</p>
    <div className="flex space-x-6">
      <a href="#" className="text-[#0A66C2] hover:opacity-80">
        <Facebook className="w-5 h-5" />
      </a>
      <a href="#" className="text-[#0A66C2] hover:opacity-80">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="#" className="text-[#0A66C2] hover:opacity-80">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="#" className="text-[#0A66C2] hover:opacity-80">
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  </div> */}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="mt-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    FULL NAME*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter Your Full Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    EMAIL ADDRESS*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    PHONE NUMBER*
                  </label>
                  <div className="flex">
                    <select className="px-3 py-3 border border-gray-200 rounded-l border-r-0 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 bg-white">
                      <option>+353</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter Your Phone Number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-r focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    WEBSITE URL*
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder="Enter Your Website URL"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ADDITIONAL MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Please provide any additional details about your request"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:ring-1 focus:ring-gray-300 focus:border-gray-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#FF8712] text-white font-medium rounded-full hover:bg-[#e85f25] transition-colors"
                >
                  SUBMIT FORM
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;


