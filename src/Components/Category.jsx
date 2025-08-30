import React from 'react'
import { assets, categories } from '../assets/assets'
import { useContext } from 'react'
import {useAppContext} from '../Context/AppContext'


const Category = () => {
  const{navigate} = useAppContext()

  return (
   <>
     <div className=' px-5 md:px-10 pb-20 ' >
        <p className='text-3xl border-b-2 w-44 pb-2'>Category</p>

        <div className='flex gap-5 sm:flex mt-10'>

          {categories.map((category, index) =>(
          <div key ={index}  className= " group cursor-pointer  max-w-32  py-5 px-3 gap-2 rounded-lg flex flex-col justify-between items-center"
          style = {{backgroundColor: category.bgColor}}
          onClick={() =>{
            navigate(`/products/${category.path.toLowerCase()}`);
            scrollTo(0,0)
          }}
          >
            <img src={category.image} alt={category.text} className = "group-hover:scale-108 transition duration-300 max-w-16" />
            <p className = "text-sm text-center font-medium">{category.text}</p> 
          </div>))}
        </div>
        
    
    </div>
   </>
  )
}

export default Category