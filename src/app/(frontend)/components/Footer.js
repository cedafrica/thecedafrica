// components/Footer.js
'use client'

import Link from 'next/link'
import Image from 'next/legacy/image'
import logo from '../../../assets/CEDAFRICA.png'
import FadeInOnScroll from '../components/FadeInOnScroll'

export default function Footer() {
  return (
    <footer className="mb-auto">
      <div className="container-fluid px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-28 lg:pb-20">
          <FadeInOnScroll className="flex flex-col gap-4 justify-start border-b border-white/20 pb-8 md:border-b-0 md:pb-0">
            <div>
              <Image src={logo} alt="logo" width={105} height={72} />
            </div>
            <p style={{ color: 'white' }} className="text-base lg:pr-20">
              #24A Providence Street Lekki Phase 1, Lagos, Nigeria
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll className="flex flex-col gap-4 justify-start border-b border-white/20 pb-8 md:border-b-0 md:pb-0">
            <ul style={{ color: 'white' }} className="text-sm space-y-4 articulatcfLight">
              <li className="flex items-center gap-2">
                <Image src="/phone.svg" alt="Phone icon" width={16} height={16} />
                <a href="tel:+2348086662168" className="hover:text-gray-300">
                  +234 808 6662168
                </a>
              </li>
              <li className="flex items-center gap-2 ">
                <Image src="/email.svg" alt="Email icon" width={16} height={16} />
                <a href="mailto:experience@ced.africa" className="hover:text-gray-300">
                  experience@ced.africa
                </a>
              </li>
              <li className="flex items-center gap-2 ">
                <Image src="/insta.svg" alt="Instagram icon" width={16} height={16} />
                <a
                  href="https://instagram.com/ced.africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2 ">
                <Image src="/linkedin.svg" alt="LinkedIn icon" width={16} height={16} />
                <a
                  href="https://linkedin.com/company/cedafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </FadeInOnScroll>

          <FadeInOnScroll className="flex flex-col gap-4 justify-start border-b border-white/20 pb-8 md:border-b-0 md:pb-0">
            <ul style={{ color: 'white' }} className="text-sm space-y-4 articulatcfLight">
              <li>
                <Link
                  href="/aboutus"
                  className="group  flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>About Us</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Services</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Experiences</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/magazine"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Magazine</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Blog</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/distribution"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Distribution</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Consulting</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Projects</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Brands</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
            </ul>
          </FadeInOnScroll>
          <FadeInOnScroll className="flex flex-col gap-4 justify-start border-b border-white/20 pb-8 md:border-b-0 md:pb-0">
            <ul style={{ color: 'white' }} className="text-sm space-y-4 articulatcfLight">
              <li>
                <Link
                  href="/retail"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>AV Retail</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Partners</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.soundhous.com"
                  target="_blank"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Store</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>Contact Us</span>
                  <Image
                    src="/whitearrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>
              </li>
            </ul>
          </FadeInOnScroll>
        </div>
      </div>
      <FadeInOnScroll className="container-fluid flex gap-4 px-6 justify-start py-6 border-t-1 border-gray-700">
        <ul className="text-xs space-y-2">
          <li style={{ color: 'white' }}>
            © {new Date().getFullYear()} | CED Africa. All rights reserved{' '}
          </li>
        </ul>
      </FadeInOnScroll>
    </footer>
  )
}
