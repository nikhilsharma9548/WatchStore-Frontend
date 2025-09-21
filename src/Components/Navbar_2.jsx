import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { RiAlignItemBottomFill } from "react-icons/ri";


const Navbar_2 = () => {

  const [active, setActive] = useState("home");

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    if (scrollPos < 500) {
      setActive("home");
    } else {
      setActive("category");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='dark:bg-[#0F0F0F] md:hidden flex justify-center md:p-5 p-2 items-center h-16 w-full
         fixed bg-[#5885AF] bottom-0 overflow-hidden border border-gray-400 dark:border-0'>
        <div className='  flex sticky  w-full px-3 mt-1'>
            <ul className=' text-sm activeLink flex justify-between items-center gap-5 sm:gap-7 sm:text-lg w-full'>
                <NavLink 
                className={({isActive}) =>`flex flex-col justify-center items-center cursor-pointer
                 ${active === 'home' && isActive ? "text-[#274472] dark:bg-red-700" : "text-gray-100" }`} 
                 to={'/'} onClick={() => scrollTo(0,0)}>
                  <span className='text-2xl'><GoHomeFill/></span>
                  Home
                </NavLink>

                <NavLink 
                className={({isActive}) =>`flex flex-col justify-center items-center cursor-pointer
                 ${active === 'category' && isActive  ? "text-[#274472] dark:bg-red-700" : "text-gray-100" }`} to={'/'}
                  onClick={() => window.scrollTo({ top: 775, behavior: "smooth" })}>
                  <span className='text-2xl'>< BiSolidCategory/></span>
                  category
                </NavLink>

                <NavLink 
                className={({isActive}) =>`flex flex-col justify-center items-center cursor-pointer
                 ${isActive ? "text-[#274472] dark:bg-red-700" : "text-gray-100" }`}  to={'/products'}onClick={() => scrollTo(0,0)}>
                  <span className='text-2xl'>< RiAlignItemBottomFill/></span>
                  Products
                </NavLink>  

                <NavLink 
               className={({isActive}) =>`flex flex-col justify-center items-center cursor-pointer
                 ${isActive ? "text-[#274472] dark:bg-red-700" : "text-gray-100" }`} to={'/user-details'}>
                  <span className='text-2xl'>< FaUserAlt/></span>
                  Account
                </NavLink>
                             
            </ul>           
        </div>
    </div>
  )
}

export default Navbar_2