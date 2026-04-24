import React from 'react'
import HowWeWorks from '../Home/HowWeWorks'
import HomeownerStories from '../Home/HomeownerStories'
import FAQSection from '../Home/FaqSection'
import ServiceBanner from './ServiceBanner'
import GetInTouch from './GetInTouch'
import ServicesGrid from './ServicesGrid'

const ServiceComponents = () => {
  return (
    <div>
      <ServiceBanner/>
      <ServicesGrid/>
      <HowWeWorks/>
      <HomeownerStories/>
      <GetInTouch/>
      <FAQSection/>
    </div>
  )
}
export default ServiceComponents