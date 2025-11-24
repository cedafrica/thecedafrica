'use client'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React, { useState } from 'react'
import axios from 'axios'
import Image from 'next/legacy/image'

const BookTour = () => {
  // State for contact form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [proposedDate, setProposedDate] = useState('')
  const [proposedTime, setProposedTime] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axios.post('/api/tour', {
        name,
        email,
        message,
        proposedDate,
        proposedTime,
      })
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
      setProposedDate('')
      setProposedTime('')
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
    <div className="flex justify-center pb-20">
      <div className=" lg:p-12 p-6 w-2xl">
        {success && (
          <p className="text-black  articulatcfLight font-bold text-lg animate-pulse border-2 border-black rounded-full p-4 my-4 bg-transparent  shadow-md max-w-[500px] mx-auto text-center">
            🎉 Your message has been sent! We wll get back to you soon!
          </p>
        )}
        {success && setTimeout(() => setSuccess(false), 5000) && null}

        <form onSubmit={handleSubmit} className="flex  articulatcfLight flex-col space-y-4">
          <div className="lg:flex gap-4">
            <input
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-4 my-2 rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none" // Removed decoration on focus
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-4 my-2 rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none" // Removed decoration on focus
            />
          </div>

          <div className="lg:flex gap-4">
            <input
              type="date"
              placeholder="Proposed Date"
              value={proposedDate}
              onChange={(e) => setProposedDate(e.target.value)}
              required
              className="p-4 my-2 rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none" // Removed decoration on focus
            />
            <input
              type="time"
              placeholder="Proposed Time"
              value={proposedTime}
              onChange={(e) => setProposedTime(e.target.value)}
              required
              className="p-4 my-2 rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-4 rounded-2xl h-40 border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none" // Removed decoration on focus
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 inline-flex cursor-pointer bg-transparent border-black border text-black py-4 px-6 rounded-full group flex items-center gap-4 hover:gap-4 transition-all duration-300 hover-btn"
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

export default BookTour
