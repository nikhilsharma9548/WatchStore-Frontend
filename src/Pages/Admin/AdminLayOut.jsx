import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../Context/AppContext";
import { FiPlusCircle } from "react-icons/fi";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { LuBox } from "react-icons/lu";


const AdminLayOut = () => {

    const {isAdmin, setIsAdmin} = useAppContext()

    const sidebarLinks = [
        { name: "Add Products", path: "/admin", icon: < FiPlusCircle/> },
        { name: "Product List", path: "/admin/product-list", icon: < RiAlignItemBottomFill/> },
        { name: "Orders", path: "/admin/orders", icon: < LuBox/> },
    ];

    const logOut = async() =>{
        setIsAdmin(false);
    }

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
                <Link to={'/'} className="flex justify-center items-center font-semibold gap-3" >
                    <img className="h-9" src={assets.logo}/>
                    <p>WatchStore</p>
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logOut} className='border rounded px-5 py-2'>Logout</button>
                </div>
            </div>
            <div className="flex bg-white ">
                <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col ">
                {sidebarLinks.map((item) => (
                    <NavLink to={item.path} key={item.name} end ={item.path === '/admin'}
                        className={({isActive}) =>`flex items-center py-3 px-4 gap-3 text-2xl
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-pink-400/10 border-pink-800 text-pink-700"
                                : "hover:bg-gray-100/50 border-white text-gray-700"
                            }`}>
                            {item.icon}
                        <p className="md:block hidden text-base text-center">{item.name}</p>
                    </NavLink>
                ))}
            </div>
            <Outlet/>
            </div>
            
        </>
    );
};
export default AdminLayOut;