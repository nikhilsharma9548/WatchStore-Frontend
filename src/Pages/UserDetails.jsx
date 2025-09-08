import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { FaRegHeart } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { HiGift } from "react-icons/hi2";
import { ImHeadphones } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { useAppContext } from '../Context/AppContext'
import toast from 'react-hot-toast';



const UserDetails = () => {

  //upload user image
  //   const handleFileChange = (e) => {
  //   const selectedFile = e.target.file[0];
  //   setFile(selectedFile);
  //   setPreview(URL.createObjectURL(selectedFile));
  // };
  
  const {navigate, axios, user, setUser, loading,  setLoading} = useAppContext()

  const logout = async() =>{
    setLoading(true)
  try {
    const {data} = await axios.post('/api/user/logout') 

    if(data.success){
      toast.success(data.message)
      setUser(null);
      setLoading(false)
      navigate('/')
    }else{
      toast.error(data.message)
    }
  } catch (error) {
     toast.error(error.message)
  } 
} 

const [file, setFile] = useState([]);

const handleUpload = async (e) => {
  try {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    const res = await axios.post("/api/user/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true, // agar cookies bhejni hai
    });

    const data = res.data;
    console.log("Response:", data);

    if (data.success) {
      toast.success("Image Uploaded Successfully!");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.error("Upload Error:", error);
    toast.error("Failed to upload image.");
  }
};


  return (
    <div className='min-h-screen'>
      <div className='flex p-5 px-2 border-b'>
         <NavLink to={"/"} onClick={() => scrollTo(0,0)} className='flex justify-center items-center md:gap-3 gap-2'>
            <img src={assets.logo} className=' h-10 w-10 rounded-full' alt='Logo'/>
            <p className='text-xl font-semibold'>TimeAura</p>
        </NavLink>
      </div>
      <div className='mx-5'>
        <div className='my-5 px-5 py-4 rounded bg-gray-300/90 items-center gap-5 flex '>

        <label htmlFor="image">
    <input type="file" id="image" onChange={handleUpload} hidden/>
      {!user.image ? (<img
    className="w-16 h-16 rounded-full border cursor-pointer "
     src={file instanceof File ? URL.createObjectURL(file) : assets.profile}
    alt="Profile"
  />) : (
    <img 
    className="w-16 h-16 rounded-full border cursor-pointer"
    src={file instanceof File ? URL.createObjectURL(file) : user.image} />
  )}
</label>


          <p className='text-xl flex flex-col'>{user ? (user.name).toUpperCase() : "GUEST"}
            <span className='text-sm'>{user ? (user.email) : null}</span>
          </p>
          {/* <button className='bg-blue-500 flex justify-end text-white px-4 py-2 rounded mt-2' onClick={onSubmitHandler}>upload</button> */}
        </div>
        <div className=' rounded bg-gray-300/90 p-2'>

          <div className='flex'>
            <NavLink to={'/my-orders'}
          className='text-base w-[50vh] m-2 p-2 shadow-xl rounded border border-gray-600 flex items-center max-w-sm text-gray-800 gap-2'>
            <span>< LuBox/></span>
            Orders</NavLink>

          <NavLink className='text-base w-[50vh] m-2 p-2 flex rounded shadow-xl border border-gray-600  text-gray-800'>
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
           Help Center</NavLink>
          </div>

            <NavLink
            to={'/admin'}
            className='text-base m-2 p-2 shadow-xl justify-center rounded flex border border-gray-600 items-center gap-2 text-gray-800'>
            <span className='text-2xl'>< FaUserAlt/></span>
            Become Seller</NavLink>
        </div>

        <div onClick={logout} className='p-3 flex w-full justify-center items-center gap-5 mt-10  text-center rounded  bg-pink-700 '>
          logout
          {loading && ( <div className=" border-2 aspect-square w-5 rounded-full
         border-white border-t-transparent border-r-0 border-l-0
          animate-spin"></div>)}
        </div>
      </div>

    </div>
  )
}

export default UserDetails