import express from 'express'
const router = express.Router()
import { getProucts, getProuctById } from '../controllers/productController.js'

router.route('/').get(getProucts)
router.route('/:id').get(getProuctById)

export default router
