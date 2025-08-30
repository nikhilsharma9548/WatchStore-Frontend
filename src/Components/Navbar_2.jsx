import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { RiAlignItemBottomFill } from "react-icons/ri";


const Navbar_2 = () => {
  return (
    <div className='md:hidden flex justify-center md:p-5 p-2 items-center h-16 w-full
         fixed bg-gray-100 bottom-0 overflow-hidden border border-gray-400'>
        <div className='  flex fixed  w-full px-5 mt-1'>
            <ul className='  activeLink flex justify-between items-center gap-7 text-lg w-full'>
                <NavLink className='flex flex-col justify-center items-center cursor-pointer' to={'/'}onClick={() => scrollTo(0,0)}>
                  <span className='text-2xl text-pink-800'><GoHomeFill/></span>
                  Home
                </NavLink>

                <NavLink className=' flex flex-col justify-center items-center cursor-pointer'to={'/'}
                  onClick={() => {scrollTo( 0,775)}}>
                  <span className='text-2xl text-pink-800'>< BiSolidCategory/></span>
                  category
                </NavLink>

                <NavLink className='flex flex-col justify-center items-center cursor-pointer' to={'/products'}onClick={() => scrollTo(0,0)}>
                  <span className='text-2xl text-pink-800'>< RiAlignItemBottomFill/></span>
                  Products
                </NavLink>  

                <NavLink className='flex flex-col justify-center items-center cursor-pointer' to={'/user-details'}>
                  <span className='text-2xl text-pink-800'>< FaUserAlt/></span>
                  Account
                </NavLink>
                             
            </ul>           
        </div>
    </div>
  )
}

export default Navbar_2