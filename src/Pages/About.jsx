// import React from 'react'
// import AboutHero from '../Components/AboutHero'
// import AboutSection from '../Components/AboutSection'
// import WhyChoose from '../Components/WhyChoose'
// import GetStarted from '../Components/GetStarted'
// import Footer from '../Components/Footer'


// const About = () => {
//   return (
//     <div className="min-h-screen ">


//     <AboutHero/>
//     <AboutSection/>
//     <WhyChoose/>
//     <GetStarted/>
//     <Footer/>

//   </div>
//   )
// }

// export default About


import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import AboutHero from '../Components/AboutHero';
import AboutSection from '../Components/AboutSection';
import WhyChoose from '../Components/WhyChoose';
import GetStarted from '../Components/GetStarted';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Helmet for dynamic title */}
      <Helmet>
        <title>About - App Store Optimization - ASOWin</title>
      </Helmet>

      {/* Page components */}
      <AboutHero />
      <AboutSection />
      <WhyChoose />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default About;
