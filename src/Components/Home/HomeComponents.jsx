import React from 'react'
import HomeBanner from './HomeBanner'
import FeatureProperties from './FeatureProperties'
import RecentSales from './RecentSales'
import HowWeWorks from './HowWeWorks'
import Services from './Services'
import WhoWeAre from './WhoWeAre'
import HomeownerStories from './HomeownerStories'
import FAQSection from './FaqSection'

const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <Services/>
      <WhoWeAre/>
      <FeatureProperties/>
      <HowWeWorks/>
      <RecentSales/>
      <HomeownerStories/>
      <FAQSection/>

    </div>
  )
}

export default HomeComponents