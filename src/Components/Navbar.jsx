import React, { useRef, useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { useAppContext } from '../Context/AppContext';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    // const[sideBar, setSideBar] = useState(false);
    const[isScrolled, setIsScrolled] = useState(false)

    const {navigate ,setShowUserLogin, searchQuery, setSearchQuery,getCartCount, getCartAmount} = useAppContext();

    // useEffect(() => {

    //   function handleClickOutside(event) {
    //     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
    //       setSideBar(false);
    //     }
    //   }

    //   if (sideBar) {
    //     document.addEventListener("mousedown", handleClickOutside);
    //   } else {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   }

    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   };
    // }, [sideBar, setSideBar, sidebarRef]);

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



  return (
 <>
    <div className={`flex justify-between md:p-5 p-2 items-center h-20 w-full fixed  top-0 left-0 z-50 ${!isScrolled ? "bg-transparent" : "bg-gray-300"}`}>

        {/* Navbar for desktop View */}

        <NavLink to={"/"} onClick={() => scrollTo(0,0)} className='flex justify-center items-center md:gap-3 gap-2'>
            {/* <p className='text-4xl md:hidden text-gray-600 font-light' onClick={() =>setSideBar(true)}>< IoReorderThreeSharp/></p> */}
            <img src={assets.logo} className=' h-10 w-10 rounded-full' alt='Logo'/>
            <p className='text-xl font-semibold'>watchStore</p>
        </NavLink>

        <div className='hidden md:flex'>
            <ul className=' activeLink flex justify-between items-center gap-7 text-lg '>
                <NavLink className='hover:text-pink-800 transition-all duration-300 cursor-pointer' to={'/'}onClick={() => scrollTo(0,0)}>Home</NavLink>
                <a className='hover:text-pink-800 transition-all duration-300 cursor-pointer'href='#features'onClick={() => navigate('/')}>features</a>
                <NavLink className='hover:text-pink-800 transition-all duration-300 cursor-pointer' to={'/products'}onClick={() => scrollTo(0,0)}>Products</NavLink>  
                <a className='hover:text-pink-800 transition-all duration-300 cursor-pointer' href='#testimonials'onClick={() => navigate('/')}>Testimonials</a>
                             
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

               
                
                <div className='group'>
                  <button onClick={() => setShowUserLogin(true)}
                    className='bg-pink-800 flex justify-center items-center gap-2 text-white px-5 py-2 cursor-pointer
                    hover:bg-pink-900 rounded transition-all duration-300'>login 
                    {/* <span className=' hover:rotate-180 transition-all duration-300'>< FaAngleDown/></span> */}
                  </button>
                  {/* <div className='hidden    opacity-0 group-hover:opacity-100 transition'>
                    <p>my-Orders</p>
                    <p>logout</p>
                  </div> */}
                </div>
         </div>

    </div>

    {/* for mobile view || SideBar

    <AnimatePresence>
    { sideBar &&
    <div className='fixed inset-0 bg-black/40 z-50 '>
        <motion.div className='md:hidden bg-gray-300 p-7 inset-0 w-72 fixed top-0 h-full z-40'
     initial ={{x: -900}}
     animate ={{x:-10}}
     exit={{x:-400}}
     transition={{duration:0.25}}
      ref={sidebarRef}
    >
        <p className='text-3xl'onClick={()=> setSideBar(false)}><RxCross2/></p>
        <div>
            <ul className='flex flex-col px-5 fixed gap-3 text-lg pt-20'>
                <a href='#home'>Home</a>
                <a href='#features'>features</a>
                <li onClick={() => navigate('/products')}>Product</li>   
                <li>Testimonials</li>             
            </ul>  
        </div>
    </motion.div>
    </div>}
    </AnimatePresence> */}
 </>


    
  )
}

export default Navbar