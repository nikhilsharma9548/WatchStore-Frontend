import { useEffect, useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast";
import Loading from "../Components/Loading";

const Cart = () => {
    

    const {products, currency, cartItems, setCartItems, loading,
        removeFromCart, getCartCount, updateCartItem, setLoading,
        navigate, getCartAmount, axios, user,  setShowUserLogin} = useAppContext()

    const [cartArray, setCartArray] = useState([])
    const [addresses, setAddresses] = useState([])
    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setSelectedAddess] = useState(null)
    const [paymentOption, setPaymentOption] = useState("COD")


    const getCart = () =>{
        let tempArray = []

        for (const key in cartItems){
            const product = products.find((item) => item._id === key)
            product.quantity = cartItems[key]
            tempArray.push(product)
        }
        setCartArray(tempArray)
    }

    //

    const getUserAddress = async() =>{
        try {
            const{ data } = await axios.get('/api/address/get');

            if(data.success){
                setAddresses(data.addresses)
                if(data.addresses.length > 0){
                    setSelectedAddess(data.addresses[0])
                }else{
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error.message)
        }

    }

    const placeOrder =  async() =>{
        try {
            if(!selectedAddress || !user){
                setShowUserLogin(true)
                return toast.error("please Login and add address")
                }
                //place order with COD
                if(paymentOption === "COD"){
                    const { data } = await axios.post('api/order/cod',{
                        userId: user._id,
                        items:cartArray.map(item => ({
                            product: item._id,
                            quantity:item.quantity
                        })), address: selectedAddress._id
                    })
                    if(data.success){
                        toast.success(data.message)
                        setCartItems({})
                        setLoading(false)
                        navigate('/my-orders')
                    }else{
                        toast.error(data.message)
                        console.error(data.message)
                    }
                }
        } catch (error) {
            toast.error(error.message)
        }

    }

    useEffect(() =>{
        if(products.length > 0 && cartItems){
            getCart()
        }

    }, [products, cartItems])

    useEffect(() =>{
        if(user){
            getUserAddress();
        }
    },[user])


    return products.length > 0 && cartItems ?(
       <>
       {!loading ? (<div className="mt-20 ">
         <div className="  flex flex-col md:flex-row py-16  max-w-6xl w-full px-6 mx-auto">
            <div className='flex-1 max-w-4xl px-5'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-pink-500">{getCartCount()}</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3 ">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartArray.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] bg-white pb-5 rounded mb-1 text-gray-500 items-center text-sm md:text-base font-medium pt-3 ">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div onClick={() =>{navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} className="cursor-pointer w-24 h-24 flex items-center justify-center rounded overflow-hidden">
                                <img className="max-w-full h-full object-cover" src={product.image[0]} alt={product.name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    <div className='flex items-center'>
                                        <p>Qty:</p>
                                        <select onChange={e => updateCartItem(product._id, Number(e.target.value)) } 
                                        value= {cartItems[product._id]}
                                        className='outline-none'>
                                            {Array(cartItems[product._id] > 9 ? cartItems[product._id] : 9 ).fill('').map((_, index) => (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">{currency}{product.offerPrice * product.quantity}</p>
                        <button onClick={() => removeFromCart(product._id)} className="cursor-pointer mx-auto">
                            <p className="text-xl text-pink-700"><ImCross /> </p>
                        </button>
                    </div>)
                )}

                <button onClick={()=>{navigate('/products'); scrollTo(0,0)}} className="group cursor-pointer flex items-center mt-8 gap-2 text-pink-600 font-medium">
                    <p className="hover:-translate-x-1 transition">< FaArrowLeftLong/></p>
                    Continue Shopping
                </button>

            </div>

                {/* right side order summary */}
            <div className={` max-w-[360px] w-full shadow-xl p-5 max-md:mt-16 border bg-gray-100 border-gray-300/70`}>
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">{selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}` : "No address found"}</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-pink-700 hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                                {addresses.map((address, index) =>(
                                    <p key={index} onClick={() => { setSelectedAddess(address); setShowAddress(false)}} className="text-gray-500 p-2 hover:bg-gray-100">
                                   {address.street}, {address.city}, {address.state},
                                   {address.country},
                                </p>))}
                                <p onClick={() => navigate('/add-address')} className="text-pink-600 text-center cursor-pointer p-2 hover:bg-pink-600/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select onChange={e => setPaymentOption(e.target.value)} className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{currency}{getCartAmount()}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>{currency}{getCartAmount() * 2 / 100}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>{currency}{getCartAmount() + getCartAmount() * 2 / 100}</span>
                    </p>
                </div>

                <button onClick={placeOrder} className="w-full py-3 mt-6 cursor-pointer bg-pink-700 text-white font-medium hover:bg-pink-800 transition">
                    {paymentOption === "COD" ? "Placed Order" : "Proceed to CheckOut"}
                </button>
            </div>
        </div>
       </div>) : <Loading/>}
       </>
    ) : null
}

export default Cart;