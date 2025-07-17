import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { assets, projectsData } from '../assets/assets.tsx'

const Projects = () => {
  return (
    <div id='Projects' className="flex flex-col justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='font-[200] underline'>Completed</span>
      </h1>
      <p className='mx-auto text-gray-500 text-center max-w-80 mb-2'>
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* Navigation buttons */}
      <div className="flex justify-end items-center mb-4 gap-2">
        <button className="custom-swiper-prev p-3 bg-gray-200 rounded hover:bg-gray-300 transition">
          <img src={assets.left_arrow} alt="Prev" className="w-5 h-5" />
        </button>
        <button className="custom-swiper-next p-3 bg-gray-200 rounded hover:bg-gray-300 transition">
          <img src={assets.right_arrow} alt="Next" className="w-5 h-5" />
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.custom-swiper-next',
          prevEl: '.custom-swiper-prev',
        }}

         autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}

        spaceBetween={20}
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
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index} className="relative">
            <img className='w-full h-auto mb-14' src={project.image} alt={project.title} />
            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
              <div className='inline-block bg-white w-2/3 px-4 py-2 shadow-md'>
                <h1 className='text-xl font-semibold text-gray-800'>{project.title}</h1>
                <p className='text-gray-500 text-sm'>{project.price} <span>|</span> {project.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}


      </Swiper>
    </div>
  )
}

export default Projects
