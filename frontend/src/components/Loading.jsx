import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Loading = () => {
    const { navigate } = useAppContext()
    let location = useLocation()
    console.log(location)
    const query = new URLSearchParams(location.search)
    const nextUrl = query.get('next') // value of nextUrl will be my-orders

    useEffect(() => {
        if (nextUrl) {
            setTimeout(() => {
                navigate(`/${nextUrl}`) // it will redirct to my-orders
            }, 5000)
        }
    }, [nextUrl])


    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <div className='animate-spin rounded-full h-12 w-12 sm:w-14 sm:h-14 border-4 border-gray-300 border-t-primary'></div>
            <div className='mt-2'>Please wait...</div>
        </div>
    )
}

export default Loading