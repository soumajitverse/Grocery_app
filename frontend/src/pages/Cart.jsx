import React from 'react'
import { useState, useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets, dummyAddress } from '../assets/assets'
import toast from 'react-hot-toast';

const Cart = () => {

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
        axios,
        fetchProducts,
        fetchUserStatus,
        setCartItems
    } = useAppContext()

    const [showAddress, setShowAddress] = useState(false)
    const [cartArray, setCartArray] = useState([])
    const [addresses, setAddresses] = useState([])
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [paymentOption, setPaymentOption] = useState("COD")

    const [isOpen, setIsOpen] = useState(false); // for drop down menu for payment mode
    const [isOpenQty, setIsOpenQty] = useState(null); // for product Qty selection


    // get the product data and add it to the cartArray
    const getCart = () => {
        let tempArray = []
        for (const key in cartItems) {
            const product = products.find((item) => item._id === key) // find the products which has same the id as present in cartItems object and add it to product

            product.quantity = cartItems[key] // add a new key named quantity to product object set its value to quantity value which is present in specific cartItems with product id

            tempArray.push(product) // add the product object as an element in the tempArray
        }
        setCartArray(tempArray)
    }

    // get the user address from DB
    const getUserAddress = async () => {
        try {
            const { data } = await axios.get('/api/address/get')
            if (data.success) {
                if (data.addresses.length > 0) {
                    setAddresses(data.addresses)
                    setSelectedAddress(data.addresses[0])
                }
            }
        } catch (error) {
            toast.error("Sorry, can't get address")
            console.log(error)
        }

    }


    // function to place order
    const placeOrder = async () => {
try {
    
} catch (error) {
    
}
    }


    useEffect(() => {
        if (products.length > 0 && cartItems) {
            getCart()
        }
    }, [products, cartItems])

    useEffect(() => {
        if (user) {
            getUserAddress()
        }
    }, [user])


    return (products.length > 0 && cartItems && cartArray.length) ? (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className="flex flex-col md:flex-row mt-16">
                <div className='flex-1 max-w-4xl'>
                    <h1 className="text-3xl font-medium mb-6">
                        Shopping Cart <span className="text-sm text-primary">{getCartCount()} Items</span>
                    </h1>

                    <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                        <p className="text-left">Product Details</p>
                        <p className="text-center">Subtotal</p>
                        <p className="text-center">Action</p>
                    </div>

                    {/* printing all the products */}
                    {cartArray.map((product, index) => (
                        <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                            <div className="flex items-center md:gap-6 gap-3">

                                <div
                                    // clicking the image will redirect you to the product detail page
                                    onClick={() => {
                                        navigate(`/products/${product.category.toLowerCase()}/${product._id}`)
                                        scrollTo(0, 0)
                                    }}
                                    className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                                    <img className="max-w-full h-full object-cover" src={product.image[0]} alt={product.name} />
                                </div>

                                <div>
                                    <p className="hidden md:block font-semibold">{product.name}</p>
                                    <div className="font-normal text-gray-500/70">

                                        {/* product weight */}
                                        <p>Weight: <span>{product.weight || "N/A"}</span></p>

                                        {/* product quantity */}
                                        <div className='flex items-center'>
                                            <p>Qty:</p>

                                            {/* drop down for product Qty selection */}
                                            {/* new */}
                                            <div className="flex flex-col relative text-sm w-15">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsOpenQty(isOpenQty === product._id ? null : product._id)}
                                                    className="group w-full text-left mt-0.5 px-1 py-1  bg-white text-base  cursor-pointer flex items-center"
                                                >
                                                    <span>{cartItems[product._id]}</span>

                                                    <img src={assets.chevron} alt="chevron" className={`ml-1.5 w-2 opacity-50 ${isOpenQty === product._id ? "rotate-90" : "rotate-0"} `} />


                                                </button>

                                                {/* Dropdown menu → only visible for the product whose _id === isOpenQty */}
                                                {isOpenQty === product._id && (
                                                    <ul className="absolute z-10 top-full left-0 w-fit bg-white border border-gray-300 rounded shadow-sm -mt-1 py-1">
                                                        {Array(cartItems[product._id] > 9 ? cartItems[product._id] : 9)
                                                            .fill('')
                                                            .map((_, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="px-3 py-1 hover:bg-primary hover:text-white cursor-pointer"
                                                                    onClick={() => {
                                                                        updateCartItem(product._id, index + 1);
                                                                        setIsOpenQty(null);
                                                                    }}
                                                                >
                                                                    {index + 1}
                                                                </li>
                                                            ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <p className="text-center">{currency}{product.offerPrice * product.quantity}</p>

                            {/* product remove */}
                            <button
                                onClick={() => removeFromCart(product._id)}
                                className="cursor-pointer mx-auto">
                                <img src={assets.remove_icon} alt="remove"
                                    className='inline-block w-6 h-6' />
                            </button>
                        </div>)
                    )}

                    <button
                        onClick={() => {
                            navigate('/products') // it will redirect you to all products page
                            scrollTo(0, 0)
                        }}
                        className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium">
                        <img
                            className='group-hover:-translate-x-1 transition'
                            src={assets.arrow_right_icon_colored} alt="arrow" />
                        Continue Shopping
                    </button>

                </div>

                {/* right side card for order summary and others */}
                <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70 rounded-xl sm:max-h-fit">
                    <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                    <hr className="border-gray-300 my-5" />

                    <div className="mb-6">

                        {/* delivery address */}
                        <p className="text-sm font-medium uppercase">Delivery Address</p>
                        <div className="relative flex justify-between items-start mt-2">
                            <p className="text-gray-500">{selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}` : 'No address found'}</p>

                            <button onClick={() => setShowAddress(!showAddress)} className="text-primary hover:underline cursor-pointer">
                                Change
                            </button>
                            {showAddress && (
                                <div className="absolute top-8 py-1 bg-white border border-gray-300 text-sm w-full rounded shadow-sm">

                                    {addresses.map((address, index) => (<p key={index} onClick={() => {
                                        setSelectedAddress(address)
                                        setShowAddress(false)
                                    }} className="text-gray-500 p-2 bg-white hover:bg-primary hover:text-white
                                   relative z-80 cursor-pointer">
                                        {address.street}, {address.city}, {address.state},{address.zipcode}, {address.country}
                                    </p>))}


                                    <p
                                        // it will redirect to add address page
                                        onClick={() => navigate('/add-address')} className="text-primary text-center cursor-pointer px-2 py-1  hover:bg-primary-dull hover:text-white relative hover:font-bold hover:text-base z-80 bg-white">
                                        Add address
                                    </p>
                                </div>

                            )}
                        </div>

                        <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                        {/* payment mode selection */}
                        <div className="flex flex-col w-full text-sm relative mt-2">
                            <button type="button" onClick={() => setIsOpen(!isOpen)}
                                className=" w-full text-left px-4 pr-2 py-2 border rounded-xl bg-white text-gray-500 text-base border-gray-300 cursor-pointer flex justify-between ">
                                {
                                    paymentOption === "COD" ? (<span>Cash On Delivery</span>) : (<span>Online Payment</span>)
                                }

                                <img src={assets.chevron} alt="chevron" className={` w-3 opacity-50 ${isOpen ? "rotate-90" : "rotate-0"} `} />

                            </button>

                            {isOpen && (
                                <ul className="absolute z-10 top-full left-0 w-full bg-white border border-gray-300 rounded  mt-1 py-2 shadow-sm text-gray-500">

                                    <li key="COD" value="COD" className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
                                        onClick={() => {
                                            setPaymentOption("COD")
                                            setIsOpen(false)
                                        }}
                                    >
                                        Cash On Delivery
                                    </li>

                                    <li key="Online" value="Online" className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
                                        onClick={() => {
                                            setPaymentOption("Online")
                                            setIsOpen(false)
                                        }}
                                    >
                                        Online Payment
                                    </li>


                                </ul>
                            )}
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    {/* price and other calculations */}
                    <div className="text-gray-500 mt-4 space-y-2">
                        <p className="flex justify-between">
                            <span>Price</span><span>{currency}{getCartAmount() ? getCartAmount() : 0}</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Shipping Fee</span><span className="text-green-600">Free</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Tax (2%)</span><span>{currency}{getCartAmount() ? getCartAmount() * 2 / 100 : 0}</span>
                        </p>
                        <p className="flex justify-between text-lg font-medium mt-3">
                            <span>Total Amount:</span><span>{currency}{getCartAmount() ? getCartAmount() + getCartAmount() * 2 / 100 : 0}</span>
                        </p>
                    </div>

                    <button
                        onClick={placeOrder}
                        className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary-dull transition rounded-xl">
                        {paymentOption === 'COD' ? "Place Order" : "Proceed to Checkout"}
                    </button>
                </div>
            </div>
        </div>
    ) : (

        // if cart is empty then it will be shown
        <div className='mt-8 h-svh px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-center gap-2'>

            {/* empty cart icon */}
            <img src={assets.empty_cart_image} alt="cart icon"
                className='w-30' />

            <div className='flex flex-col justify-center items-center'>
                <div className='text-xl font-bold'>Oops, your cart looks empty</div>
                <div>
                    Start fresh — explore and add your favorites.
                </div>
            </div>

            <button
                onClick={() => {
                    navigate('/products') // it will redirect you to all products page
                    scrollTo(0, 0)
                }}
                className="group cursor-pointer flex items-center mt-6 gap-2 text-primary font-medium">
                <img
                    className='group-hover:-translate-x-1 transition'
                    src={assets.arrow_right_icon_colored} alt="arrow" />
                Continue Shopping
            </button>
        </div>
    )
}
export default Cart