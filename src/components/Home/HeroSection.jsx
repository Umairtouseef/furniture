import React from "react";
import backgroundbanner from "/assets/mainbanner.png";
import WelcomeSection from "../Home/WelcomeSection";
import FeaturesSection from "./SaleOff";
import ProductList from "../Home/ProductList";
import BlogSection from "../Home/BlogSection";
import Footer from "./FooterSection";
import ThreeSectionGrid from "./SaleOff";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
    <Link to="/products">
      <img
        src={backgroundbanner}
        alt="Background Banner"
        className="w-full object-cover cursor-pointer"
      />
    </Link>

      <WelcomeSection />
      <ThreeSectionGrid />
      <ProductList />
      <BlogSection />
    </>
  );
};

export default HeroSection;
