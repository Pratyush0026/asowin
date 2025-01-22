import React from 'react'
import AboutHero from '../Components/AboutHero'
import AboutSection from '../Components/AboutSection'
import WhyChoose from '../Components/WhyChoose'
import GetStarted from '../Components/GetStarted'
import Footer from '../Components/Footer'


const About = () => {
  return (
    <div className="min-h-screen ">


    <AboutHero/>
    <AboutSection/>
    <WhyChoose/>
    <GetStarted/>
    <Footer/>

  </div>
  )
}

export default About