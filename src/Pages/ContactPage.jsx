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
        <meta
          name="description"
          content="  Get in touch with ASOWin! Reach out to our team for expert ASO solutions, and personalized strategies to boost your app's performance. Let’s connect and grow together!"
        />
        <meta
          name="keywords"
          content="aso, app store optimisation, app reputation, creative a/b testing, design, keyword install, aso solution, automated aso, user acquisition, search ad aso, competitor analysis, keyword research. "
        />
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
