import jwt from 'jsonwebtoken'

// Middleware to authenticate the user using JWT
const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies // Extract token from cookies (frontend must send token as a cookie)

        // If no token is found → user is not logged in / unauthorized
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not Authorised"
            })
        }

        // Verify and decode the token using JWT_SECRET
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        // If token is valid → store userId inside request body
        // (so that controllers can access req.body.userId later)
        if (tokenDecode) {
            req.body.userId = tokenDecode.id
        }
        else {
            // If decoding failed → invalid token
            return res.status(401).json({
                success: false,
                message: "Not Authorised"
            })
        }

        // Call next() → pass control to the next middleware/controller
        next()

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export default userAuth