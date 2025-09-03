import React, { useContext } from 'react'
import ProductCard from './ProductCard';
import { AppContext, useAppContext } from '../Context/AppContext';
import Loading from './Loading';

const Features = () => {
  const { products, loading } = useAppContext()

    return (
        <>
        {!loading ? (<div id='features' className='sm:px-10 px-5 scroll-mt-24'>
            <p className='text-3xl w-32 border-b-2'>Features</p>
            <div className='py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 '>

                {products.filter((product) =>product.inStock).slice(0,5).map((product, index) =>(
                     <ProductCard key={index} product={product}/>
                ))}

            </div>
        </div>) :<Loading/>}
        
        </>
    );
}

export default Features