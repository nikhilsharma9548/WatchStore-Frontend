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
import { useTheme } from '../Context/ThemeContext';



const UserDetails = () => {

  //upload user image
  //   const handleFileChange = (e) => {
  //   const selectedFile = e.target.file[0];
  //   setFile(selectedFile);
  //   setPreview(URL.createObjectURL(selectedFile));
  // };
  
  const {navigate, axios, user, setUser, loading,  setLoading} = useAppContext()
  const {theme} = useTheme();

  const logout = async() =>{
    setLoading(true)
  try {
    const {data} = await axios.post('/api/user/logout') 

    if(data.success){

       if(!user){
        toast.error("You are not logged in")
        setLoading(false)
        return;
      }
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
      setLoading(false)
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.error("Upload Error:", error);
    toast.error("Failed to upload image.");
  }
};


  return (
    <div className='min-h-screen '>
      <div className='flex p-5 px-2  border-b'>
         <NavLink to={"/"} onClick={() => scrollTo(0,0)} className='flex justify-center items-center md:gap-3 gap-2'>
                     {theme === "light" ? <img src={assets.logo} className=' h-10 w-10 rounded-full' alt='Logo'/>:
                     <img src={assets.darkLogo} className=' h-10 w-10 rounded-full' alt='Logo'/>}
                     <p className='text-xl font-semibold dark:text-white'>TimeAura</p>
                 </NavLink>  
      </div>
      <div className='mx-5 dark:text-white'>
        <div className='my-5  dark:bg-[#0F0F0F] dark:border-[#303030] border border-gray-200 px-5 py-4 rounded bg-[#5885AF]/30 items-center gap-5 flex '>

        { !loading ? <label htmlFor="image">
    <input type="file" id="image" onChange={handleUpload} hidden/>
      {user && user.image ? (<img
    className="w-16 h-16 object-cover rounded-full border cursor-pointer "
     src={file instanceof File ? URL.createObjectURL(file) : user.image}
    alt="Profile"
  />) : (
    <img 
    className="w-16 h-16 rounded-full border cursor-pointer"
    src={file instanceof File ? URL.createObjectURL(file) : assets.profile} />
  )}

</label> :
<div className=" border-2 aspect-square w-5 rounded-full
         border-white border-t-transparent border-r-0
          animate-spin"></div>
}
          <p className='text-xl flex flex-col'>{user ? (user.name).toUpperCase() : "GUEST"}
            <span className='text-sm'>{user ? (user.email) : null}</span>
          </p>
        </div>


        <div className=' rounded   dark:bg-[#0F0F0F] dark:border-[#303030] border border-gray-200 bg-[#5885AF]/30 mt-10 p-2'>
          <div className='flex dark:text-gray-300 '>
            <NavLink to={'/my-orders'}
          className='text-base w-[50vh] m-2 p-2 shadow-xl  rounded border  border-gray-600 flex items-center max-w-sm  gap-2'>
            <span className='text-2xl'>< LuBox/></span>
            Orders</NavLink>

          <NavLink className='text-base w-[50vh] m-2 p-2 rounded shadow-xl gap-2 border flex items-center  border-gray-600'>
           <span className='text-2xl'>< FaRegHeart/></span>
           Wishlist</NavLink>
          </div>

          <div className='flex  dark:text-gray-300 '>
            <NavLink
            className='text-base text w-[50vh] m-2 p-2 shadow-xl rounded flex border border-gray-600 items-center gap-2'>
            <span className='text-xl'>< HiGift/></span>
            Coupons</NavLink>

          <NavLink className='text text-base w-[50vh] m-2 p-2 rounded shadow-xl flex border border-gray-600 items-center gap-2'>
           <span>< ImHeadphones/></span>
           Help Center</NavLink>
          </div>

            <NavLink
            to={'/admin'}
            className='text-base  m-2 p-2 shadow-xl justify-center rounded flex border dark:text-gray-300  border-gray-600 items-center gap-2'>
            <span className='text-2xl'>< FaUserAlt/></span>
            Become Seller</NavLink>
        </div>

        <div onClick={logout} className='text-white dark:bg-red-700 p-3 flex w-full justify-center items-center gap-5 mt-10  text-center rounded  bg-[#274472]'>
          logout
          {loading && ( <div className=" border-2 aspect-square w-5 rounded-full
         border-white border-t-transparent border-r-0
          animate-spin"></div>)}
        </div>
      </div>

    </div>
  )
}


export default UserDetails
