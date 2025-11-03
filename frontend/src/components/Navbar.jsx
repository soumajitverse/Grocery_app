import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const {
        navigate,
        user,
        setUser,
        setShowUserLogin,
        searchQuery,
        setSearchQuery,
        getCartCount,
        axios,
        setCartItems,
    } = useAppContext()

    // function to logout
    const logout = async () => {
        try {
            const { data } = await axios.get('/api/user/logout')
            if (data.success) {
                toast.success(data.message)
                setUser(null)
                setCartItems({}) // after logout cart will be empty
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong!')
        }
    }

    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate("/products")
        }
    }, [searchQuery])


    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative z-50 transition-all">

            <NavLink to='/' onClick={() => setOpen(false)}>
                <img className="w-28 md:w-32" src={assets.logo} alt="logo" />
            </NavLink>


            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>All Products</NavLink>
                <NavLink to='/contact'>Contact</NavLink>

                {/* search box */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                        }}
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="search" className='w-4 h-4' />
                </div>

                {/* cart for desktop view*/}
                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>

                {/* login and logout*/}
                {/* if user is logged in then it will show the logout button and if the user is not logged in then it will show the login button */}
                {!user ?
                    (<button
                        onClick={() => {
                            setOpen(false)
                            setShowUserLogin(true)
                        }} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                        Login
                    </button>) :
                    (
                        <div className='relative group'>
                            <img className='w-10' src={assets.profile_icon} alt="profile" />

                            <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                                <li
                                    onClick={() => { navigate('my-orders') }}
                                    className='p-1.5 pl-3 
                            hover:bg-primary/10 cursor-pointer'>My Orders</li>

                                <li
                                    onClick={logout}
                                    className='p-1.5 pl-3 
                            hover:bg-primary/10 cursor-pointer'>Logout</li>

                            </ul>
                        </div>)
                }
            </div>

            {/* cart for mobile view*/}
            <div className='flex items-center gap-6 sm:hidden'>
                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                    {/* Menu Icon SVG */}
                    <img src={assets.menu_icon} alt="menu" />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (<div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-50`}>

                <NavLink to='/' onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to='/products' onClick={() => setOpen(false)}>All Products</NavLink>

                {/* if user is logged in then only it will show my orders otherwise not */}
                {user && <NavLink to='/my-orders' onClick={() => setOpen(false)}>My Orders</NavLink>}

                <NavLink to='/contact' onClick={() => setOpen(false)}>Contact</NavLink>

                {/* login and logout*/}
                {/* if user is logged in then it will show the logout button and if the user is not logged in then it will show the login button */}
                {!user ?
                    (<button
                        onClick={() => {
                            setOpen(false)
                            setShowUserLogin(true)
                        }}
                        className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                        Login
                    </button>) :
                    (
                        <button
                            onClick={() => {
                                setOpen(false)
                                logout()
                            }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                            Logout
                        </button>)
                }

            </div>
            )}

        </nav>
    )
}

export default Navbar