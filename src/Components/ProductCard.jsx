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
        onClick={() => {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}}  className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 flex justify-between flex-col bg-white  w-full shadow-lg shadow-gray-700">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-24 md:max-w-36" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                         4 > i ? (
                            <p key={i} className="text-pink-700"><MdStarRate/></p>
                        ) : (
                            <p key={i} className="text-pink-300/80"><MdStarRate/></p>
                        )

                    ))}
                    <p>({4})</p>
                </div>
                <div onClick={(e) =>{e.stopPropagation(); }} className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-pink-700">
                        {currency}{product.offerPrice} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
                    </p>
                    <div className="text-pink-700">
                        {!cartItems[product._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-pink-100 border border-pink-300 md:w-[80px] w-[64px] h-[34px] rounded text-pink-600 font-medium cursor-pointer" onClick={() => addToCart(product._id)} >
                                <p><IoCartOutline/></p>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-pink-500/25 rounded select-none">
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