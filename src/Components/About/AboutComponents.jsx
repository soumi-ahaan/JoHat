import React from 'react'
import AboutBanner from "../About/AboutBanner";
import AboutJames from "../About/AboutJames";
import Who from "../About/Who";
import Today from "../About/Today";
import HomeownerStories from "../Home/HomeownerStories";
import FaqSection from "../Home/FaqSection"

const AboutComponents = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutJames/>
      <Who/>
      <Today/>
      <HomeownerStories/>
      <FaqSection/>
    </div>

  )
}

export default AboutComponents