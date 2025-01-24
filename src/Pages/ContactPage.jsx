// import React from 'react'
// import ContactUs from '../Components/ContactUs'
// import Faq from '../Components/Faq'
// import GetStarted from '../Components/GetStarted'
// import Footer from '../Components/Footer'



// const ContactPage = () => {
//   return (
//     <div>
//       <ContactUs/>
//       <Faq/>
//     <GetStarted/>
//     <Footer/>

    


//     </div>
//   )
// }

// export default ContactPage


import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import ContactUs from '../Components/ContactUs';
import Faq from '../Components/Faq';
import GetStarted from '../Components/GetStarted';
import Footer from '../Components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Helmet for dynamic title */}
      <Helmet>
        <title>Contact - App Store Optimization - ASOWin</title>
      </Helmet>

      {/* Page components */}
      <ContactUs />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default ContactPage;
