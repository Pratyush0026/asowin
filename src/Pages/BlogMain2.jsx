import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import Blog1D from '../Components/Blog1D';
import BlogAboutD from '../Components/BlogAboutD';
import BlogStatsD from '../Components/BlogStatsD';
import BlogResults2 from '../Components/BlogResults2';
import GetStarted from '../Components/GetStarted';
import BlogContact from '../Components/BlogContact';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Case Study 2</title>
        <meta 
          name="description" 
          content=" Discover how ASOWin helped optimize the Indiabulls app with expert ASO strategies. Boosting visibility, enhancing user experience, and driving growth through targeted solutions for this financial services platform." 
        />
        <meta 
          name="keywords" 
          content=" indiabulls aso, aso strategy indiabulls, asowin indiabulls, finance app aso, trading aso, asowin strategy" 
        />
        <meta 
          name="author" 
          content="ASOWin" 
        />
       
      </Helmet>

      {/* Page Components */}
      <Blog1D />
      <BlogAboutD />
      <BlogStatsD />
      <BlogResults2 />
      <GetStarted />
      <BlogContact />
      <br />
      <Footer />
    </div>
  );
};

export default About;
