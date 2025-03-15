import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="https://i.imgur.com/XpRcawJ.png"
              alt="Ganeshaa Sutra Logo" 
              className="h-16 w-auto"
            />
            <div>
              <span className="text-2xl font-bold text-[#332f2f]">Ganeshaa Sutra</span>
              <p className="text-sm text-gray-600 italic">Where Every Thread Tells a Story of Quality</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-[#332f2f] hover:text-[#599c56] transition-colors">
              Home
            </Link>
            <Link to="/type1" className="text-[#332f2f] hover:text-[#599c56] transition-colors">
              20's OE
            </Link>
            <Link to="/type2" className="text-[#332f2f] hover:text-[#599c56] transition-colors">
              26's OE
            </Link>
            <Link to="/type3" className="text-[#332f2f] hover:text-[#599c56] transition-colors">
              10's OE
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;