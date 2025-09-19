

// Seller Login : /api/seller/login
export const sellerLogin = async (req, res) => {
  try {
    const {email, password} = req.body

    // to check all the details are given or not
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required to login"
            })
        }
  } catch (error) {
    
  }
}
