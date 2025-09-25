import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import InputField from '../components/InputField'

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
        setSearchQuery,
        getCartCount,
        getCartAmount,
        axios,
        fetchProducts,
        fetchUserStatus,
        setCartItems} = useAppContext()

const AddAddress = () => {

    const [address, setAddress] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })

    // function to handle any change in the input field
    const handleChange = (e) => {
        // Destructure the "name" and "value" from the input field that triggered the change
        const { name, value } = e.target

        // Update the address state
        setAddress((prevAddress) => ({
            ...prevAddress,     // copy all the previous address fields (so nothing else is lost)
            [name]: value,      // update only the field that matches the input's "name"
        }))
    }

    // function for handling the submit event
    const onSubmitHandler = async (e) => {
        e.preventDefault() // it will stop the webpage from reloading
    }


    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='mt-16 pb-16'>
                <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-semibold text-primary'>Address</span></p>

                <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                    <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                        <form onSubmit={onSubmitHandler}
                            className='space-y-3 mt-6 text-sm'>

                            <div className='grid grid-cols-2 gap-4'>

                                {/* input for first name */}
                                <InputField handleChange={handleChange}
                                    address={address}
                                    name='firstName'
                                    type='text'
                                    placeholder='First Name'
                                />

                                {/* input for last name */}
                                <InputField handleChange={handleChange}
                                    address={address}
                                    name='lastName'
                                    type='text'
                                    placeholder='Last Name'
                                />
                            </div>

                            {/* input for email address */}
                            <InputField handleChange={handleChange}
                                address={address}
                                name='email'
                                type='email'
                                placeholder='Email Address'
                            />

                            {/* input for street */}
                            <InputField handleChange={handleChange}
                                address={address}
                                name='street'
                                type='text'
                                placeholder='Street'
                            />

                            <div className='grid grid-cols-2 gap-4'>
                                {/* input for city */}
                                <InputField handleChange={handleChange}
                                    address={address}
                                    name='city'
                                    type='text'
                                    placeholder='City'
                                />

                                {/* input for state */}
                                <InputField handleChange={handleChange}
                                    address={address}
                                    name='state'
                                    type='text'
                                    placeholder='State'
                                />
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                {/* input for zipcode */}
                                <InputField handleChange={handleChange}
                                    address={address}
                                    name='zipcode'
                                    type='number'
                                    placeholder='Zip code'
                                />

                                {/* input for country */}
                                <InputField handleChange={handleChange}
                                    address={address}
                                    name='country'
                                    type='text'
                                    placeholder='Country'
                                />
                            </div>

                            {/* input for phone no. */}
                            <InputField handleChange={handleChange}
                                address={address}
                                name='phone'
                                type='text'
                                placeholder='Phone'
                            />

                            {/* save address button */}
                            <button className='w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase rounded-xl'>
                                Save address
                            </button>

                        </form>
                    </div>
                    <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt="Add Address" />
                </div>

            </div>
        </div>
    )
}

export default AddAddress