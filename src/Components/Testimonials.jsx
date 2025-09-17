import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { assets, dummyTestimonial } from '../assets/assets'
import { IoMailOutline } from "react-icons/io5"


const Testimonials = () => {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % dummyTestimonial.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + dummyTestimonial.length) % dummyTestimonial.length);
  };



    return (
    
      <div id='testimonials' className=' pb-14 md:px-10 px-5 flex flex-col w-full space-y-7 scroll-mt-24 '>

         <h2 className='text-3xl flex border-b-2 w-32'>Testimonials</h2>
       
          <div className='  flex max-md:flex-col-reverse justify-center gap-64'>
            <div className='w-96 sm:w-[350px] h-96 relative top-14'>
             <div className="md:w-[450px] h-96 relative top-14 flex rounded-2xl ml-2 overflow-hidden">
  {/* Row container (saare testimonials ek row me) */}
  <div
    className="flex transition-transform duration-1000 ease-in-out"
    style={{ transform: `translateX(-${index * 100}%)` }}
  >
    {dummyTestimonial.map((item, i) => (
      <div
        key={i}
        className="flex-shrink-0 flex flex-col p-6 bg-gray-100 shadow-lg w-full max-w-md mx-auto"
        style={{ minWidth: "100%" }} // <-- Har slide ki width 100%
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />
        <h3 className="mt-4 font-bold text-xl">{item.name}</h3>
        <p>{item.rating}</p>
        <p className="text-gray-500">{item.role}</p>
        <span className='font-semibold mt-2'>feedback</span>
        <p className="text-gray-700 w-60">{item.feedback}</p>
      </div>
    ))}
  </div>

  {/* Navigation Buttons */}
  <div className="flex gap-4 mt-6 text-white absolute right-0 -translate-x-1/2">
    <button
      onClick={prevSlide}
      className="p-3 bg-[#274472] rounded-full hover:bg-blue-950"
    >
      <FaChevronLeft />
    </button>
    <button
      onClick={nextSlide}
      className="p-3 bg-[#274472] rounded-full hover:bg-blue-950"
    >
      <FaChevronRight />
    </button>
  </div>
</div>
            </div>
            <div className='md:flex relative hidden'>
               <div className=' bg-[#274472] md:h-80 md:w-80  lg-h-96 lg:w-96 xl:h-[450px] xl:w-[450px] rounded-full '></div>
              <img src={assets.testimonials} className='absolute right-28 top-16  w-[420px] object-cover rounded-full' />  
            </div>
           
          </div>
          
           <section className="md:mt-20 mt-32  flex flex-col items-center justify-center mx-auto max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-20 md:py-24  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${assets.Bg2})` }}>
                <h1 className="text-2xl md:text-3xl font-medium text-black  max-w-2xl">Empower Your Sales & Marketing with a Next-Gen AI Workforce</h1>
                <div className="h-[3px] w-32 my-1"></div>
                <p className="text-sm md:text-base text-black max-w-xl">
                    Leverage AI Agents for real-time calling and unified multi-channel engagement, optimizing customer interactions at scale.
                </p>
                <button className="px-8 py-2.5 mt-4 text-sm bg-gradient-to-r from-cyan-600 to-blue-400 hover:scale-105 transition duration-300 text-white rounded-full">
                    Get Started
                </button>
            </section>
        </div>
    );
}

export default Testimonials

