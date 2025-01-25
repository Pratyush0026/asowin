import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import BlogStatsL from '../Components/BlogStatsL';
import GetStarted from '../Components/GetStarted';
import BlogContact from '../Components/BlogContact';
import Footer from '../Components/Footer';
import Blog1L from '../Components/Blog1L';
import BlogAboutL from '../Components/BlogAboutL';
import BlogResults3 from '../Components/BlogResults3';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Case Study 3</title>
        <meta 
          name="description" 
          content="Discover how our tailored ASO strategies and data-driven solutions helped enhance visibility, increase downloads, and drive growth for India's  leading LSM app" 
        />
        <meta 
          name="keywords" 
          content=" aso strategy, asowin strategy, asowin LSM, easyphone aso strategy, easyphone app store optimisation, aso services LSM" 
        />
        <meta 
          name="author" 
          content="ASOWin" 
        />
      
      </Helmet>

      {/* Page Components */}
      <Blog1L />
      <BlogAboutL />
      <BlogStatsL />
      <BlogResults3 />
      <GetStarted />
      <BlogContact />
      <br />
      <Footer />
    </div>
  );
};

export default About;
