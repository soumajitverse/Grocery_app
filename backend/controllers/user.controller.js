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
            hashedPassword
        })

       

    } catch (error) {

    }
}
