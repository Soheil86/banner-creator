import express from 'express'
const router = express.Router()
import { getBannerById, getBanners } from '../controllers/bannerController.js'

router.route('/').get(getBanners)
router.route('/:id').get(getBannerById)

export default router
