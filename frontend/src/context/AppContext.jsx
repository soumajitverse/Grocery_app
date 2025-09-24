import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios"

// Set a global base URL for all axios requests.
// This takes the value from the frontend .env file (VITE_BACKEND_URL),
// so you don't have to repeat the full backend URL in every request.
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;


// Allow axios to include cookies (e.g., session tokens) in every request.
// Useful for authentication when the backend relies on cookies for user sessions.
// ensures cookies are sent + saved
axios.defaults.withCredentials = true;


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY; // get the currency symbol from .env file (forntend)

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})


    // Fetch Seller Status (Check Login or not)
    const fetchSellerStatus = async () => {
        try {
            const { data } = await axios.get('api/seller/is-auth')
            if (data.success) {
                setIsSeller(true)
            }
        } catch (error) {
            setIsSeller(false)
        }

    }

    // Fetch User Status (Check Login or not) and Cart Items
    const fetchUserStatus = async () => {
        try {
            const { data } = await axios.get('api/user/is-auth')
            if (data.success) {
                setUser(data.user)
                setCartItems(data.user.cartItems)
            }
        } catch (error) {
            setUser(null)
        }

    }

    // Fetch All The Products
    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('api/product/list')
            if (data.success) {
                setProducts(data.products)
            }
        } catch (error) {
            console.log(error)
        }
    }


    // add product to cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems) // create a hard copy cartItems (not any reference)
        if (cartData[itemId]) {
            cartData[itemId] += 1
        }
        else {
            cartData[itemId] = 1
        }
        setCartItems(cartData)
        toast.success("Added to Cart")
    }

    // update card item quantity
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems) // create a hard copy cartItems (not any reference)
        cartData[itemId] = quantity
        setCartItems(cartData)
        toast.success("Cart Updated")
    }

    // remove product from cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems) // create a hard copy cartItems (not any reference)
        if (cartData[itemId]) {
            cartData[itemId] -= 1
            if (cartData[itemId] == 0) {
                delete cartData[itemId]
            }
        }
        toast.success("Removed from Cart")
        setCartItems(cartData)
    }

    // get cart item count
    const getCartCount = () => {
        let totalCount = 0
        for (const items in cartItems) {
            totalCount += cartItems[items]
        }
        return totalCount
    }

    // get cart total amount
    const getCartAmount = () => {
        let totalAmount = 0
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items) // creating an array with products array where product id is equal to items(i.e. is also id)
            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items]
            }
        }
        return Math.floor(totalAmount * 100) / 100
    }

    useEffect(() => {
        fetchSellerStatus() // function to check seller is logged in or not
        fetchUserStatus() // function to check user is logged in or not and update cart if logged in
        fetchProducts()
    }, [])


    // Update DB Cart Items
    const updateCart = async () => {
        try {
            const { data } = await axios.post('/api/cart/update', { cartItems })
            if (!data.success) {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    useEffect(() => {
        if (user) {
            updateCart()
        }

    }, [cartItems])

    const value = {
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
        fetchUserStatus
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}
