'use client'

import Header from './Header'
import Footer from './Footer'

export default function Shell({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
