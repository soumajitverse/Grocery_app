import generateToken from "../config/token.js"


// Seller Login : /api/seller/login
export const sellerLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        // to check all the details are given or not
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required to login"
            })
        }

        //  check given the email and password are same with the password and email that is present in .env file
        if (password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL) {

            // jwt Token Created And Stored The Value into Token
            const token = generateToken(email)

            // Cookie Creation
            res.cookie('sellerToken', token, {
                httpOnly: true, // Prevent JavaScript to access cookie
                secure: process.env.NODE_ENV === 'production', // Use secure cookie in the production
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF protection
                maxAge: 7 * 24 * 60 * 60 * 1000 // this is cookie expiration time and this is always be written in milisecond. 
            })


            return res.status(200).json({
                success: true,
                message: "Logged in"
            })

        } else {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// Seller isAuth : api/seller/is-auth
export const isSellerAuth = async (req, res) => {
    try {

        return res.status(200).json({
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// Logout Seller : api/seller/logout
export const sellerLogout = async (req, res) => {
    try {
        //clearing the cookie will delete the token so that user will be automatically logout
        res.clearCookie('sellerToken', {
            httpOnly: true, // Prevent JavaScript to access cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookie in the production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF protection
        })

        return res.status(200).json({
            success: true,
            message: "Logged Out successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}