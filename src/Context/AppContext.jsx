import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { useEffect } from "react";
import axios from 'axios'
import toast from "react-hot-toast";

export const AppContext = createContext();


export const AppContextProvider = ({children}) => {
    //fetching the data from backend
       const [images, setImages] = useState([]);

    // useEffect(() =>{
    //         axios.get("http://localhost:3000/api/slider")
    //         .then((res) => {
    //             setImages(res.data)
    //         })             
    //         .catch((err) =>{
    //             console.error("data not found",err)
    //         })
    //     },[])

    const currency = import.meta.env.VITE_CURRENCY;


    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
   
    const [products, setProducts] = useState([]) // Store Products
    const [cartItems, setcartItems] = useState({})

   

// Fetch All Products
   const fetchProducts = async () =>{
    setProducts(dummyProducts)
   }

   // add Prodcts to cart

   const addToCart = (itemId) =>{
    let cartData = structuredClone(cartItems);

    if(cartData[itemId]){

        cartData[itemId] += 1
    }else{
        
        cartData[itemId] = 1;
    }
    setcartItems(cartData);
    toast.success("added to cart")
   }

   //update card item Quantity

   const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId] = quantity;
    setcartItems(cartData)
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
   setcartItems(cartData)
   }

   useEffect(() =>{

    fetchProducts();

   },[])

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
        images, setImages ,showUserLogin, setShowUserLogin, searchQuery, setSearchQuery, getCartAmount, getCartCount
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export const useAppContext = () =>{
    return useContext(AppContext)
}