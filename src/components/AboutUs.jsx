import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import banner from "../assets/pages-banner.jpg"; // Replace with your about banner
import shape from "../assets/shape.png";
import about from "../assets/about.png";
import CustomerReviews from "./CustomerReviews";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
     <div className="flex justify-center -my-10">
           <img
             src={banner}
             alt="Our Services"
             className="rounded-lg h-[600px] w-full object-cover"
           />
         </div>
   

      {/* About Section */}
      <div className="container px-6 py-12 mx-auto mt-10">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          About Us
        </h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          At PureFlow Water Purifiers, we are passionate about delivering safe and clean water to every home. 
          Learn more about our mission, values, and commitment to providing innovative water purification solutions.
        </p>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={about}// Replace with your actual image
              alt="Our Mission"
              className="rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="text-gray-700">
            <h3 className="text-3xl font-semibold text-blue-800 mb-4">
              Our Mission
            </h3>
            <p className="mb-4">
              Our mission is to provide safe, clean, and healthy water for everyone. We are dedicated to 
              creating sustainable, cutting-edge water purification solutions that ensure your well-being.
            </p>
            <h3 className="text-3xl font-semibold text-blue-800 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">•</span>
                Trusted by thousands of families worldwide
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">•</span>
                State-of-the-art technology for water purification
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">•</span>
                Eco-friendly and energy-efficient solutions
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">•</span>
                Exceptional customer service and 24/7 support
              </li>
            </ul>
          </div>
        </div>
      </div>

<CustomerReviews/>


      {/* Shape Decoration */}
     <img
             src={shape}
             alt="Shape"
             className="absolute bottom-[47px] left-0 w-full"
           />

      <Footer />
    </>
  );
};

export default AboutUs;
