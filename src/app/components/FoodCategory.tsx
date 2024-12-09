import React from 'react'
import Image from "next/image";

const FoodCategory: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-yellow-400 text-lg font-medium">Food Category</h2>
        <h3 className="text-3xl font-bold text-white mt-2">
          <span className='text-yellow-400'>Choose</span> Food Item
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Card 1 */}
          <div className="relative group">
            <Image
              src="/foodc1.png" // Replace with actual image
              alt="Food Item 1"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-90 transition flex flex-col justify-center items-center text-black rounded-lg">
              <span className="text-lg font-bold">Save 30%</span>
              <span className="text-md font-semibold mt-2">
                Fast Food Dish
              </span>
            </div>
          </div>
          {/* Card 2 */}
          <Image
            src="/foodc2.png" // Replace with actual image
            alt="Food Item 2"
            width={300}
            height={200}
            className="rounded-lg"
          />
          {/* Card 3 */}
          <Image
            src="/foodc3.png" // Replace with actual image
            alt="Food Item 3"
            width={300}
            height={200}
            className="rounded-lg"
          />
          {/* Card 4 */}
          <Image
            src="/foodc4.png" // Replace with actual image
            alt="Food Item 4"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;


