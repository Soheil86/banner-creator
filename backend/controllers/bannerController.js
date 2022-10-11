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

// @desc    Delete a banner
// @route   DELETE /api/banners/:id
// @access  Private/Admin
const deleteBanner = asyncHandler(async (req, res) => {
  const banner = await Banner.findById(req.params.id)

  if (banner) {
    await banner.remove()
    res.json(banner)
  } else {
    res.status(404)
    throw new Error('Banner not found')
  }
})

const createBanner = asyncHandler(async (req, res) => {
  const { title, image } = req.body
  const banner = new Banner({
    title: title,
    user: req.user._id,
    image: image,
  })

  const createdBanner = await banner.save()
  res.status(201).json(createdBanner)
})

const updateBanner = asyncHandler(async (req, res) => {
  const { title, image } = req.body

  const banner = await Banner.findById(req.params.id)

  if (banner) {
    banner.title = title
    banner.image = image

    const updatedBanner = await banner.save()
    res.json(updatedBanner)
  } else {
    res.status(404)
    throw new Error('Banner not found')
  }
})

export { getBanners, getBannerById, deleteBanner, createBanner, updateBanner }
