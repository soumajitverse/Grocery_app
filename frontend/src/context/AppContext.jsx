import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

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

    // fetch all the products
    const fetchProducts = async () => {
        setProducts(dummyProducts)
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
        fetchProducts()
    }, [])


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
        getCartAmount
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
