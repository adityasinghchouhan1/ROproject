import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // For scroll background change
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // To track navbar visibility

  // Handle scroll events to change navbar background color and visibility
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Change navbar background color to white and text to black
      setIsNavbarVisible(true); // Make navbar visible after scrolling
    } else {
      setIsScrolled(false); // Revert navbar background to transparent and text to white
      setIsNavbarVisible(true); // Ensure navbar is still visible when at the top
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Main Navbar */}
      <header
        className={`${
          isScrolled ? 'bg-white text-gray-700 shadow-lg' : 'bg-[#233277] text-white'
        } z-40 fixed top-0 left-0 w-full transition-all duration-500 ease-in-out h-20 ${
          isNavbarVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4 relative">
          {/* Logo */}
          <div className="text-4xl font-bold tracking-wider transition-all duration-300">
            <Link
              to="/"
              className={`${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-300 transition-all duration-300`}
            >
              RO Purifier
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex-grow flex justify-center space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-300 transition-all duration-300`}
            >
              Home
            </Link>
            <Link
              to="/aboutUs"
              className={`text-lg font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-300 transition-all duration-300`}
            >
              About
            </Link>

            <Link
              to="/services"
              className={`text-lg font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-300 transition-all duration-300`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-300 transition-all duration-300`}
            >
              Contact
            </Link>
          </nav>

          {/* Right-Hand Side: Mobile Number (Fixed to the navbar) */}
          <div
            className={`text-lg font-medium flex items-center hover:text-blue-700 space-x-2 ml-4 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <FaPhoneAlt />
            <a
              href="tel:+9926980487"
              className={`text-lg font-medium hover:text-blue-700 flex items-center space-x-2 ml-4 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              +91 - 9926980487
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center md:hidden">
            <button
              className="text-3xl hover:text-yellow-300 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden flex flex-col items-center mt-5 space-y-4 bg-white shadow-md p-6 rounded-lg ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <Link
          to="/"
          className="font-semibold text-lg text-gray-700 hover:text-blue-600 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-semibold text-lg text-gray-700 hover:text-blue-600 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/services"
          className="font-semibold text-lg text-gray-700 hover:text-blue-600 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="font-semibold text-lg text-gray-700 hover:text-blue-600 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
