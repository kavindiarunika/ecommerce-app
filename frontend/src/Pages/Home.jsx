import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import Ourpolicy from '../Components/Ourpolicy'
import NewsLetterBox from '../Components/NewsLetterBox'

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <Ourpolicy/>
        <NewsLetterBox/>
    </div>
  )
}

export default Home