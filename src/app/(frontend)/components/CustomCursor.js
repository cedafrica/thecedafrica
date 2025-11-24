'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hoveringInteractive, setHoveringInteractive] = useState(false)
  const [isOnLightBackground, setIsOnLightBackground] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest('a, button')
      const isLightArea = e.target.closest('[data-light]')

      if (isInteractive) setHoveringInteractive(true)
      if (isLightArea) setIsOnLightBackground(true)
    }

    const handleMouseOut = (e) => {
      const isInteractive = e.target.closest('a, button')
      const isLightArea = e.target.closest('[data-light]')

      if (isInteractive) setHoveringInteractive(false)
      if (isLightArea) setIsOnLightBackground(false)
    }

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      {/* <style jsx global>{`
        html, body {
          cursor: none;
        }
      `}</style> */}
      <div
        className={`custom-cursor ${hoveringInteractive ? 'hovering-link' : ''} ${isOnLightBackground ? 'on-light' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}
