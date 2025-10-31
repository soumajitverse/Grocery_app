import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

const OrderStatusDropDown = ({ orderId, curr_status }) => {
    const [isOpen, setIsOpen] = useState(false);
    const statusOptions = ["Order Placed", "Under Process", "Shipped", "Delivered"]
    const [status, setStatus] = useState(curr_status)

    const {
        axios,
    } = useAppContext()

    // Function to select handle
    const handleSelect = (e) => {
        setStatus(e)
        setIsOpen(false);
        updateOrderStatus(orderId, e)
    }

    // Function to update order status
    const updateOrderStatus = async (orderId, status) => {
        try {
            const { data } = await axios.post('/api/order/change-status', { orderId, status })
            if (data.success) {
                toast.success(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Sorry, can't update Order Status")
        }
    }


    return (
        <div className="flex flex-col w-full text-sm relative ">
            <button type="button" onClick={() => setIsOpen(!isOpen)}
                className="w-full max-w-4/30 text-left ml-1 min-w-32 px-1 py-1 border rounded-lg bg-white text-gray-800 text-sm border-gray-300 focus:outline-none cursor-pointer flex flex-row justify-between"
            >
                <span>{status}</span>
                <img src={assets.chevron} alt="chevron" className={` w-3 opacity-50 ${isOpen ? "rotate-90" : "rotate-0"} `} />

            </button>

            {isOpen && (
                <ul className="absolute z-10 top-full left-0 w-full max-w-4/30 min-w-32 bg-white border border-gray-300 rounded shadow-sm mt-1 py-2 ml-1">
                    {statusOptions.map((item, index) => (
                        <li key={index} value={item} className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer text-sm" onClick={() => { handleSelect(item) }} >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default OrderStatusDropDown