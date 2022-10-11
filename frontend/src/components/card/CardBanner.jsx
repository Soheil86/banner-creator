import React from 'react'
import './cardbanner.css'
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineShareAlt,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const CardBanner = ({ banners }) => {
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {banners.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.image} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.title}</a>
                </div>
                <Link to={`/details/${item._id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>

                <div className='date'>
                  <AiOutlineClockCircle className='icon' />{' '}
                  <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' />{' '}
                  <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
