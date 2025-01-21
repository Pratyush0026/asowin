import React from 'react'
import Blog1 from '../Components/Blog1'
import BlogAbout from '../Components/BlogAbout'
import BlogStats from '../Components/BlogStats'
import BlogResults1 from '../Components/BlogResults1'
import GetStarted from '../Components/GetStarted'
import BlogContact from '../Components/BlogContact'
import Footer from '../Components/Footer'



const About = () => {
  return (
    <div className="min-h-screen ">

      <Blog1/>
      <BlogAbout/>
      <BlogStats/>
      <BlogResults1/>
      <GetStarted/>
      <BlogContact/>
      <br />
      <Footer/>


   

  </div>
  )
}

export default About