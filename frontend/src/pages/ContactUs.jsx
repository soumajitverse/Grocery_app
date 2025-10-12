import React from 'react'
import InputField from '../components/InputField'
import { contact } from '../assets/assets'

const ContactUs = () => {

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='mt-16 pb-16'>
                <p className='text-2xl md:text-3xl text-gray-500'>Contact <span className='font-semibold text-primary'>Us</span></p>

                <div className='flex flex-col-reverse md:grid md:grid-cols-2 md:gap-15 mt-10 md:mt-0'>
                    <div className='flex flex-col-reverse md:flex-row justify-between mt-10 md:pr-18'>
                        <form
                            className='space-y-3 mt-6 text-sm'>

                            <div className='grid grid-cols-2 gap-4'>

                                {/* input for first name */}
                                <InputField
                                    name='firstName'
                                    type='text'
                                    placeholder='First Name'
                                />

                                {/* input for last name */}
                                <InputField
                                    name='lastName'
                                    type='text'
                                    placeholder='Last Name'
                                />
                            </div>

                            {/* input for email address */}
                            <InputField
                                name='email'
                                type='email'
                                placeholder='Email Address'
                            />

                            {/* input for phone no. */}
                            <InputField
                                name='phone'
                                type='text'
                                placeholder='Phone'
                            />

                            {/* input for subject */}
                            <InputField
                                name='message'
                                type='text'
                                placeholder='Message'
                            />

                            {/* save address button */}
                            <button className='w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase rounded-xl'>
                                Send Message
                            </button>
                        </form>
                    </div>
                    <ol className='flex flex-col list-decimal ml-4 gap-3 md:mt-15'>
                        {
                            contact.map((item, index) => (
                                <li key={index}>
                                    <span className='font-semibold'>{item.title}: </span>
                                    {item.text}
                                    <a href={`mailto:${item.mail}`}>
                                        <span className='text-primary'>
                                            {item.mail}
                                        </span>
                                    </a>
                                    <div className='flex flex-row gap-2'>
                                        {
                                            item.links?.map((link, i) => (
                                                // in a tag target="_blank" --> opens the link in a new tab or window 
                                                //  rel="noopener noreferrer" --> for security reasons (prevents the new page from accessing your app’s window object

                                                <a href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key={i}>
                                                    <img
                                                        className='m-2 mt-4 ml-0 w-9 transition-transform duration-200 hover:scale-110 active:scale-95'
                                                        src={link.logo} alt={link.title} />
                                                </a>
                                            ))
                                        }
                                    </div>
                                </li>
                            ))
                        }
                    </ol>
                </div>

            </div>
        </div>
    )
}

export default ContactUs