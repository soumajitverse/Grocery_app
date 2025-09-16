import React from 'react'
import { useState, useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { dummyOrders } from '../assets/assets'

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
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
        setSearchQuery,
        getCartCount,
        getCartAmount } = useAppContext()

    // function to fetch my orders
    const fetchMyOrders = async () => {
        setMyOrders(dummyOrders)
    }

    // whenever the component get loaded it will execute the fetchMyOrder() function
    useEffect(() => {
        fetchMyOrders()
    }, [])


    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='mt-16 pb-16'>

                <div className='flex flex-col items-end w-max mb-8'>
                    <p className='text-2xl font-medium uppercase'>My orders</p>
                    <div className='w-16 h-0.5 bg-primary rounded-full'></div>
                </div>

                {/* rendering orders */}
                {myOrders.map((order, index) => (

                    <div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl'>

                        {/* printing order id, payment mode and amount */}
                        <p className='flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col'>
                            <span>OrderId: {order._id}</span>
                            <span>Payment: {order.paymentType}</span>
                            <span>Total Amount: {currency}{order.amount}</span>
                        </p>

                        {/* rendering items element from orders array */}
                        {order.items.map((item, index) => (
                            <div key={index}
                                className={`relative bg-white text-gray-500/70 ${
                                    // Add bottom border to all items except the last one
                                    order.items.length !== index + 1 && "border-b"
                                    } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}>

                                <div className='flex items-center mb-4 md:mb-0'>

                                    {/* printing product image */}
                                    <div className='bg-primary/10 p-4 rounded-lg'>
                                        <img src={item.product.image[0]} alt=""
                                            className='w-16 h-16'
                                        />
                                    </div>

                                    {/* printing product name and product category */}
                                    <div className='ml-4'>
                                        <h2 className='text-xl font-medium text-gray-800'>{item.product.name}</h2>
                                        <p>Category: {item.product.category}</p>
                                    </div>
                                </div>

                                {/* printing product quantity, status and date */}
                                <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                                    <p>Quantity: {item.quantity || "1"}</p>
                                    <p>Status: {order.status}</p>

                                    {/* order.createdAt is a timestamp string (like "2025-03-25T07:17:46.018Z").
                                 new Date(order.createdAt) → Converts the string into a JavaScript Date object.
                                .toLocaleDateString() → Formats the date into a human-readable form, based on the user’s browser locale.
                                */}
                                    <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                                </div>

                                {/* calculating each product price */}
                                <p className='text-primary text-lg font-medium'>
                                    Amount: {currency}{item.product.offerPrice * item.quantity}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyOrders