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

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller") // if the url path contains the seller then we are in the seller dashboard

  const { showUserLogin } = useAppContext()

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>

      {/* if it is seller dashboard then navbar will not be visible */}
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}

      <Toaster />

      {/* if it is seller dashboard then the banner image will not be visible */}
      <div className={`${isSellerPath}? '' : 'px-6 md:px-16 lg:px-24 xl:px-32'`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/products/:category' element={<ProductCategory/>} />
          <Route path='/products/:category/:id' element={<ProductDetails/>} />
        </Routes>
      </div>
      {/* if it is seller dashboard then footer will not be visible */}
      {!isSellerPath && <Footer />}
    </div>
  )
}

export default App