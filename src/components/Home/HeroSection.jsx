import React from "react";
import backgroundbanner from "../../assets/mainbanner.png"
import WelcomeSection from "../Home/WelcomeSection";
import FeaturesSection from "../Home/FeaturedSection";
import ProductList from "../Home/ProductList";
import BlogSection from "../Home/BlogSection";

const HeroSection = () => {
    return (
        <>
            <div
                className="w-full h-[100vh] lg:h-[100vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundbanner})` }}
            >


                {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

                {/* <div className="relative container  mx-auto px-4 h-full flex  justify-center">
                        <div className="text-white max-w-2xl text-center lg:mt-32 mt-16 mb-16">
                            <h2 className="text-2xl mb-2">Special Offer</h2>
                            <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-6">
                                NATURAL PRODUCTS
                            </h1>

                            <button className="bg-theme-gradient hover:bg-primary text-white px-8 py-3 rounded-md">
                                Shop Now
                            </button>
                        </div>  
                    </div> */}
            </div>

            {/* <div className="absolute  lg:top-[50vh] left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg">


                    <div className="grid grid-cols-2 md:grid-cols-4  px-4">
                        {[
                            {
                                title: "Free Shipping",
                                desc: "On Orders Over $50",
                                icon: "M5 13l4 4L19 7",
                            },
                            {
                                title: "Online Payment",
                                desc: "Instantly Pay Online",
                                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                            },
                            {
                                title: "24 X 7 Service",
                                desc: "Our Service is Available 24/7",
                                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                            },
                            {
                                title: "Fast & Efficient",
                                desc: "Fast And Qualitative Product",
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                            },
                        ].map((feature, index) => (
                            <div key={index} className="bg-white/90 p-6  text-center ">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-12 h-12 text-secondary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d={feature.icon}
                                        ></path>
                                    </svg>

                                </div>
                                <h3 className="font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div> */}

            <WelcomeSection />
            {/* <FeaturesSection />
            <ProductList /> */}

        </>
    );
};

export default HeroSection;
