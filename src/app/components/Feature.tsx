import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-yellow-400 text-xl font-medium">About us</h2>
          <h3 className="text-3xl font-bold text-white mt-2">
            <span className="text-yellow-400">We,</span> Create the Best Foody Product
          </h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Lorem, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400">•</span>
              <span>
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400">•</span>
              <span>
                Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400">•</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 transition">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/food1.png" // Replace with your main image
              alt="Main dish"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/food2.png" // Replace with your first sub-image
              alt="Side dish"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/food3.png" // Replace with your second sub-image
              alt="Side dish"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
