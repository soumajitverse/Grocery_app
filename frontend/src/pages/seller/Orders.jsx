import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../context/AppContext';
import { assets, dummyOrders } from '../../assets/assets';

const Orders = () => {
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
    getCartAmount
  } = useAppContext()

  const [orders, setOrders] = useState([])

  // function to fetch the orders
  const fetchOrders = async () => {
    setOrders(dummyOrders)
  }

  useEffect(() => {
    fetchOrders()
  }, [])


  return (
    <div className='no-scrollbar flex-1 h-[95vh] overflow-y-scroll'>
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium">Orders List</h2>

        {orders.map((order, index) => (
          <div key={index} className="flex flex-col md:items-center md:flex-row gap-5 
         justify-between p-5 max-w-4xl rounded-md border border-gray-300">

            <div className="flex gap-5 max-w-80">
              <img className="w-12 h-12 object-cover" src={assets.box_icon} alt="boxIcon" />
              <div className=''>
                {order.items.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    {/* printing product name with quantity */}
                    <p className="font-medium">
                      {item.product.name}
                      <span className="text-primary"> x {item.quantity}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-sm md:text-base text-black/60">

              {/* printing first name and last name of the user */}
              <p className='text-black/80'>
                {order.address.firstName} {order.address.lastName}
              </p>

              {/* printing street and city */}
              <p>{order.address.street}, {order.address.city}</p>

              {/* printing state, zipcode and country */}
              <p>{order.address.state}, {order.address.zipcode}, {order.address.country}</p>
              <p></p>

              {/* printing user's phone no. */}
              <p>{order.address.phone}</p>
            </div>

            {/* printing order amount */}
            <p className="font-medium text-lg my-auto">{currency}{order.amount}</p>

            <div className="flex flex-col text-sm md:text-base text-black/60">

              {/* printing payment mode */}
              <p>Method: {order.paymentType}</p>

              {/* printing order date */}
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>

              {/* printing payment status */}
              <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders