import React from "react";
import backgroundbanner from "/assets/mainbanner.png";
import WelcomeSection from "../Home/WelcomeSection";
import FeaturesSection from "./SaleOff";
import ProductList from "../Home/ProductList";
import BlogSection from "../Home/BlogSection";
import Footer from "./FooterSection";
import ThreeSectionGrid from "./SaleOff";

const HeroSection = () => {
  return (
    <>
      <div
        className="w-full h-[100vh] lg:h-[100vh] bg-cover bg-center bg-no-repeat cursor-pointer"
        style={{ backgroundImage: `url(${backgroundbanner})` }}
      ></div>
      <WelcomeSection />
      <ThreeSectionGrid />
      <ProductList />
      <BlogSection />
      <Footer />
    </>
  );
};

export default HeroSection;
