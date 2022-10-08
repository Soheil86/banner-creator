import asyncHandler from 'express-async-handler'
import Banner from '../models/bannerModel.js'

// @desc    Fetch all banners
// @route   GET /api/banners
// @access  Public
const getBanners = asyncHandler(async (req, res) => {
  const banners = await Banner.find({})
  res.json(banners)
})

// @desc    Fetch single banner
// @route   GET /api/banners/:id
// @access  Public
const getBannerById = asyncHandler(async (req, res) => {
  const banner = await Banner.findById(req.params.id)

  if (banner) {
    res.json(banner)
  } else {
    res.status(404)
    throw new Error('Banner not found')
  }
})

export {getBanners,getBannerById}