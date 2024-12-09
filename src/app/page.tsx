import React from 'react'
import HeroSection from "@/app/components/HeroSection";
import Navbar from '@/app/components/Navbar'
import Feature from './components/Feature';
import FoodCategory from './components/FoodCategory';
import WhyChooseUs from './components/WhyChooseUs';
import Menus from './components/Menus';
import MenuPage from './components/MenuPage';
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Feature />
      <FoodCategory />
      <WhyChooseUs />
      <Menus />
      <MenuPage />
      <Footer />
      

    </div>
  )
}

export default page