import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { assets, dummyTestimonial } from '../assets/assets'
import { useAppContext } from '../Context/AppContext';

const Testimonials = () => {

  const [index, setIndex] = useState(0);
  const{navigate} = useAppContext();

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % dummyTestimonial.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + dummyTestimonial.length) % dummyTestimonial.length);
  };



    return (
    
      <div id='testimonials' className=' pb-14 md:px-10 px-5 flex flex-col w-full space-y-7 scroll-mt-24 gap-40 lg:gap-20'>

         {/* <h2 className='text-3xl flex border-b-2 w-32'>Testimonials</h2> */}  
          
           <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <div className="max-w-5xl dark:border py-16 md:w-full dark:bg-[#0F0F0F] dark:border-[#303030] mx-2 md:mx-auto flex flex-col items-center justify-center text-center rounded-2xl p-10 text-white bg-[#5885AF]/70">
                <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-cyan-600/10 backdrop-blur border border-cyan-500/40 text-sm">
                    <div className="flex items-center">
                        <img className="size-6 md:size-7 rounded-full border-2 border-white"
                            src={assets.profile_img_1} alt="userImage1" />
                        <img className="size-6 md:size-7 rounded-full border-2 border-white -translate-x-2"
                           src={assets.profile_img_2} alt="userImage2" />
                        <img className="size-6 md:size-7 rounded-full border-2 border-white -translate-x-4"
                           src={assets.profile_img_3} alt="userImage3" />
                    </div>
                    <p className="-translate-x-2 font-medium">Join community of 1m+ founders </p>
                </div>
                <h1 className="text-4xl md:text-5xl md:leading-[60px] font-semibold max-w-xl mt-5 bg-gradient-to-r from-white to-cyan-200 text-transparent bg-clip-text">Unlock your next big opportunity.</h1>

                <div className="button-bg rounded-full mt-5 p-0.5 hover:scale-105 transition duration-300 active:scale-100">
                <button onClick={() => {navigate('/products'), scrollTo(0,0)}}
                 className="px-8 text-sm py-3 text-white rounded-full font-medium bg-[#274472] hover:bg-[#1e3250] duration-150">
                    Shop Now
                </button>
            </div>
            </div>
        </div>
    );
}

export default Testimonials

