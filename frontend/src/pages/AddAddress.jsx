import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import InputField from '../components/InputField'


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
        <div className='mt-16 pb-16'>
            <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-semibold text-primary'>Address</span></p>

            <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                    <form onSubmit={onSubmitHandler}
                        className='space-y-3 mt-6 text-sm'>
                        <div>

                            {/* input for first name */}
                            <InputField handleChange={handleChange}
                                address={address}
                                name={firstname}
                                type={text}
                                placeholder='First Name'
                            />

                            {/* input for last name */}
                            <InputField handleChange={handleChange}
                                address={address}
                                name={lastname}
                                type={text}
                                placeholder='Last Name'
                            />


                        </div>
                    </form>
                </div>
                <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt="Add Address" />
            </div>

        </div>
    )
}

export default AddAddress