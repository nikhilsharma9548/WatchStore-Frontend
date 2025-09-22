import React from 'react'
import {categories } from '../assets/assets'
import {useAppContext} from '../Context/AppContext'
import { AnimatePresence, motion} from "motion/react"


const Category = () => {
  const{navigate} = useAppContext()

  return (
   <>
     <div className=' px-2 md:px-10 pb-20' >
        <p className='text-3xl border-b-2 w-44 pb-2 dark:text-gray-200'>Category</p>

        <div className='flex gap-5 mt-10 '>
          <AnimatePresence>
          {categories.map((category, index) =>(
          <motion.div 
            initial ={{opacity:0, scale:0.7 }}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.3}}
          key ={index}  
           onClick={() =>{
            navigate(`/products/${category.path.toLowerCase()}`);
            scrollTo(0,0)
          }}
          className= "group cursor-pointer dark:border bg-white dark:text-white dark:bg-[#0F0F0F] dark:border-[#303030] w-40 py-5 px-3 gap-2 rounded-lg flex flex-col justify-between items-center dark:shadow-none shadow-gray-600 shadow-lg"
          >
            <img src={category.image} alt={category.text} className = "group-hover:scale-108 transition duration-300 sm:max-w-16 max-w-10 " />
            <p className = "text-sm text-center font-medium">{category.text}</p> 
          </motion.div>))}
          </AnimatePresence>
        </div>
        
    
    </div>
   </>
  )
}

export default Category