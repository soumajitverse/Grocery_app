import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../context/AppContext';
import { assets, dummyOrders } from '../../assets/assets';
import OrderStatusDropDown from '../../components/seller/OrderStatusDropDown';

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
    setCartItems,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount,
    axios,
    fetchProducts,
    fetchUserStatus
  } = useAppContext()

  const [orders, setOrders] = useState([])

  // function to fetch the orders
  const fetchOrders = async () => {
    try {
      const { data } = await axios.get('/api/order/seller')
      if (data.success) {
        setOrders(data.orders)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    if (isSeller) {
      fetchOrders()
    }
  }, [isSeller])


  return (
    <div className='no-scrollbar flex-1 h-[95vh] overflow-y-scroll'>
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium">Orders List</h2>

        {orders.map((order, index) => (
          <div key={index} className='max-w-4xl rounded-md border border-gray-300'>
            <p className='text-sm mx-5 mt-5'>User Id: {order.userId}</p>
            <p className='text-sm mx-5 '>Order Id: {order._id}</p>
            <div className="flex flex-col md:items-center md:grid md:grid-cols-9 md:gap-2 gap-5 p-5 ">

              <div className="flex gap-5 max-w-80 md:col-span-3">
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

              <div className="text-sm md:text-base text-black/60 md:col-span-2">

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
              <p className="font-medium text-lg my-auto md:col-span-1 md:pl-12">{currency}{order.amount}</p>

              <div className="flex flex-col text-sm md:text-base text-black/60 md:col-span-2 md:pl-12">

                {/* printing payment mode */}
                <p>Method: <span className='text-sm'>{order.paymentType}</span></p>

                {/* printing order date */}
                <p>Date: <span className='text-sm'>{new Date(order.createdAt).toLocaleDateString("hi-IN") // Hindi (India): dd/mm/yyyy format
                }
                </span></p>

                {/* printing order time */}
                <p>Date: <span className='text-sm'>{new Date(order.createdAt).toLocaleTimeString("hi-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true, // use false for 24-hour format
                })
                }
                </span></p>

                {/* printing payment status */}
                <p>Payment: <span className='text-sm'>{order.isPaid ? "Paid" : "Pending"}</span></p>
              </div>
            </div>

            <div className='mx-5 mb-2 flex'>
              {/* order status drop down  component*/}
              <span className='pt-[2px]'>Status:</span>
              <OrderStatusDropDown orderId={order._id} curr_status={order.status} />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders