import React from 'react'
import ProductCard from './ProductCard'

const BestSeller = () => {
    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
                <ProductCard />
            </div>
        </div>
    )
}

export default BestSeller