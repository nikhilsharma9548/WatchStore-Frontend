import { createContext, useContext, useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL


export const UserContext = createContext();

export const AppContextProvider = ({children}) => {

    const [file, setFile] = useState([]);

const handleUpload = async (e) => {
  try {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    const res = await axios.post("/api/user/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true, // agar cookies bhejni hai
    });

    const data = res.data;
    console.log("Response:", data);

    if (data.success) {
      toast.success("Image Uploaded Successfully!");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.error("Upload Error:", error);
    toast.error("Failed to upload image.");
  }
};

    const value = {
          handleUpload
        }
    
        return <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    }
    export const userAppContext = () =>{
        return useContext(UserContext)
}