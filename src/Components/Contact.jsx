import React from 'react';
import img1 from '../assets/contact.png'

export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row w-full gap-[-100px] min-h-screen  bg-[#F5FDFF]">
      {/* Left side with image */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-8">
        <img 
          src={img1}
          alt="Contact illustration" 
          className="w-full max-w-xl object-contain"
        />
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-[60%] flex items-center justify-center p-8">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl  md:text-[60px] font-serif mb-8">Contact Us</h1>
            
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#004851]"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#004851]"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#004851]"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="App Name or URL"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#004851]"
                />
              </div>
              
              <button
                type="submit"
                className="w-full  lg:w-[338px] h-[37px] text-center  py-1 px-6 text-white bg-[#004851] rounded-[18px] hover:bg-[#003842] transition-colors uppercase text-sm tracking-wider"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}