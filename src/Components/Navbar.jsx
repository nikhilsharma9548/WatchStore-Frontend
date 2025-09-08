import React, { useRef, useState, useEffect, useContext } from 'react'
import { assets, imageSlider } from '../assets/assets'
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { useAppContext } from '../Context/AppContext';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HiGift } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { ImHeadphones } from "react-icons/im";
import { LuBox } from "react-icons/lu";


const Navbar = () => {

    const[isScrolled, setIsScrolled] = useState(false)

    const {navigate ,setShowUserLogin, searchQuery, user, setSearchQuery,getCartCount, axios, setUser, getCartAmount} = useAppContext();

    //change the navbar color
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) { // 50px se zyada scroll par color change
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // search functionality
  useEffect(() =>{

    if (searchQuery.length > 0) {
      navigate("/products")
    }
  },[searchQuery])

// logout User 

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
const [menu, setMenu] = useState(false)

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
 <>
    <div className={`flex justify-between md:p-5 p-2 items-center h-20 w-full fixed  top-0 left-0 z-50
       ${!isScrolled ? "bg-transparent" : "bg-gray-300"}`}>
      
        {/* Navbar for desktop View */}

        <NavLink to={"/"} onClick={() => scrollTo(0,0)} className='flex justify-center items-center md:gap-3 gap-2'>
            <img src={assets.logo} className=' h-10 w-10 rounded-full' alt='Logo'/>
            <p className='text-xl font-semibold'>TimeAura</p>
        </NavLink>  

        <div className='hidden md:flex'>   
            <ul className=' activeLink flex justify-between items-center gap-7 text-lg '>

                <NavLink className='hover:text-pink-800 transition-all duration-300 cursor-pointer' 
                to={'/'}onClick={() => scrollTo(0,0)}>Home</NavLink>
                <a className='hover:text-pink-800 transition-all duration-300 cursor-pointer'href='#features'onClick={() => navigate('/')}>features</a>
                <NavLink className='hover:text-pink-800 transition-all duration-300 cursor-pointer' 
                to={'/products'}onClick={() => scrollTo(0,0)}>Products</NavLink>  
                <a className='hover:text-pink-800 transition-all duration-300 cursor-pointer' 
                href='#testimonials'onClick={() => navigate('/')}>Testimonials</a>  

            </ul>           
        </div>

         <div className='flex items-center md:gap-5 gap-2  px-0 text-gray-700'>

          {/* search Bar */}
            <div className="hidden max-w-96 xl:min-w-96 lg:flex items-center text-base gap-2 border-2 border-gray-600 px-3 rounded-full">
                <input
                value={searchQuery} 
                onChange={(e)=> setSearchQuery(e.target.value)} className="py-2.5 w-full bg-transparent outline-none px-3 " type="text" placeholder="Search products" />
                <p className='text-xl  cursor-pointer '>< CiSearch/></p>
            </div>

            {/* cart section */}

            <div onClick={() => {navigate('/cart'); scrollTo(0,0)}} className="relative cursor-pointer px-5">
               <p className='text-2xl'> < LuShoppingCart/> </p>
               <button className="absolute -top-2 right-1 text-xs text-white bg-pink-800 w-[18px] h-[18px]
                rounded-full">{getCartCount()}</button>
            </div>
                        
               {!user ? (<div className='group'>
                   <button onClick={() => setShowUserLogin(true)}
                    className='bg-pink-800 flex justify-center items-center gap-2 text-white px-5 py-2 cursor-pointer
                    hover:bg-pink-900 rounded transition-all duration-300'>login 
                  </button>
                </div>) : (

                  <div className='relative flex flex-col cursor-pointer'>

                    <img src={user.image ? user.image : assets.profile} className='w-10 h-10 rounded-full' onClick={() =>setMenu(!menu)}/>

                    {menu && (<div className='hidden   md:flex flex-col gap-5 h-96 w-72 rounded-xl p-5 bg-white  absolute top-10 right-0'>
                     <div className='flex gap-3  items-center'>
                      <label htmlFor="image">
                          <input type="file" id="image" onChange={handleUpload} hidden/>
                            {user && user.image ? (<img
                          className="w-16 h-16 rounded-full border cursor-pointer "
                           src={file instanceof File ? URL.createObjectURL(file) : user.image}
                          alt="Profile"
                        />) : (
                          <img 
                          className="w-16 h-16 rounded-full border cursor-pointer"
                          src={file instanceof File ? URL.createObjectURL(file) : assets.profile} />
                        )}
                      </label>
                  <ul className='flex flex-col text-sm'>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                  </ul>
                     </div>

                      <div className='px-2 
                     py-2 rounded-md text-sm flex flex-col gap-3.5 h-full'>
                      <NavLink to={'/my-orders'}
                      onClick={() => {setMenu(false)}}
                       className='rounded cursor-pointer  flex items-center gap-2 py-2 px-1.5 shadow-lg  bg-gray-300'>
                        <span className='text-xl'><LuBox/></span>
                        My Orders</NavLink>
                        <p  className='rounded cursor-pointer  flex items-center gap-2 py-2 px-1.5 shadow-lg  bg-gray-300'>
                          <span>< FaRegHeart/></span>Wishlist</p>
                       <p  className='rounded cursor-pointer  flex items-center gap-2 py-2 px-1.5 shadow-lg  bg-gray-300'>
                          <span>< HiGift/></span>Coupons</p>
                        <p  className='rounded cursor-pointer  flex items-center gap-2 py-2 px-1.5 shadow-lg  bg-gray-300'>
                          <span>< ImHeadphones/></span>Help Center</p>
                    </div>
                    <button onClick={logout} className='p-1.5 bg-pink-700 rounded cursor-pointer'>logout</button>
                    </div>)}
                      
                  </div>
                )}
         </div>

    </div>

</>
  )
}

export default Navbar