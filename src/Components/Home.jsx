import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Category from './Category'
import { assets } from '../assets/assets'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Features from './Features'
import Loading from './Loading'
import { useAppContext } from '../Context/Appcontext'


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