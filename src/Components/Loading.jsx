import React, { useEffect } from 'react'
import { assets } from '../assets/assets';
import { useAppContext } from '../Context/AppContext';
import { useLocation } from 'react-router-dom';

const Loading = () => {

  const {navigate} = useAppContext();
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const nextUrl = query.get("next");

  useEffect(() => {
    if(nextUrl){
      setTimeout(() => {
        navigate(`/${nextUrl}`);
      }, 5000);
    }
  })
    return (
    <div className='inset-0 z-50 items-center 
    flex justify-center w-full min-h-screen bg-[#C3E0E5] dark:bg-[#0D0D11]'>

      <div className=" flex flex-col gap-5  items-center justify-center">
        <div className=" border-4  aspect-square w-14 rounded-full
         border-t-transparent  dark:border-t-transparent dark:border-white  border-[#274472]  inset-0
          animate-spin">
        </div>

      </div>
    </div>
    )
};

export default Loading;