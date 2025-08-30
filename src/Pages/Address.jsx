import React, { useState } from 'react'
import { assets } from '../assets/assets'

 //input Field Components
    const InputField = ({type, placeholder, name, handleChange, address}) =>(
        <input className='w-full px-2 py-2.5 border border-gray-900 rounded outline-none text-gray-700 focus:border-pink-600 transition' 
        type= {type} 
        placeholder={placeholder}
        onChange={handleChange}
        value={address[name]}
        required
         />
    )

const Address = () => {

   const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
   })

   const handleChange = (e)=> {
    const {name, value} = e.target;

    setAddress((prevAddress) => ({
        ...prevAddress,
        [name] : value,
    }))
    console.log(address);  
   }

    const onSubmitHandler = async(e)=>{
        e.preventDefault();   // ✅ spelling fixed
        console.log(address); // check ki values aa rahi hain
    }

  return (
    <div className='mt-24 pb-24 md:px-40  px-5'>

        <div className='flex flex-col relative md:right-20 items-end w-max'>
            <p className='text-3xl'>Add Shipping <span className='text-pink-700'>Address</span></p>
            <div className='w-16  h-0.5 bg-pink-800 rounded-full'></div>
        </div>

         <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>

            <div className='flex-1 max-w-md'>
                <form 
                onSubmit={onSubmitHandler}
                className='space-y-3 mt-6 text-sm '>
                    <div className='grid grid-cols-2 gap-4'>
                        <InputField handleChange ={handleChange} address={address} name = "firstName" type = "text"
                        placeholder = "First Name"/>

                        <InputField handleChange ={handleChange} address={address} name = "lastName" type = "text"
                        placeholder = "Last Name"/>
                    </div>
                    <InputField handleChange ={handleChange} address={address} name ="email" type = "email"
                        placeholder = "Email address"/>

                    <InputField handleChange ={handleChange} address={address} name = "street" type = "text"
                        placeholder = "street"/>

                <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange ={handleChange} address={address} name = "city" type = "text"
                        placeholder = "city"/>

                        <InputField handleChange ={handleChange} address={address} name = "state" type = "text"
                        placeholder = "state"/>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange ={handleChange} address={address} name = "zipcode" type = "number"
                        placeholder = "zip code"/>

                        <InputField handleChange ={handleChange} address={address} name = "country" type = "text"
                        placeholder = "country"/>
                </div>
                        <InputField handleChange ={handleChange} address={address} name = "phone" type = "number"
                        placeholder = "Phone"/>

                        <button className='w-full mt-6 bg-pink-700 text-white py-3
                         hover:bg-pink-800 transtion cursor-pointer '>
                            Save Address
                        </button>


                </form>

            </div>
            <img src={assets.addAdress} alt="" />
         </div>



    </div>
  )
}

export default Address