import { Category } from '../components/category/Category'
import { CardBanner } from '../components/card/CardBanner'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBanners } from '../actions/bannerActions'

const HomePage = () => {
  const dispatch = useDispatch()
  const bannerList = useSelector((state) => state.bannerList)
  const { banners } = bannerList

  useEffect(() => {
    dispatch(listBanners())
  }, [dispatch])
  return (
    <>
      <Category banners={banners} />
      <CardBanner banners={banners} />
    </>
  )
}

export default HomePage
