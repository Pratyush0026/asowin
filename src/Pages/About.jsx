import React from 'react';
import { Helmet } from 'react-helmet-async'; 
import AboutHero from '../Components/AboutHero';
import AboutSection from '../Components/AboutSection';
import WhyChoose from '../Components/WhyChoose';
import GetStarted from '../Components/GetStarted';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Helmet for dynamic title, meta description, and keywords */}
      <Helmet>
        <title>About - App Store Optimization - ASOWin</title>
        <meta
          name="description"
          content=" Learn about ASOWin, a results-driven app agency specializing in ASO, AI-powered strategies, and creative solutions to help apps grow, boost visibility, and achieve success in competitive app markets"
        />
        <meta
          name="keywords"
          content="aso, app store optimisation, app reputation, creative a/b testing, design, keyword install, aso solution, automated aso, user acquisition, search ad aso, competitor analysis, keyword research. "
        />
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
