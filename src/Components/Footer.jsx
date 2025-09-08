import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <>
  <div className={`w-full md:mb-0 mb-10 `}>

      <div className='bg-[#113c5f] flex max-md:flex-col justify-center max-sm:items-center
     md:justify-between max-sm:gap-5 text-gray-300 md:px-20 md:py-10 p-3 mt-32 gap-5'>

        <div className=' flex flex-col justify-center items-center gap-3'>
            <p className='font-semibold border-b-2'>Our Information</p>
           <div className='flex md:flex-col gap-3'>
            <p className='text-sm'>Badaun</p>
            <p className='text-sm'>+91 123 456 7890</p>
            <p className='text-sm'>nikhilsharma9533@gmail.com</p>
            <p className='text-sm'></p>
           </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-3'>
            <p className='font-semibold border-b-2'>About Us</p>
            <div className='flex gap-3 md:flex-col'>
            <p className='text-sm'>Contact Support</p>
            <p className='text-sm'>Privacy Policy</p>
            <p className='text-sm'>About Us</p>
            <p className='text-sm'>CopyRight</p>
            </div>
        </div>

        <div className=' flex flex-col justify-center items-center gap-3'>
            <p className='font-semibold border-b-2'>Product</p>
            <div className='flex md:flex-col gap-3'>
            <p className='text-sm'>Luxury</p>
            <p className='text-sm'>Causal</p>
            <p className='text-sm'>Electric</p>
            <p className='text-sm'>Custom</p>
            </div>
        </div>

        <div className='flex flex-col gap-3 items-center'> 
            <p className='font-semibold border-b-2'>social Media</p>
            <div className='flex gap-3 text-2xl'>
                <NavLink to={'/'}><FaSquareXTwitter/></NavLink>
                <NavLink to={'/'}><FaLinkedin/></NavLink>
                <NavLink to={'https://www.instagram.com/sharmaharrdy'}><FaSquareInstagram/></NavLink>
            </div>
        </div>
    </div>

            <div className='flex justify-center bg-[#043053] p-4 text-white '>@ All right reserved  || Nikhil Sharma</div>

  </div>
    </>
  )
}

export default Footer