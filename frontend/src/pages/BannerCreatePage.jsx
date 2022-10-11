import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/common/Message'
import Loader from '../components/common/Loader'
import FormContainer from '../components/common/FormContainer'
import { createBanner } from '../actions/bannerActions'
import { BANNER_CREATE_RESET } from '../constants/bannerConstants'

const BannerCreatePage = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const bannerCreate = useSelector((state) => state.bannerCreate)
  const { loading, error, success, banner } = bannerCreate

  useEffect(() => {
    if (success === false) {
      dispatch({ type: BANNER_CREATE_RESET })
    }
  }, [dispatch, banner, success])

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
      createBanner({
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
        <h1>Create New Banner</h1>
        {loading && <Loader />}
        {error && <Message variant='danger'>{error}</Message>}
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
                placeholder='Banner Title'
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
              CREATE
            </Button>
          </Form>
        )}
      </FormContainer>

      {banner && (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{banner.title}</h3>
            <img style={{ width: '100%' }} src={banner.image} alt='' />
          </div>
        </div>
      )}
    </>
  )
}

export default BannerCreatePage
