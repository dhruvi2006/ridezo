'use client';

import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="flex items-center space-x-2">
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

          {/* CTA Button - All Screen Sizes */}
          <div className="flex items-center">
            <a
              href="https://wa.me/918053272266?text=Hi! I'd like to book a ride with Ridezo"
              className="bg-black text-yellow-400 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
