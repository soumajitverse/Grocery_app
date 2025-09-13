import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller") // if the url path contains the seller then we are in the seller dashboard

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>

      {/* if it is seller dashboard then navbar will not be visible */}
      {isSellerPath ? null : <Navbar />}

      <Toaster />

      {/* if it is seller dashboard then the banner image will not be visible */}
      <div className={`${isSellerPath}? '' : 'px-6 md:px-16 lg:px-24 xl:px-32'`}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App