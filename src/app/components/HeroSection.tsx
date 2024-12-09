import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";




const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-black px-4 md:px-12 flex flex-col md:flex-row md:space-x-6 items-center justify-center">
      
      
        
      

      {/* Main Content Section */}

      


      <div className="text-center md:text-left md:max-w-2xl max-w-sm mt-6 md:mt-0 md:w-1/2 z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
         <span className='text-yellow-400'>The</span> Art of Speed Food Quality
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-300 leading-snug">
          We create delicious experiences for food lovers. Fast service and authentic flavors.
        </p>
        <button className="mt-6 bg-yellow-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition duration-200">
          See Menu
        </button>
      </div>

      {/* Hero Image - visible on medium screens and up */}
      <div className="hidden md:block md:w-1/2 md:flex justify-center md:justify-end z-10">
        <Image
          src="/hero.png"
          alt="Delicious food"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;


