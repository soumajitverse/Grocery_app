import React from 'react'
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const ResetNewPass = () => {
    const {
        setShowUserLogin,
        axios,
        showResetNewPass,
        setShowResetNewPass,
        resetPassEmail,
        setResetPassEmail
    } = useAppContext()

    const [otp, setOtp] = useState('')
    const [newPass, setNewPass] = useState('')
    const [email, setEmail] = useState('')

    // // function to handle submit
    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if (showResetNewPass === 'reset-pass') {
            try {
                const { data } = await axios.post('/api/user/send-reset-otp', { email: resetPassEmail })
                if (!data.success) {
                    console.log(data.message)
                }
                toast.success(data.message)
                setShowResetNewPass("new-pass")
            } catch (error) {
                // console.log(error)
                toast.error(error.response.data.message)
            }
        } else {
            try {
                const { data } = await axios.post('/api/user/reset-password', { email: resetPassEmail, otp, newPassword: newPass })
                if (!data.success) {
                    console.log(data.message)
                }
                toast.success(data.message)
                setShowResetNewPass(null)
                setShowUserLogin(true)

            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
    }

    return (
        <div onClick={() => setShowResetNewPass(null)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center text-sm text-gray-600 bg-black/50'>

            <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[370px] rounded-lg shadow-xl border border-gray-200 bg-white">
                <p className="text-2xl font-medium m-auto">
                    <span className="text-primary">{showResetNewPass === "reset-pass" ? "Reset " : "New "}</span>
                    Password
                </p>

                {showResetNewPass === "reset-pass" ?
                    // reset password
                    <div className='w-full'>
                        <div className='text-lg text-center mb-6'>Enter your registered email to receive a password reset otp.</div>

                        <p className='font-medium'>Email Address</p>
                        <input onChange={(e) => {
                            setResetPassEmail(e.target.value)
                            setEmail(e.target.value)
                        }} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2  outline-primary mt-2" type="email" required />
                    </div>

                    : (
                        // enter new password
                        <>
                            {/* pass reset otp */}
                            <div className='w-full'>
                                <div className='w-full text-sm text-center'>
                                    Enter the 6-digit code sent to your email.
                                    <div className='text-xs'>Didn’t receive it? Check your spam or promotions folder.</div>
                                </div>
                                <div className='mt-3 font-medium'>Enter the OTP below</div>
                                <input maxLength={6}
                                    onChange={(e) => setOtp(e.target.value)} value={otp} placeholder="6-digit OTP" className="border border-gray-200 rounded w-full p-2  outline-primary mt-1" type="text" required />
                            </div>

                            <div className='w-full'>
                                <div className='w-full text-sm felx justify-center font-medium'>Enter the new password below</div>
                                <input onChange={(e) => setNewPass(e.target.value)} value={newPass} placeholder="password" className="border border-gray-200 rounded w-full p-2  outline-primary mt-1" type="text" required />
                            </div>
                        </>
                    )
                }

                <button className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer">
                    Submit
                </button>

                {/* resend code */}
            { showResetNewPass=="new-pass" && <div className='w-full flex justify-center'>
        <p className="w-full text-xs text-center text-gray-500">
                Having trouble? <span className="text-primary cursor-pointer hover:underline"
                    onClick={async () => {
                        try {
                            const { data } = await axios.post('/api/user/send-reset-otp', { email: resetPassEmail })
                            if (!data.success) {
                                console.log(data.message)
                            }
                            toast.success(data.message)
                            setShowResetNewPass("new-pass")
                        } catch (error) {
                            // console.log(error)
                            toast.error(error.response.data.message)
                        }
                    }}
                >Resend code</span>

            </p>
            </div>}
      
            </form>
        </div>
    )
}

export default ResetNewPass
