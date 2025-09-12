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
    <div className='md:hidden flex justify-center md:p-5 p-2 items-center h-16 w-full
         fixed bg-[#5885AF] bottom-0 overflow-hidden border border-gray-400'>
        <div className='  flex fixed  w-full px-5 mt-1'>
            <ul className='  activeLink flex justify-between items-center gap-7 text-lg w-full'>
                <NavLink 
                className={({isActive}) =>`flex flex-col justify-center items-center cursor-pointer
                 ${active === 'home' && isActive ? "text-pink-800 " : "text-gray-100" }`} 
                 to={'/'} onClick={() => scrollTo(0,0)}>
                  <span className='text-2xl'><GoHomeFill/></span>
                  Home
                </NavLink>

                <NavLink 
                className={({isActive}) =>`flex flex-col justify-center items-center cursor-pointer
                 ${active === 'category' && isActive  ? "text-pink-800" : "text-gray-100" }`} to={'/'}
                  onClick={() => window.scrollTo({ top: 775, behavior: "smooth" })}>
                  <span className='text-2xl'>< BiSolidCategory/></span>
                  category
                </NavLink>

                <NavLink 
                className={({isActive}) =>`flex flex-col justify-center items-center cursor-pointer
                 ${isActive ? "text-pink-800" : "text-gray-100" }`}  to={'/products'}onClick={() => scrollTo(0,0)}>
                  <span className='text-2xl'>< RiAlignItemBottomFill/></span>
                  Products
                </NavLink>  

                <NavLink 
               className={({isActive}) =>`flex flex-col justify-center items-center cursor-pointer
                 ${isActive ? "text-pink-800" : "text-gray-100" }`} to={'/user-details'}>
                  <span className='text-2xl'>< FaUserAlt/></span>
                  Account
                </NavLink>
                             
            </ul>           
        </div>
    </div>
  )
}

export default Navbar_2