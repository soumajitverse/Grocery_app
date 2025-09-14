import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';

const ProductDetails = () => {

    const { curreny,
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

    const { id } = useParams()
    const [realtedProducts, setRealtedProducts] = useState(product.images[0]);
    const [thumbnail, setThumbnail] = useState(null);

    // find product based on id
    const product = products.find((item) => item._id === id)

    // when the products change it will reload
    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = product.slice(); // create a copy of the poducts array
            productsCopy = productsCopy.filter((item) => product.category === item.category) // stores the items based on the matched category 
            setRealtedProducts(productsCopy.slice(0, 5))
        }
    }, [products])

    // when the product change it will reload
    useEffect(() => {
        setThumbnail(product.image[0] ? product.image[0] : null)
    }, [product])

    return product && (
        <div className="mt-12">
            <p>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Home</Link>
                <Link to={`/products/${product.category.toLowerCase()}`}>{product.category}</Link>
                <span className="text-indigo-500"> {product.name}</span>
            </p>

            {/* it will show all the images and click on any image set it as the thumbnail image */}
            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    {/* it will show the thumbnail */}
                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{product.name}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) => (
                              <img src={i<4 ? assets.star_icon : assets.star_dull_icon}></img>
                        ))}
                        <p className="text-base ml-2">({product.rating})</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: ${product.price}</p>
                        <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails