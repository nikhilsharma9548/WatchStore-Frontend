import React from 'react'
import { useState } from 'react';
import { useAppContext } from '../Context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {

    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

        const {setShowUserLogin, axios, navigate, setUser, loading, setLoading} = useAppContext();

    const onSubmitHandler = async(event) =>{

        try {

            event.preventDefault()
            setLoading(true)
            const {data} = await axios.post(`/api/user/${state}`,{name, email, password })

            if(data.success){
                setShowUserLogin(false)
                setUser(data.user) 
                setLoading(false)    
                toast.success(data.message)

            }else{
                toast.error(data.message)
            }
        } catch (error) {
             toast.error(data.message)
        }

    }


  return (
    <div  onClick={() =>setShowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center text-sm text-gray-600 bg-black/30  dark:text-white'>

         <form
         onSubmit={onSubmitHandler}
         onClick={(e) =>e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start 
         p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200
          bg-white dark:bg-[#0F0F0F] dark:border-[#303030] dark:text-white">

            <p className="text-2xl font-medium m-auto ">
                <span className="text-[#274472] dark:text-red-700">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#274472]" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} 
                value={email} placeholder="type here" 
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#274472]" type="email" required />
            </div>

            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#274472]" type="password" required />
            </div>
            <p className='underline cursor-pointer text-blue-700 dark:text-gray-200'>forget password</p>

            {state === "register" ? (
                <p>
                    Already have account? 
                    <span onClick={() => setState("login")} 
                    className="text-[#274472] dark:text-red-700  cursor-pointer"> click here</span>
                </p>
            ) : (
                <p>
                    Create an account? 
                    <span onClick={() => setState("register")} 
                    className="text-[#274472] dark:text-red-700 cursor-pointer"> click here</span>
                </p>
            )}

           <button className="bg-[#274472] dark:bg-red-700 dark:hover:bg-red-800 gap-5 flex 
            justify-center items-center hover:bg-[#274472]/80 transition-all text-white w-full 
            py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
                {loading && ( <div className=" border-2  aspect-square w-5 rounded-full
                border-white border-t-transparent border-r-0
                 animate-spin">
                </div>)}
            </button>

        </form>

    </div>
  )
}
export default Login
