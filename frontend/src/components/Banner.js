import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Banner = ({ banner }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/banner/${banner._id}`}>
        <Card.Img src={banner.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/banner/${banner._id}`}>
          <Card.Title as='div'>
            <strong>{banner.title}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Banner
