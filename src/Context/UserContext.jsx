import { createContext, useContext, useState } from "react";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL


export const UserContext = createContext();

export const AppContextProvider = ({children}) => {
    const value = {
          
        }
    
        return <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    }
    export const userAppContext = () =>{
        return useContext(UserContext)
}