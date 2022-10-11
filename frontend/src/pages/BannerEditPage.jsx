import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/common/Message'
import Loader from '../components/common/Loader'
import FormContainer from '../components/common/FormContainer'
import { listBannerDetails, updateBanner } from '../actions/bannerActions'
import { BANNER_UPDATE_RESET } from '../constants/bannerConstants'

const BannerEditPage = () => {
  const { id: bannerId } = useParams()

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const bannerDetails = useSelector((state) => state.bannerDetails)
  const { loading, error, banner } = bannerDetails

  const bannerUpdate = useSelector((state) => state.bannerUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = bannerUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BANNER_UPDATE_RESET })
      navigate('/admin/bannerlist')
    } else {
      if (!banner.title || banner._id !== bannerId) {
        dispatch(listBannerDetails(bannerId))
      } else {
        setTitle(banner.title)
        setImage(banner.image)
      }
    }
  }, [dispatch, bannerId, banner, successUpdate, navigate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateBanner({
        _id: bannerId,
        title,
        image,
      })
    )
  }

  return (
    <>
      <Link to='/admin/bannerlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Banner</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default BannerEditPage
