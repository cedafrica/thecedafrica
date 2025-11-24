'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Image from 'next/legacy/image'

const JoinTeam = () => {
  // State for contact form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [avCareerPath, setAvCareerPath] = useState('')
  const [qualification, setQualification] = useState('')
  const [experience, setExperience] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axios.post('/api/member', {
        name,
        email,
        phone,
        avCareerPath,
        qualification,
        experience,
      })
      setSuccess(true)
      setName('')
      setEmail('')
      setPhone('')
      setAvCareerPath('')
      setQualification('')
      setExperience('')
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
      <div className="container-fluid bg-white  flex lg:flex-row flex-col py-20">
        <div className="lg:w-1/3 p-6 text-black">
          <h1 className="text-3xl articulatcf font-black">Join Our Team</h1>
          <p className="articulatcfLight lg:pr-20 pt-4">
            We are always in search of exceptionally smart and passionate technology enthusiast,
            with a yearning desire for audiovisual excellence. If that sounds like you, apply to our
            internship program.
          </p>
        </div>

        <div className="lg:w-2/3 lg:p-12 p-6">
          {success && (
            <p className="text-black articulatcfLight font-bold text-lg animate-pulse border-2 border-white rounded-full p-4 my-4 bg-transparent shadow-md max-w-[500px] mx-auto text-center">
              🎉 Your application has been submitted! We will get back to you soon!
            </p>
          )}
          {success && setTimeout(() => setSuccess(false), 5000) && null}

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="lg:flex justify-between gap-4">
              <input
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-6 my-2 rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
              />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-6 my-2 rounded-3xl w-full  border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
              />
            </div>

            <div className="lg:flex justify-between gap-4">
              <input
                type="text"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="p-6 my-2 rounded-3xl w-full  border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
              />
              <select
                value={avCareerPath}
                onChange={(e) => setAvCareerPath(e.target.value)}
                required
                className="p-6 my-2 rounded-3xl w-full  border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
              >
                <option value="" disabled>
                  Select AV Career Path
                </option>
                <option value="system-integrator">System Integrator</option>
                <option value="system-designer">System Designer</option>
              </select>
            </div>

            <div className="lg:flex justify-between gap-4">
              <select
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                required
                className="p-6 my-2 rounded-3xl w-full  border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
              >
                <option value="" disabled>
                  Select Qualification
                </option>
                <option value="b-eng-electrical-electronics">B. Eng Electrical Electronics</option>
                <option value="b-eng-electrical-engineering">B. Eng Electrical Engineering</option>
                <option value="b-eng-computer-science">B. Eng Computer Science</option>
              </select>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
                className="p-6 my-2 rounded-3xl w-full border border-black text-black bg-transparent placeholder-black text-xs focus:outline-none"
              >
                <option value="" disabled>
                  Select Experience Level
                </option>
                <option value="undergraduate">Undergraduate</option>
                <option value="pre-nysc">Pre-NYSC</option>
                <option value="post-nysc">Post-NYSC (1 Year)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 border text-black inline-flex cursor-pointer bg-transparent py-4 px-6 rounded-full group flex items-center gap-4 hover:gap-4 transition-all duration-300 hover-btn"
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
    </>
  )
}

export default JoinTeam
