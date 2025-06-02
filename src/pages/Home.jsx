import React from 'react'
import HomeHero from '../components/HomeHero'
import CompanyExperience from '../components/CompanyExperience'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/ Testimonials'

const Home = () => {
  return (
    <div className='w-full min-h-screen container mx-auto'>
        <HomeHero />
        <CompanyExperience />
        <About />
        <Portfolio />
        <Testimonials />

    </div>
      )
}

export default Home
