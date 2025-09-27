import React from 'react'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <div className='animate-spin rounded-full h-12 w-12 sm:w-16 sm:h-16 border-4 border-gray-300 border-t-primary'></div>
            <div className='mt-2'>Please wait...</div>
        </div>
    )
}

export default Loading