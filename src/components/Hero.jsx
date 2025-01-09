import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../assets/banner1.jpg';
import shape from "../assets/shape.png";

const Hero = () => {
  return (
    <section className=" h-screen">
      <div
        className="h-full bg-cover bg-center mt-20"
        style={{ backgroundImage: `url(${banner1})` }}
      >
         <img src={shape} alt="shape" className="absolute -bottom-20" /> {/* Added shape image */}
      </div>
    </section>
  );
};

export default Hero;
