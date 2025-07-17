import { assets } from '../assets/assets.tsx'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-400 pt-14 px-6 md:px-20 lg:px-32 w-full'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-0'>
        {/* Логотип и описание */}
        <div className='md:w-1/3 flex flex-col'>
          <img src={assets.logo_dark} alt="Logo" className='mb-6 w-36 md:w-44' />
          <p className='leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut facere adipisci maxime excepturi dolorem, quaerat officia, porro minus voluptatibus, soluta quibusdam ut quae est veniam dolorum mollitia ipsam magni. Inventore.
          </p>
        </div>
        {/* Меню компании */}
        <div className='md:w-1/5'>
          <h3 className='text-white text-lg font-semibold mb-6'>Company</h3>
          <ul className='flex flex-col gap-3 text-gray-400'>
            <li><a className='hover:text-white transition-colors' href="">Home</a></li>
            <li><a className='hover:text-white transition-colors' href="#About">About us</a></li>
            <li><a className='hover:text-white transition-colors' href="#Contacts">Contact Us</a></li>
            <li><a className='hover:text-white transition-colors' href="">Privacy policy</a></li>
          </ul>
        </div>
        {/* Подписка на рассылку */}
        <div className='md:w-1/3'>
          <h3 className='text-white text-lg font-semibold mb-6'>Subscribe to our newsletter</h3>
          <p className='mb-6 max-w-md'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row gap-3'>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <button
              type="submit"
              className="py-3 px-6 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright {new Date().getFullYear()} © GreatStack. All Right Reserved.
      </div>
    </footer>
  )
}

export default Footer
