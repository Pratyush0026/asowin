// import { Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import HeroSection from './Components/HeroSection';
// import Services from './Components/Services';
// import Carousel from './Components/Carousel';
// import AIAgent from './Components/AIAgent';
// import Stats from './Components/Stats';
// import CaseStudy from './Components/CaseStudy';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';
// import About from './Pages/About'; 
// import ContactPage from './Pages/ContactPage';
// import ServicesPage from './Pages/ServicesPage'; 
// import BlogMain from './Pages/BlogMain';
// import BlogMain2 from './Pages/BlogMain2'; 
// import BlogMain3 from './Pages/BlogMain3'; 
// import React from 'react';




// function App() {
//   return (
//     <>
//       {/* <Navbar />  */}
//       <Routes>
//         {/* Home route */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <Services />
//               <Carousel />
//               <AIAgent />
//               <Stats />
//               <CaseStudy />
//               <Contact />
//               <Footer />
//             </>
//           }
//         />
//         {/* About page route */}
//         <Route path="/about" element={<About />} />
//         {/* Contact page route */}
//         <Route path="/contact" element={<ContactPage />} />
//         {/* Services page route */}
//         <Route path="/services" element={<ServicesPage />} />

//         <Route path="/casestudy1" element={<BlogMain/>} />
//         <Route path="/casestudy2" element={<BlogMain2/>} />
//         <Route path="/casestudy3" element={<BlogMain3/>} />


//       </Routes>
//     </>
//   );
// }

// export default App;


import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Carousel from './Components/Carousel';
import AIAgent from './Components/AIAgent';
import Stats from './Components/Stats';
import CaseStudy from './Components/CaseStudy';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import About from './Pages/About'; 
import ContactPage from './Pages/ContactPage';
import ServicesPage from './Pages/ServicesPage'; 
import BlogMain from './Pages/BlogMain';
import BlogMain2 from './Pages/BlogMain2'; 
import BlogMain3 from './Pages/BlogMain3'; 
import React, { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';

function App() {
  useEffect(() => {
    Intercom({
      app_id: 'zkny2o1x',
    });
  }, []);

  return (
    <>
      {/* <Navbar />  */}
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <Carousel />
              <AIAgent />
              <Stats />
              <CaseStudy />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* About page route */}
        <Route path="/about" element={<About />} />
        {/* Contact page route */}
        <Route path="/contact" element={<ContactPage />} />
        {/* Services page route */}
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/casestudy1" element={<BlogMain/>} />
        <Route path="/casestudy2" element={<BlogMain2/>} />
        <Route path="/casestudy3" element={<BlogMain3/>} />
      </Routes>
    </>
  );
}

export default App;