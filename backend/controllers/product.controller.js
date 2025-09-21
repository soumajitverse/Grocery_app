import { v2 as cloudinary } from 'cloudinary'
import Product from '../models/product.model.js'

// Add Product : /api/product/add
export const addProduct = async (req, res) => {
    try {
        let productData = JSON.parse(req.body.productData) // parse the productData into JSON and store the value in productData

        // req.files contains all the images uploaded by user
        const images = req.files

        // upload all the images to cloudinary and return all the path urls of uploaded cloudinary images and store it in array format in imagesUrl
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,
                    { resource_type: 'image' })
                return result.secure_url
            })
        )

        await Product.create({ ...productData, image: imagesUrl }) // create a document in products collection using productData and imgesUrl in product.model.js format 

        return res.status(201).json({
            success: true,
            message: "Product added"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Get Product : /api/product/list
export const productList = async (req, res) => {

}

// Get Single Product : /api/product/id
export const productById = async (req, res) => {

}

// Change Product inStock : /api/product/stock
export const changeStock = async (req, res) => {

}

