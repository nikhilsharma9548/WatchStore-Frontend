import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { FaRegHeart } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { HiGift } from "react-icons/hi2";
import { ImHeadphones } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";


import { useAppContext } from '../Context/AppContext'



const UserDetails = () => {

   const [files, setFiles] = useState("")
    
    const handleFileChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile instanceof File) {
      setFiles(selectedFile);
    } else {
      setFiles(null);
    }
  };

  const {navigate} = useAppContext()
  return (
    <div className='min-h-screen'>
      <div className='flex p-5 px-2 border-b'>
         <NavLink to={"/"} onClick={() => scrollTo(0,0)} className='flex justify-center items-center md:gap-3 gap-2'>
            <img src={assets.logo} className=' h-10 w-10 rounded-full' alt='Logo'/>
            <p className='text-xl font-semibold'>watchStore</p>
        </NavLink>
      </div>

      <div className='w-full '>
        <div className='mx-3 my-5 px-5 rounded h-24 bg-gray-300/90 items-center flex '>

          <label htmlFor="image">
             <input
                onChange={handleFileChange}
                accept="image/*"
                type="file"
                id="image"
                hidden
             />
              <img
              className="w-16 cursor-pointer rounded-full"
              src={files && files instanceof File ? URL.createObjectURL(files) : assets.profile_img_1}
              width={100}
              height={100}
                        />
              <p className='absolute text-2xl left-20 top-40 text-gray-700'>{files && files instanceof File ? null : < FaPlus/>}</p>
          </label>

          {/* {isImage ?  <input type='image'/> : <img src={assets.profile_img_1} className='h-16 w-16' />} */}
          <p className='text-xl px-3'>Nikhil Sharma</p>
          
        </div>
        <div className='m-2 rounded bg-gray-300/90 p-2'>

          <div className='flex w-full '>
            <NavLink to={'/my-orders'}
          className='text-base w-[50vh] m-2 p-2 shadow-xl rounded border border-gray-600 flex items-center max-w-sm text-gray-800 gap-2'>
            <span>< LuBox/></span>
            Orders</NavLink>

          <NavLink className='text-base w-[50vh] m-2 p-2 rounded shadow-xl border border-gray-600 flex items-center gap-2 text-gray-800'>
           <span>< FaRegHeart/></span>
           Wishlist</NavLink>
          </div>

          <div className='flex'>
            <NavLink
            className='text-base w-[50vh] m-2 p-2 shadow-xl rounded flex border border-gray-600 items-center gap-2 text-gray-800'>
            <span className='text-2xl'>< HiGift/></span>
            Coupons</NavLink>

          <NavLink className='text-base w-[50vh] m-2 p-2 rounded shadow-xl flex border border-gray-600 items-center gap-2 text-gray-800'>
           <span>< ImHeadphones/></span>
           Wishlist</NavLink>
          </div>
        </div>

        <p className='p-3 text-center mx-3  bg-pink-700 '>logout</p>
      </div>

    </div>
  )
}

export default UserDetails