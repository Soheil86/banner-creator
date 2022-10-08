import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listBanners } from '../actions/bannerActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Banner from '../components/Banner'

const HomePage = () => {
  const dispatch = useDispatch()

  const bannerList = useSelector((state) => state.bannerList)
  const { loading, error, banners } = bannerList

  console.log(banners)

  useEffect(() => {
    dispatch(listBanners())
  }, [dispatch])

  return (
    <>
      <h1>Banner Lists</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {banners.map((banner) => (
            <Col key={banner._id} sm={12} md={6} lg={4} xl={3}>
              <Banner banner={banner} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomePage
