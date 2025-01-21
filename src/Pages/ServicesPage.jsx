import React from 'react'
import ServicesHero from '../Components/ServicesHero'
import ASOSection from '../Components/ASOSection'
import ASOSection2 from '../Components/ASOSection2'
import ASOSection4 from '../Components/ASOSection4'
import PricingSection from '../Components/PricingSection'
import Quality from '../Components/Quality'
import WhyAso from '../Components/WhyAso'
import ASOSection3 from '../Components/ASOSection3'









const ServicesPage = () => {
  return (
    <div className="min-h-screen ">


  <ServicesHero/>
  <ASOSection/>
  <ASOSection2/>
  <ASOSection3/>
  <ASOSection4/>
  <PricingSection/>
  <Quality/>
  <WhyAso/>


  </div>
  )
}

export default ServicesPage