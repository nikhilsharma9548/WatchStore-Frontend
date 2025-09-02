import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { useAppContext } from '../Context/AppContext'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const AllProducts = () => {
    const {products, searchQuery,} = useAppContext()
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
   
    <div className='mt-32 md:px-10 px-3 flex flex-col pb-10'>
        <div className='flex flex-col items-end w-max'>
          <p className='text-3xl '>All Products</p>
          <div className='w-16  h-0.5 bg-pink-800 rounded-full'></div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>
          { filteredProduct.filter((product) =>product.inStock).map((product, index) =>(
            <ProductCard key={index} product={product}/>
          ))}

          
        </div>

    </div>
   </>
  )
}

export default AllProducts;