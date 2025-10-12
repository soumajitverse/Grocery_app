import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { assets } from '../../assets/assets.js'

const SellerLogin = () => {

    const {
        currency,
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
        setSearchQuery,
        getCartCount,
        getCartAmount,
        axios } = useAppContext()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false)

    // fucntion to handle the submit
    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault()
            const { data } = await axios.post('/api/seller/login', { email, password })

            if (data.success) {
                setIsSeller(true)
                toast.success(data.message)
            }

        } catch (error) {
            const message = error.response?.data?.message || "Something went wrong";
            toast.error(message);
        }
    }

    useEffect(() => {
        if (isSeller) {
            navigate('/seller')
        }
    }, [isSeller])

    return !isSeller && (

        <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>
            <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200'>

                <p className='text-2xl font-medium m-auto'><span className="text-primary">Seller</span> Login</p>

                <div className="w-full ">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email}
                        type="email" placeholder="enter you email"
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" required />
                </div>

                <div className="w-full ">
                    <p>Password</p>

                    <div className='relative'>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="type here"
                            className="border border-gray-200 rounded w-full p-2 mt-1 pr-10 outline-primary"
                            type={showPass ? "text" : "password"}
                            required
                        />
                        <span
                            onClick={() => setShowPass(!showPass)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100 transition z-10"
                        >
                            <img
                                className='w-5 h-5'
                                src={showPass ? assets.eye_hide : assets.eye_show}
                                alt={showPass ? 'eye_hide' : 'eye_show'}
                            />
                        </span>
                    </div>
                </div>

                <button className="bg-primary hover:bg-primary-dull text-white w-full py-2 rounded-md cursor-pointer">Login</button>
            </div>

        </form >

    )
}

export default SellerLogin