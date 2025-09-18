import React, { useEffect, useState } from 'react'
import { useAppContext } from '../Context/AppContext'
import { Link, useParams } from 'react-router-dom'
import { MdStarRate } from "react-icons/md";
import ProductCard from '../Components/ProductCard';

const ProductDetails = () => { 

    const {products,currency, addToCart, navigate} = useAppContext()
    const{id} = useParams()

    const product  = products.find((item) => item._id === id);

const [relatedProducts, setRelatedProducts] = useState([]);
const [thumbail, setThumbail] = useState(null);

    useEffect(() => {
  if (product && products.length > 0) {
    let productsCopy = products.slice();
    productsCopy = productsCopy.filter((item) => product.category === item.category);

    setRelatedProducts(productsCopy.slice(0, 5));   // 0.5 ko 0,5 karo
  }
}, [products, product]);

useEffect(() => {
  setThumbail(product?.image  ? product.image : null);
}, [product]);

    
  return product &&(
    <>
             <div className='mt-32 md:px-20 px-5'>
            
 <div className="max-w-4xl w-full px-6 flex flex-col">
            <p className='dark:text-white'>
                <Link to={"/"} className='text-blue-800 underline text-xl dark:text-gray-500'>Home</Link> /
                <Link to={"/products"} className='text-blue-800 underline text-xl dark:text-gray-500'> Products</Link> /
                <Link to={`/products/${product.category.toLowerCase()}`} 
                className='text-blue-800 dark:text-gray-500 underline text-xl'> {product.category}</Link> /
                <span className="text-xl">{product.name}</span>
            </p>

            <div className="flex flex-col md:flex-row md:gap-16 gap-5 mt-4">
                <div className="flex gap-3">
                  
                    <div className="border border-gray-500/30 max-w-60 rounded overflow-hidden">
                        <img src={thumbail} alt="Selected product" className="w-full h-full object-cover" />
                    </div>
                </div>
                {/* details fo products */}

                <div className="text-sm w-full md:w-1/2 md:bg-transparent bg-white dark:text-white p-5">
                    <h1 className="text-3xl font-medium">{product.name}</h1>

                    <div className="flex items-center gap-0.5 ">
                                        {Array(5).fill('').map((_, i) => (
                                             4 > i ? (
                                                <p key={i} className="text-[#274472] dark:text-white"><MdStarRate/></p>
                                            ) : (
                                                <p key={i} className="text-[#274472]/40 dark:text-gray-400"><MdStarRate/></p>
                                            )
                    
                                        ))}
                                        <p>({4})</p>
                                    </div>

                    <div className="mt-6  dark:text-white">
                        <p className="text-gray-800 dark:text-gray-200 line-through">MRP: {currency}{product.price}</p>
                        <p className="text-2xl font-medium">MRP:{currency}{product.offerPrice}</p>
                        <span className="text-gray-800 dark:text-gray-200">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                   <ul className="list-disc ml-4 text-gray-800">
                      {(product.discription ?? []).map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button
                        onClick={() =>addToCart(product._id)}
                        className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button
                        onClick={() =>{addToCart(product._id); navigate('/cart')}}
                        className="w-full py-3.5 cursor-pointer font-medium bg-[#274472] text-white hover:bg-[#274472]/80 transition " >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* related products */}

        <div className='flex flex-col mt-[119px]'>
          <div className=' flex flex-col items-end w-max '>
            <p className='text-3xl dark:text-gray-100 '>Related Products</p>
            <div className='w-20 h-0.5 bg-[#274472] dark:text-gray-200 rounded-full'></div>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6 w-full'>
            {relatedProducts.filter((product) => product.inStock).map((product, index) =>(
              <ProductCard key={index} product={product}/>
            ))}
          </div>

          <button onClick={() => {navigate('/products'); scrollTo(0,0)}} 
          className='mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded 
          text-[#274472] dark:gray-200   hover:text-blue-600 dark:hover:text-white transition'>See More</button>
        </div>
    </div>
    </>
  )
}

export default ProductDetails