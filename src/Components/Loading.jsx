import React from 'react'

const Loading = () => {
  return (
    <div className='inset-0 z-50 bg-black/40 min-h-screen items-center flex justify-center w-full'>
      <div className=" flex items-center justify-center duration-500 ">
        <div className=" border-5  aspect-square w-14 rounded-full border-blue-500 border-t-gray-300 duration-700 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;