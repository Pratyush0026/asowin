import React, { useState } from 'react';
import img1 from '../assets/bc.png';

const BlogContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    appUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div 
      className="w-full min-h-[600px] bg-[#FFF8E7] relative flex justify-end"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Form Container */}
      <div className="w-full md:w-1/2 p-8 md:p-16">
        <h1 className="text-4xl md:text-5xl lg:text-[77px] font-serif mb-12">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
          <div>
            <input 
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <input 
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <input 
              type="text"
              placeholder="Company Name"
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              value={formData.companyName}
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
            />
          </div>

          <div>
            <input 
              type="text"
              placeholder="App Name or URL"
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              value={formData.appUrl}
              onChange={(e) => setFormData({...formData, appUrl: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="bg-black text-white rounded-[18px] w-[131px] h-[37px] px-8 py-1 text-sm uppercase tracking-wider"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogContact;