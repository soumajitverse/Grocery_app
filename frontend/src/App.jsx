import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrders'
import SellerLogin from './components/seller/SellerLogin'
import SellerLayout from './pages/seller/SellerLayout'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller") // if the url path contains the seller then we are in the seller dashboard

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

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>

      {/* if it is seller dashboard then navbar will not be visible */}
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}

      <Toaster />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:category' element={<ProductCategory />} />
        <Route path='/products/:category/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/add-address' element={<AddAddress />} />
        <Route path='/my-orders' element={<MyOrders />} />
        <Route path='/seller' element={!isSeller ? <SellerLogin /> : <SellerLayout />} />
      </Routes>

      {!isSellerPath && <Footer />}
    </div>
  )
}

export default App