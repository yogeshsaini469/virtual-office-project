"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="LaunchWise Logo" width={70} height={70} />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 ">
            <div className="relative group">
              <Link href="/#" className="light-color hover:text-gray-900 flex items-center">
                Workspace & Services
                <svg className="ml-1 h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </Link>
            </div>
            <Link href="/#" className="light-color hover:text-gray-900">Get started</Link>
            <div className="relative group">
              <Link href="/#" className="light-color hover:text-gray-900 flex items-center">
                More
                <svg className="ml-1 h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </Link>
            </div>
            <Link href="/#" className="light-color hover:text-gray-900">Help</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="light-color hover:text-gray-900">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </a>
            <div className="h-6 w-px bg-gray-300"></div>
            <button className="light-color hover:text-gray-900">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </button>
            <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="light-color hover:text-gray-900">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Workspace & Services</Link>
            <Link href="/#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Get started</Link>
            <Link href="/#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">More</Link>
            <Link href="/#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Help</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header