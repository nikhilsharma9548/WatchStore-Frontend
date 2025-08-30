import React from 'react'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import Testimonials from '../Components/Testimonials'
import Features from '../Components/Features'
import Loading from '../Components/Loading'


const Home = () => {
  return (
    <>
      <div className='w-full '>
        <Hero />
        < Category />   
        < Features/>  
        < Testimonials />
    </div>
    </>
    
  )
}

export default Home