import React, { useEffect, useState } from 'react'
import { useAppContext } from '../Context/AppContext'
import Loading from '../Components/Loading'
import toast from 'react-hot-toast'

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([])
    const {currency, axios, user, loading, setLoading} = useAppContext()

    const fetchMyOrders = async() =>{

        try {
            setLoading(true)
            const { data } = await axios.get('/api/order/user')

            if(data.success){
                setMyOrders(data.orders)
                setLoading(false)

            }else{
                console.error(data.message)
            }
        } catch (error) {
            console.log(error        
            )
        }
    }

  const cancelOrder = async (orderId) => {
    try {
        const response = await axios.post("/api/order/cancel", { orderId });
        const data = response.data;

        if (data.success) {
            toast.success(data.message);

            // Frontend state update: remove or mark cancelled
            setMyOrders(prev => prev.map(order =>
                order._id === orderId ? { ...order, status: "Cancelled" } : order
            ));

        } else {
            toast.error(data.message);
        }
    } catch (error) {
        console.error(error);
        toast.error("Error cancelling order");
    }
};



    useEffect(() =>{
        if(user){
      fetchMyOrders()
        }
    },[user])

  return (
    <>
        { !loading ? (<div className={`mt-24 md:px-20 px-10 pb-16 ${myOrders.length === 0 && "h-[70vh]"}`}>
        <div className='flex flex-col items-end w-max mb-8'>
            <p className='text-3xl'>My Orders</p>
            <div className='w-16  h-0.5 bg-[#274472] rounded-full'></div>
        </div>
        {myOrders.length === 0 && <div className='text-gray-500 text-lg'>You have no orders yet.</div>}
        
        {myOrders.map((order, index) =>(
            <div key={index} className='border bg-cyan-50 border-gray-300 rounded-lg mb-10 p-2 md:p-4 py-5 max-w-4xl'>
                <p className='flex justify-between md:items-center text-gray-700 max-w-4xl
                md:font-medium max-md:flex-col'>
                    <span>OrderId :{order.orderId}</span>
                    <span>Payment : {order.paymentType}</span>
                    <span>Total Amount : {currency}{order.amount}</span>
                </p>
                {order.items.map((item, index) =>(
                    <div key={index} className={`relative  text-gray-500/70 ${
                        order.items.length !== index + 1 && "border-b" 
                    } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4
                        py-5 md:gap-16 w-full max-w-4xl `}>

                        <div className='flex items-center mb-4 md:mb-0'>
                         <div className='bg-white shadow shadow-gray-300 p-4 rounded-lg'>
                          <img src={item.product.image} alt="" className='w-16 h-24'/>
                         </div>

                         <div className='ml-4'>
                            <h2 className='text-xl text-gray-800'>{item.product.name}</h2>
                            <p>{item.product.category}</p>
                         </div>
                        </div>

                        <div className='text-green-400 flex flex-col justify-center md:ml-8 mb-4 md:mb-0 '>
                            <p>Quantity : {item.quantity || 1}</p>
                            <p>Status : {order.status || 1}</p>
                            <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                        </div>
                        <p className='text-green-400 text-xl'>Amount: {currency}{item.product.offerPrice * item.quantity}</p>
                    </div>
                ))}
                <button  onClick={() => cancelOrder(order._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mt-2">Cancel</button>
            </div>

        ))}
    </div>) : <Loading />}
    </>
  )
}

export default MyOrders