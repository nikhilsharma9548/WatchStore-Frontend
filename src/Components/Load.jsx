import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";

 const Load = () => {
    const {showSplash, setShowSplash} = useAppContext()
 const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("splashShown");

    if (!alreadyShown) {
      // First time visit → animation on
      setAnimate(true);
      localStorage.setItem("splashShown", "true");
    } else {
      // Next visits → no animation, just instantly show
      setAnimate(false);
    }

    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative min-h-screen bg-[#C3E0E5] flex items-center justify-center z-50">
      {/* Splash Screen */}
      {showSplash && (
        <div className="fixed inset-0 bg-[#C3E0E5] flex items-center justify-center z-50 animate-fade">
            <img src={assets.logo} className=' h-10 w-10 rounded-full' alt="" />
          <h1 className="text-4xl font-bold text-gray-900 ">
            TimeAura
          </h1>
        </div>
      )}
    </div>
  );
}

export default Load;