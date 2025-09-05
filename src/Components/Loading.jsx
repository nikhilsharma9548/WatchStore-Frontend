import React from 'react'
import { useAppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';

const Loading = () => {
    return (
    <div 
      style={{ backgroundImage: `url(${assets.Bg2})` }}
    className='inset-0 z-50 items-center 
    flex justify-center w-full min-h-screen '>

      <div className=" flex flex-col gap-5  items-center justify-center">
        <div className=" border-4  aspect-square w-14 rounded-full
         border-t-transparent  border-blue-500 inset-0  border-r-0 
          animate-spin">
        </div>
      </div>
    </div>
    )
};

export default Loading;