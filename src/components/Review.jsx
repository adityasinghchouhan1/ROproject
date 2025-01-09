import React from 'react';
import bg from '../assets/ClientReview.jpg';


const Review = () => {
  return (
    <div className="w-full h-screen mt-10"> {/* Ensures the container takes full screen height */}
      <div
        className="flex justify-center items-center w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
       
        <span className="text-white text-4xl font-bold">Review</span> 
      </div>
    </div>
  );
};

export default Review;
