import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useEffect } from 'react';
import {imageSlider} from '../assets/assets'
import { assets } from '../assets/assets';
import Loading from './Loading';
import { AnimatePresence, motion} from "motion/react"
import { useAppContext } from '../Context/AppContext';

const Hero = () => {
 
    const {navigate,} = useAppContext()
    const [current, setCurrent] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current, imageSlider]);

   // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === imageSlider.length - 1 ? 0 : prev + 1));
  };

  // Prev Slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? imageSlider.length - 1 : prev - 1));
  };

  return (
    
   <>
   <div id='home' className='flex justify-center xl:items-center overflow-hidden z-0 relative pb-10 '>
  <div className='w-full xl:max-w-7xl lg:max-w-6xl md:max-w-4xl mx-auto overflow-hidden relative
   rounded shadow-lg mt-33 shadow-gray-600 max-md:hidden'>

      <div className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}>
         {imageSlider.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[500px] object-cover flex-shrink-0 border-b-4 dark:border-b-0  dark:border-[#303030] border-white"
            />
          ))}   
      </div>
      <button className='absolute left-1/2 -translate-x-1/2 bottom-10 
            py-3 bg-[#274472] shadow-black shadow-lg text-white
            rounded-full px-8 cursor-pointer hover:scale-105 duration-300 '
            onClick={() =>{navigate('/products')}}> Discover</button>

    {/* Prev Button */}
    <button
      onClick={prevSlide}
      className="absolute left-2 top-1/2 text-3xl  text-white px-3 rounded-full"
    >
        <IoIosArrowBack/>
    </button>

    {/* Next Button */}
    <button
      onClick={nextSlide}
      className="absolute right-2 top-1/2 text-3xl text-white px-3 rounded-full rotate-180"
    >
       <IoIosArrowBack/>
    </button>
  </div>

  {/* for Mobile View */}
  <AnimatePresence>
    <motion.div 
            initial ={{opacity:0, scale:0.9 }}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.5}}
    className='md:hidden mt-20 relative px-1 overflow-hidden flex flex-col justify-center items-center'>
      <img src={assets.mobile} className='w-[800px] h-full rounded-2xl' />
      
      <button onClick={() =>navigate('/products')} 
      className='absolute bottom-14 left-14 text-white px-4 font-semibold
      py-2 rounded-full bg-orange-600/90'>BUY NOW</button>
    </motion.div>
  </AnimatePresence>
</div>
   </>
  )
}

export default Hero 