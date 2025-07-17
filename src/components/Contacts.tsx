import React from 'react'

const Contacts = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "27af5eec-88d8-4735-aedd-71cf26b40e33");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult("");
    }
  };


  return (
    <div id='Contacts' className="flex flex-col justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact <span className='font-[200] underline'>With Us</span>
      </h1>
      <p className='mx-auto text-gray-500 text-center max-w-80 mb-12'>
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto">
        <div className="flex-wrap flex gap-8 mb-6">
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="mb-2 text-gray-700 font-normal">Your Name</label>
            <input
              required
              id="name"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="mb-2 text-gray-700 font-normal">Your Email</label>
            <input
              required
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
          <button type='submit' className='bg-blue-700 text-white px-8 py-2 rounded'>{result ? result : "Send Message"}</button>
        </div>
      </form>
    </div>

  )
}

export default Contacts
