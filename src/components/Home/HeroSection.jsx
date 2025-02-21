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
      <img
        src={backgroundbanner}
        alt="Background Banner"
        className="w-full object-cover cursor-pointer"
      />
      <WelcomeSection />
      <ThreeSectionGrid />
      <ProductList />
      <BlogSection />
    </>
  );
};

export default HeroSection;
