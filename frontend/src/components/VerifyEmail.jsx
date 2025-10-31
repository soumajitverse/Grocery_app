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
        <div
            onClick={() => setShowVerifyEmail(false)}
            className="fixed inset-0 z-30 flex items-center justify-center bg-black/50"
        >
            <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={onSubmitHandler}
                className="bg-white w-[90%] max-w-sm p-8 rounded-2xl shadow-2xl border border-gray-100 flex flex-col gap-6 relative"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    <span className="text-primary">Email</span> Verification
                </h2>

                <div className="text-center text-gray-600 text-sm leading-relaxed">
                    <p>Enter the 6-digit code sent to your email address.</p>
                    <p className="text-xs mt-1">
                        Didn’t receive it? Check your spam or promotions folder.
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Enter OTP"
                    maxLength="6"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="text-center tracking-widest text-lg border rounded-lg py-3 focus:ring-2 focus:ring-primary focus:outline-none w-full transition-all"
                />

                <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dull text-white py-3 rounded-lg font-medium text-lg transition-all shadow-md hover:shadow-lg"
                >
                    Verify Email
                </button>

                <p className="text-xs text-center text-gray-500 mt-2"
                    onClick={verifyAccEmail}
                >
                    Having trouble? <span className="text-primary cursor-pointer hover:underline">Resend code</span>
                </p>
            </form>
        </div>
    );
};

export default VerifyEmail;
