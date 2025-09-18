import {useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { useAppContext } from '../Context/AppContext'
import { CiSearch } from "react-icons/ci";

import Loading from '../Components/Loading'

const AllProducts = () => {
    const {products, searchQuery,loading, setSearchQuery} = useAppContext()
    const [filteredProduct, setFilterProduct,] = useState([])

    useEffect(() =>{

      if (searchQuery.length > 0) {
          setFilterProduct(products.filter(
            product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
          ))} else {
            setFilterProduct(products)
          }

    },[products, searchQuery])


  return (
   <>
   
   {!loading ? ( <div className='mt-32 md:px-10 px-3  flex flex-col pb-10'>
        <div className='flex flex-col items-end w-max dark:text-gray-200'>
          <p className='text-3xl '>All Products</p>   
          <div className='w-16  h-0.5 bg-[#274472] dark:bg-gray-300 rounded-full'></div>
        </div>

         <div className="lg:hidden dark:text-white dark:border-gray-100 max-w-96 mt-5 flex 
         items-center text-base gap-2 border-2 border-gray-800 px-3 rounded-full">
                          <input
                          value={searchQuery} 
                          onChange={(e)=> setSearchQuery(e.target.value)}
                           className="py-2.5 w-full bg-transparent  outline-none px-3 " 
                           type="text" placeholder="Search products" />
                          <p className='text-xl  cursor-pointer '>< CiSearch/></p>
                      </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>
          { filteredProduct.filter((product) =>product.inStock).map((product, index) =>(
            <ProductCard key={index} product={product}/>
          ))}

          
        </div>

    </div>) : <Loading/>}
   </>
  )
}

export default AllProducts;