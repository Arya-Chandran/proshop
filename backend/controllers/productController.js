import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc Fetch all products
//@route Get /api/products
//@access Public route
const getProucts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

//@desc Fetch single product
//@route Get /api/products/:id
//@access Public route

const getProuctById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProucts, getProuctById }
