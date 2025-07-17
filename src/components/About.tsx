import { assets } from '../assets/assets.tsx'
import { motion } from "motion/react"



const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }} 
      transition={{ duration: 0.75 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }}
      id='About' className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='font-[200] underline'>Our Brand</span></h1>
      <p className='text-gray-500 text-center max-w-80 mb-8'>Passionate About Properties, Dehicated to Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img className='w-full max-w-lg' src={assets.brand_img} alt="brand_img" />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <h1 className='text-4xl font-medium text-gray-800'>10+</h1>
              <p>Years of Excellence</p>
            </div>
            <div>
              <h1 className='text-4xl font-medium text-gray-800'>10+</h1>
              <p>Years of Excellence</p>
            </div>
            <div>
              <h1 className='text-4xl font-medium text-gray-800'>10+</h1>
              <p>Years of Excellence</p>
            </div>
            <div>
              <h1 className='text-4xl font-medium text-gray-800'>10+</h1>
              <p>Years of Excellence</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus doloribus ut sit quaerat, consequatur unde dolore ullam sapiente quae qui fugit. Quibusdam perspiciatis veniam error a fugit veritatis! Sed?</p>
          <button className='bg-blue-700 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
      </div>
    </motion.div>

  )
}

export default About
