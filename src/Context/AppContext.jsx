import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { useEffect } from "react";
import axios from 'axios'
import toast from "react-hot-toast";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

export const AppContext = createContext();


export const AppContextProvider = ({children}) => {
       const [images, setImages] = useState([]);

    const currency = import.meta.env.VITE_CURRENCY;


    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]) // Store Products
    const [cartItems, setCartItems] = useState({})

    const fetchAdmin = async() =>{
        try {
            const {data} = await axios.get('/api/admin/is-auth');

            if(data.success){
                setIsAdmin(true)
            }else{
                 setIsAdmin(false)
            }
        } catch (error) {
            setIsAdmin(false)
            console.log(error.message)
        }
    }

    //fetch User Auth Status , user data and caet items

    const fetchUser = async() =>{
        try {
            const {data} = await axios.get('/api/user/is-auth');

            if(data.success){
                setUser(data.user)
                setCartItems(data.user.cartItems)
            }
          
        } catch (error) {
            setUser(null)
        }

    }

// Fetch All Products
   const fetchProducts = async () =>{
    setLoading(true)
    try {
        const {data} = await axios.get('/api/product/list')
           
        if(data.success){
            setProducts(data.products)
            setLoading(false)
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        
    }
   }

   // add Prodcts to cart

   const addToCart = (itemId) =>{
    let cartData = structuredClone(cartItems);

    if(cartData[itemId]){

        cartData[itemId] += 1
    }else{
        
        cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("added to cart")
   }

   //update card item Quantity

   const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId] = quantity;
    setCartItems(cartData)
    toast.success("Cart Update");

   } 

   //remove cart

   const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if(cartData[itemId]){
        cartData[itemId] -= 1;

        if (cartData[itemId] === 0) {

            delete cartData[itemId];
            
        }      
    }
   toast.success("remove from cart")
   setCartItems(cartData)
   }

   useEffect(() =>{
    fetchAdmin();
    fetchProducts();
    fetchUser();
   },[])

   // update cart items
   
  useEffect(() => {
  const updateCart = async () => {
    try {
      const { data } = await axios.post("/api/cart/update", {
        userId: user._id,     // 👈 important
        cartItems,
      });

      if (!data.success) {
        toast.error(data?.message || "Cart update failed");
      }
    } catch (error) {
      console.error("Cart update error:", error);

      toast.error(
        error?.response?.data?.message?.toString() ||
        error?.message?.toString() ||
        "Failed to update cart"
      );
    }
  };

  // ❌ Empty cart par API call mat kar
  if (user && Object.keys(cartItems).length > 0) {
    updateCart();
  }
}, [cartItems, user]);

   //Add All product

   const [searchQuery, setSearchQuery] = useState("")

   //calculate the item count

   const getCartCount = () => {
    let totalCount = 0;

    for (const item in cartItems) {
        totalCount += cartItems[item]    
        }
    return totalCount
}

// return total Amount

const getCartAmount = () =>{
    let totalAmount = 0;
    for(const items in cartItems){
        let itemInfo = products.find((product) => product._id === items)

        if(cartItems[items] > 0){
            totalAmount += itemInfo.offerPrice * cartItems[items]

        }
    }
    return Math.floor(totalAmount * 100) / 100; 
}

    const value = {
        navigate, user, setUser, isAdmin, setIsAdmin, products, currency, addToCart, updateCartItem, removeFromCart, cartItems,
        images, setImages ,showUserLogin, setShowUserLogin, searchQuery, setSearchQuery, getCartAmount, getCartCount, axios, 
        fetchProducts, setCartItems, loading, setLoading
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export const useAppContext = () =>{
    return useContext(AppContext)
}