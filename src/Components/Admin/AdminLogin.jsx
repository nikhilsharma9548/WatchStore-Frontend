import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../Context/Appcontext'

const AdminLogin = () => {

    const{isAdmin, setIsAdmin , navigate} = useAppContext()
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const onSubmitHandler = async(e) =>{
        e.preventDefault()
        setIsAdmin(true)
    }

    useEffect(() =>{
        if(isAdmin ){
            navigate("/admin")
        }
    },[isAdmin])
    
  return !isAdmin &&(
    <div className='min-h-screen bg-white top-0 bottom-0 left-0 right-0 z-50 flex items-center  justify-center text-sm text-gray-600'>
        <form onSubmit={onSubmitHandler} className='flex items-center text-sm text-gray-600 rounded-xl bg-gray-200'>
            <div className='flex flex-col gap-5 m-auto items-center p-8 py-12 min-w-80 sm:min-w-88 
            rounded-xl shadow-xl border border-gray-200'>
                <p className='text-2xl m-auto'><span className='text-pink-700'>Admin</span>Login</p>

                <div className='w-full'>
                    <p>email</p>
                    <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='border border-gray-700  w-full p-2 mt-1 outline-none'
                    required
                    />     
                </div>

                <div className='w-full'>
                    <p>Password</p>
                    <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className='border border-gray-700 w-full p-2 mt-1 outline-none'
                    required
                    />     
                </div>
                <button className='bg-pink-700 text-white w-full py-2 cursor-pointer '>Login</button>
            </div>



        </form>

    </div>
  )
}

export default AdminLogin