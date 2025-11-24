'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Image from 'next/legacy/image'

const ContactUs = () => {
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
    <>
      <div className="relative overflow-hidden py-20 bg-white">
        <div className="container-fluid relative z-20 flex lg:flex-row flex-col">
          <div className="lg:w-1/3 p-6">
            <h1 style={{ color: 'black' }} className="text-3xl articulatcf font-black">
              Drop a Message
            </h1>
            <p style={{ color: 'black' }} className="articulatcfLight pt-4">
              The Home of Premium AV
            </p>
          </div>

          <div className="lg:w-2/3 lg:p-12 p-6">
            {success && (
              <p className="text-black articulatcfLight font-bold text-lg animate-pulse border-2 border-black rounded-full p-4 my-4 bg-transparent shadow-md max-w-[500px] mx-auto text-center">
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
                  className="p-6 rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="p-6 rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
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
                className="p-4 rounded-2xl h-40 border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
              />

              <div>
                <button
                  type="submit"
                  className="mt-4 inline-flex cursor-pointer bg-transparent  border text-black py-4 px-6 rounded-full group flex items-center gap-4 hover:gap-4 transition-all duration-300 hover-btn"
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
      </div>
    </>
  )
}

export default ContactUs
