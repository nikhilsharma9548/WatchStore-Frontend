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
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");
    
    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

   const handleUpload = async () => {
    if (!file) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("/api/upload-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}` // agar auth lagaya hai
        }
      });
       setUploadedUrl(res.data.imageUrl); // jo Cloudinary se URL aya usse state me save
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload failed", error);
    }
  };
  

  const {navigate, axios, user, setUser} = useAppContext()

  const logout = async() =>{
  try {
    const {data} = await axios.post('/api/user/logout') 

    if(data.success){
      toast.success(data.message)
      setUser(null);
      navigate('/')
    }else{
      toast.error(data.message)
    }
  } catch (error) {
     toast.error(error.message)
  } 
} 

  return (
    <div className='min-h-screen'>
      <div className='flex p-5 px-2 border-b'>
         <NavLink to={"/"} onClick={() => scrollTo(0,0)} className='flex justify-center items-center md:gap-3 gap-2'>
            <img src={assets.logo} className=' h-10 w-10 rounded-full' alt='Logo'/>
            <p className='text-xl font-semibold'>TimeAura</p>
        </NavLink>
      </div>

      <div className=''>

        <div className="p-4">
      <h2 className="text-lg font-bold">Upload Profile Image</h2>

      {/* Image preview before upload */}
      {preview && <img src={preview} alt="preview" className="w-32 h-32 rounded-full my-2" />}

      {/* File input */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      <button 
        onClick={handleUpload} 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Upload
      </button>

      {/* Uploaded image from Cloudinary */}
      {uploadedUrl && (
        <div className="mt-4">
          <p className="text-green-600">Uploaded Image:</p>
          <img src={uploadedUrl} alt="uploaded" className="w-32 h-32 rounded-full border" />
        </div>
      )}
    </div>  
        {/* <div className='mx-3 my-5 px-5 rounded h-24 bg-gray-300/90 items-center flex '>

          <label htmlFor="image">
             <input
                onChange={handleFileChange}
                accept="image/*"
                type="file"
                id="image"
                hidden
             />
              <img
              className="w-16 cursor-pointer rounded-full border border-gray-500"
              src={file && file instanceof File ? URL.createObjectURL(file) : assets.profile}
              width={100}
              height={100}
                        />
              <p className='absolute text-2xl left-20 top-40 text-gray-700'>{file && file instanceof File ? null : < FaPlus/>}</p>
          </label>

          <p className='text-xl px-3'>{user ? (user.name).toUpperCase() : "GUEST"}</p>
          
        </div> */}
        <div className='m-4 rounded bg-gray-300/90 p-2'>

          <div className='flex'>
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
           Help Center</NavLink>
          </div>

            <NavLink
            to={'/admin'}
            className='text-base m-2 p-2 shadow-xl justify-center rounded flex border border-gray-600 items-center gap-2 text-gray-800'>
            <span className='text-2xl'>< FaUserAlt/></span>
            Become Seller</NavLink>
        </div>

        <p onClick={logout} className='p-3 text-center mx-3.5 rounded  bg-pink-700 '>logout</p>
      </div>

    </div>
  )
}

export default UserDetails