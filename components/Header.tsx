'use client';

import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="flex items-center space-x-2" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
              <Image
                src="/logo.png"
                alt="Ridezo Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-black font-bold text-xl">Ridezo</span>
            </a>
          </div>


          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/918053272266?text=Hi! I'd like to book a ride with Ridezo"
              className="bg-black text-yellow-400 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-black/20">
            <nav className="py-4">
              <div className="px-4">
                <a
                  href="https://wa.me/918053272266?text=Hi! I'd like to book a ride with Ridezo"
                  className="block w-full bg-black text-yellow-400 px-4 py-3 rounded-full font-semibold text-center hover:bg-gray-800 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
