import generateToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'


// Register User : /api/user/register 
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // to check all the details are given or not
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing Details"
            })
        }

        // checking user is already present in the DB or not
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: 'false',
                message: 'User already exists'
            })
        }

        // Encrypting The Password
        // Hash the plain text password using bcrypt with a cost factor of 10 (2^10 = 1024 iterations)
        const hashedPassword = await bcrypt.hash(password, 10)

        // User Creation
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        // jwt Token Created And Stored The Value into Token
        let token;
        try {
            token = generateToken(user._id)
        } catch (error) {
            console.log(error)
        }

        // Cookie Creation
        res.cookie('token', token, {
            httpOnly: true, // Prevent JavaScript to access cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookie in the production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000 // this is cookie expiration time and this is always be written in milisecond. 
        })

        return res.status(201).json({
            success: true,
            user: {
                email,
                name
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// Login User : api/user/login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        // to check all the details are given or not
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required to login"
            })
        }

        // checking user is already present or not
        let existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            })
        }


        // checking the user given password while login and the hashed password is same or not
        let isMatch = await bcrypt.compare(password, existingUser.password)

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect Password"
            })
        }

        // if both the password is same then it will create a token
        // jwt Token Created And Stored The Value into Token
        let token;
        try {
            token = generateToken(existingUser._id)
        } catch (error) {
            console.log(error)
        }

        // Cookie Creation
        res.cookie('token', token, {
            httpOnly: true, // Prevent JavaScript to access cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookie in the production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000 // this is cookie expiration time and this is always be written in milisecond. 
        })

        return res.status(200).json({
            success: true,
            user: {
                email: existingUser.email,
                name: existingUser.name
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// Check Auth : api/user/is-auth
// it will check user is authenticated or not
export const isAuth = async (req, res) => {
    try {
        const { userId } = req.body

        // Find the user in the database by their ID
        // `.select("-password")` excludes the password field from the response for security
        const user = await User.findById(userId).select("-password")

        return res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// Logout User : api/user/logout
export const logout = async (req, res) => {
    try {
        //clearing the cookie will delete the token so that user will be automatically logout
        res.clearCookie('token', {
            httpOnly: true, // Prevent JavaScript to access cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookie in the production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF protection
        })

        res.status(200).json({
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
