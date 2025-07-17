import React from 'react'

const Contacts = () => {
  return (
    <div id='Contacts' className="flex flex-col justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact <span className='font-[200] underline'>With Us</span>
      </h1>
      <p className='mx-auto text-gray-500 text-center max-w-80 mb-12'>
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form className="w-full max-w-2xl mx-auto">
        <div className="flex-wrap flex gap-8 mb-6">
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="mb-2 text-gray-700 font-normal">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="mb-2 text-gray-700 font-normal">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-gray-700 font-normal">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here"
            className="border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className='w-full text-center mt-4'>
          <a href='' className='bg-blue-700 text-white px-8 py-2 rounded'>Send Message</a>
        </div>
      </form>
    </div>

  )
}

export default Contacts
