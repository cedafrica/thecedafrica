'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Image from 'next/legacy/image'

const ContactForm = () => {
  // State for contact form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axios.post('/api/contact', {
        name,
        email,
        phone,
        message,
      })
      setSuccess(true)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (error) {
      console.error(
        'Error submitting the form',
        error.response ? error.response.data : error.message,
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex lg:flex-row flex-col ">
      <div className="lg:w-1/2 relative contactImg">
        <Image
          src="/contact.png" // Replace with your image path
          alt="Contact"
          width={1000} // Adjusted width to maintain aspect ratio
          height={800} // Adjusted height to maintain aspect ratio
          className="w-full h-auto block object-cover contactFormImg"
          style={{ display: 'block' }}
        />
      </div>
      <div className="lg:w-1/2 lg:py-0 py-6 lg:px-16 p-6">
        <p className="text-2xl articulatcf lg:pr-20 py-8" style={{ color: 'black' }}>
          Got a question for our <br></br> team? Send us an enquiry
        </p>
        {success && (
          <p
            style={{ color: 'black' }}
            className="text-black  articulatcfLight font-bold text-lg animate-pulse border-2 border-black rounded-full p-4 my-4 bg-transparent  shadow-md max-w-[500px] mx-auto text-center"
          >
            🎉 Your message has been sent! We will get back to you soon!
          </p>
        )}
        {success && setTimeout(() => setSuccess(false), 5000) && null}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="py-6 px-4 articulatcfLight rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none" // Removed decoration on focus
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="py-6 px-4 articulatcfLight rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none" // Removed decoration on focus
            />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="p-6 rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="py-6 px-4 articulatcfLight rounded-2xl h-40 border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none" // Removed decoration on focus
          />

          <div>
            <button
              type="submit"
              className="cursor-grab my-6 group inline-flex items-center gap-4 rounded-full border border-black bg-transparent px-6 py-4 text-black transition-all duration-300  hover-btn"
            >
              {loading ? (
                <div className="loader invert border-t-transparent border-solid border-black rounded-full animate-spin h-5 w-5"></div>
              ) : (
                <span>Submit</span>
              )}
              <Image
                src="/blackarrow.svg"
                alt="arrow"
                width={16}
                height={16}
                className={`transform transition-transform duration-300 ${loading ? 'opacity-0' : 'group-hover:-rotate-45 group-hover:invert'}`}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
