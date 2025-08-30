import React from 'react'
import Home from './Components/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import { assets } from './assets/assets'
import {Toaster} from 'react-hot-toast'
import AllProducts from './Pages/AllProducts'
import { useAppContext } from './Context/Appcontext'
import Login from './Components/Login'
import ProducCategory from './Pages/ProducCategory'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Address from './Pages/Address'
import MyOrders from './Pages/MyOrders'
import AdminLogin from './Components/Admin/AdminLogin'
import Navbar_2 from './Components/Navbar_2'
import AdminLayOut from './Pages/Admin/AdminLayOut'
import AddProduct from './Components/Admin/AddProduct'
import ProductList from './Components/Admin/ProductList'
import Orders from './Components/Admin/Orders'
import UserDetails from './Pages/UserDetails'


const WatchStore = () => {

  const isAdminPath = useLocation().pathname.includes("admin")
  const isUserDetailsPath = useLocation().pathname.includes("user-details")
  const {showUserLogin, isAdmin} = useAppContext()
  return (
      <div>
         {isAdminPath || isUserDetailsPath ? null :  <Navbar/>}
         {showUserLogin ? <Login/> : null}

      <div className={`w-full h-full overflow-hidden`}
         style={{ backgroundImage: `url(${assets.Bg2})` }}>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/products' element= {<AllProducts/>} />
          <Route path='/products/:category' element= {<ProducCategory/>} />
          <Route path='/products/:category/:id' element= {<ProductDetails/>} />
          <Route path='/cart' element= {<Cart/>} />
          <Route path='/add-address' element= {<Address/>} />
          <Route path='/my-orders' element= {<MyOrders/>} />
          <Route path='/admin'  element = {isAdmin ? <AdminLayOut/> : <AdminLogin />}>
            <Route index element = {isAdmin ? < AddProduct/> : null}/>
            <Route path='product-list' element= {<ProductList/>} />
            <Route path='orders' element= {<Orders/>} />
          </Route>
          <Route path='/user-details' element= {<UserDetails/>}/>
        </Routes>
  
    {isAdminPath || isUserDetailsPath ? null : <Footer/>}
    {isAdminPath ? null : <Navbar_2 />}
   
      <Toaster />

  
    </div>
      </div>

   
  )
}

export default WatchStore