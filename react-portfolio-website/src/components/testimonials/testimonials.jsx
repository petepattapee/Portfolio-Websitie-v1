import React from 'react'
import './testimonials.css'
import me from '../../assets/me.png' //should be avatar
import me2 from '../../assets/me.png' //should be avatar
import me3 from '../../assets/me.png' //should be avatar
import me4 from '../../assets/me.png' //should be avatar

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: me,
    name: 'Pattapee Pimton',
    review: 'Lorem ipsum dolor sit amet.'
  },
  {
    avatar: me2,
    name: 'Pattapee Pimton',
    review: 'Lorem ipsum dolor sit amet.'
  },
  {
    avatar: me3,
    name: 'Pattapee Pimton',
    review: 'Lorem ipsum dolor sit amet.'
  },
  {
    avatar: me4,
    name: 'Pattapee Pimton',
    review: 'Lorem ipsum dolor sit aasdfsadfmet.'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimoiials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
        data.map(({avatar, name, review, index}) => {
          return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={name} />
          </div>
            <h5>{name}</h5>
            <small className='cilent__review'>
              {review}
            </small>
          </SwiperSlide>
          )
         })
        }
      </Swiper>
    </section>
  )
}

export default testimonials