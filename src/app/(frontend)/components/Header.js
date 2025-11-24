'use client'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/legacy/image'
import logo from '../../../assets/CEDAFRICA.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [activeSubItemImage, setActiveSubItemImage] = useState(null)
  const submenuRefs = useRef({})

  // UPDATED MENU ITEMS
  const [menuItems, setMenuItems] = useState([
    { title: 'HOME', path: '/' },
    { title: 'ABOUT US', path: '/aboutus' },

    

    // SERVICES (dynamic API submenu)
    { title: 'SERVICES', path: '#', submenu: [] },

    { title: 'EXPERIENCES', path: '/experiences' },
    { title: 'BLOG', path: '/blog' },
    { title: 'PROJECTS', path: '/projects' },
    { title: 'PARTNERS', path: '/partners' },
    // NEW: CED ARMS (PARENT MENU)
    {
      title: 'CED PRO',
      path: '#',
      submenu: [
        { title: 'AV DISTRIBUTION', path: '/distribution' },
        { title: 'AV CONSULTING', path: '/consulting' },
      ],
    },
    { title: 'STORE', path: 'https://www.soundhous.com' },
    { title: 'CONTACT US', path: '/contact' },
  ])

  // Fetch services from API route
  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch('/api/service')
        const data = await res.json()

        const services = data.docs.map((service) => ({
          title: service.title,
          path: `/services/${service.id}`,
          image: service.coverImage?.url || '/fallback.jpg',
        }))

        setMenuItems((prev) =>
          prev.map((item) =>
            item.title === 'SERVICES' ? { ...item, submenu: services } : item
          )
        )

        if (services[0]?.image) {
          setActiveSubItemImage(services[0].image)
        }
      } catch (err) {
        console.error('Error fetching services:', err)
      }
    }

    fetchServices()
  }, [])

  // Scroll listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index)
  }

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeSubmenu !== null) {
        const activeRef = submenuRefs.current[activeSubmenu]
        const isClickInside =
          activeRef &&
          (activeRef.contains(event.target) ||
            event.target.closest('.menu-item') === activeRef?.parentNode)

        if (!isClickInside) {
          setActiveSubmenu(null)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeSubmenu])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid border-b border-white">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="logo" width={90} height={62} />
          </Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul className="main-menu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`menu-item ${
                  item.submenu ? 'has-dropdown' : ''
                } ${activeSubmenu === index ? 'active' : ''}`}
                ref={(el) =>
                  item.submenu && (submenuRefs.current[index] = el)
                }
              >
                {item.submenu?.length ? (
                  <>
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault()
                        toggleSubmenu(index)
                      }}
                      className="menu-link cursor-pointer"
                      aria-expanded={activeSubmenu === index}
                    >
                      {item.title}
                    </a>

                    <div
                      className={`dropdown-container ${
                        activeSubmenu === index ? 'active-dropdown' : ''
                      }`}
                    >
                      <div>
                        <ul className="dropdown grid grid-col-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              onMouseEnter={() =>
                                setActiveSubItemImage(subItem.image)
                              }
                              onMouseLeave={() =>
                                setActiveSubItemImage(
                                  item.submenu[0]?.image
                                )
                              }
                              className="cursor-pointer dropdownmenu"
                              href={subItem.path}
                              onClick={() => {
                                setMenuOpen(false)
                                setActiveSubmenu(null)
                              }}
                            >
                              <div className="group flex items-center gap-2 hover:gap-4 transition-all duration-300 justify-center">
                                <span>{subItem.title}</span>

                                <span className="hidden lg:inline">
                                  <Image
                                    src="/blackarrow.svg"
                                    alt="arrow"
                                    width={16}
                                    height={16}
                                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                                  />
                                </span>

                                <span className="lg:hidden inline">
                                  <Image
                                    src="/whitearrow.svg"
                                    alt="arrow"
                                    width={16}
                                    height={16}
                                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                                  />
                                </span>
                              </div>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {item.title === 'STORE' ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
