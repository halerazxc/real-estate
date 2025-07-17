import React, { useState, useRef, useEffect } from 'react'
import { assets, testimonialsData } from '../assets/assets.tsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Customer = () => {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const swiperRef = useRef(null)

  return (
    <div id='Testimonials' className="flex flex-col justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customer <span className='font-[200] underline'>Testimonials</span>
      </h1>
      <p className='mx-auto text-gray-500 text-center max-w-80 mb-8'>
        Real Stories from Those Who Found Home with Us
      </p>

      {/* Кнопки навигации */}
      <div className="flex justify-end items-center mb-4 gap-2">
        <button
          className={`customer-swiper-prev p-3 rounded transition ${
            isBeginning ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 cursor-pointer'
          }`}
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img
            src={assets.left_arrow}
            alt="Prev"
            className={`w-5 h-5 ${isBeginning ? 'filter brightness-50' : ''}`}
          />
        </button>
        <button
          className={`customer-swiper-next p-3 rounded transition ${
            isEnd ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 cursor-pointer'
          }`}
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img
            src={assets.right_arrow}
            alt="Next"
            className={`w-5 h-5 ${isEnd ? 'filter brightness-50' : ''}`}
          />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },
          1280: {
            slidesPerView: 3.5,
          },
        }}
        slidesPerView={3}
        spaceBetween={10}
        className="w-full"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='shadow-md md:max-w-[340px] max-w-max mx-auto border rounded px-8 py-12 text-center'>
              <img className='mx-auto mb-4' src={testimonial.image} alt={testimonial.name} />
              <p className='text-xl text-gray-700 font-medium'>{testimonial.name}</p>
              <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
              <div className='flex justify-center gap-1 text-red-500 mb-4'>
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <img key={i} src={assets.star_icon} alt="star" />
                ))}
              </div>
              <p className='text-gray-600'>{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Customer
