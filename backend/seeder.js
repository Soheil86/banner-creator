import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'
import users from './data/users.js'
import banners from './data/banners.js'
import User from './models/userModel.js'
import Banner from './models/bannerModel.js'
import connectDB from './config/db.js'

dotenv.config()

await connectDB()

const importData = async () => {
  try {
    await Banner.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleBanner = banners.map((banner) => {
      return { ...banner, user: adminUser }
    })

    await Banner.insertMany(sampleBanner)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Banner.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
