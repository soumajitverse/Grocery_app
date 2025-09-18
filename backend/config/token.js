import jwt from 'jsonwebtoken'

// function for token generation
const generateToken = (id) => {
    let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

export default generateToken