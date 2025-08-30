import { useState } from "react";
import { assets, categories } from "../../assets/assets";



   

const AddProduct = () => {

     const [files, setFiles] = useState("")
    const [name, setName] = useState('')
    const [discription, setDiscription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [offerPrice, setOfferPrice] = useState('')
    
    const onSubmitHandler = async(event) =>{
        event.preventDefault()
    }
    
     const handleFileChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile instanceof File) {
      setFiles(selectedFile);
    } else {
      setFiles(null);
    }
  };

    return (
        <div className="pt-5 no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
            <form onSubmit={onSubmitHandler} className="px-10 space-y-3 max-w-lg">
                <div>
                    <p className="text-base font-medium">Product Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        <label htmlFor="image">
                        <input
                            onChange={handleFileChange}
                            accept="image/*"
                            type="file"
                            id="image"
                            hidden
                        />
                        <img
                            className="w-44 cursor-pointer"
                            src={files && files instanceof File ? URL.createObjectURL(files) : assets.upload_area }
                            width={100}
                            height={100}
                        />
        </label>
                </div>
                </div>

                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} 
                    id="product-name" type="text" placeholder="Type here" 
                    className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>

                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
                    <textarea 
                    onChange={(e) => setDiscription(e.target.value)} value={discription}
                    id="product-description" rows={4} 
                    className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
                    placeholder="Type here"></textarea>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select 
                    onChange={(e) => setCategory(e.target.value)} value={category}
                    id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                        <option value="">Select Category</option>
                        {categories.map((item,index) =>(
                            <option key={index} value={item.path}>{item.path}</option>
                        ))}
                        {/* {[{ name: 'Analog' }, { name: 'Digital' }, { name: 'Smart' }].map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                        ))} */}
                    </select>
                </div>

                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
                        <input
                        onChange={(e) => setPrice(e.target.value)} value={price}
                         id="product-price" type="number" placeholder="0" min={0}
                         className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>

                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
                        <input
                        onChange={(e) => setOfferPrice(e.target.value)} value={offerPrice}
                        id="offer-price" type="number" placeholder="0" min={0}
                        className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>

                </div>
                <button className="px-8 py-2.5 bg-pink-700 text-white font-medium cursor-pointer">ADD</button>
            </form>
        </div>
    );
};
export default AddProduct;