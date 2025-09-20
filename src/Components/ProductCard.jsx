import React, { useContext } from "react";
import { MdStarRate } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useAppContext } from "../Context/AppContext";
import { AnimatePresence, motion } from "motion/react";
import Loading from "./Loading";

const ProductCard = ({product}) => {

    const {currency, addToCart, removeFromCart, cartItems, navigate, loading} = useAppContext()


    return product && (
       <>
       {!loading ?
       ( <AnimatePresence>
        <motion.div 
         initial ={{opacity:0, scale:0.7 }}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.7}}
        onClick={() => {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}}
          className="border  dark:bg-[#0F0F0F] dark:border-[#303030] border-gray-500/20 rounded-md md:px-4 px-3 py-2 flex justify-between
           flex-col bg-white   w-full shadow-lg shadow-gray-700 dark:shadow-none">

            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-24 md:max-w-36" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 dark:text-grey-200 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 dark:text-gray-200 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                         4 > i ? (
                            <p key={i} className="text-[#274472] dark:text-gray-200"><MdStarRate/></p>
                        ) : (
                            <p key={i} className="text-[#274472]/40 dark:text-gray-500/25"><MdStarRate/></p>
                        )

                    ))}
                    <p>({4})</p>
                </div>
                <div onClick={(e) =>{e.stopPropagation(); }} className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-[#274472] dark:text-gray-200">
                        {currency}{product.offerPrice} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
                    </p>
                    <div className="text-[#274472] dark:text-gray-200">
                        {!cartItems[product._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-[#274472]/40 dark:bg-gray-200/25 dark:text-gray-300/30  dark:border-gray-400 border border-[#274472]/60 md:w-[80px] w-[64px] h-[34px] rounded text-[#274472] font-medium cursor-pointer" onClick={() => addToCart(product._id)} >
                                <p><IoCartOutline/></p>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] dark:bg-gray-200/25 dark:text-gray-300/30  dark:border-gray-400 border border-[#274472]/60 md:w-[80px] w-[64px] h-[34px] rounded text-[#274472] font-medium cursor-pointer" onClick={() => addToCart(product._id)} >
                            
                                <button onClick={() => {removeFromCart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button onClick={() => {addToCart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
        </AnimatePresence>) : <Loading/>}
       </>
    );
};

export default  ProductCard;
