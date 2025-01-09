import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import banner from '../assets/pages-banner.jpg';
import shape from '../assets/shape.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import React Icons

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* Contact Banner Section */}
      <div className="flex justify-center -my-10">
             <img
               src={banner}
               alt="Our Services"
               className="rounded-lg h-[600px] w-full object-cover"
             />
           </div>

      {/* Contact Section with Form on Left and Contact Details on Right */}
      <div className="flex justify-center items-start px-4 pt-12">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
          {/* Left Section: Contact Form */}
          <div className="w-full md:w-1/2 bg-white rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-primary mb-6">Contact Us</h2>
            <form
              action="https://formspree.io/f/xdkkayvy"
              method="POST"
              className="space-y-6"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-600 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-600 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md font-semibold text-lg shadow-lg hover:bg-blue-900 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section: Contact Details */}
          <div className="w-full md:w-1/2 bg-white rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-primary mb-6">Contact Details</h2>
            <div className="space-y-4">
              <div>
                You can always give us your best service to get to you fast and get the job done right the first time.
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-primary text-2xl" />
                <div>
                  <h4 className="font-medium text-lg text-gray-700">Phone</h4>
                  <p className="text-gray-600">+9999999999</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-primary text-2xl" />
                <div>
                  <h4 className="font-medium text-lg text-gray-700">Email</h4>
                  <p className="text-gray-600">info@ropurifier.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <div>
                  <h4 className="font-medium text-lg text-gray-700">Address</h4>
                  <p className="text-gray-600">123 Street, City, Country</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Image at the Bottom */}
     <img
             src={shape}
             alt="Shape"
             className="absolute bottom-[47px] left-0 w-full"
           />

      <Footer />
    </>
  );
};

export default Contact;
