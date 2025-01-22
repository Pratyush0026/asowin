import React from 'react'
import BlogStatsL from '../Components/BlogStatsL'
import GetStarted from '../Components/GetStarted'
import BlogContact from '../Components/BlogContact'
import Footer from '../Components/Footer'
import Blog1L from '../Components/Blog1L'
import BlogAboutL from '../Components/BlogAboutL'
import BlogResults3 from '../Components/BlogResults3'



const About = () => {
  return (
    <div className="min-h-screen ">

      <Blog1L/>
      <BlogAboutL/>
      <BlogStatsL/>
      <BlogResults3/>
      <GetStarted/>
      <BlogContact/>
      <br />
      <Footer/>


   

  </div>
  )
}

export default About