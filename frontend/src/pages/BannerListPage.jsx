import { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/common/Message'
import Loader from '../components/common/Loader'
import { listBanners, deleteBanner } from '../actions/bannerActions'

const BannerListPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const bannerList = useSelector((state) => state.bannerList)
  const { loading, error, banners } = bannerList

  const bannerDelete = useSelector((state) => state.bannerDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = bannerDelete

  //   const productCreate = useSelector((state) => state.productCreate)
  //   const {
  //     loading: loadingCreate,
  //     error: errorCreate,
  //     success: successCreate,
  //     product: createdProduct,
  //   } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo || !userInfo.isAdmin) {
      dispatch(listBanners())
    } else {
      navigate('/login')
    }
  }, [dispatch, userInfo, successDelete, navigate])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteBanner(id))
    }
  }

  const createBannerHandler = () => {
    // dispatch(createProduct())
    //Create Banner
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Banners</h1>
        </Col>
        <Col className='text-right'>
          <LinkContainer to={`/admin/banner/create`}>
            <Button className='my-3'>
              <i className='fas fa-plus'></i> Create Banner
            </Button>
          </LinkContainer>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {/* {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>} */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => (
                <tr key={banner._id}>
                  <td>{banner._id}</td>
                  <td>{banner.title}</td>
                  <td>{banner.image}</td>
                  <td>
                    <LinkContainer to={`/admin/banner/${banner._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(banner._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default BannerListPage
