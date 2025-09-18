import React from 'react'
import { useAppContext } from '../Context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'

const ProducCategory = () => {

    const{products} = useAppContext()
    const {category} = useParams()
    const categoryLower = category.toLowerCase()


    const searchCategory = categories.find((item) => item.path.toLowerCase() === categoryLower)
const filteredProducts = products.filter((product) => product.category.toLowerCase() === categoryLower)
  return (
    <>  
    <div className='mt-32 mb-10'>

        { searchCategory && (
            <div className='flex flex-col dark:text-gray-100 items-end w-max'>
                <p className='text-3xl pl-10'>{searchCategory.text}</p>
                <div className='w-20  h-0.5 bg-[#274472] dark:bg-gray-200 rounded-full'></div>
            </div>
        )}

        {filteredProducts.length > 0 ? (

            <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 mt-6 md:px-20 px-5'>
                {filteredProducts.map((product) =>(
                    <ProductCard key={product._id} product={product}/>
                ))}

            </div>
        ):(
            <div className='flex items-center justify-center h-[60vh]'>
               <p className='tex-2xl font-medium'> no Products Found</p>
            </div>
        )}
  
    </div>
    </>
  )
}

export default ProducCategory