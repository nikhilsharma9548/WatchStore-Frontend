import React from 'react'
import Hero from './Hero'
import Category from './Category'
import Testimonials from './Testimonials'
import Features from './Features'
import Loading from './Loading'
import { useAppContext } from '../Context/AppContext'
import Load from './Load'


const Home = () => {

  const {theme, showSplash} = useAppContext()
  return (
    <>
         {!showSplash ? (<div className={`w-full`}>
        <Hero />
        < Category />   
        < Features/>  
        < Testimonials />
    </div>): <Load/>}
    </>
    
  )
}

export default Home