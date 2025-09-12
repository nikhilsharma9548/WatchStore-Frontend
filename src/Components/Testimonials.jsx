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
             <div className="md:w-[450px] h-96 relative top-14 flex rounded-2xl overflow-hidden">
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
          
           <div className="mt-32 lg:mt-20 max-w-5xl py-16 md:pl-20 md:w-full mx-2 md:mx-auto p-4 flex flex-col md:flex-row items-center justify-between text-left bg-[#274472] rounded-2xl gap-5 md:gap-0 md:p-10 text-white">
                <div>
                    <div>
                        <p className="">Trusted by 12k+ customers</p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm ">4.5/5 • 2300+ Reviews</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-[46px] max-md:mt-3 text-balance md:leading-[60px] max-w-md font-semibold bg-clip-text">
                        Join our TimeAura & Stay Updated
                    </h1>
                </div>
                <div className="flex items-center gap-2 text-black  bg-white max-md:mt-6 pl-2 md:pl-4 h-11 text-sm rounded-full overflow-hidden">
                  <p className='text-xl'><IoMailOutline/></p>
                    <input type="text" placeholder="Enter your email..." className="outline-none h-11 text-black" />
                    <button className="md:px-6 px-2 h-10 mr-1 rounded-full border text-white bg-[#274472]/90">Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default Testimonials

