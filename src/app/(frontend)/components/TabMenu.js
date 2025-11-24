'use client'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React, { useState } from 'react'
import Image from 'next/legacy/image'

const tabs = [
  {
    id: 'step1',
    label: 'Step 1 CLIENT DISCOVERY',
    content: (
      <div>
        <h2 className="text-lg font-semibold mb-2 cursor-pointer articulatcf">Client Discovery</h2>
        <p className="text-base articulatcfLight" style={{ color: 'grey' }}>
          The first step in our consulting process is understanding our client’s unique needs, space
          constraints, and expectations. This involves in-depth discussions to identify the purpose
          of the audiovisual setup, the specific functionalities required, and any preferences
          regarding aesthetics and technology integration.
          <br></br>Our team works closely with clients to assess the environment, ensuring that our
          solutions align perfectly with their vision while taking into consideration factors like
          room acoustics, lighting, and future scalability.
        </p>
      </div>
    ),
  },
  {
    id: 'step2',
    label: 'Step 2 AV DESIGN',
    content: (
      <div>
        <h2 className="text-lg font-semibold mb-2 cursor-pointer articulatcf">AV Design</h2>
        <p className="text-base articulatcfLight" style={{ color: 'grey' }}>
          Once we have a clear understanding of the clients needs, our team develops a tailored AV
          design that ensures optimal performance and visual appeal. This stage involves the
          selection of appropriate AV components, system layouts, and user interface design to
          provide a seamless experience. <br></br>
          Our goal is to create an immersive and intuitive AV system that not only meets but exceeds
          the client’s expectations. Every design is approached with precision, incorporating
          industry best practices to guarantee reliability, efficiency, and ease of use.
        </p>
      </div>
    ),
  },
  {
    id: 'step3',
    label: 'Step 3 TENDER DOCUMENT PROPOSAL',
    content: (
      <div>
        <h2 className="text-lg font-semibold mb-2 cursor-pointer articulatcf">
          Tender Document Proposal
        </h2>
        <p className="text-base articulatcfLight" style={{ color: 'grey' }}>
          To ensure that our meticulously crafted AV design is implemented effectively, we prepare a
          comprehensive tender document proposal. This document serves as a guideline for selecting
          the best contractors and suppliers to execute the project. <br></br>
          It includes detailed specifications, budget estimates, timelines, and quality benchmarks
          to ensure that all stakeholders involved are aligned on the execution strategy. By
          following a structured approach, we guarantee a smooth transition from design to
          implementation while maintaining high standards of quality and efficiency.
        </p>
      </div>
    ),
  },
  {
    id: 'step4',
    label: 'Step 4 ENGINEERED DRAWING',
    content: (
      <div>
        <h2 className="text-lg font-semibold mb-2 cursor-pointer articulatcf ">
          Engineered Drawing
        </h2>
        <p className="text-base articulatcfLight" style={{ color: 'grey' }}>
          A critical step in the execution of any AV project is the preparation of precise
          engineered drawings. These detailed schematics provide a clear roadmap for installation,
          ensuring that every component is placed correctly for optimal functionality. <br></br>
          Engineered drawings include system layouts, wiring diagrams, elevation plans, and
          integration schematics, all benchmarked against industry standards. Our expert team
          ensures that every technical aspect is accounted for, reducing the risk of errors and
          ensuring seamless execution of the AV system as designed.
        </p>
      </div>
    ),
  },
]

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(null)

  const handleTabClick = (tabId) => {
    setActiveTab((prevTab) => (prevTab === tabId ? null : tabId))
  }

  return (
    <div className="container-fluid  px-4">
      <h1 className="text-center text-black articulatcfLight mb-12">Our Methodology</h1>

      <div className="lg:flex justify-between">
        <div className="space-y-12 lg:w-1/2 p-6">
          {tabs.map((tab) => (
            <div key={tab.id}>
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left py-4 px-6  articulatcf rounded-lg transition-all duration-300 border-b border-black ${
                  activeTab === tab.id
                    ? 'bg-transparent text-black font-bold border-black'
                    : 'bg-transparent text-black border-gray-700 hover:border-black'
                }`}
              >
                {tab.label}
              </button>
              {activeTab === tab.id && (
                <div className="mt-4 p-6 bg-transparent articulatcfLight text-black bg-opacity-10 rounded-lg">
                  {tab.content}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 p-6">
          <Image
            src="/kilala.jpg"
            alt="Ced africa"
            width={1000}
            height={800}
            className="w-full h-auto rounded-2xl mb-4 object-cover image-hover-effect"
          />
        </div>
      </div>
    </div>
  )
}

export default TabMenu
