import { useEffect } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";

const Load = () => {
  const { showSplash, setShowSplash } = useAppContext();

  useEffect(() => {
    const alreadyShown = localStorage.getItem("splashShown");

    if (!alreadyShown) {
      // First time visit → show splash
      localStorage.setItem("splashShown", "true");

      const timer = setTimeout(() => setShowSplash(false), 2000);
      return () => clearTimeout(timer);
    } else {
      // Next visits → hide immediately
      setShowSplash(false);
    }
  }, []);

  if (!showSplash) return null; // splash hide hone ke baad kuch render mat karo

  return (
    <div className="fixed inset-0 bg-[#C3E0E5] flex items-center justify-center z-50 animate-fade">
      <img src={assets.logo} className="h-10 w-10 rounded-full" alt="" />
      <h1 className="text-4xl font-bold text-gray-900">TimeAura</h1>
    </div>
  );
};

export default Load;
