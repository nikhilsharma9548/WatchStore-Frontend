import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";
import { useTheme } from "../Context/ThemeContext";

 const Load = () => {
 const { showSplash, setShowSplash } = useAppContext();
 const {theme} = useTheme();

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("splashShown");

    if (!alreadyShown) {

      sessionStorage.setItem("splashShown", "true");
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
    

      setShowSplash(false);
    }
  }, [setShowSplash]);

  if (!showSplash) return null; 
  
  return (
    <div className="relative min-h-screen bg-[#C3E0E5] dark:bg-[#181818] flex items-center justify-center z-50">
      {/* Splash Screen */}
      {showSplash && (
        <div className="fixed inset-0 bg-[#C3E0E5] dark:bg-[#181818]  flex items-center justify-center z-50 animate-fade">
            <img src={theme === "light" ? assets.logo : assets.darkLogo } className=' h-10 w-10 rounded-full' alt="" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white   ">
            TimeAura
          </h1>
        </div>
      )}
    </div>
  );
}

export default Load;