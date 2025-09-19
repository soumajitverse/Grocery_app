import jwt from 'jsonwebtoken'

// Middleware to authenticate the seller using JWT
const sellerAuth = async (req, res, next) => {
    try {
        const { sellerToken } = req.cookies

        // If no token is found → seller is not logged in / unauthorized
        if (!sellerToken) {
            return res.status(401).json({
                success: false,
                message: "Not Authorised"
            })
        }

        // Verify and decode the sellerToken using JWT_SECRET
        const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET)

        // check decoded email value and the seller email(present in .env) is same or not
        if (tokenDecode.email == process.env.SELLER_EMAIL) {
            next() // pass control to the next middleware/controller
        }
        else {
            // If decoding failed → invalid token
            return res.status(401).json({
                success: false,
                message: "Not Authorised"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export default sellerAuth