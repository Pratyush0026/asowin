// import React from 'react'
// import ServicesHero from '../Components/ServicesHero'
// import ASOSection from '../Components/ASOSection'
// import ASOSection2 from '../Components/ASOSection2'
// import ASOSection4 from '../Components/ASOSection4'
// import PricingSection from '../Components/PricingSection'
// import Quality from '../Components/Quality'
// import WhyAso from '../Components/WhyAso'
// import ASOSection3 from '../Components/ASOSection3'
// import Footer from '../Components/Footer'









// const ServicesPage = () => {
  
//   return (
//     <div className="min-h-screen ">


//   <ServicesHero/>
//   <ASOSection/>
//   <ASOSection2/>
//   <ASOSection3/>
//   <ASOSection4/>
//   <PricingSection/>
//   <Quality/>
//   <WhyAso/>
//   <Footer/>


//   </div>
//   )
// }

// export default ServicesPage


import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import ServicesHero from '../Components/ServicesHero';
import ASOSection from '../Components/ASOSection';
import ASOSection2 from '../Components/ASOSection2';
import ASOSection3 from '../Components/ASOSection3';
import ASOSection4 from '../Components/ASOSection4';
import PricingSection from '../Components/PricingSection';
import Quality from '../Components/Quality';
import WhyAso from '../Components/WhyAso';
import Footer from '../Components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Helmet for dynamic title */}
      <Helmet>
        <title>Services - App Store Optimization - ASOWin</title>
      </Helmet>

      {/* Page components */}
      <ServicesHero />
      <ASOSection />
      <ASOSection2 />
      <ASOSection3 />
      <ASOSection4 />
      <PricingSection />
      <Quality />
      <WhyAso />
      <Footer />
    </div>
  );
};

export default ServicesPage;
