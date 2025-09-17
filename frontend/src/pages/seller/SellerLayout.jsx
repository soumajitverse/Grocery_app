import React from 'react'
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { Link, NavLink, Outlet } from 'react-router-dom';

const SellerLayout = () => {
    const { currency,
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        addToCart,
        updateCartItem,
        removeFromCart,
        cartItems,
        searchQuery,
        setSearchQuery } = useAppContext()

    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    ];

    const logout = async () => {
        setIsSeller(false)
    }


    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">


                <Link to="/">
                    <img src={assets.logo} alt="logo" className='cursor-pointer w-28 md:w-32' />
                </Link>

                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='cursor-pointer 
                    px-4 py-2 text-sm
                    sm:px-5 sm:py-2 sm:text-base
                    bg-primary hover:bg-primary-dull transition text-white rounded-full'>Logout</button>
                </div>
            </div>

            <div className='flex'>
                <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col ">
                    {sidebarLinks.map((item) => (
                        // NavLink is like Link, but it knows if the current route is active. "end" is used so that only the exact path "/seller" is active. Without "end", the "/seller" link would also be active for "/seller/product-list" and "/seller/orders"
                        <NavLink to={item.path} key={item.name} end={item.path === "/seller"}
                            className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                                    : "hover:bg-gray-100/90 border-white"
                                }`
                            }>

                            <img src={item.icon} alt="" className="w-7 h-7" />
                            <p className="md:block hidden text-center">{item.name}</p>

                        </NavLink>
                    ))}
                </div>
                <Outlet/>
            </div>

        </>
    );
};
export default SellerLayout