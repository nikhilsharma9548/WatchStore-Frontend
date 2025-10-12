import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useAppContext } from '../Context/AppContext'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const ResetPassword = () => {

    const{loading, setLoading, theme} = useAppContext();
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [isEmailSent, setIsEmailSent] = useState('')
    const [otp, setOtp] =useState(0)
    const [isOtpSubmit, setIsOtpSubmit] = useState(false)

 
    const inputRefs = React.useRef([])
 
    const inputHandle = (e, index) =>{
         if(e.target.value.length > 0 && index < inputRefs.current.length - 1){
           inputRefs.current[index + 1].focus();
         }
    }
 
    const handleKeyDown = (e, index) =>{
           if(e.key === 'Backspace' && e.target.value === '' && index > 0){
              inputRefs.current[index - 1].focus();
           }
    }
 
    const handlePaste = (e) =>{
           const paste = e.clipboardData.getData('text')
           const pasteArray = paste.split('');
           pasteArray.forEach((char, index) => {
             if(inputRefs.current[index]){
               inputRefs.current[index].value = char;
             }
           });
    }
    
    const onSubmitEmail = async(e) =>{
      e.preventDefault();
      setLoading(true)
      try {
        const {data} = await axios.post('/api/user/send-reset-otp',{email})

        data.success ? toast.success(data.message)  : toast.error(data.message)
        data.success && setIsEmailSent(true)
        setLoading(false);
      } catch (error) {
        toast.error(error.message)
      }
    }

    const submitOtp = async(e) =>{
      e.preventDefault();
      setLoading(true)
      const otpArray = inputRefs.current.map(e => e.value)
      setOtp(otpArray.join(''))
      setIsOtpSubmit(true)
      setLoading(false)

    }

    const onSubmitNewPassword = async(e) =>{
      e.preventDefault();
      setLoading(true)

      try {
        const {data} = await axios.post('/api/user/reset-password',{
          email, otp, newPassword
        })
        data.success ? toast.success(data.message) : toast.error(data.message)
        data.success && navigate('/')
        setLoading(false)
      } catch (error) {
        toast.error(data.message)
      }

    }

  return (
    <>
     <div className='flex p-5 px-2  border-b'>
      <NavLink to={"/"} onClick={() => scrollTo(0,0)} className='flex justify-center items-center md:gap-3 gap-2'>
       <img 
  src={assets.logo} 
  className='logo h-10 w-10 rounded-full dark:hidden' 
  alt='Logo Light' 
/>
<img 
  src={assets.darkLogo} 
  className='logo h-10 w-10 rounded-full hidden dark:block' 
  alt='Logo Dark' 
/>

        <p className='dark:text-white text-xl font-semibold '>TimeAura</p>
      </NavLink>  
     </div>
    <div  className='flex items-center justify-center min-h-screen  text-black'>
                {/* Enter Email ID */}

                  {!isEmailSent &&
                  
                   <form 
                   onSubmit={onSubmitEmail}
                   className='dark:bg-[#0F0F0F] dark:border-[#303030] dark:border bg-white dark:text-white p-8  rounded-lg shadow-lg w-96 text-sm'>
                   <h1 className=' text-2xl font-semibold text-center mb-4'>Reset Password</h1>
                  <p className='text-center mb-6'>Enter Your registered Email address </p>

                <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded text-black bg-gray-400'>
                      <p><MdEmail /></p>
                      <input type="email" placeholder='Email id' className='bg-transparent outline-none text-black' 
                      value={email} onChange={e => setEmail(e.target.value)} required/>
                </div>

                <button className='w-full flex justify-center items-center gap-12 py-2.5 bg-[#274472] dark:bg-red-600 text-white cursor-pointer rounded mt-5' type='submit'>Send OTP
           {loading && ( <div className=" border-2  aspect-square w-5 rounded-full
                border-white border-t-transparent border-r-0
                 animate-spin">
                </div>)}
           </button>
                   </form>
              }
       
          {/* otp input form */}
              {!isOtpSubmit && isEmailSent && 

              
          <form 
             onSubmit={submitOtp}
             className='dark:bg-[#0F0F0F] dark:border-[#303030] dark:border bg-white p-8 rounded-lg dark:text-gray-300 shadow-lg w-96 text-sm'>
              <h1 className=' text-2xl font-semibold text-center mb-4'>Reset Password OTP</h1>
              <p className='text-center mb-6'>Enter the 6 digit code </p>

                <div className='flex justify-between mb-8'
                onPaste={handlePaste}>
                      {Array(6).fill(0).map((_, index) =>(
                        <input type="text" maxLength='1' key={index} required
                        className='w-12 h-12 bg-gray-700 text-white text-center text-lg rounded'
                        ref = {e =>inputRefs.current[index] = e}
                        onInput={(e) =>inputHandle(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      ))}
                </div>  
                <button
               
                className='w-full flex justify-center items-center gap-12  py-2.5 dark:bg-red-600 bg-[#274472] rounded cursor-pointer text-white'>Submit
                {loading && ( <div className=" border-2  aspect-square w-5 rounded-full
                border-white border-t-transparent border-r-0
                 animate-spin">
                </div>)}
                </button>
             </form>
          }
          
             {/* New Password Form */}

                {isOtpSubmit && isEmailSent &&
              <form
              onSubmit={onSubmitNewPassword}
              className='dark:bg-[#0F0F0F] dark:border-[#303030] dark:border bg-white p-8 rounded-lg shadow-lg w-96 text-sm dark:text-gray-300 text-black'>
                   <h1 className=' text-2xl font-semibold text-center mb-4'>Enter new Password</h1>
                  <p className='text-center mb-6'>Enter Your new Password below </p>

                <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded bg-gray-400 text-black'>
                      <p><FaLock /></p>
                      <input type="text" placeholder='New Password' className='bg-transparent outline-none text-black' 
                      value={newPassword} onChange={e => setNewPassword(e.target.value)} required/>
                </div>

                <button className='w-full flex justify-center items-center gap-12  py-2.5  bg-
            text-white rounded mt-5 dark:bg-red-600 bg-[#274472]'>Submit
           {loading && ( <div className=" border-2  aspect-square w-5 rounded-full
                border-white border-t-transparent border-r-0
                 animate-spin">
                </div>)}
           </button>
                   </form>
                   }
    </div> 
    </>
  )
}

export default ResetPassword