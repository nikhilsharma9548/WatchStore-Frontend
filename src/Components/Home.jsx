import React from 'react'
import Hero from './Hero'
import Category from './Category'
import Testimonials from './Testimonials'
import Features from './Features'
import Loading from './Loading'
import { useAppContext } from '../Context/AppContext'


const Home = () => {
  return (
    <>
      <div className='w-full'>
        <Hero />
        < Category />   
        < Features/>  
        < Testimonials />
    </div>
    </>
    
  )
}

export default Home