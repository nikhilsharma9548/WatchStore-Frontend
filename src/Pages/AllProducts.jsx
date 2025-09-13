import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { useAppContext } from '../Context/AppContext'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
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
   
   {!loading ? ( <div className='mt-32 md:px-10 px-3 flex flex-col pb-10'>
        <div className='flex flex-col items-end w-max'>
          <p className='text-3xl '>All Products</p>   
          <div className='w-16  h-0.5 bg-[#274472] rounded-full'></div>
        </div>

         <div className="hidden max-w-96 xl:min-w-96 lg:flex items-center text-base gap-2 border-2 border-gray-800 px-3 rounded-full">
                          <input
                          value={searchQuery} 
                          onChange={(e)=> setSearchQuery(e.target.value)} className="py-2.5 w-full bg-transparent  outline-none px-3 " type="text" placeholder="Search products" />
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