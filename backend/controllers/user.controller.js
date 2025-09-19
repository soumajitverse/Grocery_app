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
            message: "internal server error",
            error
        })
    }
}
