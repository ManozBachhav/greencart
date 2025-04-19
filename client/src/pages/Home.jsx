import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <Categories/>
        <BottomBanner/>
        <NewsLetter/>
        <BestSeller/>
    </div>
  )
}

export default Home