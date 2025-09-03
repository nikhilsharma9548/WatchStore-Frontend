import React from 'react'
import { useAppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';

const Loading = () => {
    return (
    <div 
      style={{ backgroundImage: `url(${assets.Bg2})` }}
    className='inset-0 z-50 bg-[#00BFBF] items-center 
    flex justify-center w-full '>

      <div className=" flex flex-col gap-5  items-center justify-center">
        <div className=" border-2  aspect-square w-14 rounded-full
         border-blue-600 border-t-[#00BFBF] inset-0  border-r-0 border-l-0
          animate-spin">
        </div>
        <p  className='font-sans'>Loading....</p>

      </div>
    </div>
    )
};

export default Loading;