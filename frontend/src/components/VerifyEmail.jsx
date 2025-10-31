import React, { useState } from "react";
import { useAppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";

const VerifyEmail = () => {
    const [otp, setOtp] = useState("");
    const {
        axios,
        setShowUserLogin,
        verifyAccEmail,
        showVerifyEmail,
        setShowVerifyEmail,
        fetchUserStatus
    } = useAppContext();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("/api/user/verify-account", {
                otp: Number(otp),
            });
            toast.success(data.message);
            setShowVerifyEmail(false)
            fetchUserStatus()

        } catch (error) {
            toast.error(error.response?.data?.message || "Verification failed");
        }
    };

    return (
        <div onClick={() => setShowVerifyEmail(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center text-sm text-gray-600 bg-black/50'>

            <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[370px] rounded-lg shadow-xl border border-gray-200 bg-white">

                <p className="text-2xl font-medium m-auto">
                    <span className="text-primary">Email</span> Verification
                </p>

                <div className='w-full'>
                    <div className='w-full text-sm text-center'>
                        Enter the 6-digit code sent to your email.
                        <div className='text-xs'>Didn’t receive it? Check your spam or promotions folder.</div>
                    </div>
                    <div className='mt-3 font-medium'>Enter the OTP below</div>
                    <input maxLength={6}
                        onChange={(e) => setOtp(e.target.value)} value={otp} placeholder="6-digit OTP" className="border border-gray-200 rounded w-full p-2  outline-primary mt-1" type="text" required />
                </div>

                <button className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer mt-1">
                    Submit
                </button>

                <div className="w-full flex justify-center">
                    <p className="text-xs text-center text-gray-500 "
                        onClick={verifyAccEmail}
                    >
                        Having trouble? <span className="text-primary cursor-pointer hover:underline">Resend code</span>
                    </p>
                </div>

            </form>
        </div>
    );
};

export default VerifyEmail;
