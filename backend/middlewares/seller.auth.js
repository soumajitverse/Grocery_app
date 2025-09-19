import jwt from 'jsonwebtoken'

// Middleware to authenticate the seller using JWT
const sellerAuth = async (req, res, next) => {
try {
    const {sellerToken} = req.cookies 

    // If no token is found → seller is not logged in / unauthorized
if(!sellerToken){

}

} catch (error) {
    
}
}