import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";

 const Load = () => {
    const {showSplash, setShowSplash} = useAppContext()
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000); // 2 sec me gayab
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#C3E0E5] flex items-center justify-center">
      {/* Splash Screen */}
      {showSplash && (
        <div className="fixed inset-0 bg-[#C3E0E5] flex items-center justify-center z-50 animate-fade">
            <img src={assets.logo} className=' h-10 w-10 rounded-full' alt="" />
          <h1 className="text-4xl font-bold text-gray-900 ">
            TimeAura
          </h1>
        </div>
      )}
{/* 
      Actual Website Content
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to My Website 🎉</h2>
        <p className="mt-2 text-gray-600">
          Ye content splash ke baad show hoga.
        </p>
      </div> */}
    </div>
  );
}

export default Load;