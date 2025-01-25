import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import Blog1 from '../Components/Blog1';
import BlogAbout from '../Components/BlogAbout';
import BlogStats from '../Components/BlogStats';
import BlogResults1 from '../Components/BlogResults1';
import GetStarted from '../Components/GetStarted';
import BlogContact from '../Components/BlogContact';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Case Study 1</title>
        <meta 
          name="description" 
          content="Explore ASOWin's success story with the Pepperfry app. Learn how our tailored ASO strategies and AI-driven solutions boosted app visibility, user engagement, and downloads for this leading furniture platform" 
        />
        <meta 
          name="keywords" 
          content="pepperfry aso, pepperfry strategy, asowin pepperfry, app store optimisation strategy, pepperfry visibility" 
        />
  
      </Helmet>

      {/* Page components */}
      <Blog1 />
      <BlogAbout />
      <BlogStats />
      <BlogResults1 />
      <GetStarted />
      <BlogContact />
      <br />
      <Footer />
    </div>
  );
};

export default About;
