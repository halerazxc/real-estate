import { useEffect, useState } from 'react';
import { assets } from '../assets/assets.tsx';
const Navbar = () => {

  const [showMobileNav, setMobileNav] = useState(false)
  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'

    }

  }, [showMobileNav])
  return (
    <div className='md:absolute fixed top-0 left-0 w-full z-[100] md:backdrop-blur-0 md:bg-inherit md:border-none backdrop-blur-md bg-black/50 border-b border-gray-200 shadow-sm transition-colors duration-300'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="logo" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
        <img onClick={() => setMobileNav(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>
      {/* mobile navigation */}
      <div className={`fixed left-0 top-0 w-full h-screen z-[100] bg-white transform transition-transform duration-300 ease-in-out
      ${showMobileNav ? 'translate-x-0' : 'hidden translate-x-full '}`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setMobileNav(false)} className='w-6' src={assets.cross_icon} alt="cross_icon" />
        </div>
        <ul className='flex flex-col justify-center items-center gap-7 text-black'>
          <a onClick={() => setMobileNav(false)} href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a onClick={() => setMobileNav(false)} href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a onClick={() => setMobileNav(false)} href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a onClick={() => setMobileNav(false)} href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
