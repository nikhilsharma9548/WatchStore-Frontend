import React from 'react'

const Loading = () => {
  return (
    <div className='inset-0 z-50 bg-black/40 min-h-screen items-center 
    flex justify-center w-full'>

      <div className=" flex flex-col gap-5  items-center justify-center">
        <div className=" border-5  aspect-square w-14 rounded-full
         border-blue-600 border-t-white border-r-0 border-l-0
          animate-spin">
        </div>
        <p  className='font-sans text-xl'>Loading....</p>

      </div>
    </div>
  );
};

export default Loading;